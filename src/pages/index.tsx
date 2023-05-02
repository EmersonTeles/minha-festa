import Header from "@/components/header";
import Banner from "@/components/banner";
import Instructions from "@/components/instructions";
import Head from "next/head";
import About from "@/components/about";
import { GetServerSideProps } from "next/types";
import Cards from "@/assets/cards.png";
import Image from "next/image";
import { getSession } from "next-auth/react";

function Home({ user }: any) {
  return (
    <>
      <Head>
        <title>Minha Festa</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <Header user={user} />
        <Banner />
        <About />
        <Instructions />
        <Image className="cardsBlackJack" src={Cards} alt="cards" />
      </main>
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  return {
    props: {
      user: session?.user ?? null,
    },
  };
};
export default Home;
