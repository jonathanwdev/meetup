import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

  *{
    box-sizing: border-box;
    padding:0;
    margin:0;
    outline:0;
    font-family: Abel;
  }
  *:focus{
    outline:0;
  }
  html,body,#app, #app>div{
    height: 100%;
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
