import Footer from "../Footer";
import { Container, Middle, HeaderBurger } from "./styled";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function BurgerMenu({ open, onclick }) {
  const navigate = useNavigate();
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState("");

  function handleToLink(link) {
    navigate(`/dish/${link}`);
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

  return (
    <Container $open={open}>
      <Middle>
        <HeaderBurger>
          <AiOutlineClose onClick={onclick} />
          <h2>Menu</h2>
        </HeaderBurger>
        <div className="search">
          <AiOutlineSearch />
          <input type="text" onChange={(e) => setSearch(e.target.value)} />
        </div>

        {search && (
          <div className="resultSearch">
            {result.map((dish) => (
              <div
                onClick={(e) => handleToLink(dish.id)}
                key={String(dish.id)}
                className="result"
              >
                <img
                  src={`${api.defaults.baseURL}/uploads/${dish.photo_url}`}
                  alt=""
                />
                <div className="title">
                  <p>{dish.name}</p>
                  <span>R$ {dish.price}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="logout">
          <a href="">Sair</a>
        </div>
      </Middle>
    </Container>
  );
}
