import styled from "styled-components";

export const Container = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;

    letter-spacing: 0.004em;
    font-style: normal;
}

:root {
    font-size: 10px;

    --primary-color: #4c956c;
    --secondary-color: #FEFEE3;
    --terciary-color: #2c6e49;
    --quaternary-color: #D68C45;
    --quinary-color: #FFC9B9;
    --senary-color: #153423;
    --dark-color: #000000;
    --light-dark-color: #09150E;
    --header-color: rgba(76, 149, 108, 0.9);
    --arrow-btn-color: rgba(76, 149, 108, 0.25);
    --other-color: rgba(76, 149, 108, 0.05);
    --border-color: #9B9696;
    --border2-color: #38463E;
    --border3-color: #AFB1B6;
    --shadow-color: rgba(0, 0, 0, 0.25);
}

.container {
    width: 100%;
    height: 100%;
}

.main {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding-top: 4rem;
}

.right-container {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.find-donors {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.find-donors-title {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;

    text-align: center;
    font-weight: 700;
    font-size: 3.6rem;
    line-height: 4rem;
    color: var(--dark-color);
}

.search-radius-container {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 2rem;

    text-align: start;
    font-weight: 400;
    font-size: 2.2rem;
    line-height: 2.8rem;
    color: var(--dark-color);
}

#search-radius {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;    
}

.map-and-donors-list {
    width: 70%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    font-weight: 400;
    font-size: 2rem;
    line-height: 4rem;
}

.donors-list {
    list-style-type: none;
}

.available-products {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.available-products-title {
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 2.8rem;
    color: var(--dark-color);
    margin-top: 4rem;
    margin-bottom: 1rem;
}

.donor-name {
    color: var(--terciary-color);
}

.see-all-container {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 2.8rem;
    margin-bottom: 1rem;
}

.see-all {
    text-decoration: none;
    color: var(--terciary-color);
}

.see-all:hover {
    text-decoration: underline;
}

.partial-product-list {
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.btn-arrow {
    display: flex;
    padding: 1.2rem;
    border-radius: 22.8rem;
    border: none;
    background-color: var(--arrow-btn-color);
    transform: matrix(-1, 0, 0, 1, 0, 0);
    cursor: pointer;
}

.product-list {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style-type: none;
    margin-bottom: 5rem;
}

.product-list-item {
    width: 30%;
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
    background-color: var(--quaternary-color);
    border-radius: 0px 0px 8px 8px;
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

.left-container {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.demand-form {
    width: 70%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;

    background-color: var(--other-color);
    border: 1px solid var(--border2-color);
    border-radius: 3rem 3rem 0 0;
    border-bottom: none;
}

.demand-title {
    width: 100%;
    height: 20%;
    margin-top: 4rem;
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 2.8rem;
    color: var(--dark-color);
}

.donor-demand-container {
    width: 85%;
    height: 65%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.donor-demand-name {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-weight: 400;
    font-size: 2rem;
    line-height: 4rem;
    color: var(--light-dark-color);
}

.donor-demand-others-data {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
}

.item-img-container {
    width: 35%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;

    border: 2px solid var(--border3-color);
    border-radius: 8px;
}

.item-img {
    width: 95%;
    height: 95%;
}

.item-name-qtd-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.8rem;
    color: var(--dark-color);
}

.qtd-sign-trash-container {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.sign-value-container {
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

.minus-sign,
.plus-sign,
.trash-icon {
    border: none;
    background-color: transparent;
    cursor: pointer;
}

.demand-get-date {
    width: 85%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.demand-text {
    display: flex;
    justify-content: flex-start;
    width: 60%;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2rem;
    margin-bottom: 1rem;
    color: var(--dark-color);
}

#get-date {
    width: 50%;
    height: 4rem;
    text-align: start;
    padding-left: 2rem;
    padding-right: 1rem;
    background-color: #FFF8F8;
    border: 1px solid #AFB1B6;
    border-radius: 8px;
}

.submit-btn-container {
    width: 70%;
    height: 7rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: var(--primary-color);
    border: none;
    border-radius: 0 0 2rem 2rem;
    cursor: pointer;
}

.submit-btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.4rem;
    letter-spacing: 0.2px;
    background-color: transparent;
    border: none;
    color: #FFFFFF;
    cursor: pointer;
}

`;