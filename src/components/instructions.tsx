import Bug from "../assets/bug.svg";
export default function Rules() {
  return (
    <section className="instructions" id="instructions">
      <div className="instructions_content">
        <h1>Instruções Gerais da festa</h1>
        <ul role="list">
          <li>
            <Bug />
            Nessa época costuma fazer frio, então recomendo levar casacos e roupas de frio.
          </li>
          <li>
            <Bug />
            Sinta-se a vontade para levar bolas, jogos de tabuleiro, baralho, etc.
          </li>
          <li>
            <Bug />
            Na chácara possui piscina e cachoeira, então leve roupas de banho.
          </li>
          <li>
            <Bug />
            Só teremos bebidas de qualidade questionavél, então se gosta de algo diferenciado,
            sinta-se a vontade.
          </li>
        </ul>
      </div>
    </section>
  );
}
