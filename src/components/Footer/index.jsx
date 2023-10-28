import { Container, FooterFood } from "./styles";
import logoIcon from "../../assets/logoicon2.svg";
function Footer() {
  return (
    <FooterFood>
      <Container>
        <div className="logo">
          <img src={logoIcon} alt="food explorer logo" />
          <h3>food explorer</h3>
        </div>

        <p>© 2023 - Todos os direitos reservados.</p>
      </Container>
    </FooterFood>
  );
}

export default Footer;
