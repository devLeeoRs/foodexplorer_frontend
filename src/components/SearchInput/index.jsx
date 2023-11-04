import { useEffect, useRef, useState } from "react";
import { Container, ResultSearch } from "./style";
import { BsSearch } from "react-icons/bs";
import { api } from "../../services/api";
import { useHref, useNavigate } from "react-router-dom";

export function SearchInput() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const resultDiv = useRef();

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
      resultDiv.current.style.display = "block";
    } else {
      resultDiv.current.style.display = "none";
    }
  }, [search]);

  return (
    <Container>
      <BsSearch />
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Busque por pratos ou ingredientes"
      />

      <ResultSearch ref={resultDiv}>
        <h5>Resultado da pesquisa :</h5>
        {search &&
          result.map((dish) => (
            <div
              key={dish.id}
              onClick={() => handleToLink(dish.id)}
              className="result"
            >
              <img
                src={`${api.defaults.baseURL}/uploads/${dish.photo_url}`}
                alt=""
              />
              <div className="title">
                <p className="nameDish">{dish.name.slice(0, 60)}</p>
                <span>R$ {dish.price}</span>
              </div>
            </div>
          ))}
      </ResultSearch>
    </Container>
  );
}
