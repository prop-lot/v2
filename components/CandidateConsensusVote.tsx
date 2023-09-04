import { useState } from "react";
import { useAccount } from "wagmi";
import BlankModal from "@/components/BlankModal";
import { RadioGroup } from "@headlessui/react";

const voteOptions = [
  { name: "For", value: "1" },
  { name: "Against", value: "0" },
  { name: "Abstain", value: "2" },
];

//  isFeedbackClosed={isUpdateToProposal && !isParentProposalUpdatable}
const CandidateConsensusVote = ({
  votes,
  isOpenToFeedback,
}: {
  votes: any;
  isOpenToFeedback: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [vote, setVote] = useState(voteOptions[1]);

  const totalVotes =
    votes.for.length + votes.against.length + votes.abstain.length;
  const forPercentage = (votes.for.length / totalVotes) * 100 || 0;
  const againstPercentage = (votes.against.length / totalVotes) * 100 || 0;
  const abstainPercentage = (votes.abstain.length / totalVotes) * 100 || 0;

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
          ></textarea>
        </div>
        <div className="flex flex-row space-x-4 mt-[16px]">
          <button className="w-full rounded-lg bg-gray-100 text-gray-500 text-sm py-[10px]">
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
            <span className="text-green-500">{votes.for.length}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm">Against</span>
            <span className="text-red-500">{votes.against.length}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm">Abstain</span>
            <span className="text-gray-500">{votes.abstain.length}</span>
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
        <p className="text-gray-500 mt-[16px] text-sm">
          Connect wallet to vote
        </p>
      </div>
    </>
  );
};

export default CandidateConsensusVote;
