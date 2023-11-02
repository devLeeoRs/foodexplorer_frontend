import {
  Container,
  MyOrderButton,
  MobileOrderButton,
  HeaderFood,
  MenuOpen,
} from "./styles";
import iconLogo from "../../assets/logoicon.svg";
import { PiSignOut, PiReceipt } from "react-icons/pi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useEffect, useRef } from "react";
import { SearchInput } from "../SearchInput";
import { useState } from "react";
import Footer from "../Footer";
import { api } from "../../services/api";

function Header() {
  const { signOut, user, cartQtd, updateCart } = useAuth();
  const admin = user.role === "admin";
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  function handleGoToLink(link) {
    navigate(link);
  }

  useEffect(() => {
    updateCart();
  }, []);

  useEffect(() => {
    async function handleSearch() {
      const response = await api.get(`/dishes/search/${search}`);
      setResult(response.data);
    }

    if (search !== "") {
      handleSearch();
    }
  }, [search]);

  return (
    <HeaderFood>
      <MenuOpen $favorite={menuOpen}>
        <div className="middle">
          <div className="search">
            <AiOutlineSearch />
            <input
              type="text"
              placeholder="Pesquise por prato ou ingrediente"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="search-result">
            {search &&
              result.map((dish) => (
                <Link
                  to={`/dish/${dish.id}`}
                  key={dish.id}
                  className="result"
                  onClick={handleToggleMenu}
                >
                  <div className="image-title">
                    <img
                      src={`${api.defaults.baseURL}/uploads/${dish.photo_url}`}
                      alt=""
                    />
                    <p> {dish.name} </p>
                  </div>
                  <span>R$ {dish.price}</span>
                </Link>
              ))}
          </div>
          <button>Meus Favoritos</button>
          <button>Sair</button>
        </div>

        <Footer classNama="footerBurger" />
      </MenuOpen>
      <Container $favorite={menuOpen}>
        {menuOpen ? (
          <AiOutlineClose className="menuBurger" onClick={handleToggleMenu} />
        ) : (
          <HiOutlineMenuAlt3
            className="menuBurger"
            onClick={handleToggleMenu}
          />
        )}

        {menuOpen && <p>Menu</p>}

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
              handleGoToLink("/checkout");
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
          <MobileOrderButton $favorite={menuOpen}>
            <PiReceipt />
            <span>{cartQtd || 0}</span>
          </MobileOrderButton>
        )}
      </Container>
    </HeaderFood>
  );
}

export default Header;
