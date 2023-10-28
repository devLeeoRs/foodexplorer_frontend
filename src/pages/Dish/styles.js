import styled from "styled-components";

export const Body = styled.body`
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
`;

export const Container = styled.div`
  grid-area: Main;
  max-width: 112rem;
  display: flex;
  flex-direction: column;

  .dish-area {
    gap: 4.7rem;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  img {
    width: clamp(26.4rem, 11.25vw + 22.8rem, 39rem);
    height: clamp(26.4rem, 11.25vw + 22.8rem, 39rem);
  }

  .dish-info {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    h2 {
      font-family: Poppins;
      font-size: clamp(2.7rem, 1.161vw + 2.329rem, 4rem);
      font-style: normal;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    p {
      max-width: 66.7rem;
      font-family: Poppins;
      font-size: clamp(1.6rem, 0.714vw + 1.371rem, 2.4rem);
      font-style: normal;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    .ingredients {
      display: flex;
      flex-wrap: wrap;
      gap: 1.2rem;
    }

    .controls {
      display: flex;
      gap: 3.3rem;
    }
  }

  @media (max-width: 768px) {
    .dish-area {
      flex-direction: column;
      align-items: center;
      margin-bottom: 5.4rem;
    }
    .dish-info {
      margin: 0 5.6rem;
      align-items: center;
    }

    .ingredients {
      justify-content: center;
      gap: 2.4rem;
    }
  }
`;

export const BackButton = styled.button`
  display: flex;
  justify-content: center;
  max-width: 9.4rem;
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
