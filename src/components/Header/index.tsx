import React from "react";
import { Link } from "react-router-dom";
import { Container, NavBarContainer, Items } from "./style";

export default function Header() {
  return (
    <Container>
      <NavBarContainer>
        <Items>
          <Link to="/">
            <span>Home</span>
          </Link>

          <Link to="/companies">
            <span>Empresas</span>
          </Link>

          <Link to="/units">
            <span>Unidades</span>
          </Link>

          <Link to="/assets">
            <span>Ativos</span>
          </Link>

          <Link to="/users">
            <span>Usuários</span>
          </Link>

          <Link to="/info">
            <span>Informações</span>
          </Link>
        </Items>
      </NavBarContainer>
    </Container>
  );
}
