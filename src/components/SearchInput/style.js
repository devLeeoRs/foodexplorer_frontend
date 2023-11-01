import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: min(30%, 58rem);
  background: ${({ theme }) => theme.COLORS.DARK_900};
  height: 4.8rem;
  border-radius: 0.5rem;
  padding: 1.2rem 1.4rem;
  display: flex;
  align-items: center;
  gap: 1.4rem;

  > input {
    width: min(100%, 35rem);
    background: none;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1.6rem;
    font-weight: 400;
  }

  svg {
    width: 2.4rem;
    height: 2.4rem;
  }

  .singOut {
    color: #fff;
    width: 1.4rem;
    height: 1.4rem;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ResultSearch = styled.div`
  display: none;
  width: 100%;
  max-height: 42rem;
  height: auto;
  overflow-y: auto;
  position: absolute;
  top: 5.3rem;
  z-index: 3;
  border-radius: 0 0 0.5rem 0.5rem;
  left: 0px;
  background: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  h5 {
    padding: 1.2rem;
  }

  .result {
    display: flex;
    align-items: center;
    padding: 1.2rem;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
    gap: 2rem;
    font-family: "Poppins", sans-serif;
    cursor: pointer;

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

  .result:last-child {
    border-bottom: none;
  }
`;
