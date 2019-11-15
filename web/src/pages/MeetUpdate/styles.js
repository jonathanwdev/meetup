import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  margin-top: 30px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 90px;
    max-width: 1100px;
    height: 100%;
    margin: 0 auto;

    label {
      cursor: pointer;
      margin-bottom: 30px;
      background: rgba(0, 0, 0, 0.5);
      height: 500px;
      border-radius: 4px;

      &:hover {
        opacity: 0.7;
      }

      img {
        width: 100%;
        height: 500px;
        border-radius: 4px;
        background: #eee;
      }

      input {
        display: none;
      }
    }

    input:nth-child(2) {
      width: 100%;
      height: 50px;
      background: rgba(0, 0, 0, 0.2);
      margin-bottom: 10px;
      border-radius: 4px;
      padding: 0 15px;
      color: #fff;
      font-size: 16px;
    }
    textarea {
      min-width: 100%;
      max-width: 100%;
      max-height: 200px;
      min-height: 200px;
      background: rgba(0, 0, 0, 0.2);
      margin-bottom: 10px;
      border-radius: 4px;
      padding: 15px 15px;
      color: #fff;
      font-size: 16px;
    }
    input:nth-child(5) {
      width: 100%;
      height: 50px;
      background: rgba(0, 0, 0, 0.2);
      margin-bottom: 10px;
      border-radius: 4px;
      padding: 0 15px;
      color: #fff;
      font-size: 16px;
    }
    input[type='datetime-local']::-webkit-inner-spin-button,
    input[type='date-local']::-webkit-calendar-picker-indicator {
      display: none;
      -webkit-appearance: none;
    }

    input:nth-child(4) {
      width: 100%;
      height: 50px;
      background: rgba(0, 0, 0, 0.2);
      margin-bottom: 10px;
      border-radius: 4px;
      padding: 0 15px;
      color: #fff;
      font-size: 16px;
    }
    button {
      width: 180px;
      height: 42px;
      color: #fff;
      font-size: 16px;
      background: #f94d6a;
      border-radius: 4px;
      margin-bottom: 20px;
      align-self: flex-end;

      &:hover {
        background: ${darken(0.03, '#f94d6a')};
      }
    }
  }
`;
