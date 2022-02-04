import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 200px;
  padding: 24px 24px 0 24px;
  margin: 24px;
  justify-content: space-between;
  align-items: center;
  background-color: #1e3a8a;
  border-radius: 12px;
  box-shadow: 0px 1px 3px -1px #000;

  button {
    width: 200px;
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

export const ModalContent = styled.div`
  p {
    color: #1e3a8a;
    font-weight: 500;
  }

  h2 {
    color: #1e3a8a;
    font-weight: 700;
  }
`;