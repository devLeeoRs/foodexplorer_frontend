import { useAlert } from "../hooks/alertNotification";
import { useAuth } from "./auth";

export function useCartUpdate() {
  const alertNotification = useAlert();
  const { updateCart } = useAuth();

  function addCart(qtd, cartId, title, price, image) {
    const convertNumber = parseFloat(price.replace(",", "."));
    const calculate = convertNumber * qtd;

    const order = {
      sku: cartId,
      quantity: qtd,
      title,
      totalPrice: calculate,
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

  return addCart;
}
