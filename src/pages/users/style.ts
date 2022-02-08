import styled from "styled-components";

export const Container = styled.div`
  @media screen and (max-width: 768px) {
    padding: 20px;
    min-height: 100vh;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 430px;
  background-color: rgba(255, 255, 255, 0.2);
  max-width: 900px;
  align-items: flex-start;
  margin: 40px auto;
  padding: 28px;
  border-radius: 12px;
  flex: 1;
  box-shadow: 0px 1px 8px -1px #000;
`;

export const UserDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  margin-top: 48px;
  flex-wrap: wrap;
  justify-content: center;
`;