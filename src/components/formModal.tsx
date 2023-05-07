export default function FormModal() {
  function toggleModal() {
    const modal = document.querySelector("#confirmFormModal");
    modal?.classList.toggle("open");
  }
  return (
    <section className="FormModal" id="confirmFormModal" onClick={toggleModal}>
      <form
        className="FormModal_form"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="FormModal_form_inputGroup">
          <h1>Você possui carro?</h1>
          <p>Que estaria disposto a oferecer carona</p>
          <div className="FormModal_form_inputGroup-radio">
            <input type="radio" id="ride_yes" name="ride_input" value="yes" />
            <label htmlFor="ride_yes">Sim</label>
            <input type="radio" id="ride_no" name="ride_input" value="no" />
            <label htmlFor="ride_no">Não</label>
          </div>
        </div>
        <div className="FormModal_form_inputGroup">
          <h1>Aonde você mora?</h1>
          <select className="FormModal_form_inputGroup-select">
            <option value="0">Selecione uma cidade</option>
            <option value="1">Asa sul</option>
            <option value="2">Asa norte</option>
            <option value="3">Sudoeste</option>
            <option value="4">Noroeste</option>
            <option value="5">Lago sul</option>
            <option value="6">Lago norte</option>
            <option value="7">Guará</option>
            <option value="8">Taguatinga</option>
            <option value="9">Ceilândia</option>
            <option value="10">Samambaia</option>
            <option value="11">Gama</option>
            <option value="16">Núcleo Bandeirante</option>
            <option value="17">Águas Claras</option>
            <option value="18">Riacho Fundo 1</option>
            <option value="19">Riacho Fundo 2</option>
            <option value="20">Recanto das Emas</option>
            <option value="22">Candangolândia</option>
            <option value="25">Novo Gama</option>
          </select>
        </div>
        <div className="FormModal_form_inputGroup">
          <h1>Planeja ir quais dias?</h1>
          <div className="FormModal_form_inputGroup-radio">
            <input type="radio" id="days_both" name="days_input" value="no" />
            <label htmlFor="days_both">Ambos</label>
            <input type="radio" id="days_sat" name="days_input" value="yes" />
            <label htmlFor="days_sat">Só sábado 27</label>
            <input type="radio" id="days_mon" name="days_input" value="no" />
            <label htmlFor="days_mon">Só domingo 28</label>
          </div>
        </div>
        <button type="submit">Confirmar Presença</button>
      </form>
    </section>
  );
}
