const CandidateConsensusVote = ({ votes }: { votes: any }) => {
  const totalVotes =
    votes.for.length + votes.against.length + votes.abstain.length;
  const forPercentage = (votes.for.length / totalVotes) * 100;
  const againstPercentage = (votes.against.length / totalVotes) * 100;
  const abstainPercentage = (votes.abstain.length / totalVotes) * 100;

  return (
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
          style={{ width: `${totalVotes > 0 ? againstPercentage || 2 : 33}%` }}
        ></div>
        <div
          className={`h-3 rounded-full ${
            totalVotes > 0 ? "bg-gray-500" : "bg-gray-300"
          }`}
          style={{ width: `${totalVotes > 0 ? abstainPercentage || 1 : 33}%` }}
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
      <button className="w-full rounded-lg bg-gray-100 text-gray-500 text-sm py-[10px] mt-[16px]">
        Provide consensus vote
      </button>
      <p className="text-gray-500 mt-[16px] text-sm">Connect wallet to vote</p>
    </div>
  );
};

export default CandidateConsensusVote;
