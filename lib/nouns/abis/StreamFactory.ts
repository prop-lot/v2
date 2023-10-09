export const abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_streamImplementation",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  { inputs: [], name: "DurationMustBePositive", type: "error" },
  { inputs: [], name: "PayerIsAddressZero", type: "error" },
  { inputs: [], name: "RecipientIsAddressZero", type: "error" },
  { inputs: [], name: "TokenAmountIsZero", type: "error" },
  { inputs: [], name: "TokenAmountLessThanDuration", type: "error" },
  { inputs: [], name: "UnexpectedStreamAddress", type: "error" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "msgSender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "payer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "stopTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "streamAddress",
        type: "address",
      },
    ],
    name: "StreamCreated",
    type: "event",
  },
  {
    inputs: [
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "tokenAmount", type: "uint256" },
      { internalType: "address", name: "tokenAddress", type: "address" },
      { internalType: "uint256", name: "startTime", type: "uint256" },
      { internalType: "uint256", name: "stopTime", type: "uint256" },
    ],
    name: "createAndFundStream",
    outputs: [{ internalType: "address", name: "stream", type: "address" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "stopTime",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "nonce",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "predictedStreamAddress",
        type: "address",
      },
    ],
    name: "createStream",
    outputs: [
      {
        internalType: "address",
        name: "stream",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },

  {
    inputs: [
      { internalType: "address", name: "msgSender", type: "address" },
      { internalType: "address", name: "payer", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "tokenAmount", type: "uint256" },
      { internalType: "address", name: "tokenAddress", type: "address" },
      { internalType: "uint256", name: "startTime", type: "uint256" },
      { internalType: "uint256", name: "stopTime", type: "uint256" },
    ],
    name: "predictStreamAddress",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "streamImplementation",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
] as const;
