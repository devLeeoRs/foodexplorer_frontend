import {
  Body,
  Container,
  Main,
  Table,
  Title,
  Status,
  CartOrder,
} from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { BsCircleFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { SelectStatus } from "../../components/SelectStatus";

export function Requests() {
  const { user } = useAuth();

  const admin = user.role === "admin";

  const [orders, setOrders] = useState([]);

  const formatDate = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    const month = String(dateTime.getMonth() + 1).padStart(2, "0");
    const day = String(dateTime.getDate()).padStart(2, "0");
    const hours = String(dateTime.getHours()).padStart(2, "0");
    const minutes = String(dateTime.getMinutes()).padStart(2, "0");

    return `${day}/${month} às ${hours}:${minutes}`;
  };

  useEffect(() => {
    async function gerOrders() {
      const orders = await api.get("/orders");
      setOrders(orders.data);
    }
    async function getAllOrders() {
      const orders = await api.get("/orders/all");
      setOrders(orders.data);
    }

    if (admin) {
      getAllOrders();
    } else {
      gerOrders();
    }
  }, []);

  return (
    <Body>
      <Header />
      <Main>
        <Container>
          <Title>{admin ? "Pedidos" : "Historico de pedidos"}</Title>
          <Table>
            <thead className="headerTable">
              <tr>
                <th>Status</th>
                <th>Código</th>
                <th className="details">Detalhamento</th>
                <th>Data e Hora </th>
              </tr>
            </thead>
            <tbody>
              {orders &&
                orders.map((order) => (
                  <tr key={order.id}>
                    {!admin ? (
                      <Status>
                        <BsCircleFill className={order.status} />
                        {order.status}
                      </Status>
                    ) : (
                      <Status>
                        <SelectStatus
                          value={order.status}
                          order_id={order.id}
                        />
                      </Status>
                    )}
                    <td>0000{order.id}</td>
                    <td className="details">{order.details}</td>
                    <td>{formatDate(order.updated_at)}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
          {orders &&
            orders.map((order) => (
              <CartOrder key={order.id}>
                <div className="header">
                  <span>000{order.id}</span>
                  {!admin && (
                    <div className="statusMobile">
                      <BsCircleFill className={order.status} />
                      {order.status}
                    </div>
                  )}
                  <span>{formatDate(order.updated_at)}</span>
                </div>
                <div className="body">{order.details}</div>
                {admin && (
                  <SelectStatus value={order.status} order_id={order.id} />
                )}
              </CartOrder>
            ))}
        </Container>
      </Main>
      <Footer />
    </Body>
  );
}
