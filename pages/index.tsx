import CommunityHome from "@/components/CommunityHome";
import { ApolloQueryResult } from "@apollo/client";
import { client } from "@/lib/apollo";
import { v4 } from "uuid";
import { GetServerSidePropsContext } from "next";
import { GetPropLotQuery, GetTagsQuery } from "@/graphql/types/__generated__/types";
import { GET_PROPLOT_QUERY } from "@/graphql/queries/propLotQuery";
import { GET_TAGS } from "@/graphql/queries/tagsQuery";

const Home = (props: any) => {
  return <CommunityHome {...props} />;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
    const host = context.req.headers.host;
    // We set a different uri locally as routing to subdomains here doesn't work unless you add 127.0.0.1 lilnouns.localhost to your /etc/hosts
    // we could add that as a requirement to the readme but this also works.
    const uri =
      process.env.NODE_ENV === "development"
        ? `http://localhost:3000/api/graphql`
        : `${protocol}://${host}/api/graphql`;

    const proplotQueryPromise: Promise<ApolloQueryResult<GetPropLotQuery>> =
      client.query({
        query: GET_PROPLOT_QUERY,
        variables: {
          options: {
            requestUUID: v4(),
            filters: ["PROPLOT_HOME"],
          },
        },
        fetchPolicy: "no-cache",
        context: {
          clientName: "PropLot",
          uri,
          headers: {
            "proplot-cd": "nouns", // Used for local dev as this query doesn't run on the subdomain
            "proplot-tz": Intl.DateTimeFormat().resolvedOptions().timeZone,
            Cookie: context.req.headers.cookie || "",
          },
        },
      });

    const tagQueryPromise: Promise<ApolloQueryResult<GetTagsQuery>> = client.query({
      query: GET_TAGS,
      variables: {},
      fetchPolicy: "no-cache",
      context: {
        clientName: "PropLot",
        uri,
        headers: {
          "proplot-cd": "nouns", // Used for local dev as this query doesn't run on the subdomain
          "proplot-tz": Intl.DateTimeFormat().resolvedOptions().timeZone,
          Cookie: context.req.headers.cookie || "",
        },
      },
    });

    const [proplotData, tagData] = await Promise.all([
      proplotQueryPromise,
      tagQueryPromise,
    ]);

    return {
      props: {
        proplotListData: proplotData.data,
        tagsData: tagData.data,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
}

export default Home;
