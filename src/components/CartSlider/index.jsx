import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Container, TitleCategory } from "./styles";
import { CartPreLoader } from "../CartPreLoader";

function CartSlider({ children, title, loading }) {
  const carts = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carts.current?.scrollWidth - carts.current?.offsetWidth);
  }, []);

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
          dragConstraints={{ right: 0, left: -width || -400 }}
          initial={{ x: 200 }}
          animate={{ x: 0 }}
        >
          {loading ? (
            <>
              <CartPreLoader />
              <CartPreLoader />
              <CartPreLoader />
              <CartPreLoader />
              <CartPreLoader />
            </>
          ) : (
            children
          )}
        </motion.div>
      </motion.div>
    </Container>
  );
}

export default CartSlider;
