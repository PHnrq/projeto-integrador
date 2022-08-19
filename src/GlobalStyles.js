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

    font-family: 'Poppins', sans-serif;
    font-size: 10px;
  }

`