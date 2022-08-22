import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 100vh;

  margin: 0 5rem;

  .main-left {
    background-color: #fff;
    border-radius: 10px 0 0 10px;
  }

  .main-left__logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;

    margin-bottom: 2rem;
  }

  .main-left__description {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.3rem;
    text-align: justify;
    letter-spacing: -0.02em;

    padding-right: 4rem;

    width: 100%;
    max-width: 417px;
  }

  .main-right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    background-color: antiquewhite;
    padding: 2rem;
  }

  .main-right__login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 472px;
    height: 542px;
    border-radius: 10px;
    background-color: #f5f5f5;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.15);

    font-size: 1.6rem;

    padding: 3.2rem 3.6rem;
  }

  .main-right__login__input {
    width: 80%;
    height: 3.5rem;
    border-radius: 10px;
    border: 1px solid #ccc;
    padding: 2.4rem 1.6rem;
    margin-bottom: 3.2rem;

    font-family: "Work Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;

    color: #61646b;
  }

  input:focus {
    outline: var(--geen) solid 1px;
    border: none;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 80%;
    height: 3.5rem;
    border-radius: 10px;
    border: none;

    padding: 2rem;

    font-size: 1.6rem;
  }

  .btn-login {
    background-color: var(--geen);
    color: #fff;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }

  .btn-text {
    margin-left: 0.4rem;
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    text-align: center;
    letter-spacing: -0.02em;
  }

  .main-right__login__link {
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 100;
    font-size: 1.4rem;
    text-align: center;
    letter-spacing: -0.02em;
    color: var(--geen);
    margin-bottom: 2rem;
  }

  .line {
    width: 70%;
    height: 1px;
    background-color: #ccc;
    margin-bottom: 1rem;
  }

  .main-right__register {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    font-family: Work Sans;
  }

  .btn-register {
    background-color: var(--gold);
    color: #fff;
    font-size: 1.4rem;
    margin-bottom: 2rem;
  }
`;
