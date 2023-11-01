import styled from "styled-components";

export const HeaderFood = styled.header`
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.COLORS.DARK_600};
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  gap: 3.2rem;
  align-items: center;
  justify-content: ${({ $favorite }) => ($favorite ? "none" : "space-between")};
  width: 100%;
  max-width: 112rem;
  height: 10.4rem;
  margin: 0 1rem;
  grid-area: Header;

  p {
    display: ${({ $favorite }) => !$favorite && "none"};
    font-size: 21.163px;
    font-style: normal;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
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
    cursor: pointer;
  }

  .menuBurger {
    display: none;
  }

  @media (max-width: 768px) {
    height: 11.4rem;
    justify-content: ${({ $favorite }) =>
      $favorite ? "none" : "space-between"};
    padding: 0 2.8rem;

    .logo {
      display: ${({ $favorite }) => $favorite && "none"};
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
    display: ${({ $favorite }) => ($favorite ? "none" : "flex")};
  }
`;

export const MenuOpen = styled.aside`
  display: ${({ $favorite }) => ($favorite ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  height: calc(100vh - 10.4rem);
  background: red;
  top: 10.4rem;
  left: 0;
  z-index: 10;
  background: ${({ theme }) => theme.COLORS.DARK_400};

  .middle {
    padding: 3.6rem 2.8rem 0 3.6rem;
    overflow-y: auto;

    .search {
      display: flex;
      width: 100%;
      height: 4.8rem;
      background: red;
      padding: 12px 14px;
      align-items: center;
      gap: 14px;
      border-radius: 5px;
      background: ${({ theme }) => theme.COLORS.DARK_900};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      svg {
        width: 2.4rem;
        height: 2.4rem;
      }

      > input {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 1.6rem;
        width: 100%;
        background: none;
        border: none;
        outline: none;
      }
    }

    button {
      display: block;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-family: Poppins;
      font-size: 24px;
      font-style: normal;
      font-weight: 300;
      border-bottom: 1px solid var(--dark-dark-1000, #192227);
      line-height: 140%;
      padding: 1rem;
      margin-top: 3.6rem;
      background: none;
      border: none;
    }
  }

  .search-result {
    max-height: 40rem;
    overflow-y: auto;
  }

  .result {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: ${({ theme }) => theme.COLORS.DARK_500};
    padding: 1rem;
    gap: 1rem;

    .image-title {
      display: flex;
      align-items: center;
      gap: 2rem;

      p {
        font-size: 1.4rem;
        font-weight: 500;
      }
    }

    span {
      color: ${({ theme }) => theme.COLORS.CAKE_200};
      font-weight: bold;
    }

    img {
      width: 4rem;
      height: 4rem;
    }

    &:last-child {
      border-radius: 0 0 0.8rem 0.8rem;
    }

    &:hover {
      background: ${({ theme }) => theme.COLORS.DARK_800};
    }
  }

  @media (min-width: 769px) {
    display: none;
  }
`;
