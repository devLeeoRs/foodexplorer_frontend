import React from "react";

const CookieBanner = ({ accept, decline }) => {
  return (
    <div className="cookie-banner">
      <button onClick={accept}>Aceitar</button>
      <button onClick={decline}>Recusar</button>
    </div>
  );
};

export default CookieBanner;
