import "../styles/globals.css";
import type { AppProps } from "next/app";
import Heading from "../components/heading";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Heading />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
