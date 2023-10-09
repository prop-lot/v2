import { useState } from "react";
import {
  useContractWrite,
  useContractRead,
  useWaitForTransaction,
} from "wagmi";
import { abi as NounsDAODataABI } from "../../lib/nouns/abis/NounsDAOData";
import { abi as payerABI } from "../../lib/nouns/abis/Payer";
import { abi as StreamFactoryABI } from "../../lib/nouns/abis/StreamFactory";
import { abi as WethABI } from "../../lib/nouns/abis/Weth";
import { useForm } from "react-hook-form";
import { contracts } from "../../lib/nouns/contracts";
import { useRouter } from "next/router";
import { SUBMIT_CANDIDATE_MUTATION } from "@/graphql/queries/propLotMutations";
import { useMutation } from "@apollo/client";
import { decodeEventLog } from "viem";
import { utils } from "ethers";
import FunctionCallProposalForm from "../../components/candidate/FunctionCallProposalForm";
import StreamFundsProposalForm from "../../components/candidate/StreamFundsProposalForm";
import TransferFundsProposalForm from "../../components/candidate/TransferFundsProposalForm";
import { encodeFunctionData } from "viem";
import { publicClient } from "../../lib/viem/";
import { formatTokenAmount } from "../../utils/formatTokenAmount";
import { getTokenAddressForCurrency } from "../../utils/getTokenAddressForCurrency";
import { SupportedCurrency } from "../../lib/types";
import config from "../../lib/config";

export type CandidateTransaction = {
  address: string;
  value: string;
  signature: string;
  calldata: string;
  decodedCalldata?: string;
  usdcValue?: number;
};

// https://github.com/nounsDAO/nouns-monorepo/blob/master/packages/nouns-webapp/src/components/ProposalActionsModal/steps/TransferFundsReviewStep/index.tsx#L56

enum ProposalType {
  STREAM_FUNDS = "Stream funds",
  TRANSFER_FUNDS = "Transfer funds",
  FUNCTION_CALL = "Function call",
}

// transfer means we are sending funds
const processTransfer = (data: any, slug: string) => {
  if (data.currency === "ETH") {
    return [
      [data.recipient],
      // probably need to parseEther this as well
      [BigInt(data.amount)],
      [""],
      ["0x"],
      `# ${data.title}\n\n${data.description}`,
      slug,
      BigInt(0),
    ];
  } else if (data.currency === "USDC") {
    const signature = "sendOrRegisterDebt(address,uint256)";

    const encodedData = encodeFunctionData({
      abi: payerABI,
      functionName: "sendOrRegisterDebt",
      args: [
        data.recipient,
        BigInt(Math.round(parseFloat(data.amount ?? "0") * 1_000_000)),
      ],
    });

    return [
      ["0x"], // payerContract address... TODO: FIND OUT WHAT THIS IS
      [BigInt(0)],
      [signature],
      [encodedData],
      `# ${data.title}\n\n${data.description}`,
      slug,
      BigInt(0),
    ];
  } else if (data.currency === "STETH") {
    const values = [
      data.recipient,
      utils.parseEther((data.amount ?? 0).toString()).toString(),
    ];

    return [
      ["0x"], // STETH contract address
      [BigInt(0)],
      ["transfer(address,uint256)"],
      [utils.defaultAbiCoder.encode(["address", "uint256"], values)],
      `# ${data.title}\n\n${data.description}`,
      slug,
      BigInt(0),
    ];
  }

  // probably more of a throw scenario...
  // implies that currency is not in our list
  return [];
};

