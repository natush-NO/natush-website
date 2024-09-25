import GlobalStyle from "@/styles";
// import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
