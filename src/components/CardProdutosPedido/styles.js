import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 11.8rem;
  padding: .5rem .3rem;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  border-radius: .8rem;

  button{
    background-color: transparent;
    cursor: pointer;
  }

  .available-at-tag{
    position: relative;
    
    width: 100%;
    z-index: 1;
    margin: -1.7rem 0 0;

    background-color: var(--gold);
    /* border-radius: 0 0 .8rem .8rem; */

    font-weight: 400;
    font-size: 1.2rem;

    text-align: center;
    letter-spacing: 0.004em;

    color: #FEFEE3;
  }

  .product-name{
    font-size: 1.6rem;
    font-weight: 700;

    letter-spacing: 0.004em;

    color: #000000;
  }

  .add-decrease-remove-wrapper{
    display: flex;
    justify-content: space-between;
  }

  .add-decrease-remove-wrapper{
    font-size: 1.2rem;
    letter-spacing: 0.004em;

    color: #000000;
  }

  .amount__modifier{
    font-size: 1.4rem;

    display: flex;
    gap: 0.2rem;
  }
`