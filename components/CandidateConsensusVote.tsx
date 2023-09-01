const CandidateConsensusVote = () => {
  return (
    <div className="p-[16px] border rounded">
      <h3 className="font-bold mb-[16px]">Consensus vote</h3>
      <section className="flex flex-row space-x-2">
        <div className="h-3 rounded-full bg-gray-300 w-1/3"></div>
        <div className="h-3 rounded-full bg-gray-300 w-1/3"></div>
        <div className="h-3 rounded-full bg-gray-300 w-1/3"></div>
      </section>
      <section className="flex flex-row space-x-4 mt-[8px]">
        <div className="flex flex-col">
          <span className="font-bold text-sm">For</span>
          <span className="text-green-500">0</span>
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-sm">Against</span>
          <span className="text-red-500">0</span>
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-sm">Abstain</span>
          <span className="text-gray-500">0</span>
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-sm">Consensus</span>
          <span className="text-gray-500">0</span>
        </div>
      </section>
      <button className="w-full rounded-lg bg-gray-100 text-gray-500 text-sm py-[10px] mt-[16px]">
        Provide consensus vote
      </button>
      <p className="text-gray-500 mt-[16px] text-sm">Connect wallet to vote</p>
    </div>
  );
};

export default CandidateConsensusVote;
