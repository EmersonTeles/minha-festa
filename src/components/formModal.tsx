import api from "@/utils/api";
import { useSession } from "next-auth/react";

export default function FormModal() {
  const { data: session } = useSession();
  function toggleModal() {
    const modal = document.querySelector("#confirmFormModal");
    modal?.classList.toggle("open");
  }
  const submitForm: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {
      await api.post("api/confirm", {
        hasCar: formData.get("hasCar_input"),
        neighborhood: formData.get("neighborhood"),
        days: formData.get("days_input"),
        user: session?.user,
      });
      toggleModal();
      //você está confirmado!
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section className="FormModal" id="confirmFormModal" onClick={toggleModal}>
      <form
        className="FormModal_form"
        onClick={(event) => {
          event.stopPropagation();
        }}
        onSubmit={submitForm}
      >
        <div className="FormModal_form_inputGroup">
          <h1>Você possui carro?</h1>
          <p>Que estaria disposto a oferecer carona</p>
          <div className="FormModal_form_inputGroup-radio">
            <input type="radio" id="hasCar_yes" name="hasCar_input" value="True" />
            <label htmlFor="hasCar_yes">Sim</label>
            <input type="radio" id="hasCar_no" name="hasCar_input" value="False" />
            <label htmlFor="hasCar_no">Não</label>
          </div>
        </div>
        <div className="FormModal_form_inputGroup">
          <h1>Aonde você mora?</h1>
          <select name="neighborhood" className="FormModal_form_inputGroup-select">
            <option value="0" disabled selected>
              Selecione uma cidade
            </option>
            <option value="asa_sul">Asa sul</option>
            <option value="asa_norte">Asa norte</option>
            <option value="sudoeste">Sudoeste</option>
            <option value="noroeste">Noroeste</option>
            <option value="lago_sul">Lago sul</option>
            <option value="norte">Lago norte</option>
            <option value="guara">Guará</option>
            <option value="taguatinga">Taguatinga</option>
            <option value="ceilandia">Ceilândia</option>
            <option value="samambaia">Samambaia</option>
            <option value="gama">Gama</option>
            <option value="bandeirante">Núcleo Bandeirante</option>
            <option value="aguas_claras">Águas Claras</option>
            <option value="parkway">Arniqueiras/parkway</option>
            <option value="riacho_fundo_1">Riacho Fundo 1</option>
            <option value="riacho_fundo_2">Riacho Fundo 2</option>
            <option value="recanto">Recanto das Emas</option>
            <option value="candangolandia">Candangolândia</option>
            <option value="novo_Gama">Novo Gama</option>
          </select>
        </div>
        <div className="FormModal_form_inputGroup">
          <h1>Planeja ir quais dias?</h1>
          <div className="FormModal_form_inputGroup-radio">
            <input type="radio" id="days_both" name="days_input" value="both" />
            <label htmlFor="days_both">Ambos</label>
            <input type="radio" id="days_sat" name="days_input" value="saturday" />
            <label htmlFor="days_sat">Só sábado 27</label>
            <input type="radio" id="days_mon" name="days_input" value="monday" />
            <label htmlFor="days_mon">Só domingo 28</label>
          </div>
        </div>
        <button type="submit">Confirmar Presença</button>
      </form>
    </section>
  );
}
