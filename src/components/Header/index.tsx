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

          <Link to="/companies">
            <span>Ativos</span>
          </Link>

          <Link to="/companies">
            <span>Informações</span>
          </Link>
        </Items>
      </NavBarContainer>
    </Container>
  );
}
