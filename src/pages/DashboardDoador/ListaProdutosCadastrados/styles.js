import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 56.5rem;

 .products {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
  }

  .registered-products {
    display: flex;
    flex-direction: column;
  }

  .registered-products__title {
    font-family: "Poppins", sans-serif;
    font-size: 3.6rem;
    text-align: center;

    margin-bottom: 3.6rem;
  }

  .mySwiper {
    width: 100%;
    max-width: 520px;
    min-height: 285px;
    margin-left: 4.5rem;
  }

  .swiper-flex{
    display: flex;
    gap: 2.4rem;
  }

  .btn-add-to-card {
    width: 100%;
    padding: 2rem;
    background: #4c956c;
    font-size: 1.6rem;
    color: #ffff;
    border-style: none;
    border-radius: 16px;
    cursor: pointer;
    margin-top: 2.9rem;
  }

  .icon-btn {
    width: 1.5rem;
    position: relative;
    top: 0.2rem;
  }
`