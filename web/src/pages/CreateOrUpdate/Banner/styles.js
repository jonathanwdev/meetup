import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 30px;
  align-self: center;

  label {
    cursor: pointer;
    display: block;
    margin-bottom: 30px;
    background: rgba(0, 0, 0, 0.5);
    height: 500px;
    border-radius: 4px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    svg {
      text-align: center;
      line-height: 450px;
      position: absolute;
      z-index: 0;
    }
    p {
      color: #999;
      margin-top: 40px;
      font-weight: bold;
      font-size: 20px;
      position: absolute;
      z-index: 0;
    }

    &:hover {
      opacity: 0.7;
    }

    img {
      width: 100%;
      max-height: 500px;
      border-radius: 4px;
      background: #eee;
    }

    input {
      display: none;
    }
  }
`;
