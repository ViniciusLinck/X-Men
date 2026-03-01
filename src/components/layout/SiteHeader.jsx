import { Link } from "react-router-dom";
import logo from "@/assets/images/logo.svg";

export function SiteHeader() {
  return (
    <header className="cabecalho">
      <Link to="/" className="logo-link" aria-label="Voltar para a home">
        <img className="logo" src={logo} alt="Logo X-Men" />
      </Link>
    </header>
  );
}
