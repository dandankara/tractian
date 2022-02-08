import styled from 'styled-components';

export const Container = styled.header`
    display: flex
    flex-direction:column;
    align-items:center;
    box-shadow: 0px 3px 7px -5px #1A1A1A;
    background:rgb(69,111,176) ;
`;

export const NavBarContainer = styled.nav`
    span{
        font-weight:bold;
        color: #f5f5f5;
    }

    span:hover{
        border-bottom:1px solid #454545;
    }
`;

export const Items = styled.div`
    display: flex;

    a{
        width: 20%;
        padding:1rem;
        color: #1a1a1a;
        text-decoration:none;
        text-align:center;
    }
`;