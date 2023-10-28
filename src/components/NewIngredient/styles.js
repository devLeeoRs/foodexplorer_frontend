import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1.6rem;
  border-radius: 0.8rem;
  gap: 0.8rem;
  background: ${({ theme, $isnew }) =>
    $isnew ? "none" : `${theme.COLORS.LIGHT_600}`};

  border: ${({ theme, $isnew }) =>
    $isnew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};

  button {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    height: 1.2rem;
    width: 1.2rem;
  }

  input {
    width: 100%;
    background: transparent;
    border: none;
    box-sizing: border-box;
    font-size: 1.6rem;
    font-weight: 400;
    outline: none;
    color: ${({ theme, $isnew }) =>
      $isnew ? `${theme.COLORS.LIGHT_300}` : `${theme.COLORS.LIGHT_100}`};
  }
`;
