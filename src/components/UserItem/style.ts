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
    color: #fff;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid rgb(69,111,176);
    border-radius: 3px;
    background: rgb(69,111,176);
    cursor:pointer;
    width: auto;
    margin-top:10px;
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