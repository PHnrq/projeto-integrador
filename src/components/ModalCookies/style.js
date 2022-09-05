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

    img{
      width: 152px;
    }

    p{
      font-size: 1.4rem;
    }

    div{
      
      display: flex;
      justify-content: space-between;
      
      button {
      background-color: var(--primary-color);
      color: #fff;
      min-width: 135px;
      padding: 12px 10px;
      letter-spacing: .05em;
      line-height: 1.4;
      font-size: .813em;
      font-weight: 600;
      height: auto;
      white-space: normal;
      word-break: break-word;
      word-wrap: break-word;

      border-radius: .6rem;
    }

    .btn-necessario{
      background-color: grey;
    }
  }
  }

  .modal-title {
    font-size: 32px;
  }
`;
