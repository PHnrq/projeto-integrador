import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    text-decoration: none;
    list-style: none;
  }

  :root {
    --primary-color: #4C956C;
    --secondary-color: #FEFEE3;
    --tertiary-color: #2C6E49;
    --quartiaty-color: #FFC9B9;
    --button-color: #D68C45;
    --dark-color: #153423;
    --footer-color: #09150E;
    
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

    font-family: 'Poppins', sans-serif;
    font-size: 10px;
  }

`