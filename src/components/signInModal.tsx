import { signIn } from "next-auth/react";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { MdClose } from "react-icons/md";
export function SignInModal() {
  function toggleModal() {
    const modal = document.querySelector("#signInModal");
    modal?.classList.toggle("open");
  }
  return (
    <div className="modal" id="signInModal" onClick={toggleModal}>
      <div
        className="modal_content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button type="button" className="modal_content_close" onClick={toggleModal}>
          <MdClose />
        </button>
        <div className="modal_header">
          <h2>Escolha o seu login</h2>
        </div>
        <button className="googleSignIn" onClick={() => signIn("google")}>
          <BsGoogle />
          Google
        </button>
        <button className="githubSignIn" onClick={() => signIn("github")}>
          <BsGithub />
          Github
        </button>
      </div>
    </div>
  );
}
