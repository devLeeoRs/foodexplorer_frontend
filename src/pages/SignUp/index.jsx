import { Container, FormSingIn } from "./styles";
import logoIcon from "../../assets/logoicon.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useAlert } from "../../hooks/alertNotification";

export function SignUp() {
  const AlertNotification = useAlert();

  const navigate = useNavigate();

  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  function handleRegister() {
    if (!name || !email || !password) {
      alert("Preecha todos os dados");
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const CheckIsEmail = regexEmail.test(email);
    const CheckIsPassword = regexPassword.test(password);

    if (!CheckIsEmail) {
      return AlertNotification("Email Invalido", "error");
    }

    if (!CheckIsPassword) {
      return AlertNotification("Senha muito Fraca", "error");
    }

    api
      .post("/users", {
        name,
        email,
        password,
      })
      .then(() => {
        AlertNotification("Usuario criado com sucesso", "success");
        navigate("/");
      })
      .catch((error) => {
        AlertNotification("Não foi possivel cadastrar", "error");
      });
  }

  return (
    <Container>
      <div className="logo-intro">
        <img src={logoIcon} alt="" />
        <h1>food explorer</h1>
      </div>
      <FormSingIn>
        <h2>Crie sua conta</h2>
        <label htmlFor="name">Seu nome</label>
        <input
          id="name"
          onChange={(e) => SetName(e.target.value)}
          type="text"
          placeholder="Exemplo: Maria da Silva"
        />
        <label htmlFor="password">Email</label>
        <input
          onChange={(e) => SetEmail(e.target.value)}
          id="email"
          type="text"
          placeholder="Exemplo: exemplo@exemplo.com.br"
        />
        <label htmlFor="password">Senha</label>
        <input
          onChange={(e) => SetPassword(e.target.value)}
          id="password"
          type="password"
          placeholder="No minimo 6 caracteres"
        />

        <button type="button" onClick={handleRegister}>
          Criar Conta{" "}
        </button>
        <Link to="/">
          <p>Ja tenho uma conta </p>
        </Link>
      </FormSingIn>
    </Container>
  );
}
