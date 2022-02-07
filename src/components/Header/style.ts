import styled from 'styled-components';

export const Container = styled.header`
    display: flex
    flex-direction:column;
    background-color:#1e3a8a;
    align-items:center;
`;

export const NavBarContainer = styled.nav`
    width:100%;
    background-image: radial-gradient(circle, #456fb0, #3c60c9, #2b51bd, #1e48c2);
    top:0;

    span{
        font-weight:bold;
    }

    span:hover{
        border-bottom:1px solid #ffff;
    }
`;

export const Items = styled.div`
    display: flex;
    a{
        width: 20%;
        padding:1rem;
        color: #ffffff;
        text-decoration:none;
        text-align:center;
    }
`;