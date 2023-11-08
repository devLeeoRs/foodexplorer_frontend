import styled from "styled-components";

export const Body = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 10.4rem auto 7.7rem;
  grid-template-areas:
    "Header"
    "Main"
    "Footer";
`;

export const Main = styled.main`
  padding: 2.4rem 1rem;
  grid-area: Main;
  display: flex;
  flex-direction: column;

  height: 100%;
  overflow-y: auto;
`;

export const Container = styled.div`
  display: flex;
  max-width: 112rem;
  width: 100%;
  margin: auto;
  flex-direction: column;
  .title h2 {
    padding: 2.4rem 0 3.2rem 0;
    font-family: "Poppins", sans-serif;
    font-size: 32px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
`;

export const Form = styled.form`
  height: 100%;
  display: grid;
  grid-template-columns: 22.9rem 45.3rem 8rem 24.1rem;
  grid-template-rows: 8.3rem auto auto;
  grid-template-areas:
    "file name category category"
    "ingredient ingredient ingredient price"
    "description description photo photo"
    "button button button button ";
  gap: 3.2rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  input {
    background: transparent;
    border: none;
    font-size: 14px;
    font-weight: 400;
    outline: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
  .input {
    display: flex;
    align-items: center;
    width: 100%;
    height: 48px;
    padding: 16px;
    border-radius: 5px;
    margin-top: 1.6rem;
    background: ${({ theme }) => theme.COLORS.DARK_800};
  }
  .input-file {
    grid-area: file;
  }

  .input-file input {
    display: none;
  }
  .input-file .input {
    display: flex;
    align-items: center;
    justify-content: center;

    label {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      cursor: pointer;
      margin-bottom: 0;
    }
  }
  .input-name {
    grid-area: name;
  }

  .input-category {
    grid-area: category;
    select {
      border: none;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
  }
  .input-ingredients {
    grid-area: ingredient;

    .input {
      display: flex;
      height: auto;
      flex-wrap: wrap;
      align-items: center;
      padding: 0.2rem;
      width: 100%;
      gap: 0.8rem;
    }
  }

  .input-description {
    grid-area: description;

    textarea {
      outline: none;
      background: transparent;
      border: none;
      resize: none;
      width: 100%;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    .input {
      height: 20rem;
    }
  }

  .photo-preview {
    grid-area: photo;

    .input {
      height: 20rem;
      justify-content: center;
      overflow: hidden;

      img {
        height: 100%;
        aspect-ratio: 1/1;
        border-radius: 99px;
        object-fit: cover;
      }
    }
  }

  .buttons {
    grid-area: button;
    display: flex;
    justify-content: end;
    gap: 3.2rem;
  }

  @media (max-width: 1170px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "file name category "
      "ingredient ingredient price"
      "description description description"
      "photo photo photo"
      "button button button ";
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 425px) {
    .buttons {
      flex-direction: column;
      gap: 1rem;
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

  svg {
    width: 3.2rem;
    height: 3.2rem;
  }

  @media (max-width: 768px) {
    font-weight: 500;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  height: 4.8rem;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 5px;
  background: ${({ theme, $dark }) =>
    $dark ? theme.COLORS.DARK_800 : theme.COLORS.TOMATO_400};
  border: none;

  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`;
