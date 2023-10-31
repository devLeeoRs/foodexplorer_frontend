import { Container } from "./styles";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { PiPencilSimpleLight } from "react-icons/pi";
import Stepper from "../Stepper";
import AddButton from "../AddButton";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useAlert } from "../../hooks/alertNotification";
import Header from "../Header";

function Cart({ title, description, price, photo, cartId }) {
  const { user, updateCart } = useAuth();
  const admin = user.role === "admin";
  const navigate = useNavigate();
  const alertNotification = useAlert();

  const [qtd, setQtd] = useState(0);

  function handleAddCart() {
    const convertNumber = parseFloat(price.replace(",", "."));
    const calculate = convertNumber * qtd;

    const order = {
      sku: cartId,
      quantity: qtd,
      title,
      totalPrice: calculate,
    };

    if (order.quantity === 0) {
      return alertNotification(`Adicione uma quantidade`, "error");
    }

    let orders = JSON.parse(localStorage.getItem("@food-explorer:cart")) || [];
    const checkOrderExist = orders.findIndex((item) => item.sku === order.sku);
    if (checkOrderExist > -1) {
      orders.splice(checkOrderExist, 1);
      alertNotification(`Carrinho Atualizado`, "success");
    } else {
      alertNotification(`${title} adicionado ao carrinho 🛒`, "success");
    }
    orders.push(order);
    localStorage.setItem("@food-explorer:cart", JSON.stringify(orders));
    updateCart();
  }

  function handleEditLink() {
    navigate(`/edit/${cartId}`);
  }
  function viewDish() {
    navigate(`/dish/${cartId}`);
  }

  return (
    <Container>
      {admin ? (
        <PiPencilSimpleLight onClick={handleEditLink} className="icon" />
      ) : (
        <AiOutlineHeart className="icon" />
      )}

      <AiOutlineEye className="view-icon" />

      <img itemProp="image" src={photo} alt="" />
      <h3 onClick={viewDish} itemProp="name">
        {title.slice(0, 15)} <MdKeyboardArrowRight />
      </h3>
      <p itemProp="description">{description.slice(0, 65).padEnd("...")} ...</p>
      <span itemProp="price">{`R$ ${price}`}</span>

      {!admin && (
        <div className="controls">
          <Stepper qtd={qtd} setQtd={setQtd} />

          <AddButton onClick={handleAddCart} title="incluir" />
        </div>
      )}
    </Container>
  );
}

export default Cart;
