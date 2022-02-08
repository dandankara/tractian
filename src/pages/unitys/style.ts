import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 350;
  background-color: rgba(255, 255, 255, 0.2);
  max-width: 900px;
  align-items: flex-start;
  margin: 40px auto;
  padding: 28px;
  border-radius: 12px;
  flex: 1;
  box-shadow: 0px 2px 4px -1px #000;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: rgba(255, 255, 255, 0.2);
  max-width: 900px;
  align-items: flex-start;
  margin: 40px auto;
  padding: 28px;
  border-radius: 12px;
  flex: 1;
  box-shadow: 0px 2px 4px -1px #000;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    align-self:center;
`;

export const Button = styled.button`
  color: #fff;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid rgb(69,111,176);
  border-radius: 3px;
  background: rgb(69,111,176);
  cursor:pointer;
`;

export const DataDiv = styled.div`
    display: flex;
    flex-direction:column;
    align-self:center;
    margin-top: 50px;

    p{
        font-size:28px;
    }
`;

export const DataItem = styled.div`
    display: flex;
    flex-direction:row;
    align-self:center;
    margin-bottom:24px;
`;

export const Graph = styled.div`
    align-self:center;
    margin-top:20px;
`;