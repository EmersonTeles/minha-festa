import Image from "next/image";
import MyGallery from "./myGallery";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about_content">
        <h1>O que esperar?</h1>
        <p>
          Serão 2 dias de festa na chácara da minha família, que fica próximo à cocalzinho-GO, 1
          Hora de taguatinga. A festa começará no dia 27/05 às 09:00 e terminará no dia 28/05 (Meu
          aniversário) às 18:00. Terá comida, bebida, piscina, jogos, música e cachoeira.
          Basicamente tudo que um ser humano precisa para ser feliz.
        </p>

        <MyGallery />
      </div>
    </section>
  );
}
