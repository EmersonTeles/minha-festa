import Image from "next/image";
import mclovin from "@/assets/selfie.png";
import SingupButton from "./singup";
export default function Banner() {
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
      <SingupButton />
    </section>
  );
}
