import Image from "next/image";
import { Key } from "react";

export default function GuestList({ guests, session }: any) {
  return (
    <section className="guestList" id="guestList">
      <div className="guestList_content">
        <h1>Lista de confirmados</h1>
        <div className="guestList_content_table">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Nome</th>
                <th>Mora aonde?</th>
                <th>Vai quais dias?</th>
                <th>Tem carro pra carona?</th>
              </tr>
            </thead>
            <tbody>
              {session &&
                guests?.map((guest: any, id: Key | null | undefined) => (
                  <tr key={id}>
                    <td>
                      <Image src={guest.image} alt="foto de perfil" width={50} height={50} />
                    </td>
                    <td>{guest.name}</td>
                    <td>{guest.confirmation_data.neighborhood}</td>
                    <td>
                      {guest.confirmation_data.days === "both"
                        ? "Ambos"
                        : guest.confirmation_data.days === "saturday"
                        ? "Sábado"
                        : "Domingo"}
                    </td>
                    <td>{guest.confirmation_data.hasCar ? "Sim" : "Não"}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        {!session && <span>*Se cadastre para visualizar a lista</span>}
      </div>
    </section>
  );
}
