import styled, { keyframes } from 'styled-components';
import { lighten, darken } from 'polished';

/** Loading animation */
const rotate = keyframes`
  from{
    transform:rotate(0deg);
  }
  to{
    transform:rotate(360deg);
  }
`;
/** Loading animation */

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;
export const Content = styled.section`
  max-width: 1100px;
  height: 100%;
  margin: 0 auto;

  header {
    height: 132px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-size: 32px;
      color: #fff;
    }

    a {
      width: 172px;
      height: 42px;
      color: #fff;
      background: #f94d6a;
      border-radius: 4px;
      font-size: 16px;
      border: 0;
      display: block;
      text-align: center;
      line-height: 42px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#f94d6a')};
      }
    }
  }

  ul {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    svg {
      animation: ${rotate} 2s linear infinite;
    }
  }
`;

export const MeetList = styled.li`
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  width: 100%;
  height: 62px;

  & + li {
    margin-top: 15px;
  }

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    border-radius: 4px;
    display: block-size;
    transition: background 0.3s;

    &:hover {
      background: ${lighten(0.07, '#000')};
    }
  }

  strong {
    color: #fff;
    font-size: 18px;
    padding-left: 30px;
    font-weight: 400;
    flex: 2;
  }
  p {
    flex: 1;
    text-align: center;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.6);
  }
`;
