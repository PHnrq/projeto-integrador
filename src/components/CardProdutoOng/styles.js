import styled from "styled-components";

export const Container = styled.div`
  /* max-width: 10.8rem; */
  padding: .5rem .3rem;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: .8rem;

  button{
    background-color: transparent;
    cursor: pointer;
  }

  img{
    width: 100%;
  }

  .available-at-tag{
    position: relative;
    
    width: 100%;
    z-index: 1;
    margin: -1.7rem 0 0;
    padding: .4rem 0;

    background-color: var(--gold);

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

    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
    display: block;
    overflow: hidden;

    &:hover{
      overflow: visible; 
      white-space: normal;
    }
  }

  .add-decrease-remove-wrapper{
    display: flex;
    justify-content: flex-end;
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