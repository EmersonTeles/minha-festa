import Image from "next/image";
import mclovin from "@/assets/selfie.png";
import SingupButton from "./signInButton";
import { useSession } from "next-auth/react";
import Link from "next/link";
export default function Banner() {
  const { data: session } = useSession();
  return (
    <section className="banner">
      <div className="banner_photo">
        <Image src={mclovin} alt="" />
      </div>
      <div className="card">
        <h1 className="title">Você está convidado</h1>
        <h3 className="date">Dias 27 e 28 de maio</h3>
        <p></p>
      </div>
      {session?.user.isConfirmed ? (
        <div className="banner_confirmed">
          <h1 className="banner_confirmed-title">Presença confirmada!</h1>
          <Link
            passHref
            target="_blank"
            rel="noreferrer noopener"
            className="banner_confirmed-button"
            href="https://chat.whatsapp.com/H3fZk2qMzsZJISyQg8Ig4o"
          >
            Acesso ao grupo
          </Link>
          <a href="#contribute" className="banner_confirmed-contribute">
            Contribuir
          </a>
        </div>
      ) : (
        <SingupButton />
      )}
    </section>
  );
}
