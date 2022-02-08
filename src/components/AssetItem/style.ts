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
  background-color: rgba(69,111,176,0.65);
  border-radius: 12px;
  box-shadow: 0px 1px 3px -1px #000;

  img {
    width: 250px;
    height: 150px;
    border-radius: 10px;
    margin-bottom:10px
  }

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