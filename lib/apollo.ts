import { SUPPORTED_SUBDOMAINS } from "@/utils/supportedTokenUtils";
import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";

const defaultLink = new HttpLink({
  uri: "/api/graphql",
});

const nounsDAOLink = new HttpLink({
  uri: 'https://api.goldsky.com/api/public/project_cldf2o9pqagp43svvbk5u3kmo/subgraphs/nouns/prod/gn',
});

//pass them to apollo-client config
export const client = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  credentials: 'include',
  link: ApolloLink.split(
    operation => operation.getContext().clientName === SUPPORTED_SUBDOMAINS.NOUNS,
    nounsDAOLink,
    defaultLink,
  ),
  cache: new InMemoryCache(),
});