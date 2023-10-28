import { Container, FormSingIn } from "./styles";
import logoIcon from "../../assets/logoicon.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  async function handleSign() {
    signIn({ email, password });
  }

  return (
    <Container>
      <div className="logo-intro">
        <img src={logoIcon} alt="" />
        <h1>food explorer</h1>
      </div>
      <FormSingIn>
        <h2>Faça login</h2>
        <label htmlFor="name">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          id="name"
          type="text"
          placeholder="Exemplo: Maria da Silva"
        />
        <label htmlFor="password">Senha</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
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
