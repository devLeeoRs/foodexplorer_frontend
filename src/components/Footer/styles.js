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

  img {
    width: clamp(1rem, 1.429vw + 0.543rem, 2.6rem);
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 1rem;

    h3 {
      font-size: clamp(1rem, 1.607vw + 0.486rem, 2.8rem);
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.LIGHT_700};
    }
  }

  p {
    font-size: clamp(1rem, 0.357vw + 0.886rem, 1.4rem);
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    text-align: end;
  }
`;
