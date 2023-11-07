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
  grid-area: Main;
  display: flex;
  justify-content: center;
  height: 100%;
  overflow-y: auto;
`;

export const Container = styled.div`
  max-width: 112rem;
  margin-top: 7rem;
  width: 100%;
  display: grid;
  gap: 2rem;
  grid-template-rows: 26.7rem 32rem;
  grid-template-columns: 36.4rem auto;
  grid-template-areas:
    "user details"
    "user address ";

  @media (max-width: 1024px) {
    grid-template-rows: repeat(2, 1fr);
    padding: 0 1rem;

    grid-template-areas:
      "user details"
      "address address ";
  }
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    display: flex;
  }

  @media (max-width: 425px) {
    margin-top: 5rem;
    flex-direction: column;
  }
`;

export const UserProfile = styled.div`
  position: relative;
  grid-area: user;
  max-width: 36.4rem;
  display: ${({ $stage }) => ($stage === 1 || $stage === 2 ? "none" : "flex")};
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
  padding: 3rem;
  gap: 1.6rem;

  .input-file {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5rem;
    height: 5rem;
    background: ${({ theme }) => theme.COLORS.DARK_800};
    border-radius: 99px;
    top: -1rem;
    right: 1rem;

    svg {
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    input {
      display: none;
    }
  }

  .image-avatar {
    position: relative;
    margin-top: 2.5rem;
    img {
      width: 20rem;
      height: 20rem;
      border-radius: 99px;
    }
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 1rem;
  }
`;
export const UserDetails = styled.div`
  grid-area: details;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
  padding: 2rem;

  h2 {
    color: #e1e1e6;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    margin-bottom: 1.6rem;
  }

  .divide-2 {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 2.3rem;
  }

  @media (max-width: 1024px) {
    .divide-2 {
      flex-wrap: wrap;
    }

    height: 100%;
  }

  @media (max-width: 768px) {
    display: ${({ $stage }) =>
      $stage === 0 || $stage === 2 ? "none" : "block"};
  }

  @media (max-width: 425px) {
    margin-bottom: 1rem;
    display: ${({ $stage }) =>
      $stage === 0 || $stage === 2 ? "none" : "block"};
  }
`;
export const UserAddress = styled.div`
  grid-area: address;
  border-radius: 8px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
  padding: 2rem;

  h2 {
    color: #e1e1e6;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    margin-bottom: 1.6rem;
  }

  .divide-2 {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 2.3rem;

    #address-number {
      width: 20rem;
    }
  }

  .divide-3 {
    display: flex;
    gap: 1.6rem;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: 1.6rem;
    gap: 1.6rem;
  }

  @media (max-width: 1024px) {
    .divide-3 {
      flex-wrap: wrap;
    }
  }

  @media (max-width: 768px) {
    display: ${({ $stage }) =>
      $stage === 0 || $stage === 1 ? "none" : "block"};
    .buttons {
      justify-content: space-between;
    }
  }

  @media (max-width: 425px) {
    .divide-2 {
      flex-wrap: wrap;
    }
  }
`;

export const InputLabel = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;

  input {
    padding: 12px 14px;
    border-radius: 8px;
    height: 48px;
    background: ${({ theme }) => theme.COLORS.DARK_800};
    border: none;
    outline: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`;

export const MenuControls = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  font-family: "Poppins";
  font-size: 1.8rem;
  justify-content: space-between;
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;
