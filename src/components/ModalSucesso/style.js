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

  font-size: 1.6rem;

  .modal {
    width: 100%;
    max-width: 600px;

    background: #fffefe;
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    gap: 32px;

    padding: 52px;
  }

  .modal-title {
    font-size: 32px;
  }

  .address,
  .data {
    font-weight: 500;
  }

  .btn {
    width: 100%;
    max-width: 660px;

    padding: 26px 0;

    color: #fff;
    background: #4c956c;
    border-radius: 16px;

    cursor: pointer;
  }
`;
