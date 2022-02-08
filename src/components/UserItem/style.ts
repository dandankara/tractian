import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 150;
  padding: 20px 20px 0 20px;
  margin: 30px;
  margin-top:-15px;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(69,111,176);
  border-radius: 12px;
  box-shadow: 0px 1px 3px -1px #000;

  strong{
    margin-bottom:10px;
  }

  button {
    color: #fff;
    font-size: 1em;
    margin: 1rem;
    padding: 0.25em 1em;
    border: 2px solid rgb(69,111,176);
    border-radius: 10px;
    background: #3162ad;
    cursor:pointer;
    width: auto;
    margin-top:10px;
  }
`;

export const ModalContent = styled.div`
  p {
    color: #1e3a8a;
    font-weight: 500;
    margin-bottom:10px;
  }

  h2 {
    color: #1e3a8a;
    font-weight: 700;
    margin-bottom:10px;
  }
`;