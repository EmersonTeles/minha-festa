import { signOut } from "next-auth/react";
import { MdOutlineLogout } from "react-icons/md";
export default function Header({ user }: any) {
  function ChangeColors() {
    const header = document.querySelector(".header");
    if (window.scrollY > 2000) {
      header?.classList.add("header_black");
    } else {
      header?.classList.remove("header_black");
    }
  }
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", ChangeColors);
  }
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
          <li className="header_menu_item">
            <a href="#contribute">Contribua</a>
          </li>
        </ul>
      </nav>
      {user && (
        <div className="profile">
          <h1>
            Olá, <span className="user_name">{user.name}</span>
          </h1>
          <button
            className="profile_logout"
            type="button"
            title="logout-button"
            onClick={() => signOut()}
          >
            <MdOutlineLogout />
          </button>
        </div>
      )}
    </header>
  );
}
