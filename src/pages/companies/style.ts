import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: rgba(255, 255, 255, 0.2);
  max-width: 900px;
  align-items: flex-start;
  margin: 20px auto;
  padding: 10px;
  border-radius: 12px;
  flex: 1;
  box-shadow: 0px 1px 5px -1px #000;
`;

export const Text = styled.div`
    p {
        font-size: 22px;
        line-height: 30px;
        color: #1a1a1a;
    }

    h1 {
        margin-top: 20px;
        margin-bottom: 20px;
    }
`;

export const ContainerGraph = styled.div`
    align-self:center;
    margin-top:10px;
`;