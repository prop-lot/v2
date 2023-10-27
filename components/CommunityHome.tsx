import Router from "next/router";
import Image from "next/image";
import { useEffect } from "react";
import { useAccount } from "wagmi";
import { useLazyQuery } from "@apollo/client";
import { DELEGATED_VOTES_BY_OWNER_SUB } from "@/graphql/subgraph";
import IdeaRow from "@/components/IdeaRow";
import EmptyState from "@/components/EmptyState";
import FAQAccordion from "@/components/FAQAccordion";
import CommunityHomeLiveDataBoard from "@/components/CommunityHomeLiveDataBoard";
import Link from "next/link";
import { virtualTagColorMap } from "@/utils/virtualTagColors";

import {
  GetPropLotQuery,
  GetTagsQuery,
} from "@/graphql/types/__generated__/types";
import {
  DelegatedVotesQuery
} from "@/graphql/types/__generated__/subgraphTypes";

const TagButtons = ({ tags }: { tags: GetTagsQuery['tags'] }) => (
  <div className="grid grid-cols-3 gap-lg md:grid-cols-4">
    {tags?.map(({ label, type }) => (
      <Link
        key={type}
        href={`/ideas?tag=${type}`}
        className="bg-white rounded-xl border p-md gap-sm border-grey justify-start items-center flex flex-col md:flex-row"
      >
        {!!virtualTagColorMap[type]?.logo && (
          <div
            className={`w-[36px] h-[36px] ${virtualTagColorMap[type].colors} rounded-full flex-col justify-center items-center inline-flex`}
          >
            <Image
              src={virtualTagColorMap[type].logo || ""}
              alt={`${label} icon`}
              width="18"
              height="18"
            />
          </div>
        )}

        <div className="flex-col justify-center items-center md:justify-start md:items-start inline-flex whitespace-nowrap">
          <div className="text-black text-sm md:text-base font-bold">
            {label}
          </div>
        </div>
      </Link>
    ))}
    <Link
      href="/ideas"
      className="bg-white rounded-xl border p-md gap-sm border-grey justify-start items-center flex flex-col md:flex-row"
    >
      <div className="flex-col justify-center items-center md:justify-start md:items-start inline-flex whitespace-nowrap">
        <div className="text-black text-sm md:text-base font-bold">
          All ideas
        </div>
      </div>
      <div className="w-[36px] h-[36px] rounded-full flex-col justify-center items-center inline-flex">
        <Image
          src="/arrow-right.svg"
          alt="arrow-right icon."
          width="18"
          height="18"
        />
      </div>
    </Link>
  </div>
);

export default function CommunityHome({ tagsData, proplotListData }: { tagsData: GetTagsQuery, proplotListData: GetPropLotQuery}) {
  const { address } = useAccount();

  const [getDelegatedVotes, { data: getDelegatedVotesData }] = useLazyQuery<DelegatedVotesQuery>(
    DELEGATED_VOTES_BY_OWNER_SUB,
    {
      context: {
        clientName: "nouns",
      },
    }
  );

  useEffect(() => {
    if (address) {
      getDelegatedVotes({
        variables: {
          id: address.toLowerCase(),
        },
      });
    }
  }, [address, getDelegatedVotes]);

  const handleRefresh = () => {
    // Implement refetching proplot query if we want to enable vote controls on this view
    // refetch({ options: { requestUUID: v4(), filters: [PROPLOT_HOME_FILTER] } });
  };

  const nounBalance = getDelegatedVotesData?.delegate?.delegatedVotes || 0;

  return (
    <main className="pt-xl gap-xl min-h-[calc(100vh-72px)] flex flex-col overflow-x-hidden">
      <div
        style={{
          position: "relative",
          backgroundImage: "url(/background-image.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="flex flex-col justify-center align-center w-full pt-[0%] pb-[0%] md:pt-[7%] md:pb-[7%]"
      >
        <div className="flex flex-col justify-center items-center mx-auto align-center h-full w-[55%] max-w-[522px] min-w-[300px]">
          <h1
            style={{ textAlign: "center", position: "relative" }}
            className="text-center font-londrinaLight text-black text-xxl md:text-[69px] lg:text-[89px] font-light"
          >
            Find ideas to build for Nouns
          </h1>

          <p
            style={{ textAlign: "center", position: "relative" }}
            className="text-md mt-sm text-slate"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
            consectetur
          </p>
        </div>
      </div>

      <section className="flex flex-1 flex-col gap-lg max-w-screen-xl mx-auto px-lg w-full">
        <div className="text-black text-xxl font-londrina text-center">
          What ideas are you looking for?
        </div>
        {tagsData && (tagsData?.tags || []).length > 0 && (
          <TagButtons tags={tagsData.tags} />
        )}
        <div className="gap-lg flex flex-row flex-wrap items-center w-full overflow-x-scroll scrollbar-hide">
          {proplotListData?.propLot?.list?.map((listItem: any, idx: number) => {
            if (listItem.__typename === "Idea") {
              return (
                <IdeaRow
                  key={listItem.id}
                  idea={listItem}
                  nounBalance={nounBalance}
                  disableControls={true}
                  refetch={() => {
                    handleRefresh();
                  }}
                />
              );
            }

            return null;
          })}
          {proplotListData?.propLot?.list?.length === 0 && (
            <EmptyState
              appliedFilters={[]}
              clearFilters={() => undefined}
            />
          )}
        </div>
        <div className="flex flex-col-reverse sm:flex-row items-center justify-center mt-4">
          <button
            className="!bg-[#34AC80] !text-[#FFF] !border-none !text-[16px] !rounded-[10px] !font-ptRootUI !font-bold !pt-[8px] !pb-[8px] !pl-[24px] !pr-[24px] self-center"
            onClick={() => {
              Router.push("/ideas");
            }}
          >
            Browse all ideas
          </button>
        </div>
      </section>
      <CommunityHomeLiveDataBoard />
      <section className="!font-ptRootUI flex flex-1 justify-center px-[20px] xl:px-0 py-[72px] gap-8">
        <FAQAccordion />
      </section>
    </main>
  );
}
