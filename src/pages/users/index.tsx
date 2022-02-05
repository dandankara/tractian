import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import UserItem from "../../components/UserItem";
import { UnitInfo, UsersInfo } from "../../interfaces";
import api from "../../services/api";
import { Button, ButtonContainer } from "../unitys/style";
import { Container, ContentContainer, UserDiv } from "./style";

const Users: React.FC = () => {
  // Preciso das informações de usuários e das unidades;
  const [unit, setUnit] = useState<UnitInfo[]>([]);
  const [users, setUsers] = useState<UsersInfo[]>([]);

  useEffect(() => {
    setTimeout(() => {
      api.get("units").then((res) => {
        if (res.status === 200) {
          setUnit(res.data);
        } else {
          console.log("deu ruim");
        }
      });

      api.get("users").then((res) => {
        if (res.status === 200) {
          setUsers(res.data);
        } else {
          console.log("deu muito ruim");
        }
      });
    }, 3000);
  });

  const Unit1 = (): void => {
    api.get('users', {
      params:{
        unitId: 1,
      },
    })
    .then((res) => {
      setUsers(res.data)
    })
  }

  const Unit2 = (): void => {
    api.get('users', {
      params:{
        unitId: 2,
      },
    })
    .then((res) => {
      setUsers(res.data)
    })
  }

  return (
    <>
      <Header />
      <Container>
        <ContentContainer>
          <ButtonContainer>
            <Button>Usuários Ativos</Button>
            <Button onClick={Unit1}>{unit[0]?.name}</Button>
            <Button onClick={Unit2}>{unit[1]?.name}</Button>
          </ButtonContainer>

          <>
            <UserDiv>
              {users.map((user: UsersInfo) => (
                <UserItem key={user.id} user={user} />
              ))}
            </UserDiv>
          </>
        </ContentContainer>
      </Container>
    </>
  );
};

export default Users;
