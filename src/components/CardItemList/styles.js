import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  gap: .8rem;

  max-width: 8rem;

  .list-item-img {
    width: 80px;
  }

  .list-item-name {
    font-weight: 400;
    font-size: 1.6rem;

    letter-spacing: 0.004em;

    color: #000000;
  }

  .amount-container{
    display: flex;
    justify-content: space-between;

    font-size: 1.2rem;
    letter-spacing: 0.004em;

    color: #000000;
  }
`;
