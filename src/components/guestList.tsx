export default function GuestList() {
  return (
    <section className="guestList" id="guestList">
      <div className="guestList_content">
        <h1>Lista de confirmados</h1>
        <div className="guestList_content_list">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Confirmado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Emerson Teles</td>
                <td>Sim</td>
              </tr>
              <tr>
                <td>Emerson Teles</td>
                <td>Sim</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
