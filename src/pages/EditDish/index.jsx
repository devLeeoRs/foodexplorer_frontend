import { Body, Container, Main, BackButton, Form, Button } from "./styles";
import { NewIngredient } from "../../components/NewIngredient";
import { PiCaretLeftBold } from "react-icons/pi";
import { FiUpload } from "react-icons/FI";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export function EditDish({ admin = false }) {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return (
    <Body>
      <Header />
      <Main>
        <Container>
          <Link to="/">
            <BackButton onClick={handleBack}>
              <PiCaretLeftBold />
              Voltar
            </BackButton>
          </Link>

          <div className="title">
            <h2>Adicionar prato</h2>
          </div>
          <Form>
            <div className=" input-file">
              <label htmlFor="">Foto do Produto</label>
              <div className="input">
                <label id="photoinput">
                  <FiUpload />
                  Selecione imagem
                  <input id="dishfile" type="file" />
                </label>
              </div>
            </div>
            <div className="input-name">
              <label htmlFor="name">Nome</label>
              <div className="input">
                <input
                  id="name"
                  type="text"
                  placeholder="Ex.: Salada Ceasar"
                  className="input-pattern "
                />
              </div>
            </div>
            <div className="input-category">
              <label htmlFor="">Categoria</label>
              <select
                className="input"
                defaultValue="default"
                name=""
                id="category"
              >
                <option value="default">Selecione uma categoria</option>
                <option value="">Comida</option>
                <option value="">Bebidas</option>
                <option value="">Sopa</option>
              </select>
            </div>
            <div className="input-ingredients">
              <label htmlFor="">Ingredients</label>
              <div id="ingredients" className="input">
                <NewIngredient value="Banana" />
                <NewIngredient IsNew />
              </div>
            </div>
            <div className="input-price">
              <label htmlFor="price">Preço</label>
              <input
                id="price"
                type="text"
                placeholder="R$ 00,00"
                className="input"
              />
            </div>
            <div className="input-description">
              <label htmlFor="description">Descrição</label>
              <div className="input">
                <textarea
                  placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                  name=""
                  id="description"
                  rows="10"
                ></textarea>
              </div>
            </div>
            <div className="buttons">
              <Button $dark={true}>Excluir prato</Button>
              <Button>Salvar Alteraçoes</Button>
            </div>
          </Form>
        </Container>
      </Main>
      <Footer />
    </Body>
  );
}
