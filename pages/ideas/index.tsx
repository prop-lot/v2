import IdeasHome from "@/components/IdeasHome";
import { Community } from "@prisma/client";
import prisma from "@/lib/prisma";

export const DEFAULT_HOMEPAGE_MATCH = "__NONE__";

const IdeasPage = ({
  community,
}: {
  community: Community & { data: { name: string; pfpUrl: string } };
}) => {
  return <IdeasHome community={community} />;
};

export default IdeasPage;

export async function getServerSideProps() {
  const community = await prisma.community.findFirst({
    where: {
      uname: "nouns",
    },
  });

  if (!community) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      community: JSON.parse(JSON.stringify(community)),
    },
  };
}
