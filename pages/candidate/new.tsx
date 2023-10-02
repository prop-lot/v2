import { useState } from "react";
import {
  useContractWrite,
  useContractRead,
  useWaitForTransaction,
} from "wagmi";
import { abi as NounsDAODataABI } from "../../lib/nouns/abis/NounsDAOData";
import { useForm } from "react-hook-form";
import { contracts } from "../../lib/nouns/contracts";
import { useRouter } from "next/router";
import { SUBMIT_CANDIDATE_MUTATION } from "@/graphql/queries/propLotMutations";
import { useMutation } from "@apollo/client";
import { decodeEventLog } from "viem";

enum ProposalType {
  STREAM_FUNDS = "Stream funds",
  TRANSFER_FUNDS = "Transfer funds",
  FUNCTION_CALL = "Function call",
}

// transfer means we are sending funds
// TODO: add support for sending STETH or USDC
const processTransfer = (data: any, slug: string) => {
  return [
    [data.recipient],
    [BigInt(data.amount)],
    [""],
    ["0x"],
    `# ${data.title}\n\n${data.description}`,
    slug,
    BigInt(0),
  ];
};

const processStream = (data: any, slug: string) => {};
const processFunctionCall = (data: any, slug: string) => {};

const TransferFundsProposalForm = ({ register }: { register: any }) => {
  return (
    <div>
      <h2 className="font-bold text-xl mb-4">Transfer Funds</h2>
      <div className="flex flex-col my-4">
        <div className="flex justify-between w-full items-center">
          <label className="font-bold mb-2">Currency</label>
        </div>
        {/* might be better if select option values are the contract address */}
        <select {...register("currency")} className="w-full border rounded p-2">
          <option value="USDC">USDC</option>
          <option value="ETH">ETH</option>
          <option value="STETH">Lido Staked ETH</option>
        </select>
      </div>
      <div className="flex flex-col my-4">
        <div className="flex justify-between w-full items-center">
          <label className="font-bold mb-2">Recipient</label>
        </div>
        <input
          {...register("recipient")}
          type="text"
          className="border rounded-lg p-2"
        />
      </div>
      <div className="flex flex-col my-4">
        <div className="flex justify-between w-full items-center">
          <label className="font-bold mb-2">Amount</label>
        </div>
        <input
          {...register("amount")}
          type="text"
          className="border rounded-lg p-2"
        />
      </div>
      <input
        type="hidden"
        {...register("type")}
        value={ProposalType.TRANSFER_FUNDS}
      />
    </div>
  );
};

const StreamFundsProposalForm = ({ register }: { register: any }) => {
  return (
    <div>
      <div>
        <h2 className="font-bold text-xl mb-4">Stream Funds</h2>
        <select {...register("currency")} className="w-full border rounded p-2">
          <option value="ETH">WETH</option>
          <option value="USDC">USDC</option>
        </select>
        <div className="flex flex-col my-4">
          <div className="flex justify-between w-full items-center">
            <label className="font-bold mb-2">Recipient</label>
          </div>
          <input
            {...register("recipient")}
            type="text"
            className="border rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col my-4">
          <div className="flex justify-between w-full items-center">
            <label className="font-bold mb-2">Amount</label>
          </div>
          <input
            {...register("amount")}
            type="text"
            className="border rounded-lg p-2"
          />
        </div>
        <input
          type="hidden"
          {...register("type")}
          value={ProposalType.STREAM_FUNDS}
        />
      </div>
    </div>
  );
};

const FunctionCallProposalForm = ({ register }: { register: any }) => {
  return (
    <div>
      <h2 className="font-bold text-xl mb-4">Function Call</h2>
      <input
        type="hidden"
        {...register("type")}
        value={ProposalType.FUNCTION_CALL}
      />
    </div>
  );
};

const ProposalForm = ({
  proposalType,
  register,
}: {
  proposalType: ProposalType;
  register: any;
}) => {
  switch (proposalType) {
    case ProposalType.STREAM_FUNDS:
      return <StreamFundsProposalForm register={register} />;
    case ProposalType.TRANSFER_FUNDS:
      return <TransferFundsProposalForm register={register} />;
    case ProposalType.FUNCTION_CALL:
      return <FunctionCallProposalForm register={register} />;
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

    if (data.type === ProposalType.TRANSFER_FUNDS) {
      processTransfer(data, slug);
    }

    // const handleCreateProposal = async () => {
    //   await createProposalCandidate(
    //     proposalTransactions.map(({ address }) => address), // Targets
    //     proposalTransactions.map(({ value }) => value ?? '0'), // Values
    //     proposalTransactions.map(({ signature }) => signature), // Signatures
    //     proposalTransactions.map(({ calldata }) => calldata), // Calldatas
    //     `# ${titleValue}\n\n${bodyValue}`, // Description
    //     slug, // Slug
    //     0, // proposalIdToUpdate - use 0 for new proposals
    //     { value: hasVotes ? 0 : createCandidateCost }, // Fee for non-nouners
    //   );
    // };

    // for eth transfer, recipient is address
    // write({
    //   args: [
    //     ["0xE7affDB964178261Df49B86BFdBA78E9d768Db6D"],
    //     [BigInt(1000000000)],
    //     [""],
    //     ["0x"],
    //     `# ${data.title}\n\n${data.description}`,
    //     slug,
    //     BigInt(0),
    //   ],
    // });
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
        backgroundPosition: "center",
        backgroundSize: "100% auto",
      }}
    >
      <div className="max-w-screen-md mx-auto bg-white py-12">
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
              <ProposalForm proposalType={proposalType} register={register} />
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
