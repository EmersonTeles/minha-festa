import "@/styles/globals.scss";
import "@/styles/home.scss";
import "@/styles/header.scss";
import "@/styles/banner.scss";
import "@/styles/instructions.scss";
import "@/styles/about.scss";
import "@/styles/location.scss";
import "@/styles/contribute.scss";
import "@/styles/signInModal.scss";

import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />

      <Analytics />
    </SessionProvider>
  );
}
