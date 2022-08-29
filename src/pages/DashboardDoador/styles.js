import styled from "styled-components";

export const Container = styled.div`
  main {
    display: flex;
    justify-content: space-around;
    padding-top: 2.8rem;
  }

  .mySwiper-sm {
    width: 100%;
    max-width: 42rem;
    min-height: 20rem;
  }

  .container {
    display: flex;
    justify-content: space-between;

    width: 100%;
    max-width: 120rem;
  }

  .div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 3rem;
  }

  .btn-add-to-card {
    width: 90%;
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
    width: 100%;
    max-width: 46.5rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 1rem 2rem;
    background: rgba(76, 149, 108, 0.05);
    border: 1px solid #38463e;
    border-radius: 30px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .box-2 {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    width: 100%;
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

    margin: 1.2rem 0 2rem;
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

    font-size: 1.6rem;
    letter-spacing: 0.004em;

    color: #000000;
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
