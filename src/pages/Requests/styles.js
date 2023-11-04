import styled from "styled-components";

export const Body = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 10.4rem auto 7.7rem;
  grid-template-areas:
    "Header"
    "Main"
    "Footer";
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  height: 100%;
  overflow-y: auto;
`;

export const Container = styled.div`
  grid-area: Main;
  overflow-y: auto;
  max-width: 112rem;
  width: 100%;
  margin: 0 2rem;
`;

export const Title = styled.div`
  display: flex;
  justify-content: start;
  background: none;
  border: none;
  font-family: Poppins;
  font-size: 3.2rem;
  font-style: normal;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  margin: 2.4rem 1rem;
`;

export const Table = styled.table`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
  border-radius: 1rem;
  width: 100%;

  .details {
    max-width: 60rem;
  }

  thead {
    border: 10px solid red;
  }

  td {
    padding: 21px 24px;
    border-right: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
    border-top: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
    font-weight: 400;

    &:last-child {
      border-right: none;
    }
  }

  th {
    padding: 21px 24px;
    border-right: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
    font-weight: 700;

    &:last-child {
      border-right: none;
    }
  }

  @media (max-width: 426px) {
    display: none;
  }
`;

export const CartOrder = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-size: 1.4rem;
  padding: 8px 20px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
  margin-bottom: 2rem;

  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.6rem;
  }
  .body {
    margin-bottom: 1.6rem;
  }

  @media (min-width: 426px) {
    display: none;
  }

  .statusMobile {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    svg {
      width: 0.8rem;
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
  }
`;

export const Status = styled.td`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.8rem;

  svg {
    width: 2.4rem;
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

  @media (max-width: 426px) {
    display: none;
  }
`;
