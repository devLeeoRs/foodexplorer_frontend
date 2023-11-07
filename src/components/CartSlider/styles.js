import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto 2rem auto;
  max-width: 122rem;

  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }

  @media (max-width: 1024px) {
    margin-left: 1rem;

    .swiper-button-next:after,
    .swiper-button-prev:after {
      display: none;
    }
  }
`;

export const TitleCategory = styled.h4`
  font-family: Poppins;
  font-size: clamp(1.8rem, 1.25vw + 1.4rem, 3.2rem);
  font-style: normal;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  margin: 2.3rem auto;
  cursor: text;
`;
