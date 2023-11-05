import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CartSlider from "../../components/CartSlider";
import Cart from "../../components/Cart";
import { Container, Main, Banner } from "./styles";
import bannerImg from "../../assets/bannerImg.png";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";

export function Home() {
  const params = useParams();
  const [meals, setMeals] = useState([]);
  const [toppings, setToppings] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getMeals() {
      const dish = await api.get("/dishes/refeiçoes");
      setMeals(dish.data);
    }
    async function getDesserts() {
      const dish = await api.get("/dishes/sobremesas");
      setToppings(dish.data);
    }

    async function loadDrinks() {
      const drinks = await api.get("/dishes/bebidas");
      setDrinks(drinks.data);
    }

    getMeals();
    getDesserts();
    loadDrinks();
  }, [params]);

  return (
    <Container>
      <Header />
      <Main>
        <Banner>
          <div className="title">
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados </p>
          </div>
          <img src={bannerImg} alt="" />
        </Banner>
        <CartSlider title="Refeições">
          {meals &&
            meals.map((dish) => (
              <Cart
                key={dish.id}
                cartId={dish.id}
                title={dish.name}
                description={dish.description}
                price={dish.price}
                photo={`${api.defaults.baseURL}/uploads/${dish.photo_url}`}
              />
            ))}
        </CartSlider>
        <CartSlider title="Sobremesas">
          {toppings &&
            toppings.map((dish) => (
              <Cart
                key={dish.id}
                cartId={dish.id}
                title={dish.name}
                description={dish.description}
                price={dish.price}
                photo={`${api.defaults.baseURL}/uploads/${dish.photo_url}`}
              />
            ))}
        </CartSlider>
        <CartSlider title="Bebidas">
          {drinks &&
            drinks.map((dish) => (
              <Cart
                key={dish.id}
                cartId={dish.id}
                title={dish.name}
                description={dish.description}
                price={dish.price}
                photo={`${api.defaults.baseURL}/uploads/${dish.photo_url}`}
              />
            ))}
        </CartSlider>
        <Footer />
      </Main>
    </Container>
  );
}
