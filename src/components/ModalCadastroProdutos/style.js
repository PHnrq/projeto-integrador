import styled from "styled-components";

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.4);

  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  z-index: 99;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;

  .modal {
    background: #fff;
    width: 100%;
    max-width: 500px;

    position: relative;

    padding: 52px 46px;
    border-radius: 15px;
  }

  .btn-close-form {
    position: absolute;
    top: 15px;
    right: 30px;

    background: none;
    cursor: pointer;
  }

  .btn-close-form img {
    width: 32px;
    height: 32px;
  }

  .btn-close-form img:hover {
    width: 34px;
    height: 34px;
  }

  .form {
    display: flex;
    flex-direction: column;

    gap: 28px;
  }

  .form__label {
    display: flex;
    flex-direction: column;
    gap: 8px;

    font-size: 14px;
  }

  .form__input {
    width: 100%;
    max-width: 400px;
    padding: 12px;

    border: 1px solid #afb1b6;
    border-radius: 8px;
  }

  .label-flex {
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }

  .form__input-file__label {
    background-color: #d68c45;
    color: white;
    padding: 8px;
    font-family: sans-serif;
    border-radius: 5px;
    cursor: pointer;
    max-width: 160px;

    transition: filter 0.2s ease-in-out;
  }

  .form__input-file__label:hover {
    filter: brightness(1.1);
  }

  .form__input-file__span {
    font-family: sans-serif;
  }

  .form-btn {
    width: 100%;
    max-width: 660px;

    padding: 20px 0;

    color: #fff;
    background: #4c956c;
    border-radius: 16px;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;

    transition: filter 0.5s ease-in-out;
  }

  .form-btn:hover {
    filter: brightness(1.2);
  }

  .warning-input {
    color: tomato;
    font-size: 16px;
    font-weight: 500;
  }

  .disable{
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