const processStream = async (data: any, slug: string) => {
  const predictedStreamAddress = await publicClient("mainnet").readContract({
    address: "" as `0x${string}`,
    abi: StreamFactoryABI,
    functionName: "predictStreamAddress",
    args: [
      config.addresses.nounsDaoExecutorProxy as `0x${string}`,
      config.addresses.nounsDaoExecutorProxy as `0x${string}`,
      data.recipient,
      BigInt(formatTokenAmount(data.tokenAmount)),
      getTokenAddressForCurrency(
        data.currency as SupportedCurrency
      ) as `0x${string}`,
      data.start,
      data.end,
    ],
  });

  const encodedData = encodeFunctionData({
    abi: StreamFactoryABI,
    functionName: "createStream",
    args: [
      data.recipient,
      BigInt(formatTokenAmount(data.tokenAmount)),
      getTokenAddressForCurrency(
        data.currency as SupportedCurrency
      ) as `0x${string}`,
      data.start,
      data.end,
      0,
      predictedStreamAddress,
    ],
  });

  const createStreamActions = [
    [config.addresses.nounsStreamFactory], // address
    [BigInt(0)],
    ["createStream(address,uint256,address,uint256,uint256,uint8,address)"],
    [encodedData],
  ];

  let followUpAction = [];
  if (data.currency === SupportedCurrency.USDC) {
    const encodedUSDCData = encodeFunctionData({
      abi: payerABI,
      functionName: "sendOrRegisterDebt",
      args: [
        data.recipient,
        BigInt(Math.round(parseFloat(data.amount ?? "0") * 1_000_000)),
      ],
    });
    followUpAction = [
      [config.addresses.payerContract ?? ""],
      [BigInt(0)],
      ["sendOrRegisterDebt(address,uint256)"],
      [encodedUSDCData],
    ];
  } else {
    const encodedTransferWethData = encodeFunctionData({
      abi: WethABI,
      functionName: "transfer",
      args: [
        predictedStreamAddress,
        BigInt(utils.parseEther(data.amount as string).toString()),
      ],
    });
    followUpAction = [
      [config.addresses.weth, config.addresses.weth],
      [BigInt(utils.parseEther(data.amount.toString()).toString()), BigInt(0)],
      ["deposit()", "transfer(address,uint256)"],
      ["0x", encodedTransferWethData],
    ];
  }

  return [
    [...createStreamActions[0], ...followUpAction[0]],
    [...createStreamActions[1], ...followUpAction[1]],
    [...createStreamActions[2], ...followUpAction[2]],
    [...createStreamActions[3], ...followUpAction[3]],
    `# ${data.title}\n\n${data.description}`,
    slug,
    BigInt(0),
  ];
};

const processFunctionCall = (data: any, slug: string) => {
  const abi = JSON.parse(data.abi);

  const encodedData = encodeFunctionData({
    abi: abi,
    functionName: data.function,
    args: data.args ?? [],
  });

  return [
    [data.contractAddress],
    [data.amount ? utils.parseEther(data.amount.toString()).toString() : "0"],
    [data.function],
    [encodedData],
    `# ${data.title}\n\n${data.description}`,
    slug,
    BigInt(0),
  ];
};

const ProposalForm = ({
  proposalType,
  register,
  setValue,
}: {
  proposalType: ProposalType;
  register: any;
  setValue: any;
}) => {
  switch (proposalType) {
    case ProposalType.STREAM_FUNDS:
      return <StreamFundsProposalForm register={register} />;
    case ProposalType.TRANSFER_FUNDS:
      return <TransferFundsProposalForm register={register} />;
    case ProposalType.FUNCTION_CALL:
      return (
        <FunctionCallProposalForm register={register} setValue={setValue} />
      );
    default:
      return <></>;
  }
};

