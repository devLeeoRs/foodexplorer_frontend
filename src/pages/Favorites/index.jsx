import { Body, Container, Main, Title } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Favorite() {
  const navigate = useNavigate();

  const [favorite, setFavorite] = useState([]);

  function handleToBack() {
    navigate(-1);
  }

  function handleRemoveFavorite(id) {
    const indexFavorite = favorite.findIndex((item) => item.sku === id);

    if (indexFavorite > -1) {
      favorite.splice(indexFavorite, 1);
    }
    localStorage.setItem("@food-explorer:favorite", JSON.stringify(favorite));
  }

  useEffect(() => {
    function getFavs() {
      const favorites = JSON.parse(
        localStorage.getItem("@food-explorer:favorite")
      );
      setFavorite(favorites);
    }

    getFavs();
  }, []);

  return (
    <Body>
      <Header />
      <Main>
        <Container>
          <Title onClick={handleToBack}>Meus Favoritos</Title>
          <div className="favorite-area">
            {favorite &&
              favorite.map((fav) => (
                <div key={fav.sku} className="favCart">
                  <img src={fav.image} alt="" />
                  <div>
                    <p>{fav.title}</p>
                    <button onClick={(e) => handleRemoveFavorite(fav.sku)}>
                      Remover dos Favoritos
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </Container>
      </Main>
      <Footer />
    </Body>
  );
}
