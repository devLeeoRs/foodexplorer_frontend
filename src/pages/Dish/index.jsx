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
import { useCartUpdate } from "../../hooks/cartUpdate";

export function Dish({ admin = false }) {
  const { addCart } = useCartUpdate();
  const navigate = useNavigate();
  const params = useParams();

  const [dish, setDish] = useState([]);
  const [qtd, setQtd] = useState(1);

  function handleAddCart() {
    addCart(qtd, params.id, dish.name, dish.price);
  }

  useEffect(() => {
    async function loadDish() {
      const response = await api.get(`dishes/dish/${params.id}`);
      setDish(response.data);
    }

    loadDish();
  }, []);

  function handleToBack() {
    navigate(-1);
  }

  return (
    <Body>
      <Header />
      {dish.id && (
        <Main>
          <Container>
            <BackButton onClick={handleToBack}>
              <PiCaretLeftBold />
              Voltar
            </BackButton>
            <div className="dish-area">
              <img
                src={`${api.defaults.baseURL}/uploads/${dish.photo_url}` || ""}
                alt=""
              />
              <div className="dish-info">
                <h2>{dish.name}</h2>
                <p>{dish.description}</p>
                <div className="ingredients">
                  {dish.ingredients &&
                    dish.ingredients.map((ingredient, index) => (
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
                        title={`incluir ∙ R$ ${dish.price}`}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          </Container>
        </Main>
      )}

      <Footer />
    </Body>
  );
}
