import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 250px;
  padding: 24px;
  margin: 20px;
  justify-content: center;
  align-items: center;
  background-color: #1e3a8a;
  border-radius: 12px;
  box-shadow: 0px 1px 3px -1px #000;

  img {
    width: 250px;
    height: 150px;
    border-radius: 10px;
    margin-bottom:10px
  }

  button {
    width: 250px;
    margin-top:10px;
    border-radius: 10px;
    outline: 0;
    cursor: pointer;
    &:hover {
      background-color: blue;
    }

    p {
        font-size:16px;

    }
  }
`;

export const ModalText = styled.div`
p {
  margin-bottom:10px;
  color: #1e3a8a;
  font-weight: 500;
}

h2 {
    margin-bottom:20px;
    color: #1e3a8a;
    font-weight: 700;
  }
`;