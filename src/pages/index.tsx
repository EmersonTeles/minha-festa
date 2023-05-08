import { SignInModal } from "@/components/signInModal";
import Instructions from "@/components/instructions";
import Contribute from "@/components/contribute";
import FormModal from "@/components/formModal";
import GuestList from "@/components/guestList";
import Location from "@/components/location";
import Banner from "@/components/banner";
import Header from "@/components/header";
import About from "@/components/about";
import clientPromise from "@/lib/mongodb";
import TreesRight from "@/assets/trees-right.png";
import TreesLeft from "@/assets/trees-left.png";
import Cards from "@/assets/cards.png";
import { useSession } from "next-auth/react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next/types";
import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import api from "@/utils/api";

function Home({ isConnected }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { data: session, update } = useSession();
  const [guests, setGuests] = useState<any[]>([]);
  const getGuests = async () => {
    try {
      const res = await api.get("/api/guests");
      setGuests(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (session) {
      getGuests();
    }
  }, [session]);
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
        <Banner session={session} />
        <About />
        <Instructions />
        <Contribute />
        <GuestList guests={guests} session={session} />
        <Location />
        <SignInModal />
        <FormModal updateSession={update} session={session} />
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
