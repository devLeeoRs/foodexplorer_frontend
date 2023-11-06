import React from "react";
import { Container } from "./styles";
import { LiaCookieBiteSolid } from "react-icons/lia";
import { AiOutlineClose } from "react-icons/ai";

const CookieBanner = ({ accept, decline }) => {
  return (
    <Container className="cookie-banner">
      <LiaCookieBiteSolid className="cookie-icon" />
      <p>
        Usamos cookies para melhorar sua experiência. Ao continuar, você aceita
        nosso uso de cookies.
      </p>
      <div className="buttons-cookie">
        <button onClick={accept}>Aceitar</button>
        <span onClick={decline}>
          <AiOutlineClose />
        </span>
      </div>
    </Container>
  );
};

export default CookieBanner;
