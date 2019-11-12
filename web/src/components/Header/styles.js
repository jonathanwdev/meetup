import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 0 30px;
  background: rgba(0, 0, 0, 0.3);
`;
export const Navigation = styled.nav`
  height: 74px;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  aside {
    display: flex;
    height: 42px;

    div {
      margin-right: 20px;
      font-size: 14px;
      text-align: end;
      padding: 5px 0;

      strong {
        color: #fff;
        padding: 4px 0;
        font-weight: 400;
      }

      a {
        display: block;
        padding: 4px 0;
        color: #fff;
        opacity: 0.6;

        &:hover {
          opacity: 1;
        }
      }
    }

    button {
      width: 72px;
      height: 100%;
      color: #fff;
      border-radius: 4px;
      background: #d44059;
      border: 0;
      text-align: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#d44059')};
      }
    }
  }
`;
