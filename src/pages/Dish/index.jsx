import { Body, Container, Main, BackButton } from "./styles";
import { PiCaretLeftBold } from "react-icons/pi";
import IngredientTag from "../../components/IngredientTag";
import AddButton from "../../components/AddButton";
import Stepper from "../../components/Stepper";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";

export function Dish({ admin = false }) {
  const params = useParams();
  const [dish, setDish] = useState(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [image, setImage] = useState("");

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
  }, []);

  return (
    <Body>
      <Header />
      <Main>
        <Container>
          <BackButton>
            <PiCaretLeftBold />
            Voltar
          </BackButton>
          <div className="dish-area">
            <img src={`${api.defaults.baseURL}/uploads/${image}`} alt="" />
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
                    <Stepper />
                    <AddButton title={`incluir ∙ R$ ${price}`} />
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
