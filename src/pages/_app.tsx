import "@/styles/globals.scss";
import "@/styles/home.scss";
import "@/styles/header.scss";
import "@/styles/banner.scss";
import "@/styles/instructions.scss";
import "@/styles/about.scss";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
