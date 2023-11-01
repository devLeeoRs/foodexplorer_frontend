import styled from "styled-components";

export const HeaderFood = styled.header`
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.COLORS.DARK_600};
`;

export const Container = styled.div`
  display: flex;
  gap: 3.2rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 112rem;
  height: 10.4rem;
  margin: 0 1rem;
  grid-area: Header;

  .menuBurger {
    display: none;
    background: none;
    border: none;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: end;

    h1 {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: clamp(1.5rem, 0.804vw + 1.243rem, 2.4rem);
      font-weight: 700;
    }
    span {
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.CAKE_200};
    }
  }

  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    width: 3.2rem;
    height: 3.2rem;
  }

  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 0 2.8rem;

    .logo {
      img {
        width: 2.4rem;
        height: 2.4rem;
      }
    }

    .title {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.8rem;
    }

    .singOut {
      display: none;
    }

    .menuBurger {
      display: block;
    }
  }
`;

export const MyOrderButton = styled.button`
  width: 21.6rem;
  height: 5.6rem;
  display: flex;
  padding: 1.2rem 3.2rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  border: none;

  > svg {
    width: 3.2rem;
    height: 3.2rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileOrderButton = styled.div`
  display: none;
  position: relative;

  span {
    position: absolute;
    top: -0.5rem;
    left: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    background: ${({ theme }) => theme.COLORS.TOMATO_100};
    border-radius: 9.9rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: "Poppins", sans-serif;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;
