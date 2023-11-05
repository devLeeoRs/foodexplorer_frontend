import styled from "styled-components";

export const Body = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 10.4rem auto;
  grid-template-areas:
    "Header"
    "Main";
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  height: 100%;
  overflow-y: auto;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 2rem;

  img {
    width: 33.3rem;
    height: 55.3rem;
  }

  .message {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 60%;
    font-family: "Poppins", sans-serif;
    color: #e1e1e6;

    h2 {
      font-size: clamp(3rem, 1.111vw + 2.644rem, 4rem);
    }
    h1 {
      font-size: clamp(4rem, 2.222vw + 3.289rem, 6rem);
    }
  }

  @media (max-width: 425px) {
    flex-direction: column;
    align-items: center;
    padding: 1rem;

    .message {
      width: 100%;
    }

    img {
      width: 25.2rem;
      height: 45.2rem;
    }
  }
`;
