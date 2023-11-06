import React from "react";

const CookieBanner = () => {
  return (
    <div className="cookie-banner">
      <p>
        Este site utiliza cookies para melhorar a sua experiência. Ao continuar
        navegando, você concorda com o uso de cookies.
      </p>
      <button>Aceitar</button>
      <button>Recusar</button>
    </div>
  );
};

export default CookieBanner;
