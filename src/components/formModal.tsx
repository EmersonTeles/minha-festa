import api from "@/utils/api";
import { useSession } from "next-auth/react";
import { Dispatch, SetStateAction } from "react";

type FormModalProps = {
  setIsConfirmed: Dispatch<SetStateAction<Boolean>>;
};
export default function FormModal({ setIsConfirmed }: FormModalProps) {
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
        spouse: formData.get("spouse_input"),
        user: session?.user,
      });
      toggleModal();
      setIsConfirmed(true);
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
        <div className="FormModal_form_content">
          <div className="FormModal_form_content_inputGroup">
            <h1>Você possui carro?</h1>
            <p>Que estaria disposto a oferecer carona</p>
            <div className="FormModal_form_content_inputGroup-radio">
              <input type="radio" id="hasCar_yes" name="hasCar_input" value="True" />
              <label htmlFor="hasCar_yes">Sim</label>
              <input type="radio" id="hasCar_no" name="hasCar_input" value="False" />
              <label htmlFor="hasCar_no">Não</label>
            </div>
          </div>
          <div className="FormModal_form_content_inputGroup">
            <h1>Aonde você mora?</h1>
            <select
              name="neighborhood"
              defaultValue="0"
              className="FormModal_form_content_inputGroup-select"
            >
              <option value="0" disabled>
                Selecione uma cidade
              </option>
              <option value="Asa sul">Asa sul</option>
              <option value="Asa norte">Asa norte</option>
              <option value="Sudoeste">Sudoeste</option>
              <option value="Noroeste">Noroeste</option>
              <option value="Lago sul">Lago sul</option>
              <option value="Lago norte">Lago norte</option>
              <option value="Guará">Guará</option>
              <option value="Taguatinga">Taguatinga</option>
              <option value="Ceilândia">Ceilândia</option>
              <option value="samambaia">Samambaia</option>
              <option value="gama">Gama</option>
              <option value="Bandeirante">Núcleo Bandeirante</option>
              <option value="Águas claras">Águas Claras</option>
              <option value="Parkway">Arniqueiras/parkway</option>
              <option value="Riacho Fundo 1">Riacho Fundo 1</option>
              <option value="Riacho Fundo 2">Riacho Fundo 2</option>
              <option value="Recanto">Recanto das Emas</option>
              <option value="Candangolandia">Candangolândia</option>
              <option value="Novo Gama">Novo Gama</option>
            </select>
          </div>
          <div className="FormModal_form_content_inputGroup">
            <h1>Planeja ir quais dias?</h1>
            <div className="FormModal_form_content_inputGroup-radio">
              <input type="radio" id="days_both" name="days_input" value="both" />
              <label htmlFor="days_both">Ambos</label>
              <input type="radio" id="days_sat" name="days_input" value="saturday" />
              <label htmlFor="days_sat">Só sábado 27</label>
              <input type="radio" id="days_mon" name="days_input" value="monday" />
              <label htmlFor="days_mon">Só domingo 28</label>
            </div>
          </div>
          <div className="FormModal_form_content_inputGroup">
            <h1>Pretende levar seu conjuge?</h1>
            <div className="FormModal_form_content_inputGroup-radio">
              <input type="radio" id="spouse_yes" name="spouse_input" value="True" />
              <label htmlFor="spouse_yes">Sim</label>
              <input type="radio" id="spouse_no" name="spouse_input" value="False" />
              <label htmlFor="spouse_no">Não, vou sozinho</label>
            </div>
          </div>
          <button type="submit">Confirmar Presença</button>
        </div>
      </form>
    </section>
  );
}
