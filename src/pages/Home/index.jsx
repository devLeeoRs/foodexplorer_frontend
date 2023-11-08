import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CartSlider from "../../components/CartSlider";
import { Container, Main, Banner } from "./styles";
import bannerImg from "../../assets/bannerImg.png";

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
        <CartSlider category="refeiçoes" title="Refeições" />
        <CartSlider category="sobremesas" title="Sobremesas" />
        <CartSlider category="bebidas" title="Bebidas" />
        <Footer />
      </Main>
    </Container>
  );
}
