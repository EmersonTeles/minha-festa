import { getSession, useSession } from "next-auth/react";
import { GetServerSideProps } from "next/types";

export default function SignInButton() {
  const { data: session } = useSession();
  function toggleSignInModal() {
    const modal = document.querySelector("#signInModal");
    modal?.classList.toggle("open");
  }
  function toggleConfirmModal() {
    const modal = document.querySelector("#confirmFormModal");
    modal?.classList.toggle("open");
  }
  return (
    <>
      {!session?.user ? (
        <button type="button" className="Confirm_button" onClick={toggleSignInModal}>
          Quero participar
        </button>
      ) : (
        <button type="button" className="Confirm_button confirm" onClick={toggleConfirmModal}>
          Confirmar presença
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
