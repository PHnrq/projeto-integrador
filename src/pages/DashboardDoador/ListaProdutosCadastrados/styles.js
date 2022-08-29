import styled from "styled-components";

export const Container = styled.div`
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
    text-align: center;

    margin-bottom: 3.6rem;
  }

  .mySwiper {
    max-width: 520px;
    min-height: 285px;
    margin-left: 4.5rem;
  }
`