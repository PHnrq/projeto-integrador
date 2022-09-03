import styled from "styled-components";

export const Container = styled.div`
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

  .order__title {
    font-size: 2.4rem;
    font-family: "Poppins", sans-serif;
    text-align: center;

    margin: 1.2rem 0 2rem;
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
  @media screen and (max-width: 375px) {
    .order__title {
      font-size: 2.1rem;
    }
  }
`;
