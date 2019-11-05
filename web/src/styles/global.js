import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  *{
    box-sizing: border-box;
    padding:0;
    margin:0;
    outline:0;
  }
  *:focus{
    outline:0;
  }
  html, body, #root{
    height:100%;
  }
  body{
    -webkit-font-smoothing: antialiased;
  }
  body, input, button{
    font: 14px Helvetica, sans-serif;
  }
  a{
    text-decoration: none;
  }
  ul{
    list-style: none;
  }
  button{
    cursor: pointer;
  }

`;
