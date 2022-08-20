import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 99;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;

  .container {
    min-height: 100%;

    background-color: rgba(0, 0, 0, 0.4);

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 7.2rem 0;
  }

  .form {
    position: relative;

    width: 100%;
    max-width: 97rem;

    background: #fffefe;
    border-radius: 1.5rem;

    padding: 5.2rem 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3.2rem;
  }

  .btn-close-form {
    position: absolute;
    top: 15px;
    right: 30px;

    background: none;
    cursor: pointer;
  }

  .btn-close-form img {
    width: 3.6rem;
    height: 3.6rem;
  }

  .form__fieldset {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    padding: 3.2rem;
    width: 100%;
    max-width: 66rem;

    border: 1px solid #9b9696;
    border-radius: 1.5rem;

    font-size: 1.6rem;
  }

  .form__legend {
    padding: 0.8rem;
  }

  .form__label {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    font-size: 1.4rem;
  }

  .form__input {
    width: 100%;
    max-width: 400px;
    padding: 1.2rem;

    border: 1px solid #afb1b6;
    border-radius: 0.8rem;
  }

  .invalid-input {
    border: 2px tomato solid;
  }

  .fild-wrapper {
    display: flex;
    gap: 3.2rem;
  }

  .label-lg {
    flex: 3;
  }

  .label-sm {
    flex: 1;
  }

  .input-sm {
    max-width: 6.5rem;
    max-height: 4.8rem;
  }

  .radio-wrapper {
    width: 100%;
    max-width: 66rem;
    padding: 3.2rem;

    display: flex;
    flex-wrap: wrap;
  }

  .radio-wrapper__title {
    font-weight: 500;
    font-size: 2rem;
    font-weight: 700;

    width: 100%;

    margin: 0 0 1.8rem;
  }

  .radio-label {
    margin-right: 3.2rem;

    display: flex;
    cursor: pointer;
    font-weight: 500;
    position: relative;
    overflow: hidden;
    margin-bottom: 0.375em;
  }

  .radio-input {
    margin-right: 0.8rem;

    position: absolute;
    left: -9999px;
  }

  .radio-input:checked + .radio-span {
    background-color: #d68c45;
  }

  .radio-input:before {
    box-shadow: inset 0 0 0 0.4375em #d68c45;
  }

  .radio-span {
    display: flex;
    align-items: center;
    padding: 0.375em 0.75em 0.375em 0.375em;
    border-radius: 99em;
    transition: 0.25s ease;
    font-size: 1.6rem;
  }

  .radio-span:hover {
    background-color: rgba(214, 140, 69, 0.3);
  }

  .radio-span:before {
    display: flex;
    flex-shrink: 0;
    content: "";
    background-color: #fff;
    width: 1.5em;
    height: 1.5em;
    border-radius: 50%;
    margin-right: 0.375em;
    transition: 0.25s ease;
    box-shadow: inset 0 0 0 0.125em #d68c45;
  }

  .form-btn {
    width: 100%;
    max-width: 66rem;

    padding: 2.6rem 0;

    color: #fff;
    background: #4c956c;
    border-radius: 1.6rem;

    font-size: 1.6rem;

    cursor: pointer;
  }

  .warning-input {
    color: tomato;
    font-size: 1.6rem;
    font-weight: 500;
  }
`;
