import styled from "styled-components";

export const Container = styled.div`
  min-width: 30.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  padding: 2.4rem;
  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};

  background-color: rgb(255, 255, 255);
  opacity: 0.1;
  transition: all 0.3s;

  #img,
  #title,
  #description,
  #price {
    background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0),
      rgba(255, 255, 255),
      rgba(0, 0, 0, 0)
    );
    background-color: rgb(179, 179, 179);
    animation: loopBackground 1s ease-in-out infinite;
    background-size: 100px 200%;
    background-repeat: no-repeat;
    border-radius: 0.8rem;
  }

  #img {
    width: 17.6rem;
    height: 17.6rem;
    border-radius: 99rem;
  }

  #title {
    height: 3.4rem;
    width: 100%;
  }
  #description {
    height: 4.4rem;
    width: 100%;
  }

  #price {
    width: 80%;
    height: 5.2rem;
  }

  @keyframes pulse {
    50% {
      opacity: 0.5;
    }
  }

  @keyframes loopBackground {
    0% {
      background-position: -100% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`;
