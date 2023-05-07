import Header from "@/components/header";
import Banner from "@/components/banner";
import Instructions from "@/components/instructions";
import Head from "next/head";
import About from "@/components/about";
import { GetServerSideProps, InferGetServerSidePropsType } from "next/types";
import Cards from "@/assets/cards.png";
import TreesLeft from "@/assets/trees-left.png";
import TreesRight from "@/assets/trees-right.png";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Location from "@/components/location";
import Contribute from "@/components/contribute";
import { SignInModal } from "@/components/signInModal";
import clientPromise from "@/lib/mongodb";
import FormModal from "@/components/formModal";
import GuestList from "@/components/guestList";

function Home({ isConnected }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>Minha Festa</title>
        <meta
          name="description"
          content="Olá amigos, estarei fazendo 21 anos, e você foi convidado!"
        />
        <meta property="og:title" content="Você foi convidado para o meu aniversário!" />

        <meta property="og:type" content="public_figure" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="https://iili.io/HSPh5np.jpg" />
        <meta property="og:url" content="https://minha-festa.emersonteles.tech" />
        <meta property="og:site_name" content="Minha Festa de 21" />
        <link rel="icon" href="/Logo load.png" />
      </Head>
      <main className="main">
        <div className={isConnected ? "main_db-true" : "main_db-false"}></div>
        <Header user={session?.user} />
        <Banner />
        <About />
        <Instructions />
        <Contribute />
        <Location />
        <GuestList />
        <SignInModal />
        <FormModal />
        <Image className="cardsBlackJack" src={Cards} alt="cards" />
        <Image className="TreesLeft" src={TreesLeft} alt="TreesLeft" />
        <Image className="TreesRight" src={TreesRight} alt="TreesRight" />
      </main>
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    await clientPromise;
    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
};
export default Home;
