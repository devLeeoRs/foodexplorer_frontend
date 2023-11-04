import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  height: 100vh;
  grid-template-rows: 10.4rem auto;
  grid-template-areas:
    "Header"
    "Main"
    "Footer";
`;

export const Main = styled.main`
  grid-area: Main;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
`;

export const Banner = styled.div`
  position: relative;
  margin: clamp(4.4rem, 11.429vw + 0.743rem, 17.2rem) auto 6.2rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: clamp(29.5rem, 82.589vw + 3.071rem, 122rem);
  height: clamp(12rem, 12.5vw + 8rem, 26rem);
  border-radius: 0.8rem;
  background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
  padding-right: clamp(0.8rem, 8.214vw - 1.829rem, 10rem);

  .title {
    width: clamp(21.5rem, 18.304vw + 15.643rem, 43rem);

    h1 {
      font-family: Poppins;
      font-size: clamp(1.8rem, 1.964vw + 1.171rem, 4rem);
      font-style: normal;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    P {
      font-size: clamp(1.2rem, 0.357vw + 1.086rem, 1.6rem);
      font-style: normal;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
  }

  img {
    width: clamp(19.1rem, 43.448vw + 0.634rem, 63.2rem);
    height: clamp(14.9rem, 22.946vw + 7.557rem, 40.6rem);
    position: absolute;
    bottom: 0px;
    left: -60px;
  }

  @media (max-width: 425px) {
    .title {
      text-align: right;
    }
  }
`;
