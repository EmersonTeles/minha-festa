import Image from "next/image";
import Avatar from "@/assets/avatar.jpg";
export default function Header({ user }: any) {
  return (
    <header className="header">
      <nav>
        <ul className="header_menu">
          <li className="header_menu_item">
            <a href="#">Inicio</a>
          </li>
          <li className="header_menu_item">
            <a href="#about">O que esperar?</a>
          </li>
          <li className="header_menu_item">
            <a href="#instructions">Instruções</a>
          </li>
          <li className="header_menu_item">
            <a href="#loc">Como chegar</a>
          </li>
        </ul>
      </nav>
      {user && (
        <div className="profile">
          <h1>
            Olá, <span className="user_name">{user.name}</span>
          </h1>
          <Image src={Avatar} alt="profile" />
        </div>
      )}
    </header>
  );
}
