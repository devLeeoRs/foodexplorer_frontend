import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 1.8rem;
  justify-content: space-between;
  padding: 0 3.2rem;
  max-width: 677px;
  width: 100%;
  height: 111px;
  bottom: 2rem;
  border-radius: 2rem;
  filter: drop-shadow(0px 6px 23px rgba(20, 20, 43, 0.08));
  background: ${({ theme }) => theme.COLORS.LIGHT_300};
  animation: openCookie 0.5s ease-in;

  .cookie-icon {
    width: 15rem;
    height: 15rem;
    color: #6f6c90;
  }

  .cookie-mobile {
    display: none;
  }

  button {
    padding: 14px 22px 16px 22px;
    border-radius: 56px;
    background: #4a3aff;
    box-shadow: 0px 3px 12px 0px rgba(74, 58, 255, 0.18);
    border: none;
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }

  .buttons-cookie {
    display: flex;
    align-items: center;
    gap: 2.7rem;
  }

  .cookie-desk {
    font-family: "Poppins";
    color: #6f6c90;
    font-size: 1.4rem;
  }

  @keyframes openCookie {
    0% {
      bottom: -3rem;
    }
    50% {
      bottom: 5rem;
    }
    100% {
      bottom: 2rem;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
