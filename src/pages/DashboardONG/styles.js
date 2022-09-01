import styled from "styled-components";

export const Container = styled.div`
.container {
    width: 100%;
    height: 100%;
}

.mySwiper{
    max-width: 520px;
    min-height: 270px;
}

.main {
   display: flex;
   align-items: center;
   justify-content: center;
}

.main-wrapper {
    margin-bottom: 4rem;
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
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

    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
    font-size: 3.2rem;
    color: var(--dark-color);
}

.search-radius-container {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2.4rem;
    padding-bottom: 2rem;

    text-align: start;
    font-weight: 400;
    font-size: 2.2rem;
    color: var(--dark-color);
}

#search-radius {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;    
}

.map-and-donors-list {
    margin-top: 1rem;
    margin-bottom: 2rem;
    width: 100%;
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

    li{
        cursor: pointer;
    }
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
    justify-content: flex-start;
    text-align: center;
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 2.8rem;
    color: var(--dark-color);
    margin-top: 2rem;
    margin-bottom: 3rem;
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

.left-container {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.demand-form {
    
    width: 100%;
    max-width: 420px;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;

    background-color: var(--other-color);
    border-radius: 3rem;
    border-bottom: none;
}

.demand-title {
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 100%;
    height: 20%;
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
    margin-bottom: 2rem;
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
    margin-bottom: 1rem;
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

    
    border-radius: 8px;
}

.item-img {
    width: 95%;
    height: 95%;
}

.item-name-qtd-container {
    margin-top: 1.2rem;
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
    margin-bottom: 2rem;
    margin-top: 2rem;
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
    width: 100%;
    height: 7rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
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

.filter-form{
    display: flex;
    gap: 1.6rem;
}

.form__label {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    font-size: 1.4rem;

    margin-top: -.6rem;
  }

.form__input {
    width: 100%;
    max-width: 400px;
    padding: 1.2rem;

    border: 1px solid #afb1b6;
    border-radius: 0.8rem;
  }

  .label-md{
    width: 150px
    }

  .label-sm {
    width: 70px;
  }

`;