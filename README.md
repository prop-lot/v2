## Proplot Client

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Migrations

TO UPDATE

## GraphQL Changes

When making changes to the GraphQL schema or adding new queries for the nouns subgraph you will want to auto generate the types for use in the code. The command for this is:

```
npm run generate-graph
```

All local generated types are stored in `./graphql/types/__generated__/types`. The subgraph specific types are in `./graphql/types/__generated__/subgraphTypes`.

## Setting Env Vars

tbd.
