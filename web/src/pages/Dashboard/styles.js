import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  width: 100%;
`;
export const Content = styled.div`
  max-width: 1100px;
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

    button {
      width: 172px;
      height: 42px;
      color: #fff;
      background: #f94d6a;
      border-radius: 4px;
      border: 0;
    }
  }

  ul {
    width: 100%;
    height: 62px;
  }
`;

export const MeetList = styled.li`
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  height: 100%;

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
