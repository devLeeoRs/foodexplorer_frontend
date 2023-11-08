import { Select, SelectOption, Container } from "./styles";
import { useAlert } from "../../hooks/alertNotification";
import { GoChevronDown } from "react-icons/go";
import { BsCircleFill } from "react-icons/bs";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useState } from "react";

export function SelectStatus({ value, order_id }) {
  const [open, setOpen] = useState(false);
  const [selectValue, setSelectValue] = useState(value);
  const alertNotification = useAlert();

  const orderId = order_id;

  async function selectOption(value) {
    setOpen(!open);
    setSelectValue(value);

    await api.put("/orders", {
      status: value,
      order_id: orderId,
    });

    if (value === "Entregue") {
      await api.put("/delivery", {
        status: "Pronto para entrega",
        order_id: orderId,
      });
      toast.info("Pedido liberado para Motoboy");
    } else {
      await api.put("/delivery", {
        status: "Aguardando Liberação",
        order_id: orderId,
      });
    }

    alertNotification(`Status atualizado para ${value}`, "success");
  }

  return (
    <Container>
      <Select onClick={(e) => setOpen(!open)} $open={open}>
        <BsCircleFill id="iconStatus" className={selectValue} />
        {selectValue} <GoChevronDown />
      </Select>
      <SelectOption $open={open}>
        <div onClick={(e) => selectOption("Pendente")} className="option">
          <BsCircleFill className="Pendente" /> Pendente
        </div>
        <div onClick={(e) => selectOption("Preparando")} className="option">
          <BsCircleFill className="Preparando" /> Preparando
        </div>
        <div onClick={(e) => selectOption("Entregue")} className="option">
          <BsCircleFill className="Entregue" /> Entregue
        </div>
      </SelectOption>
    </Container>
  );
}
