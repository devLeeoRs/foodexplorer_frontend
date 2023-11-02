import { Body, Container, Main } from "./styles";
import { FiClock } from "react-icons/fi";
import { PiCaretLeftBold } from "react-icons/pi";
import { FaPix } from "react-icons/fa6";
import { BsCreditCard, BsCheckCircle } from "react-icons/bs";
import { PiReceipt } from "react-icons/pi";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import pixqrcode from "../../assets/pixqrcode.svg";
import { useAlert } from "../../hooks/alertNotification";

export function Payment({ admin = false }) {
  const navigate = useNavigate();
  const payPix = useRef();
  const payCredit = useRef();
  const pendingPay = useRef();
  const alertNotification = useAlert();

  function handleToBack() {
    navigate(-1);
  }

  const [orders, setOrders] = useState([]);
  const [totalOrder, setTotalOrder] = useState(0);
  const [cartNumber, setCartNumber] = useState("");
  const [validity, setValidity] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [step, setStep] = useState(0);

  function optionPayment(option) {
    if (option === "pix") {
      payCredit.current.style.display = "none";
      payPix.current.style.display = "flex";
    } else {
      payCredit.current.style.display = "flex";
      payPix.current.style.display = "none";
    }
  }

  function handleRemoveOrder(id) {
    const ordersUpdate = orders.filter((item) => item.sku !== id);
    setOrders(ordersUpdate);
    generateTotalOrder();
    localStorage.setItem("@food-explorer:cart", JSON.stringify(ordersUpdate));
  }

  function generateTotalOrder(data) {
    let total = 0;
    if (data) {
      data.forEach((order) => {
        total += parseFloat(order.totalPrice);
      });
    }
    setTotalOrder(total.toFixed(2));
  }

  function handleCartNumber(e) {
    let value = e.target.value.replace(/\s/g, "");
    value = value.replace(/\D/g, ""); //
    value = value.replace(/(\d{4})(?=\d)/g, "$1 ");

    setCartNumber(value);
  }

  function handleSendOrder() {
    if (!cartNumber || !validity || !securityCode) {
      return alertNotification("Preencha todos os dados", "error");
    }
    alertNotification("Realizando pagamento", "success");
    payCredit.current.style.display = "none";
    payPix.current.style.display = "none";
    pendingPay.current.style.display = "flex";
    setTimeout(() => {
      setStep(1);
      alertNotification("Pagamento realizado", "success");
    }, "5000");
    setTimeout(() => {
      alertNotification("Pedido enviado ", "success");
      navigate("/");

      localStorage.removeItem("@food-explorer:cart");
    }, "10000");
  }

  useEffect(() => {
    function getOrders() {
      const data =
        JSON.parse(localStorage.getItem("@food-explorer:cart")) || [];
      setOrders(data);
      generateTotalOrder(data);
    }

    getOrders();
  }, [totalOrder]);

  return (
    <Body>
      <Header />
      <Main>
        <Container>
          <div className="myOrder">
            <h2 onClick={handleToBack}>
              <PiCaretLeftBold />
              Meu Pedido
            </h2>
            <div className="orders">
              {orders &&
                orders.map((order) => (
                  <div key={order.sku} className="order">
                    <img src={order.image} alt="" />
                    <div className="info">
                      <div className="title">
                        <p>{`${order.quantity} x ${order.title}`}</p>
                        <span>R$ {order.totalPrice}</span>
                      </div>
                      <button onClick={(e) => handleRemoveOrder(order.sku)}>
                        Excluir
                      </button>
                    </div>
                  </div>
                ))}
            </div>
            <h4>Total: R$ {totalOrder}</h4>
          </div>
          <div className="payment">
            <h2> Pagamento </h2>
            <div className="payment-container">
              <div className="paymentOptions">
                <div
                  className="option pix"
                  onClick={(e) => optionPayment("pix")}
                >
                  <FaPix />
                  pix
                </div>
                <div
                  className="option credit"
                  onClick={(e) => optionPayment("credit")}
                >
                  <BsCreditCard />
                  Crédito
                </div>
              </div>
              <div className="paymentArea">
                <div ref={payPix} className="payment-pix">
                  <img src={pixqrcode} alt="" />
                </div>
                <div ref={payCredit} className="payment-credit">
                  <form action="">
                    <div className="input-label">
                      <label htmlFor="">Numero do Cartão</label>
                      <input
                        onChange={handleCartNumber}
                        value={cartNumber}
                        maxLength="19"
                        placeholder="0000 0000 0000 0000"
                        type="text"
                      />
                    </div>

                    <div className="divide">
                      <div className="input-label">
                        <label htmlFor="">Validade</label>
                        <input
                          onChange={(e) => setValidity(e.target.value)}
                          placeholder="04/25"
                          type="data"
                        />
                      </div>
                      <div className="input-label">
                        <label htmlFor="">CVC</label>
                        <input
                          onChange={(e) => setSecurityCode(e.target.value)}
                          placeholder="000"
                          type="number"
                          maxLength="3"
                        />
                      </div>
                    </div>
                    <button type="button" onClick={handleSendOrder}>
                      <PiReceipt /> Finalizar Pagamento
                    </button>
                  </form>
                </div>
                <div ref={pendingPay} className="pending-payment">
                  {step === 0 ? <FiClock /> : <BsCheckCircle />}
                  {step === 0 ? (
                    <h3>Aguardando pagamento no caixa</h3>
                  ) : (
                    <h3>Pedido Recebido !</h3>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Main>
      <Footer />
    </Body>
  );
}
