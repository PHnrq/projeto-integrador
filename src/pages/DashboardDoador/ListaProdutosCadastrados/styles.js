import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 56.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  

 .products {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .registered-products {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
  }

  .swiper-flex{
    display: flex;
    gap: 2.4rem;
    justify-content: center;
    align-items: center;
  }

  .card-wrapper{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn-add-to-card {
    width: 95%;
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
  @media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
    align-items: center;
    .registered-products__title {
      font-size: 3rem;
    }
    .mySwiper {
      max-width: 400px;
    }
    .btn-add-to-card {
      width: 70%;
    }
    .swiper-flex {
      gap: 1rem;

    }

    @media screen and (max-width: 375px) {
      padding-left: 2rem;
      .mySwiper {
      max-width: 320px;
    }
    .registered-products__title {
      margin-bottom: 1.7rem;
    }


    }

  }


`