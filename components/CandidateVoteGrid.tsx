// 0xcb43078c32423f5348cab5885911c3b5fae217f9-first-candidate
// example with feedback

const CandidateVoteCard = ({ feedback }: { feedback: any }) => {
  return (
    <div className="p-[16px] border bg-white rounded-lg">
      <div className="flex flex-row items-center mb-[16px]">
        <div className="h-10 w-10 rounded-full bg-gray-300 mr-[16px]"></div>
        <div className="flex flex-col">
          <span className="font-bold text-sm text-green-600">
            {feedback.voter.id.slice(0, 6) +
              "..." +
              feedback.voter.id.slice(-4)}
          </span>
          <span className="text-gray-500 text-sm">{feedback.votes} votes</span>
        </div>
        <span
          className={`text-sm ml-auto self-start px-2 py-1 rounded-full text-white
                       ${
                         feedback.supportDetailed === 0
                           ? "bg-red-500"
                           : feedback.supportDetailed === 1
                           ? "bg-green-600"
                           : "bg-gray-300"
                       }`}
        >
          {feedback.supportDetailed === 0
            ? "Against"
            : feedback.supportDetailed === 1
            ? "For"
            : "Abstain"}
        </span>
      </div>
      <p className="text-sm text-gray-500">{feedback.reason}</p>
    </div>
  );
};

const CandidateVoteGrid = ({ votes }: { votes: any }) => {
  return (
    <div className="bg-gray-100 p-4">
      <div className="container-lg mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            {votes.for.map((vote: any) => (
              <CandidateVoteCard feedback={vote} />
            ))}
          </div>
          <div className="col-span-1">
            {votes.against.map((vote: any) => (
              <CandidateVoteCard feedback={vote} />
            ))}
          </div>
          <div className="col-span-1">
            {votes.abstain.map((vote: any) => (
              <CandidateVoteCard feedback={vote} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateVoteGrid;
