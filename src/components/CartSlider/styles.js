import styled from "styled-components";

export const Container = styled.div`
  margin: 1.6rem 1rem;

  .cards {
    width: 112rem;
    margin: 0 auto;
    cursor: grab;
    overflow: hidden;
    position: relative;
  }

  .inner {
    display: flex;
    gap: 0.8rem;
  }

  .blur-right {
    position: absolute;
    width: 22rem;
    height: 100%;
    top: 1px;
    right: -10px;
    filter: blur(5px);
    background: linear-gradient(90deg, rgba(0, 10, 15, 0.15) 0%, #000a0f 100%);
  }

  .blur-left {
    position: absolute;
    width: 22rem;
    height: 100%;
    top: 1px;
    left: -10px;
    filter: blur(5px);
    background: linear-gradient(-90deg, rgba(0, 10, 15, 0.27) 0%, #000a0f 100%);
  }

  @media (max-width: 728px) {
    .blur-left,
    .blur-right {
      display: none;
    }
  }
`;

export const TitleCategory = styled.h4`
  font-family: Poppins;
  font-size: clamp(1.8rem, 1.25vw + 1.4rem, 3.2rem);
  font-style: normal;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  margin: 2.3rem auto;
  cursor: text;
`;
