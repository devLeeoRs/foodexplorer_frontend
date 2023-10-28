import { Body, Container, Main, BackButton } from "./styles";
import { PiCaretLeftBold } from "react-icons/pi";
import IngredientTag from "../../components/IngredientTag";
import AddButton from "../../components/AddButton";
import Stepper from "../../components/Stepper";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import dishImg from "../../assets/dish1.png";

export function Dish({ admin = false }) {
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
            <img src={dishImg} alt="" />
            <div className="dish-info">
              <h2>Salada Ravanello</h2>
              <p>
                Rabanetes, folhas verdes e molho agridoce salpicados com
                gergelim. O pão naan dá um toque especial.
              </p>
              <div className="ingredients">
                <IngredientTag>Batata</IngredientTag>
                <IngredientTag>Batata</IngredientTag>
                <IngredientTag>Batata</IngredientTag>
                <IngredientTag>Batata</IngredientTag>
                <IngredientTag>Batata</IngredientTag>
              </div>
              <div className="controls">
                {admin ? (
                  <AddButton title="Editar prato" />
                ) : (
                  <>
                    <Stepper />
                    <AddButton title="incluir ∙ R$ 25,00" />
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
