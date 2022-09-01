import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  
  main {
    display: flex;
    justify-content: space-around;
    padding-top: 2.8rem;
    padding: 5.2rem;
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
`;
