import styled from "styled-components";

export const FooterFood = styled.footer`
  grid-area: Footer;
  display: flex;
  justify-content: center;
  height: 7.7rem;
  background: ${({ theme }) => theme.COLORS.DARK_600};
`;

export const Container = styled.div`
  grid-area: Footer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 122rem;
  width: 100%;
  user-select: none;
  bottom: 0px;
  margin: 0 2rem;

  .logo {
    display: flex;
    align-items: center;
    gap: 1rem;

    h3 {
      font-size: clamp(1.8rem, 0.893vw + 1.514rem, 2.8rem);
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.LIGHT_700};
    }
  }

  p {
    font-size: clamp(1.2rem, 0.179vw + 1.143rem, 1.4rem);
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    text-align: end;
  }
`;
