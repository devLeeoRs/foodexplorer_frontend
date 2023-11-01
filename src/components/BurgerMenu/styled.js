import styled from "styled-components";

export const Container = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 4;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.COLORS.DARK_400};
  justify-content: space-between;
  display: ${({ $open }) => ($open ? "flex" : "none")};
  flex-direction: column;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const Middle = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  .search {
    margin: 3.6rem 2.8rem;
    padding: 1.2rem 1.4rem;
    display: flex;
    background: ${({ theme }) => theme.COLORS.DARK_900};
    border-radius: 0.5rem;
    gap: 1.4rem;

    > svg {
      height: 2.4rem;
      width: 2.4rem;
    }

    > input {
      background: none;
      border: none;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      outline: none;
      font-weight: 400;
    }
  }

  .resultSearch {
    height: 48rem;
    overflow-y: auto;
    margin-top: 2rem;
    padding: 0.5rem 2.8rem;
  }

  .result {
    display: flex;
    align-items: center;
    padding: 1.2rem 1rem;
    background: ${({ theme }) => theme.COLORS.DARK_900};
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_700};
    gap: 2rem;
    font-family: "Poppins", sans-serif;
    cursor: pointer;

    .title {
      > p {
        font-size: 1.6rem;
      }
      span {
        color: ${({ theme }) => theme.COLORS.CAKE_200};
      }
    }

    span {
      font-weight: 500;
    }

    img {
      width: 5rem;
      height: 5rem;
    }

    &:hover {
      background: ${({ theme }) => theme.COLORS.DARK_600};
    }
  }

  .logout {
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
    padding: 3.6rem 2.8rem;

    a {
      font-family: Poppins;
      font-size: 24px;
      font-style: normal;
      font-weight: 300;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
`;

export const HeaderBurger = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.COLORS.DARK_700};
  height: 10.9rem;
  gap: 1rem;

  padding: 5.6rem 2.8rem 2.8rem 2.4rem;

  svg {
    height: 2.4rem;
    width: 2.4rem;
    cursor: pointer;
  }
  h2 {
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;
