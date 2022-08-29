import styled from "styled-components";

export const Container = styled.div`
  header {
    padding: 0.9rem 8.2rem;
    background: #4c956c;
    font-family: "Baloo Bhai 2", sans-serif;
    width: 100%;

    display: flex;
    justify-content: space-between;
  }

  main {
    display: flex;
    justify-content: space-around;
    padding-top: 2.8rem;
  }

  .mySwiper {
    max-width: 520px;
    min-height: 270px;
  }

  .mySwiper-sm {
    max-width: 240px;
    min-height: 180px;
  }

  .header__logo-donare {
    width: 9rem;
  }

  .header__avatar {
    width: 3rem;
  }

  .container {
    display: flex;
    justify-content: space-between;
  }

  .div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 3rem;
  }

  .products {
    display: flex;
    flex-direction: column;
  }

  .aliments {
    display: flex;
  }

  .box-1 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn-left,
  .btn-right {
    width: 4rem;
  }
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
  }

  .registered-products__view-all {
    font-family: "Poppins", sans-serif;
    color: #2c6e49;
    font-size: 1.2rem;
    margin-bottom: 0.6rem;
    align-self: flex-end;
    justify-self: end;
  }

  .aliments {
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
  }

  .aliment {
    margin-right: 1.9rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: space-between;
  }

  .aliment__div {
    border: solid #afb1b6;
    border-radius: 8px;
    background: #ffff;
    width: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .aliment__div img {
    border-radius: 5px;
  }

  .aliment__image {
    max-width: 100px;
    max-height: 80px;
  }
  .aliment__validity {
    width: 100%;
  }

  .aliment__div p {
    text-align: center;
    color: #ffff;
    background: #d68c45;
    border-radius: 0px 0px 5px 5px;
  }

  .aliment__item-name {
    font-size: 1.5rem;
    margin-top: 1.2rem;
  }

  .aliment__quantity-div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5rem;
  }

  .aliment__add {
    display: flex;
  }

  .btn-add-to-card {
    width: 80%;
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

  .div-2 {
    width: 280px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 1rem 2rem;
    background: rgba(76, 149, 108, 0.05);
    border: 1px solid #38463e;
    border-radius: 30px;
  }

  .box-2 {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .order {
    display: flex;
    flex-direction: column;

    justify-content: flex-start;
  }

  .order__title {
    font-size: 2.4rem;
    font-family: "Poppins", sans-serif;
    text-align: center;
  }

  .order__ong-name {
    font-family: "Poppins", sans-serif;
    font-size: 1.9rem;
    text-align: initial;
  }

  .order__date {
    display: flex;
    justify-content: space-between;
  }

  .order__aliments {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
  }

  .order__aliment {
    margin: 0 0 0 0.5rem;
  }

  .order__button-rigth {
    margin-left: 1rem;
  }
  .order__button-left {
    margin-right: 1rem;
  }
  .order__aliment img {
    border: 2px solid #afb1b6;
    border-radius: 8px;
    width: 50px;
  }
  .order__aliment__title {
    font-size: 1.2rem;
    margin-bottom: 3rem;
  }
  .order__aliment__div {
    display: flex;
    justify-content: space-between;
  }
`;
