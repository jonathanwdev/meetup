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
    input[name='location'] {
      width: 100%;
      height: 50px;
      background: rgba(0, 0, 0, 0.2);
      margin-bottom: 10px;
      border-radius: 4px;
      padding: 0 15px;
      color: #fff;
      font-size: 16px;
    }

    button[type='submit'] {
      width: 180px;
      height: 42px;
      color: #fff;
      font-size: 16px;
      background: #f94d6a;
      border-radius: 4px;
      margin-bottom: 20px;
      align-self: flex-end;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        margin-right: 5px;
      }

      &:hover {
        background: ${darken(0.03, '#f94d6a')};
      }
    }
  }
`;
