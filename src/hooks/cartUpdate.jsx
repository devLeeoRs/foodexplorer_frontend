import { createContext, useContext, useState } from "react";
import { useAlert } from "./alertNotification";

export const CartContext = createContext({});

function CartProvider({ children }) {
  const [cartQtd, setCartQtd] = useState(0);
  const alertNotification = useAlert();

  function updateCart() {
    const cartOrder =
      JSON.parse(localStorage.getItem("@food-explorer:cart")) || [];
    setCartQtd(cartOrder.length);
  }

  function addCart(qtd, cartId, title, price, image) {
    const convertNumber = parseFloat(price.replace(",", "."));
    const calculate = convertNumber * qtd;

    const order = {
      sku: cartId,
      quantity: qtd,
      title,
      totalPrice: calculate.toFixed(2),
      image,
    };

    if (order.quantity === 0) {
      return alertNotification(`Adicione uma quantidade`, "error");
    }

    let orders = JSON.parse(localStorage.getItem("@food-explorer:cart")) || [];
    const checkOrderExist = orders.findIndex((item) => item.sku === order.sku);
    if (checkOrderExist > -1) {
      orders.splice(checkOrderExist, 1);
      alertNotification(`Carrinho Atualizado`, "success");
    } else {
      alertNotification(`${title} adicionado ao carrinho 🛒`, "success");
    }
    orders.push(order);
    localStorage.setItem("@food-explorer:cart", JSON.stringify(orders));
    updateCart();
  }

  return (
    <CartContext.Provider value={{ cartQtd, addCart, updateCart }}>
      {children}
    </CartContext.Provider>
  );
}

function useCartUpdate() {
  const context = useContext(CartContext);
  return context;
}

export { CartProvider, useCartUpdate };
