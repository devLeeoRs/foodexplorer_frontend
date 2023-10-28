import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  min-width: 30.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  padding: 2.4rem;
  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};

  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  .icon {
    position: absolute;
    top: 1.6rem;
    right: 1.8rem;
    width: 2.4rem;
    height: 2.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    cursor: pointer;
  }

  img {
    width: 17.6rem;
    height: 17.6rem;
    pointer-events: none;
  }

  h3 {
    width: 100%;
    font-family: "Poppins", sans-serif;
    font-size: clamp(1.4rem, 0.985vw + 0.981rem, 2.4rem);
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    text-align: center;
  }

  p {
    font-weight: 400;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    text-align: center;
  }

  span {
    font-size: clamp(1.6rem, 1.576vw + 0.93rem, 3.2rem);
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  .controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
  }

  @media (max-width: 425px) {
    min-width: 21rem;

    img {
      width: 8.8rem;
      height: 8.8rem;
    }
    p {
      display: none;
    }
    .controls {
      flex-direction: column;
    }
  }
`;
