import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  }

  span {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    user-select: none;
  }
`;
