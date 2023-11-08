import CookieBanner from "../../components/CookieBanner";
import { Container, FormSingIn } from "./styles";
import logoIcon from "../../assets/logoicon.svg";
import { useAuth } from "../../hooks/auth";
import { useCookies } from "react-cookie";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

export function SignIn() {
  const [cookies, setCookie] = useCookies(["cookieConsent"]);
  const [showCookie, setShowCookie] = useState(true);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const { signIn } = useAuth();

  const handleAccept = () => {
    setCookie("cookieConsent", true, { path: "/" });
    setShowCookie(!setCookie);
  };

  const handleDecline = () => {
    setShowCookie(!setCookie);
  };

  async function handleSign() {
    signIn({ email, password });
  }

  function handleKeypress(e) {
    if (e.key === "Enter") {
      handleSign();
    }
  }

  return (
    <Container>
      {showCookie && (
        <CookieBanner accept={handleAccept} decline={handleDecline} />
      )}
      <div className="logo-intro">
        <img src={logoIcon} alt="" />
        <h1>food explorer</h1>
      </div>
      <FormSingIn>
        <h2>Faça login</h2>
        <label htmlFor="name">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value.toLowerCase())}
          onKeyUp={handleKeypress}
          id="name"
          type="text"
          placeholder="Exemplo: Maria da Silva"
        />
        <label htmlFor="password">Senha</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          onKeyUp={handleKeypress}
          id="password"
          type="password"
          placeholder="No minimo 6 caracteres"
        />

        <button onClick={handleSign} type="button">
          Entrar
        </button>

        <Link to="/register">
          <p>Criar uma conta </p>
        </Link>
      </FormSingIn>
    </Container>
  );
}
