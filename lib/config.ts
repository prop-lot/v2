import { mainnet, goerli, sepolia } from "viem/chains";

type SupportedChain = typeof mainnet.id | typeof goerli.id | typeof sepolia.id;
type ExternalContractAddresses = {
  lidoToken?: string;
  usdcToken: string;
  weth: string;
  steth?: string;
  payerContract: string;
  tokenBuyer: string;
  chainlinkEthUsdc: string;
  nounsStreamFactory: string;
};
type NounsContractAddresses = {
  nounsToken: string;
  nounsSeeder: string;
  nounsDescriptor: string;
  nftDescriptor: string;
  nounsAuctionHouse: string;
  nounsAuctionHouseProxy: string;
  nounsAuctionHouseProxyAdmin: string;
  nounsDaoExecutor: string;
  nounsDaoExecutorV2?: string;
  nounsDaoExecutorProxy?: string;
  nounsDAOProxy?: string;
  nounsDAOLogicV1?: string;
  nounsDAOLogicV2?: string;
  nounsDAOData?: string;
};

const CHAIN_ID = parseInt(process.env.CHAIN_ID || "1", 5) as SupportedChain;

export const ironOptions = {
  cookieName: "proplot-auth",
  password: process.env.SECRET_AUTH_PASSWORD || "",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
  ttl: 60 * 30,
};

const nounsContractAddresses: Record<SupportedChain, NounsContractAddresses> = {
  [mainnet.id]: {
    nounsToken: "0x9C8fF314C9Bc7F6e59A9d9225Fb22946427eDC03",
    nounsSeeder: "0xCC8a0FB5ab3C7132c1b2A0109142Fb112c4Ce515",
    nounsDescriptor: "0x0Cfdb3Ba1694c2bb2CFACB0339ad7b1Ae5932B63",
    nftDescriptor: "0x0BBAd8c947210ab6284699605ce2a61780958264",
    nounsAuctionHouse: "0xF15a943787014461d94da08aD4040f79Cd7c124e",
    nounsAuctionHouseProxy: "0x830BD73E4184ceF73443C15111a1DF14e495C706",
    nounsAuctionHouseProxyAdmin: "0xC1C119932d78aB9080862C5fcb964029f086401e",
    nounsDaoExecutor: "0x0BC3807Ec262cB779b38D65b38158acC3bfedE10",
    nounsDaoExecutorV2: "0x0FB7CF84F171154cBC3F553aA9Df9b0e9076649D",
    nounsDaoExecutorProxy: "0xb1a32FC9F9D8b2cf86C068Cae13108809547ef71",
    nounsDAOProxy: "0x6f3E6272A167e8AcCb32072d08E0957F9c79223d",
    nounsDAOLogicV1: "0xa43aFE317985726E4e194eb061Af77fbCb43F944",
    nounsDAOLogicV2: "0x51C7D7C47E440d937208bD987140D6db6B1E4051",
    nounsDAOData: "0xf790A5f59678dd733fb3De93493A91f472ca1365",
  },
  [goerli.id]: {
    nounsToken: "0x99265CE0983aab76F5a3789663FDD887dE66638A",
    nounsSeeder: "0x3947Ffe80005DAf485FbD37A52F2d4322De10c0D",
    nounsDescriptor: "0xC5FcAAb38C4Ab043e2706f245183d747299dF414",
    nftDescriptor: "0xC6736a2c6aB54D6DFd9787F2335282CBF51135a0",
    nounsAuctionHouse: "0xd329a604EFEE29799E821A3980620fbD1c1bBA40",
    nounsAuctionHouseProxy: "0x32bBBf3721a1b05390daf4Dec2f5Fe4b935f25A1",
    nounsAuctionHouseProxyAdmin: "0x5dAdD045E2aC09f55f49Bb84886Ea7724c675a0d",
    nounsDaoExecutor: "0xc15008dE43D93D115BD64ED4D95817fFdBfb6DEA",
    nounsDAOProxy: "0x22F7658f64be277e6b3968ecE7b773b092a39864",
    nounsDAOLogicV2: "0x3c793c2D7Cfd48046c75c63E43d36a2cB42fC649",
    nounsDAOData: "0xc0217355376E414a1c33Dc3558A75625c5444006",
  },
  [sepolia.id]: {
    nounsToken: "0x4C4674bb72a096855496a7204962297bd7e12b85",
    nounsSeeder: "0xe99b8Ee07B28C587B755f348649f3Ee45aDA5E7D",
    nounsDescriptor: "0x5319dbcb313738aD70a3D945E61ceB8b84691928",
    nftDescriptor: "0xF5A7A2f948b6b2B1BD6E25C6ddE4dA892301caB5",
    nounsAuctionHouse: "0x44FeBD884Abf796d2d198974A768CBD882a959a8",
    nounsAuctionHouseProxy: "0x488609b7113FCf3B761A05956300d605E8f6BcAf",
    nounsAuctionHouseProxyAdmin: "0x9A19E520d9cd6c40eCc79623f16390a68962b7E9",
    nounsDaoExecutor: "0x332db58b51393f3a6b28d4DD8964234967e1aD33",
    nounsDaoExecutorProxy: "0x07e5D6a1550aD5E597A9b0698A474AA080A2fB28",
    nounsDAOProxy: "0x35d2670d7C8931AACdd37C89Ddcb0638c3c44A57",
    nounsDAOLogicV2: "0x1634D5abB2c0BBF7B817b791C8355a39f2EcEF0A",
    nounsDAOData: "0x9040f720AA8A693F950B9cF94764b4b06079D002",
  },
};

