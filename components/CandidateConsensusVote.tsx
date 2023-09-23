import { useState } from "react";
import { useAccount } from "wagmi";
import BlankModal from "@/components/BlankModal";
import { RadioGroup } from "@headlessui/react";
import { useContractWrite, useContractRead } from "wagmi";
import { contracts } from "../lib/nouns/contracts";
import { abi as NounsDAODataABI } from "../lib/nouns/abis/NounsDAOData";

const voteOptions = [
  { name: "For", value: "1" },
  { name: "Against", value: "0" },
  { name: "Abstain", value: "2" },
];

const CandidateConsensusVote = ({
  candidate,
  votes,
  isOpenToFeedback,
}: {
  candidate: any;
  votes: any;
  isOpenToFeedback: boolean;
}) => {
  const account = useAccount();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [vote, setVote] = useState(voteOptions[1]);
  const [reason, setReason] = useState<string>("");

  const forVotes = votes.for.reduce((acc: number, vote: any) => {
    return acc + vote.votes;
  }, 0);
  const againstVotes = votes.against.reduce((acc: number, vote: any) => {
    return acc + vote.votes;
  }, 0);
  const abstainVotes = votes.abstain.reduce((acc: number, vote: any) => {
    return acc + vote.votes;
  }, 0);
  const totalVotes = forVotes + againstVotes + abstainVotes;

  const forPercentage = (forVotes / totalVotes) * 100 || 0;
  const againstPercentage = (againstVotes / totalVotes) * 100 || 0;
  const abstainPercentage = (abstainVotes / totalVotes) * 100 || 0;

  const { data, isLoading, isSuccess, write } = useContractWrite({
    chainId: 5,
    address: contracts[5].nounsDAOData as `0x${string}`,
    abi: NounsDAODataABI,
    functionName: "sendCandidateFeedback",
    // address - proposer
    // string - slug
    // number - support
    // string - reason
    args: [candidate.proposer, candidate.slug, parseInt(vote.value), reason],
  });

  const submitFeedback = () => {
    write?.();
    // probably want to await it, then close modal and clear form
    setIsOpen(false);
    setVote(voteOptions[1]);
    setReason("");
  };

  return (
    <>
      <BlankModal isOpen={isOpen} setIsOpen={setIsOpen}>
        <h4 className="text-xl font-bold">Consensus vote</h4>
        <RadioGroup value={vote} onChange={setVote} className="mt-2">
          <RadioGroup.Label className="sr-only">
            Select your consensus vote below.
          </RadioGroup.Label>
          <div className="grid grid-cols-3 gap-3">
            {voteOptions.map((option) => (
              <RadioGroup.Option
                key={option.name}
                value={option}
                className={({ active, checked }) =>
                  `cursor-pointer focus:outline-none
                    ${active ? "ring-2 ring-indigo-600 ring-offset-2" : ""}
                    ${
                      checked
                        ? "bg-indigo-600 text-white hover:bg-indigo-500"
                        : "ring-1 ring-inset ring-gray-300 bg-white text-gray-900 hover:bg-gray-50"
                    }
                    "flex items-center justify-center rounded-md py-2 px-3 text-sm sm:flex-1 text-center`
                }
              >
                <RadioGroup.Label as="span">{option.name}</RadioGroup.Label>
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
        <div className="flex flex-row space-x-4 mt-[16px]">
          <textarea
            className="w-full rounded-lg bg-gray-100 text-gray-500 text-sm py-[10px] px-[16px]"
            placeholder="Provide feedback (optional)"
            value={reason}
            onChange={(e) => {
              setReason(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="flex flex-row space-x-4 mt-[16px]">
          <button
            className="w-full rounded-lg bg-gray-100 text-gray-500 text-sm py-[10px]"
            onClick={() => {
              submitFeedback();
            }}
          >
            Submit vote
          </button>
        </div>
      </BlankModal>
      <div className="p-[16px] border rounded">
        <h3 className="font-bold mb-[16px]">Consensus vote</h3>
        <section className="flex flex-row space-x-2">
          <div
            className={`h-3 rounded-full ${
              totalVotes > 0 ? "bg-green-600" : "bg-gray-300"
            }`}
            style={{ width: `${totalVotes > 0 ? forPercentage || 1 : 33}%` }}
          ></div>
          <div
            className={`h-3 rounded-full ${
              totalVotes > 0 ? "bg-red-500" : "bg-gray-300"
            }`}
            style={{
              width: `${totalVotes > 0 ? againstPercentage || 2 : 33}%`,
            }}
          ></div>
          <div
            className={`h-3 rounded-full ${
              totalVotes > 0 ? "bg-gray-500" : "bg-gray-300"
            }`}
            style={{
              width: `${totalVotes > 0 ? abstainPercentage || 1 : 33}%`,
            }}
          ></div>
        </section>
        <section className="flex flex-row space-x-4 mt-[8px]">
          <div className="flex flex-col">
            <span className="font-bold text-sm">For</span>
            <span className="text-green-500">{forVotes}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm">Against</span>
            <span className="text-red-500">{againstVotes}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm">Abstain</span>
            <span className="text-gray-500">{abstainVotes}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm">Consensus</span>
            <span className="text-gray-500">{forPercentage}%</span>
          </div>
        </section>
        <button
          className="w-full rounded-lg bg-gray-100 text-gray-500 text-sm py-[10px] mt-[16px]"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Provide consensus vote
        </button>

        {!account && (
          <p className="text-gray-500 mt-[16px] text-sm">
            Connect wallet to vote
          </p>
        )}
      </div>
    </>
  );
};

export default CandidateConsensusVote;
