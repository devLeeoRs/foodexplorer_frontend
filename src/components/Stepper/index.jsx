import { Container } from "./styles";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useState } from "react";

function Stepper() {
  const [qtd, setQtd] = useState(0);

  function plus(e) {
    e.stopPropagation();
    setQtd(qtd + 1);
  }
  function minus(e) {
    e.stopPropagation();
    if (qtd === 0) {
      return;
    }
    setQtd(qtd - 1);
  }

  return (
    <Container>
      <button className="minus">
        <BiMinus onMouseDown={minus} />
      </button>
      <span>{qtd}</span>
      <button>
        <BiPlus onMouseDown={plus} />
      </button>
    </Container>
  );
}

export default Stepper;
