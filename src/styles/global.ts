import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-family: 'Inter', sans-serif;
    scroll-behavior: smooth;
  }

  html, body{
    height: 100%;
  }

  #root{
    max-width: 1024px;
    margin: 0 auto;
  }

  img{
    max-width: 100%;
    height: auto;
  }

  button{
    cursor: pointer;
    border: none;
    outline: none;
  }
`;
