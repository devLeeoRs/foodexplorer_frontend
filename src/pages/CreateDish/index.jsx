import { Body, Container, Main, BackButton, Form, Button } from "./styles";
import { NewIngredient } from "../../components/NewIngredient";
import { PiCaretLeftBold } from "react-icons/pi";
import { FiUpload } from "react-icons/FI";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function CreateDish() {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredients] = useState("");

  function handleRegisterDish() {
    console.log(name, price, description, ingredients);
  }

  function handleAddIngredient() {
    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredients("");
  }
  function handleRemoveIngredient(remove) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== remove)
    );
  }

  return (
    <Body>
      <Header />
      <Main>
        <Container>
          <BackButton onClick={handleBack}>
            <PiCaretLeftBold />
            Voltar
          </BackButton>

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
                  onChange={(e) => setName(e.target.value)}
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
                <NewIngredient
                  IsNew
                  onClick={handleAddIngredient}
                  value={newIngredient}
                  onChange={(e) => setNewIngredients(e.target.value)}
                />
                {ingredients.map((ingredient, index) => (
                  <NewIngredient
                    onClick={() => handleRemoveIngredient(ingredient)}
                    value={ingredient}
                    key={index}
                  />
                ))}
              </div>
            </div>
            <div className="input-price">
              <label htmlFor="price">Preço</label>
              <input
                onChange={(e) => setPrice(e.target.value)}
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
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                  name=""
                  id="description"
                  rows="10"
                ></textarea>
              </div>
            </div>
            <div className="buttons">
              <Button type="button" onClick={handleRegisterDish}>
                Salvar Alteraçoes
              </Button>
            </div>
          </Form>
        </Container>
      </Main>
      <Footer />
    </Body>
  );
}
