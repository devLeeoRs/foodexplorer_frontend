import { Body, Container, Main } from "./styles";
import Header from "../../components/Header";
import personagem from "../../assets/personagem3d.png";
import AddButton from "../../components/AddButton";
import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <Body>
      <Header />
      <Main>
        <Container>
          <div className="message">
            <h2>Ooops ...</h2>
            <h1>Pagina não encontrada !</h1>
            <p>
              Nossos chefs estão sempre criando delícias, mas parece que o prato
              que você estava procurando não está no cardápio hoje
            </p>
            <AddButton onClick={(e) => navigate("/")} title="< Voltar" />
          </div>
          <img src={personagem} alt="personagem 3d " />
        </Container>
      </Main>
    </Body>
  );
}
