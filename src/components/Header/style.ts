import styled from 'styled-components';

export const Container = styled.header`
    display: flex
    flex-direction:column;
    background-color:#1e3a8a;
    align-items:center;
`;

export const NavBarContainer = styled.nav`
    width:100%;
    background: #002aa3;
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