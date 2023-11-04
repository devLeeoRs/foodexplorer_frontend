import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: block;
  width: 175px;

  @media (max-width: 425px) {
    width: 100%;
  }

  .Pendente {
    fill: #ab222e;
  }
  .Preparando {
    fill: #fba94c;
  }
  .Entregue {
    fill: #04d361;
  }
`;

export const Select = styled.div`
  background: ${({ theme }) => theme.COLORS.DARK_900};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 0.8rem;
  width: 100%;
  height: 48px;
  padding: 16px;
  cursor: pointer;

  svg {
    width: 2.4rem;
    height: 2.4rem;
    transform: ${({ $open }) => $open && "rotate(180deg)"};
    transition: 0.3s ease;
  }

  #iconStatus {
    width: 0.8rem;
  }

  @media (max-width: 425px) {
    justify-content: space-between;
  }
`;

export const SelectOption = styled.div`
  top: 48px;
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;
  transition: 0.3s ease;

  .option {
    cursor: pointer;
    display: ${({ $open }) => ($open ? "flex" : "none")};
    align-items: center;
    width: 175px;
    height: 48px;
    background: ${({ theme }) => theme.COLORS.DARK_900};
    padding: 16px;
    gap: 0.8rem;

    svg {
      width: 0.8rem;
    }

    &:last-child {
      border-radius: 0 0 0.8rem 0.8rem;
    }
    &:hover {
      background: ${({ theme }) => theme.COLORS.DARK_500};
    }
  }

  @media (max-width: 425px) {
    width: 100%;

    .option {
      width: 100%;
    }
  }
`;
