import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Container, TitleCategory } from "./styles";

function CartSlider({ children, title }) {
  const carts = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carts.current?.scrollWidth - carts.current?.offsetWidth);
  });

  return (
    <Container>
      <motion.div
        whileTap={{ cursor: "grabbing" }}
        ref={carts}
        className="cards"
      >
        <TitleCategory>{title}</TitleCategory>
        <motion.div
          className="inner"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {children}
        </motion.div>
      </motion.div>
    </Container>
  );
}

export default CartSlider;
