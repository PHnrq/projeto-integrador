import styled from "styled-components";

import headerBg from "../../assets/header-background.png";

export const Container = styled.div`
  width: 100%;

  .header {
    width: 100%;
    height: 70rem;
    background-image: url(${headerBg});
    background-repeat: no-repeat;
  }

  .header-bar {
    width: 100%;
    height: 14%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-inline: 4rem;
    gap: 5rem;
    align-items: center;
    background-color: var(--primary-color);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    opacity: 0.9;

    div {
      display: flex;
      justify-content: space-between;

      button {
        display: none;
        background: transparent;

        img {
          width: 32px;
        }
      }
    }
  }

  .header-menu-item {
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.1rem;
    text-decoration: none;
    margin-right: 3.2rem;
    color: var(--secondary-color);
  }

  .header-menu-item:hover {
    text-decoration: underline;
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

  .btn-create-account:hover {
    scale: 1.1;
  }

  .btn-login {
    background-color: transparent;
    border: 1px solid var(--button-color);
  }

  .btn-login:hover {
    background-color: var(--button-color);
  }

  .header-content {
    max-width: 50rem;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    margin-left: 10%;
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
    height: 88%;
  }

  .publications {
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-color: var(--secondary-color);
    padding-inline: 2rem;
  }

  .publi-text {
    max-width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.4rem;
    margin-block: 1rem;
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
    width: 100%;
    max-width: 40%;
    height: 45rem;
    position: relative;
  }

  .image1,
  .image2 {
    max-width: 75%;
    position: absolute;

    border-radius: 1rem;
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
    height: 25rem;
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
    text-align: center;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .tons-quantity,
  .people-quantity,
  .city-quantity {
    font-weight: 500;
    font-size: 400%;
    line-height: 140.62%;
    color: var(--secondary-color);
  }

  .tons-text,
  .people-text,
  .city-text {
    text-align: center;
    font-weight: 400;
    font-size: 180%;
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
    padding-inline: 2rem;
    background-color: var(--secondary-color);
  }

  .about-image {
    width: 50%;
    height: 80%;

    border-radius: 1rem;
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
    height: 18rem;
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
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 2rem;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .footer-menu-item {
    color: var(--secondary-color);
    text-decoration: none;
  }

  .footer-menu-item:hover {
    text-decoration: underline;
  }

  /// MEDIA QUERY ///

  @media only screen and (max-width: 930px) {
    .header-bar {
      padding: 1.6rem;
      flex-direction: column;
      opacity: 1;

      div {
        width: 100%;
        margin: .6rem 0;

        button {
          display: block;
        }
      }
    }

    .header-menu {
      /* display: none; */

      background: var(--primary-color);
      opacity: 1;
      width: 100vw;
      position: absolute;
      top: 86px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      padding: 1.6rem;
    }

    .header-menu-item, .btn-create-account{
      margin-right: 0;
    }

    .header-menu-hidden{
      display: none;
    }

    .about-image {
      margin-left: 5rem;
      width: 40%;
      border-radius: 1rem;
    }

    .about-text {
      width: 60%;
    }
  }

  @media only screen and (max-width: 768px) {
    .publi-image {
      display: none;
    }

    .publi-text {
      max-width: 86%;
      margin-block: 2rem;
      margin-inline: auto;
    }

    .about {
      width: 100%;
      height: 32rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .about-image {
      display: none;
    }

    .about-text {
      width: 92%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-inline: auto;
    }
    .our-results {
      height: 40rem;
    }
  }
`;
