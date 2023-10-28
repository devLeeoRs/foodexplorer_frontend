import {
  Container,
  MyOrderButton,
  MobileOrderButton,
  HeaderFood,
} from "./styles";
import iconLogo from "../../assets/logoicon.svg";
import { BsSearch } from "react-icons/bs";
import { PiSignOut, PiReceipt } from "react-icons/pi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

function Header() {
  const { signOut, user } = useAuth();

  const admin = user.role === "admin";

  return (
    <HeaderFood>
      <Container>
        <a className="menuBurger" href="">
          <HiOutlineMenuAlt3 />
        </a>
        <Link to="/">
          <div className="logo">
            <img src={iconLogo} alt="" />
            <div className="title">
              <h1>food explorer</h1>
              {admin && <span>admin</span>}
            </div>
          </div>
        </Link>

        <div className="input">
          <BsSearch />
          <input type="text" placeholder="Busque por pratos ou ingredientes" />
        </div>

        {admin ? (
          <Link to="/create-dish">
            <MyOrderButton>Novo Prato</MyOrderButton>
          </Link>
        ) : (
          <Link>
            <MyOrderButton>
              <PiReceipt />
              Pedidos (0)
            </MyOrderButton>
          </Link>
        )}

        <a onClick={signOut} className="singOut" href="">
          <PiSignOut />
        </a>

        {!admin && (
          <MobileOrderButton>
            <PiReceipt />
            <span>0</span>
          </MobileOrderButton>
        )}
      </Container>
    </HeaderFood>
  );
}

export default Header;
