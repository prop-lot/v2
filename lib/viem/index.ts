import { createPublicClient, http } from "viem";
import { mainnet, goerli } from "viem/chains";

// add rpc providers
const client = createPublicClient({
  chain: mainnet,
  transport: http(),
});

// add rpc providers
const goerliClient = createPublicClient({
  chain: goerli,
  transport: http(),
});

type Chain = "mainnet" | "goerli";
export const publicClient = (chain: Chain) => {
  if (chain === "mainnet") {
    return client;
  } else if (chain === "goerli") {
    return goerliClient;
  } else {
    throw new Error("Invalid chain");
  }
};
