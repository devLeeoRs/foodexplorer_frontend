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
  display: flex;
  justify-content: center;
  height: 100%;
  overflow-y: auto;
`;

export const Container = styled.div`
  grid-area: Main;
  overflow-y: auto;
  max-width: 112rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 3rem;

  .myOrder {
    margin-top: 3.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: "Poppins", sans-serif;
    h2 {
      display: flex;
      align-items: center;
      font-size: 3.2rem;
      font-weight: 500;
      cursor: pointer;
    }

    .orders {
      margin-top: 3.2rem;
      height: 41.6rem;
      overflow-y: auto;
    }

    .order {
      display: flex;
      align-items: center;
      padding: 1.6rem 0;
      gap: 1.3rem;
      img {
        width: 7.2rem;
        height: 7.2rem;
        border-radius: 99.9rem;
      }
      .title {
        display: flex;
        align-items: center;
        font-size: 2rem;
        font-weight: 500;
        gap: 1rem;

        span {
          font-size: 1.2rem;
          font-family: "Roboto", sans-serif;
        }
      }

      button {
        font-family: Roboto;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 400;
        background: none;
        border: none;
        color: ${({ theme }) => theme.COLORS.TOMATO_400};
      }
    }

    h4 {
      margin-top: 1.8rem;
      font-size: 2rem;
      font-style: normal;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
  }

  .payment {
    margin-top: 3.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: "Poppins", sans-serif;

    h2 {
      font-size: 3.2rem;
      font-weight: 500;
    }
    .payment-container {
      margin-top: 3.2rem;
      height: 44.5rem;
      width: 53rem;
    }

    .paymentOptions {
      display: flex;

      .option {
        display: flex;
        width: 100%;
        height: 8.1rem;
        padding: 1.2rem 1.4rem;
        justify-content: center;
        align-items: center;
        gap: 0.8rem;
        background: ${({ theme }) => theme.COLORS.DARK_500};
        cursor: pointer;

        svg {
          width: 2.4rem;
          height: 2.4rem;
        }
        &:hover {
          background: ${({ theme }) => theme.COLORS.DARK_800};
        }
      }

      .option.credit {
        border-radius: 0rem 0.8rem 0rem 0rem;
        border-top: 0.1rem solid ${({ theme }) => theme.COLORS.LIGHT_600};
        border-right: 0.1rem solid ${({ theme }) => theme.COLORS.LIGHT_600};
        border-left: 0.1rem solid ${({ theme }) => theme.COLORS.LIGHT_600};
      }

      .option.pix {
        border-radius: 0.8rem 0rem 0rem 0rem;
        border-top: 0.1rem solid ${({ theme }) => theme.COLORS.LIGHT_600};
        border-left: 0.1rem solid ${({ theme }) => theme.COLORS.LIGHT_600};
      }
    }
  }

  .paymentArea {
    border-radius: 0rem 0rem 0.8rem 0.8rem;
    border: 0.1rem solid ${({ theme }) => theme.COLORS.LIGHT_600};
    width: 100%;

    form {
      width: 100%;
    }

    .payment-pix {
      display: flex;
      justify-content: center;
      padding: 4.7rem 13rem;
    }
    .payment-credit {
      display: none;
      justify-content: center;
      padding: 5.9rem 9.1rem 4.8rem 9.1rem;
      height: 100%;

      .divide {
        display: flex;
        gap: 1.7rem;
      }

      .input-label {
        display: flex;
        flex-direction: column;

        input {
          margin-top: 0.8rem;
          margin-bottom: 3.7rem;
          width: 100%;
          height: 48px;
          padding: 12px 14px;
          border-radius: 5px;
          border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
          background: none;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          color: ${({ theme }) => theme.COLORS.LIGHT_100};

          &::-webkit-input-placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
          }
        }
      }
    }

    button {
      width: 100%;
      display: flex;
      padding: 12px 32px;
      justify-content: center;
      align-items: center;
      gap: 0.8rem;
      border-radius: 5px;
      border: none;
      background: ${({ theme }) => theme.COLORS.TOMATO_100};
      font-family: Poppins;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      text-align: center;

      svg {
        width: 3.2rem;
        height: 3.2rem;
      }
    }

    .pending-payment {
      display: none;
      flex-direction: column;
      justify-content: center;
      gap: 3.7rem;
      align-items: center;
      padding: 59px 91px;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};

      svg {
        width: 128px;
        height: 128px;
      }
    }
  }

  @media (max-width: 768px) {
    .payment {
      display: flex;
      flex-direction: column;
    }
    .payment-container {
      width: initial;
    }
    .payment-pix {
      padding: clamp(1rem, 4.111vw - 0.316rem, 4.7rem);
    }
    .myOrder {
      display: none;
    }
    .myOrder {
      width: 100%;
    }
  }
`;
