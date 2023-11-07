import { Container } from "./styles";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useState } from "react";

function Stepper({ qtd, setQtd }) {
  function plus() {
    setQtd((prev) => prev + 1);
  }
  function minus() {
    if (qtd === 0) {
      return;
    }
    setQtd((prev) => prev - 1);
  }

  return (
    <Container>
      <button className="minus">
        <BiMinus onClick={minus} />
      </button>
      <span>{qtd < 10 ? `0${qtd}` : qtd}</span>
      <button>
        <BiPlus onClick={plus} />
      </button>
    </Container>
  );
}

export default Stepper;
