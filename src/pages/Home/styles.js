import styled from "styled-components";

import headerBg from "../../assets/header-background.png";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .header {
    width: 100%;
    background-image: url(${headerBg});
    background-repeat: no-repeat;
  }

  .header-bar {
    width: 100%;
    height: 9.4rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-inline: 3rem;
    background-color: var(--primary-color);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    opacity: 0.9;
  }
  .header-menu-item {
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.1rem;
    text-decoration: none;
    margin-right: 3.2rem;
    color: var(--secondary-color);
  }

  .btn-create-account,
  .btn-login {
    width: 14rem;
    height: 5.8rem;
    border-radius: 0.5rem;
    border: none;
    color: var(--secondary-color);
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.4rem;
    text-align: center;
    cursor: pointer;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .btn-create-account {
    background-color: var(--button-color);
    margin-right: 3.2rem;
  }

  .btn-login {
    background-color: transparent;
    border: 1px solid var(--button-color);
  }

  .header-content {
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 5.2rem;
    padding: 9.2rem 0 15.6rem;
    margin-left: 11.4rem;
  }

  .header-subtitle {
    font-weight: 500;
    font-size: 5.6rem;
    line-height: 6.6rem;
    color: var(--secondary-color);
  }

  .header-paragraph {
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.8rem;
    color: var(--secondary-color);
  }

  .header-content .btn-create-account {
    width: 20rem;
  }

  .main {
    width: 100%;
  }

  .publications {
    width: 100%;
    padding: 1.6rem;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-color: var(--secondary-color);
  }

  .publi-text {
    max-width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.4rem;
  }

  .publi-title {
    font-weight: 400;
    font-size: 3.2rem;
    line-height: 3.8rem;
    color: var(--dark-color);
  }

  .publi-paragraph {
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.5rem;
    color: var(--dark-color);
  }

  .publi-paragraph:last-child {
    font-size: 1.4rem;
    line-height: 2rem;
  }

  .publi-image {
    position: relative;
    width: 100%;
    max-width: 30%;
    height: 40rem;
  }

  .image1,
  .image2 {
    width: 28rem;
    position: absolute;
  }

  .image1 {
    z-index: 1;
    top: 17rem;
  }

  .image2 {
    top: 10rem;
    left: 10rem;
  }

  .our-results {
    width: 100%;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: var(--tertiary-color);
  }

  .results-title {
    font-weight: 400;
    font-size: 3.2rem;
    line-height: 140.62%;
    color: var(--secondary-color);
  }

  .tons-people-city-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }

  .tons-quantity,
  .people-quantity,
  .city-quantity {
    font-weight: 500;
    font-size: 4.8rem;
    line-height: 140.62%;
    color: var(--secondary-color);
  }

  .tons-text,
  .people-text,
  .city-text {
    text-align: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 140.62%;
    color: var(--secondary-color);
  }

  .about {
    width: 100%;
    height: 40rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-color: var(--secondary-color);
  }

  .about-image {
    width: 50%;
    height: 80%;
  }

  .about-text {
    width: 50%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    margin-left: 8rem;
  }

  .about-title {
    width: 80%;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.4rem;
    color: var(--dark-color);
  }

  .about-paragraph {
    width: 80%;
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.8rem;
    color: var(--dark-color);
  }

  .contact {
    width: 100%;
    height: 20rem;
    background-color: var(--tertiary-color);
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }

  .contact-text {
    font-size: 3.2rem;
    line-height: 4.5rem;
    font-weight: 700;
    color: var(--secondary-color);
  }

  .contact-paragraph {
    font-weight: 400;
    font-size: 2.3rem;
  }

  .btn-contact {
    width: 20rem;
    height: 5.8rem;
    border-radius: 0.5rem;
    border: 1px solid var(--secondary-color);
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.4rem;
    text-align: center;
    cursor: pointer;
    color: var(--secondary-color);
    background-color: transparent;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .footer {
    width: 100%;
    height: 20rem;
    background-color: var(--footer-color);
    color: var(--secondary-color);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .footer-logo-container {
    width: 30%;
    height: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  .footer-menu {
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 2rem;
  }

  .footer-menu-item {
    color: var(--secondary-color);
    text-decoration: none;
  }
`;
