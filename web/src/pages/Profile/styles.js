import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-top: 30px;

  form {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    input {
      width: 100%;
      height: 50px;
      background: rgba(0, 0, 0, 0.2);
      margin-bottom: 10px;
      border-radius: 4px;
      padding: 0 15px;
      color: #fff;
      font-size: 16px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }
    hr {
      border: 0;
      height: 2px;
      background: rgba(255, 255, 255, 0.2);
      margin: 20px 0 20px 0;
    }
    button {
      width: 180px;
      height: 42px;
      color: #fff;
      font-size: 16px;
      background: #f94d6a;
      border-radius: 4px;
      margin-bottom: 20px;
      transition: background 0.2s;
      align-self: flex-end;

      &:hover {
        background: ${darken(0.03, '#f94d6a')};
      }
    }
  }
`;
