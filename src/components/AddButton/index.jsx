import { Container } from "./styles";

function AddButton({ title, ...rest }) {
  return (
    <Container {...rest} type="button">
      {title}
    </Container>
  );
}

export default AddButton;
