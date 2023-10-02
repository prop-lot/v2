import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import { TwicInstall } from "@twicpics/components/react";
import "@twicpics/components/style.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { WagmiConfig, createConfig } from "wagmi";
import { mainnet, goerli } from "wagmi/chains";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { ApolloProvider } from "@apollo/client";
import { client as ApolloClient } from "@/lib/apollo";
import { AuthProvider } from "@/hooks/useAuth";
import { ErrorModalProvider } from "@/hooks/useApiError";
import NavBar from "../components/Navbar";

const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_ID;
const infuraId = process.env.NEXT_PUBLIC_INFURA_ID;
const walletconnectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROEJCT_ID;
const twicpicsDomain = process.env.NEXT_PUBLIC_TWIC_PICS_DOMAIN || "";
const chains = [mainnet, goerli];

const config = createConfig(
  getDefaultConfig({
    appName: "Prop Lot",
    alchemyId,
    infuraId,
    chains,
    walletConnectProjectId: walletconnectId || "",
  })
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Prop Lot</title>
        <meta name="description" content="Vote on nounish ideas." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TwicInstall domain={twicpicsDomain} />
      <ApolloProvider client={ApolloClient}>
        <WagmiConfig config={config}>
          <ConnectKitProvider options={{ initialChainId: 0 }}>
            <AuthProvider>
              <ErrorModalProvider>
                <NavBar />
                <Component {...pageProps} />
              </ErrorModalProvider>
            </AuthProvider>
          </ConnectKitProvider>
        </WagmiConfig>
      </ApolloProvider>
    </>
  );
}
