const CandidateProposalProgress = ({ candidate }: { candidate: any }) => {
  return (
    <div className="p-[16px] border rounded">
      <h3 className="font-bold mb-[16px]">Proposal progress</h3>
      <section className="space-y-1 mb-[16px]">
        <div className="w-full px-[16px] py-[12px] rounded-lg bg-green-100 flex flex-row items-center">
          <span className="rounded-full text-white bg-green-500 text-sm aspect-square w-6 flex items-center justify-center mr-4">
            1
          </span>
          <span className="text-sm">Consensus check</span>
          <span className="rounded-full text-white bg-green-500 text-sm px-2 py-1 ml-[auto]">
            Active
          </span>
        </div>
        <div className="w-full px-[16px] py-[12px] rounded-lg bg-gray-100 flex flex-row items-center">
          <span className="rounded-full text-white bg-gray-500 text-sm aspect-square w-6 flex items-center justify-center mr-4">
            2
          </span>
          <span className="text-sm">On-chain vote</span>
        </div>
      </section>
      <section className="flex flex-row space-x-2 mb-[16px]">
        <button className="w-1/3 px-2 py-2 rounded-lg bg-gray-100 text-sm text-gray-500">
          Go onchain
        </button>
        <button className="w-1/3 px-2 py-2 rounded-lg border text-sm text-green-700">
          Edit
        </button>
        <button className="w-1/3 px-2 py-2 rounded-lg border text-sm text-red-500">
          Cancel
        </button>
      </section>
      <p className="text-sm text-gray-500">
        At least 2 noun sponsors required to go onchain
      </p>
    </div>
  );
};

export default CandidateProposalProgress;
