import api from "@/utils/api";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
export default function GuestList() {
  const [guests, setGuests] = useState<any[]>([]);
  const { data: session } = useSession();
  const getData = async () => {
    try {
      const res = await api.get("/api/guests");
      setGuests(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (session) {
      getData();
    }
  }, [session]);
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
                guests?.map((guest) => (
                  <tr key={guest._id}>
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
