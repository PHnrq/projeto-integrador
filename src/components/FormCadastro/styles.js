import styled from "styled-components";

export const Container = styled.div`
  .container {
    min-height: 100%;

    background-color: rgba(0, 0, 0, 0.4);

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 72px 0;
  }

  .form {
    position: relative;

    width: 100%;
    max-width: 970px;

    background: #fffefe;
    border-radius: 15px;

    padding: 52px 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
  }

  .btn-close-form {
    position: absolute;
    top: 15px;
    right: 30px;

    background: none;
    cursor: pointer;
  }

  .btn-close-form img {
    width: 36px;
    height: 36px;
  }

  .form__fieldset {
    display: flex;
    flex-direction: column;
    gap: 32px;

    padding: 32px;
    width: 100%;
    max-width: 660px;

    border: 1px solid #9b9696;
    border-radius: 15px;
  }

  .form__legend {
    padding: 8px;
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

  .invalid-input {
    border: 2px tomato solid;
  }

  .fild-wrapper {
    display: flex;
    gap: 32px;
  }

  .label-lg {
    flex: 3;
  }

  .label-sm {
    flex: 1;
  }

  .input-sm {
    max-width: 65px;
    max-height: 48px;
  }

  .radio-wrapper {
    width: 100%;
    max-width: 660px;
    padding: 32px;

    display: flex;
    flex-wrap: wrap;
  }

  .radio-wrapper__title {
    font-weight: 500;
    font-size: 20px;
    font-weight: 700;

    width: 100%;

    margin: 0 0 18px;
  }

  .radio-label {
    margin-right: 32px;

    display: flex;
    cursor: pointer;
    font-weight: 500;
    position: relative;
    overflow: hidden;
    margin-bottom: 0.375em;
  }

  .radio-input {
    margin-right: 8px;

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
    max-width: 660px;

    padding: 26px 0;

    color: #fff;
    background: #4c956c;
    border-radius: 16px;

    cursor: pointer;
  }

  .warning-input {
    color: tomato;
    font-size: 16px;
    font-weight: 500;
  }
`;
