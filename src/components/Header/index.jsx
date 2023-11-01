import {
  Container,
  MyOrderButton,
  MobileOrderButton,
  HeaderFood,
} from "./styles";
import iconLogo from "../../assets/logoicon.svg";
import { PiSignOut, PiReceipt } from "react-icons/pi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useEffect, useRef } from "react";
import { SearchInput } from "../SearchInput";
import { BurgerMenu } from "../BurgerMenu";
import { useState } from "react";

function Header() {
  const { signOut, user, cartQtd, updateCart } = useAuth();
  const admin = user.role === "admin";
  const navigate = useNavigate;

  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    updateCart();
  }, []);

  function handleGoToLink(link) {
    navigate(link);
  }

  return (
    <HeaderFood>
      <BurgerMenu open={menuOpen} onclick={handleToggleMenu} />
      <Container>
        <button onClick={handleToggleMenu} className="menuBurger">
          <HiOutlineMenuAlt3 />
        </button>
        <Link to="/">
          <div className="logo">
            <img src={iconLogo} alt="" />
            <div className="title">
              <h1>food explorer</h1>
              {admin && <span>admin</span>}
            </div>
          </div>
        </Link>

        <SearchInput />

        {admin ? (
          <MyOrderButton
            onClick={(e) => {
              handleGoToLink("/newDish");
            }}
          >
            Novo Prato
          </MyOrderButton>
        ) : (
          <MyOrderButton
            onClick={(e) => {
              handleGoToLink("/dish/45");
            }}
          >
            <PiReceipt />
            {`Pedidos (${cartQtd || 0}) `}
          </MyOrderButton>
        )}

        <a onClick={signOut} className="singOut" href="">
          <PiSignOut />
        </a>

        {!admin && (
          <MobileOrderButton>
            <PiReceipt />
            <span>{cartQtd || 0}</span>
          </MobileOrderButton>
        )}
      </Container>
    </HeaderFood>
  );
}

export default Header;
