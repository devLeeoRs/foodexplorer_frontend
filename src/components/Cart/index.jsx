import { useCartUpdate } from "../../hooks/cartUpdate";
import { MdKeyboardArrowRight } from "react-icons/md";
import { PiPencilSimpleLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { useState, useEffect } from "react";
import { Container, Icon } from "./styles";
import { useAuth } from "../../hooks/auth";
import AddButton from "../AddButton";
import Stepper from "../Stepper";

function Cart({ title, description, price, photo, cartId }) {
  const { addCart } = useCartUpdate();
  const navigate = useNavigate();
  const { user } = useAuth();

  const admin = user.role === "admin";

  const [qtd, setQtd] = useState(1);
  const [favorite, setFavorite] = useState(false);

  function handleFavorite() {
    const fav = {
      sku: cartId,
      title,
      image: photo,
    };

    const favorites =
      JSON.parse(localStorage.getItem("@food-explorer:favorite")) || [];

    const checkFavExist = favorites.findIndex((item) => item.sku === fav.sku);

    if (checkFavExist > -1) {
      favorites.splice(checkFavExist, 1);
    } else {
      favorites.push(fav);
    }

    localStorage.setItem("@food-explorer:favorite", JSON.stringify(favorites));
    setFavorite(!favorite);
  }

  function handleAddCart() {
    addCart(qtd, cartId, title, price, photo);
  }

  function handleEditLink() {
    navigate(`/edit/${cartId}`);
  }

  function viewDish() {
    navigate(`/dish/${cartId}`);
  }

  useEffect(() => {
    function checkFavorite() {
      const data =
        JSON.parse(localStorage.getItem("@food-explorer:favorite")) || [];
      const check = data.some((item) => item.sku === cartId);

      if (check) {
        setFavorite(true);
      }
    }

    checkFavorite();
  }, []);

  return (
    <Container>
      {admin ? (
        <Icon>
          <PiPencilSimpleLight onClick={handleEditLink} className="icon" />
        </Icon>
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
