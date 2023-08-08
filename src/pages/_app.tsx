import type { AppProps } from "next/app";
import GlobalStyle from "../styles/global";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <GlobalStyle />
      <Component {...pageProps} />
    </div>
  );
}