import { Container, Icon } from "./styles";
import { AiOutlineHeart, AiOutlineEye, AiFillHeart } from "react-icons/ai";
import { PiPencilSimpleLight } from "react-icons/pi";
import Stepper from "../Stepper";
import AddButton from "../AddButton";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useAlert } from "../../hooks/alertNotification";
import { useCartUpdate } from "../../hooks/CartUpdate";

function Cart({ title, description, price, photo, cartId }) {
  const { user } = useAuth();
  const admin = user.role === "admin";
  const navigate = useNavigate();
  const addCart = useCartUpdate();

  const [qtd, setQtd] = useState(1);
  const [favorite, setFavorite] = useState(false);
  const [listFavorite, setListFavorite] = useState("");

  function handleFavorite() {
    const fav = {
      sku: cartId,
      title,
    };

    const favorites =
      JSON.parse(localStorage.getItem("@food-explorer:favorite")) || [];

    const checkFavExist = favorites.findIndex((item) => item.sku === fav.sku);

    if (checkFavExist > -1) {
      // Se já estiver nos favoritos, remove
      favorites.splice(checkFavExist, 1);
    } else {
      // Se não estiver nos favoritos, adiciona
      favorites.push(fav);
    }

    localStorage.setItem("@food-explorer:favorite", JSON.stringify(favorites));
    setFavorite(!favorite);
  }

  function handleAddCart() {
    addCart(qtd, cartId, title, price);
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
        <Icon $favorite={favorite}>
          <AiFillHeart className="icon" onClick={handleFavorite} />
        </Icon>
      )}

      <img itemProp="image" src={photo} alt="" />
      <h3 onClick={viewDish} itemProp="name">
        {title.slice(0, 15)} <MdKeyboardArrowRight />
      </h3>
      <p itemProp="description">{description.slice(0, 65).padEnd("...")} ...</p>
      <span className="price" itemProp="price">{`R$ ${price}`}</span>

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
