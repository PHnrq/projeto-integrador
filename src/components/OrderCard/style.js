import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  .swiper-flex{
    display: flex;
    justify-content: center;
    gap: 2.4rem;
  }

  
  .order__ong-name {
    font-family: "Poppins", sans-serif;
    font-size: 2rem;
    font-weight: 500;

    color: #000000;

    margin: .8rem 0;
  }

  .order__date {
    width: 100%;
    margin-bottom: .6rem;

    display: flex;
    justify-content: space-between;
    gap: .6rem;

    font-size: 1.6rem;
    letter-spacing: 0.004em;

    color: #000000;
  }

  @media screen and (max-width: 375px) {
    .order__date__number {
      margin-left: -3rem;
    }
    .mySwiper-sm {
      max-width: 30rem;
  }
  }
`