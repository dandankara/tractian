import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
`;

export const Content = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    background-color: rgba(255, 255, 255, 0.2);
    margin:20px auto;
    padding:2rem;
    border-radius:20px;
    box-shadow: 2px 5px 10px -3px #000000;
`;

export const Text = styled.div`
color: #1a1a1a;
    span{
        font-size:1.5rem;
    }

    h1{
        margin-top:20px;
        margin-bottom:20px;
    }
`;

export const Image = styled.div`
    flex-grow: 1;
    img{
        width: 400px;
    }
`;