const externalAddresses: Record<SupportedChain, ExternalContractAddresses> = {
  [goerli.id]: {
    lidoToken: "0x2DD6530F136D2B56330792D46aF959D9EA62E276",
    usdcToken: "0x07865c6e87b9f70255377e024ace6630c1eaa37f",
    weth: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
    steth: "0x1643E812aE58766192Cf7D2Cf9567dF2C37e9B7F",
    payerContract: "0x63F8445C4549d17DB181f9ADe1a126EfF8Ee72D6",
    tokenBuyer: "0x7Ee1fE5973c2F6e42D2D40c93f0FDed078c85770",
    chainlinkEthUsdc: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
    nounsStreamFactory: "0xc08a287eCB16CeD801f28Bb011924f7DE5Cc53a3",
  },
  [sepolia.id]: {
    lidoToken: undefined,
    usdcToken: "0xEbCC972B6B3eB15C0592BE1871838963d0B94278",
    weth: "0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14",
    steth: undefined,
    payerContract: "0x5a2A0951C6b3479DBEe1D5909Aac7B325d300D94",
    tokenBuyer: "0x821176470cFeF1dB78F1e2dbae136f73c36ddd48",
    chainlinkEthUsdc: "0x694AA1769357215DE4FAC081bf1f309aDC325306",
    nounsStreamFactory: "0xb78ccF3BD015f209fb9B2d3d132FD8784Df78DF5",
  },
  [mainnet.id]: {
    lidoToken: "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",
    usdcToken: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    chainlinkEthUsdc: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
    payerContract: "0xd97Bcd9f47cEe35c0a9ec1dc40C1269afc9E8E1D",
    tokenBuyer: "0x4f2aCdc74f6941390d9b1804faBc3E780388cfe5",
    weth: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    steth: "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",
    nounsStreamFactory: "0x0fd206FC7A7dBcD5661157eDCb1FFDD0D02A61ff",
  },
};

const getNounsAddressesForChainOrThrow = (chainId: SupportedChain) => {
  const addresses = nounsContractAddresses[chainId];
  if (!addresses) {
    throw new Error(`No addresses configured for chain ${chainId}`);
  }
  return addresses;
};

const getExternalAddressesForChainOrThrow = (chainId: SupportedChain) => {
  const addresses = externalAddresses[chainId];
  if (!addresses) {
    throw new Error(`No addresses configured for chain ${chainId}`);
  }
  return addresses;
};

const getAddresses = () => {
  const nounsAddresses = getNounsAddressesForChainOrThrow(CHAIN_ID);
  const externalAddresses = getExternalAddressesForChainOrThrow(CHAIN_ID);
  return {
    ...nounsAddresses,
    ...externalAddresses,
  } as ExternalContractAddresses & NounsContractAddresses;
};

const config = {
  addresses: getAddresses(),
};

export default config;
