import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CartSlider from "../../components/CartSlider";
import Cart from "../../components/Cart";
import { Container, Main, Banner } from "./styles";
import bannerImg from "../../assets/bannerImg.png";
import { Link } from "react-router-dom";

export function Home() {
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
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
        </CartSlider>
        <CartSlider title="Sobremesas">
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
        </CartSlider>
        <Footer />
      </Main>
    </Container>
  );
}
