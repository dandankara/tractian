import styled from 'styled-components';


export const Container = styled.div`
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
  box-shadow: 0px 1px 8px -1px #000;
`;

export const Text = styled.div`
    p {
        font-size: 22px;
        line-height: 40px;
    }

    h1 {
        margin-top: 20px;
        margin-bottom: 20px;
    }

    @media screen and (max-width: 768px) {
    p {
      font-size: 18px;
      line-height: 24px;
    }

    h1 {
      margin-top: 18px;
      margin-bottom: 18px;
    }
`;

export const ContainerGraph = styled.div`
    align-self:center;
    margin-top:20px;
`;