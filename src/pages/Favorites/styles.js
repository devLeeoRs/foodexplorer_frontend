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
  margin-left: 3rem;

  .favorite-area {
    gap: 4.8rem;
    display: flex;

    margin-top: 3.6rem;
    flex-wrap: wrap;
    overflow-y: auto;

    .favCart {
      display: flex;
      align-items: center;
      gap: 1.3rem;
      width: 23.1rem;

      p {
        font-family: Poppins;
        font-size: 2rem;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }

      button {
        font-size: 1.2rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.TOMATO_400};
        background: none;
        border: none;
        text-align: start;
      }

      img {
        width: 10rem;
        height: 10rem;
        border-radius: 99px;
      }
    }

    @media (max-width: 768px) {
      justify-content: start;
      gap: 5rem;
      margin-bottom: 3rem;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: start;
  background: none;
  border: none;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  margin: 2.4rem 1rem;

  svg {
    width: 3.2rem;
    height: 3.2rem;
  }

  @media (max-width: 768px) {
    font-weight: 500;
  }
`;
