import { Body, Container, Main, BackButton } from "./styles";
import { PiCaretLeftBold } from "react-icons/pi";
import IngredientTag from "../../components/IngredientTag";
import AddButton from "../../components/AddButton";
import Stepper from "../../components/Stepper";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useParams, useNavigate } from "react-router-dom";
import { useCartUpdate } from "../../hooks/CartUpdate";

export function Dish({ admin = false }) {
  const navigate = useNavigate();
  const params = useParams();
  const addCart = useCartUpdate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [image, setImage] = useState("");
  const [qtd, setQtd] = useState(1);

  function handleAddCart() {
    addCart(qtd, params.id, name, price);
  }

  useEffect(() => {
    async function loadDrinks() {
      const { data } = await api.get(`dishes/dish/${params.id}`);

      setName(data.name);
      setDescription(data.description);
      setPrice(data.price);
      setIngredients(data.ingredients);
      setImage(data.photo_url);
    }

    loadDrinks();
  }, [params]);

  function handleToBack() {
    navigate(-1);
  }

  return (
    <Body>
      <Header />
      <Main>
        <Container>
          <BackButton onClick={handleToBack}>
            <PiCaretLeftBold />
            Voltar
          </BackButton>
          <div className="dish-area">
            <img
              src={`${api.defaults.baseURL}/uploads/${image}` || ""}
              alt=""
            />
            <div className="dish-info">
              <h2>{name}</h2>
              <p>{description}</p>
              <div className="ingredients">
                {ingredients &&
                  ingredients.map((ingredient, index) => (
                    <IngredientTag key={String(index)}>
                      {ingredient}
                    </IngredientTag>
                  ))}
              </div>
              <div className="controls">
                {admin ? (
                  <AddButton title="Editar prato" />
                ) : (
                  <>
                    <Stepper qtd={qtd} setQtd={setQtd} />
                    <AddButton
                      onClick={handleAddCart}
                      title={`incluir ∙ R$ ${price}`}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </Container>
      </Main>
      <Footer />
    </Body>
  );
}
