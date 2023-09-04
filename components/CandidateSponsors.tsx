const PfpOrFallback = ({ src, alt }: { src?: string; alt?: string }) => {
  if (src) {
    return (
      <img
        className="relative z-30 inline-block h-8 w-8 rounded-full ring-2 ring-white"
        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
    );
  } else {
    return (
      <div className="relative z-30 inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gray-300"></div>
    );
  }
};

const CandidateSponsors = ({ candidate }: { candidate: any }) => {
  return (
    <div className="p-[16px] border rounded">
      <div className="isolate flex -space-x-2 overflow-hidden mx-[auto] mb-[16px] w-fit">
        <PfpOrFallback />
        <PfpOrFallback />
        <PfpOrFallback />
      </div>
      <div className="flex flex-row justify-between items-center">
        <h3 className="font-bold mb-[16px]">Sponsors</h3>
        <span className="text-sm">0 of 3</span>
      </div>
      <section className="mt-[16px]">
        <div className="h-24 rounded flex items-center justify-center text-gray-500 bg-gray-100 text-sm">
          Sponsors will appear here
        </div>
      </section>
      <button className="w-full rounded-lg bg-gray-100 text-gray-500 text-sm py-[10px] mt-[16px]">
        Sponsor this proposal
      </button>
      <p className="text-gray-500 mt-[16px] text-sm">Connect wallet to vote</p>
    </div>
  );
};

export default CandidateSponsors;
