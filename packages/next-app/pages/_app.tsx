import "../styles/globals.css";
import type { AppProps } from "next/app";
import Heading from "../components/heading";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Heading />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
