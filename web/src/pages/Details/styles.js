import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const Content = styled.section`
  max-width: 1100px;
  height: 100%;
  margin: 0 auto;

  header {
    display: flex;
    height: 132px;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 32px;
      color: #fff;
    }

    aside {
      justify-content: flex-end;
      display: flex;

      button {
        width: 100px;
        height: 42px;
        text-align: center;
        border: 0;
        color: #fff;
        border-radius: 4px;
        background: #d44059;
      }
      a {
        display: block;
        background: #4dbaf9;
        margin-right: 15px;
        width: 100px;
        height: 42px;
        line-height: 42px;
        text-align: center;
        border: 0;
        color: #fff;
        border-radius: 4px;
      }
    }
  }
`;

export const Meetup = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  div {
    height: 500px;
    width: 100%;

    img {
      height: 100%;
      width: 100%;
      border-radius: 5px;
    }
  }
  article {
    margin: 20px 0;
    line-height: 24px;
    color: #fff;
    font-size: 17px;
    letter-spacing: 1px;
  }

  footer {
    height: 60px;
    display: flex;

    p {
      font-size: 15px;
      color: rgba(255, 255, 255, 0.6);
    }
    p:nth-child(1) {
      text-align: center;
    }
    p:nth-child(2) {
      flex: 1;
      text-align: left;
      padding-left: 25px;
    }
  }
`;
