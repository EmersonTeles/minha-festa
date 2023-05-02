import { signIn } from "next-auth/react";
export default function SignInButton() {
  return (
    <button type="button" className="Confirm_button" onClick={() => signIn("google")}>
      Quero participar
    </button>
  );
}
