import Image from "next/image";
import mclovin from "@/assets/mclovin.png";
export default function Banner() {
  return (
    <section className="banner">
      <div className="card">
        <h1 className="title">21 BITS</h1>
        <h2 className="subtitle">Você está convidado para o meu aniversário de 21 anos</h2>
        <button className="Confirm_button">Quero participar</button>
        <h3 className="date">Dias 27 e 28 de maio</h3>
      </div>
      <Image className="banner_photo" src={mclovin} alt="" />
    </section>
  );
}
