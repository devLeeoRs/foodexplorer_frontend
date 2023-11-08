import {
  Container,
  MyOrderButton,
  MobileOrderButton,
  HeaderFood,
  MenuOpen,
} from "./styles";
import { AiOutlineClose, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { PiSignOut, PiReceipt, PiClipboardText } from "react-icons/pi";
import { Link, useNavigate, useResolvedPath } from "react-router-dom";
import { useCartUpdate } from "../../hooks/cartUpdate";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import iconLogo from "../../assets/logoicon.svg";
import { SearchInput } from "../SearchInput";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../Footer";

function Header() {
  const { cartQtd, updateCart } = useCartUpdate();
  const { pathname } = useResolvedPath();
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  const admin = user.role === "admin";

  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  function handleGoToLink(link) {
    navigate(link);
  }

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  useEffect(() => {
    async function handleSearch() {
      const response = await api.get(`/dishes/search/${search}`);
      setResult(response.data);
    }

    if (search !== "") {
      handleSearch();
    }
  }, [search]);

  useEffect(() => {
    updateCart();
  }, []);

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
          {pathname !== "/pedidos" && (
            <button onClick={(e) => handleGoToLink("/pedidos")}>
              {admin ? "Pedidos Recebidos" : "Historico de pedidos"}
            </button>
          )}
          {pathname !== "/create-dish" && admin && (
            <button onClick={(e) => handleGoToLink("/create-dish")}>
              Novo prato
            </button>
          )}
          {pathname !== "/favoritos" && !admin && (
            <button onClick={(e) => handleGoToLink("/favoritos")}>
              Meus Favoritos
            </button>
          )}
          {pathname !== "/profile" && (
            <button onClick={(e) => handleGoToLink("/profile")}>Perfil</button>
          )}
          <button onClick={handleSignOut}>Sair</button>
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
              handleGoToLink("/create-dish");
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

        <div className="buttons-header">
          <div onClick={handleSignOut} className="singOut">
            <PiSignOut />
          </div>
          <div
            onClick={(e) => handleGoToLink("/profile")}
            className="userButton"
          >
            <AiOutlineUser />
          </div>
          <div onClick={(e) => handleGoToLink("/pedidos")}>
            <PiClipboardText />
          </div>
        </div>

        {!admin && (
          <MobileOrderButton $favorite={menuOpen}>
            <PiReceipt onClick={(e) => handleGoToLink("/checkout")} />
            <span>{cartQtd || 0}</span>
          </MobileOrderButton>
        )}
      </Container>
    </HeaderFood>
  );
}

export default Header;
