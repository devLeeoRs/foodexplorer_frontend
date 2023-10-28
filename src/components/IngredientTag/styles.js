import styled from "styled-components";

export const Container = styled.div`
  width: 9.8rem;
  height: 3.2rem;
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.COLORS.DARK_1000};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;
`;
