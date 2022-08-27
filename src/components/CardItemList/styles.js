import styled from "styled-components";

export const CardItemList = styled.li`

.product-list-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 1px solid var(--border-color);
    filter: drop-shadow(0px 4px 4px var(--shadow-color));
    border-radius: 8px;
}

.product-item-date {
    width: 100%;
    height: 65%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.list-item-img {
    display: flex;
    height: 85%;
}

.list-item-validity {
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 2.8rem;
    color: var(--secondary-color);
    background-color: var(--button-color);
    border-radius: 0px 0px 8px 8px;
    margin-top: -15px;
}

.list-item-name {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 2.8rem;
    color: var(--dark-color);
}

.buy-add-icon-container {
    width: 90%;
    height: 15%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.buy-add-icon {
    background-color: transparent;
    border: none;
    cursor: pointer;
}

`;