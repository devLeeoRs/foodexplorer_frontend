import styled from "styled-components";

export const Container = styled.button`
  height: 4.2rem;
  display: flex;
  padding: 1.2rem 2.4rem;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: ${({ theme }) => theme.COLORS.TOMATO_100};
  border: none;
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  user-select: none;

  &::hover {
    background: ${({ theme }) => theme.COLORS.TOMATO_200};
  }

  &[disabled] {
    background: ${({ theme }) => theme.COLORS.TOMATO_400};
  }
`;
