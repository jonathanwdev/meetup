import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 30px;

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
`;
