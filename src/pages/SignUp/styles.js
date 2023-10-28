import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  max-width: 144rem;
  align-items: center;
  justify-content: space-around;
  margin: auto;

  .logo-intro {
    display: flex;
    align-items: center;
    gap: 2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: clamp(1.875rem, 0.804vw + 1.66rem, 2.625rem);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    margin: auto;
  }
`;

export const FormSingIn = styled.form`
  border-radius: 1.6rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: ${({ theme }) => theme.COLORS.DARK_700};
  width: min(50%, 47.6rem);
  padding: 6.4rem;

  h2 {
    font-size: 3.2rem;
    font-family: "Poppins", sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-weight: 500;
    text-align: center;
  }

  label {
    font-size: 1.6rem;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    margin-top: 3.2rem;
  }

  input {
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    padding: 1.2rem 1.4rem;
    background: ${({ theme }) => theme.COLORS.DARK_900};
    border: none;
    border-radius: 0.5rem;
    margin-top: 0.8rem;
    outline: none;
  }

  button {
    font-family: "Poppins", sans-serif;
    font-size: 1.4rem;
    font-weight: 500;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: ${({ theme }) => theme.COLORS.TOMATO_100};
    border: none;
    border-radius: 0.5rem;
    padding: 1.2rem 3.2rem;
    margin-top: 3.2rem;
  }

  p {
    font-family: Poppins;
    font-size: 1.4rem;
    font-style: normal;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    text-align: center;
    margin-top: 3.2rem;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-top: 7rem;
    max-width: 60rem;
    width: 100%;
  }

  @media (max-width: 425px) {
    background: none;
    padding: 0 clamp(1rem, 25vw - 7rem, 4.7rem);
    margin-top: 7rem;
    width: 100%;

    h2 {
      display: none;
    }

    input {
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      border: none;
    }
  }
`;
