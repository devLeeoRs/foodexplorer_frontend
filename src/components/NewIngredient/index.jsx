import { Container } from "./styles";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

export function NewIngredient({ IsNew = false, value, onClick, ...rest }) {
  return (
    <Container $isnew={IsNew}>
      <input
        type="text"
        value={value}
        placeholder="adicionar"
        size={value ? value.length : 10}
        disabled={!IsNew}
        {...rest}
      />
      <button
        type="button"
        onClick={onClick}
        className={IsNew ? "button-add" : "button-delete"}
      >
        {IsNew ? <AiOutlinePlus /> : <AiOutlineClose />}
      </button>
    </Container>
  );
}
