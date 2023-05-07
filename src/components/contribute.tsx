import { MdContentCopy } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";
import { useState } from "react";
export default function Contribute() {
  const [copied, setCopied] = useState<boolean>(false);
  const pix =
    "00020126420014br.gov.bcb.pix0111054800181240205Festa520400005303986540560.005802BR5925EMERSON LUIS TELES DOS SA6008BRASILIA62140510Minhafesta63044826";
  const copyPix = () => {
    navigator.clipboard.writeText(pix);
    navigator.clipboard.readText().then((text) => {
      if (text === pix) {
        setCopied(true);
      }
    });
  };
  const PixIcon = () => {
    if (copied) {
      return <AiOutlineCheck />;
    }
    return <MdContentCopy />;
  };
  return (
    <section className="contribute" id="contribute">
      <div className="contribute_content">
        <h1>Contribua</h1>
        <p>
          Assim como Milton Friedman disse &quot;Não existe almoço grátis&quot;, eu, como um simples
          prolétario, não serei capaz de pagar sozinho por toda a comida dos 2 dias de festa. Por
          isso, pensei em estabelecer um valor por pessoa pra cobrir toda a comida e parte da bebida
          dentro da chácara, e quem puder levar bebida extra, fique à vontade.
        </p>
        <span>
          *Esse valor <b>não é</b> um ingresso, então se estou te convidando,{" "}
          <b>Eu quero que você vá</b> mesmo que não possa contribuir com nada!
        </span>
        <ul>
          <label>Incluso:</label>
          <li>Almoço - Sábado</li>
          <li>Lanche - Sábado</li>
          <li>Jantar - Sábado</li>
          <li>Café da manhã - Domingo</li>
          <li>Churrasco - Domingo</li>
        </ul>
        <h2>
          Valor: <span>R$60,00</span>
        </h2>
        <div className="pix">
          <h3>Pix (Copia e cola):</h3>
          <button type="button" onClick={copyPix} className="pix_button">
            clique para copiar
            <PixIcon />
          </button>
        </div>
      </div>
    </section>
  );
}