const CandidatePage = () => {
  const router = useRouter();
  const { ideaId } = router.query;

  const { data: proposalCost } = useContractRead({
    address: contracts[5].nounsDAOData as `0x${string}`,
    abi: NounsDAODataABI,
    functionName: "createCandidateCost",
  });

  const [proposalType, setProposalType] = useState<ProposalType>();

  const { data: writeData, write } = useContractWrite({
    chainId: 5,
    address: contracts[5].nounsDAOData as `0x${string}`,
    abi: NounsDAODataABI,
    functionName: "createProposalCandidate",
    value: proposalCost || BigInt(100000000000000), // 0.00001 ETH, cost as of 08-13-23
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [submitCanidateMutation] = useMutation(SUBMIT_CANDIDATE_MUTATION, {
    context: {
      clientName: "PropLot",
    },
  });

  const onSubmit = async (data: any) => {
    console.log(data);
    const slug = data.title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");

    let candidateArgs = [] as any[];
    if (data.type === ProposalType.TRANSFER_FUNDS) {
      candidateArgs = processTransfer(data, slug);
    } else if (data.type === ProposalType.FUNCTION_CALL) {
      candidateArgs = processFunctionCall(data, slug);
    } else if (data.type === ProposalType.STREAM_FUNDS) {
      candidateArgs = await processStream(data, slug);
    }

    write({
      // @ts-ignore
      args: candidateArgs,
    });
  };

  // example hash for testing
  // "0xb44428a13cad95d99f5fe53aa17f43290037e711e073483a86684636dfa10397"
  useWaitForTransaction({
    chainId: 5,
    hash: writeData?.hash,
    confirmations: 2,
    onSuccess: async (data) => {
      const event = decodeEventLog({
        abi: NounsDAODataABI,
        data: data.logs[0].data,
        topics: data.logs[0].topics,
      });

      // @ts-ignore
      const sender = event.args.msgSender;
      // @ts-ignore
      const slug = event.args.slug;
      const dbSlug = `${sender}-${slug}`;

      await submitCanidateMutation({
        variables: {
          options: {
            slug: dbSlug,
            ideaId,
          },
        },
      });

      router.push(`/candidate/${dbSlug}`);
    },
  });

  // todo... better error handling, or do this SSR and return 404 if no ideaId or ideaId doesn't exist
  if (!ideaId) {
    return <div>need an ideaId...</div>;
  }

  return (
    <main
      className=""
      style={{
        width: "100%",
        position: "relative",
        backgroundImage: "url(/background-image.svg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% auto",
      }}
    >
      <div className="max-w-screen-md mx-auto bg-white py-12 px-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-black text-[36px] font-bold">New Proposal</h1>
          <p className="mt-4">
            Fill in the form below to submit your proposal for a consensus
            check. Once the proposal receives sponsorship from at least two
            Nouns, it will be promoted to a governance vote for a final
            decision.
          </p>
          <p className="mt-4">
            This is a proposal to{" "}
            <a href="#" target="_blank" className="text-green">
              Nouner name
            </a>{" "}
            idea{" "}
            <a href="#" target="_blank" className="text-green">
              Idea name
            </a>
            .
          </p>
          <h3 className="mt-4 font-bold text-xl">Proposal Details</h3>
          <div className="flex flex-col my-4">
            <div className="flex justify-between w-full items-center">
              <label className="font-bold mb-2">Title</label>
            </div>
            <input
              {...register("title")}
              type="text"
              className="border rounded-lg p-2"
              placeholder="Give your candidate a name..."
            />
          </div>
          <div className="flex flex-col my-4">
            <div className="flex justify-between w-full items-center">
              <label className="font-bold mb-2">Details</label>
            </div>
            <textarea
              {...register("description")}
              className="border rounded-lg p-2 scroll-py-2 min-h-[300px]"
              placeholder="Describe your candidate proposal"
            />
          </div>
          <h3 className="font-bold text-xl my-6">On-chain Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <select
                className="w-full border rounded p-2"
                onChange={(e) => {
                  setProposalType(e.target.value as ProposalType);
                }}
              >
                <option disabled>Choose action type</option>
                <option value={ProposalType.TRANSFER_FUNDS}>
                  Transfer Funds
                </option>
                <option value={ProposalType.STREAM_FUNDS}>Stream Funds</option>
                <option value={ProposalType.FUNCTION_CALL}>
                  Function Call
                </option>
              </select>
            </div>
            <div className="bg-gray-200 rounded p-4 flex flex-col space-y-3">
              <h3 className="text-lg font-bold">Supported action types</h3>
              <span>
                <strong>Transfer funds:</strong> Send USDC, ETH
              </span>
              <span>
                <strong>Stream funds:</strong> Stream USDC or WETH
              </span>
              <span>
                <strong>Function call:</strong> Call a contract function
              </span>
            </div>
          </div>
          <section className="mt-4">
            {proposalType && (
              <ProposalForm
                proposalType={proposalType}
                register={register}
                setValue={setValue}
              />
            )}
          </section>
          {/* TODO: add disabled state to button */}
          <button
            className="px-4 py-2 bg-gray-200 text-gray-500 rounded-lg mt-4"
            type="submit"
          >
            Submit Proposal
          </button>
          <span className="text-gray-400 text-sm mt-4 block">
            To prevent spam, a payment of 0.01 ETH is required to submit
            proposals, unless you are a Noun holder. All of the proceeds are
            sent to the Noun DAO treasury.
          </span>
        </form>
      </div>
    </main>
  );
};

export default CandidatePage;
