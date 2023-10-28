import { Container } from "./styles";
import { AiOutlineHeart } from "react-icons/ai";
import { PiPencilSimpleLight } from "react-icons/pi";
import Stepper from "../Stepper";
import AddButton from "../AddButton";
import dishPhoto from "../../assets/image 1.png";
import { useAuth } from "../../hooks/auth";

function Cart() {
  const { user } = useAuth();
  const admin = user.role === "admin";

  return (
    <Container>
      {admin ? (
        <PiPencilSimpleLight className="icon" />
      ) : (
        <AiOutlineHeart className="icon" />
      )}

      <img itemProp="image" src={dishPhoto} alt="" />
      <h3 itemProp="name">Torradas de Parma</h3>
      <p itemProp="description">
        Presunto de parma e rúcula em um pão com fermentação natural.
      </p>
      <span itemProp="price">R$ 25,97</span>

      {!admin && (
        <div className="controls">
          <Stepper />
          <AddButton title="incluir" />
        </div>
      )}
    </Container>
  );
}

export default Cart;
