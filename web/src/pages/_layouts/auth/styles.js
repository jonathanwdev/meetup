import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

/** BTN animation */
const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;
/** BTN animation */

export const Wrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(180deg, #22202c, #402845);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      height: 50px;
      background: rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      margin-bottom: 10px;
      padding: 0 15px;
      color: #fff;
      font-size: 16px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
    span {
      color: red;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
      opacity: 0.7;
    }

    button {
      height: 50px;
      margin: 5p 0 0;
      border-radius: 4px;
      background: #f94d6a;
      border: 0;
      color: #fff;
      font-weight: bold;
      font-size: 16px;
      transition: background 0.2s;

      svg {
        animation: ${rotate} 2s linear infinite;
      }

      &:hover {
        background: ${darken(0.03, '#f94d6a')};
      }
    }

    a {
      margin-top: 15px;
      color: #fff;
      font-weight: bold;
      opacity: 0.7;
      font-size: 16px;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
