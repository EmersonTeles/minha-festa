import { getSession, signIn, useSession } from "next-auth/react";
import { GetServerSideProps } from "next/types";

export default function SignInButton({ user }: any) {
  const { data: session } = useSession();
  function toggleModal() {
    const modal = document.querySelector("#signInModal");
    modal?.classList.toggle("open");
  }
  return (
    <>
      {session?.user ? (
        <button type="button" className="Confirm_button confirm" onClick={() => {}}>
          Confirmar presença
        </button>
      ) : (
        <button type="button" className="Confirm_button" onClick={toggleModal}>
          Quero participar
        </button>
      )}
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
