import { useAccount } from "wagmi";

const CandidateProposalProgress = ({ candidate }: { candidate: any }) => {
  // todo: replace with real logic
  const isAuthor = candidate.proposer === useAccount();

  // todo: replace with real logic
  const step: number = 0;

  return (
    <div className="p-[16px] border rounded">
      <h3 className="font-bold mb-[16px]">Proposal progress</h3>
      <section className="space-y-1">
        <div className="w-full px-[16px] py-[12px] rounded-lg bg-green/10 flex flex-row items-center">
          <span className="rounded-full text-white bg-green text-sm aspect-square w-6 flex items-center justify-center mr-4">
            1
          </span>
          <span className="text-sm">Consensus check</span>
          {step === 0 && (
            <span className="rounded-full text-white bg-green text-xs px-2 py-1 ml-[auto]">
              Active
            </span>
          )}
        </div>
        <div className="w-full px-[16px] py-[12px] rounded-lg bg-gray-100 flex flex-row items-center">
          <span
            className={`rounded-full text-white text-sm aspect-square w-6 flex items-center justify-center mr-4 ${
              step === 1 ? "bg-green/10" : "bg-gray-500"
            }`}
          >
            2
          </span>
          <span className="text-sm">On-chain vote</span>
          {step === 1 && (
            <span className="rounded-full text-white bg-yellow-500 text-xs px-2 py-1 ml-[auto]">
              Pending
            </span>
          )}
        </div>
      </section>
      {isAuthor && (
        <>
          <section className="flex flex-row space-x-2 mt-[16px]">
            <button className="w-1/3 px-2 py-2 rounded-lg bg-gray-100 text-sm text-gray-500">
              Go onchain
            </button>
            <button className="w-1/3 px-2 py-2 rounded-lg border text-sm text-green">
              Edit
            </button>
            <button className="w-1/3 px-2 py-2 rounded-lg border text-sm text-red-500">
              Cancel
            </button>
          </section>
          <p className="text-sm text-gray-500 mt-[16px]">
            At least 2 noun sponsors required to go onchain
          </p>
        </>
      )}
    </div>
  );
};

export default CandidateProposalProgress;
