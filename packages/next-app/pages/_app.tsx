import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider, chain, defaultChains } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { WalletLinkConnector } from "wagmi/connectors/walletLink";
import Heading from "../components/heading";
import Layout from "../components/Layout";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme";
import { Toaster } from "react-hot-toast";


const infuraId = process.env.NEXT_PUBLIC_INFURA_ID;

const chains = defaultChains;

type Connector =
  | InjectedConnector
  | WalletConnectConnector
  | WalletLinkConnector;

  const connectors = ({ chainId }: { chainId?: number }): Connector[] => {
  const rpcUrl =
    chains.find((x) => x.id === chainId)?.rpcUrls?.[0] ??
    chain.mainnet.rpcUrls[0];
  return [
    new InjectedConnector({ chains }),
    new WalletConnectConnector({
      options: {
        infuraId,
        qrcode: true,
      },
    }),
    new WalletLinkConnector({
      options: {
        appName: "Alpha-C",
        jsonRpcUrl: `${rpcUrl}/${infuraId}`,
      },
    }),
  ];
};
function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Provider autoConnect connectors={connectors}>
      <ThemeProvider theme={theme}>
      <Toaster/>
        <Layout>
          <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
