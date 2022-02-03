import React, { useEffect, useState } from "react";
import { AssetsInfo, UnitInfo, UsersInfo } from "../../interfaces";
import api from "../../services/api";

import Header from "../../components/Header";
import { ButtonContainer, Container, Button } from "./style";
import { Content } from "../home/style";

const Units: React.FC = () => {
  // seta as informaçoes vinda da api no interface
  const [unit, setUnit] = useState<UnitInfo[]>([]);
  const [assets, setAssets] = useState<AssetsInfo[]>([]);
  const [users, setUsers] = useState<UsersInfo[]>([]);
  const [usersFiltered, setUsersFiltered] = useState<UsersInfo[]>([]);
  const [assetsFiltered, setAssetsFiltered] = useState<AssetsInfo[]>([]);

  useEffect(() => {
    // setar a unidade no state
    api.get("units").then((res) => {
      if (res.status === 408) {
        console.log("deu ruim units");
      } else {
        setUnit(res.data);
      }
    });
    // setar assets no state
    api.get("assets").then((res) => {
      if (res.status === 408) {
        console.log("deu ruim assets");
      } else {
        setAssets(res.data);
      }
    });
    // setar users no state
    api.get("users").then((res) => {
      if (res.status === 408) {
        console.log("deu ruim users");
      } else {
        setUsers(res.data);
      }
    });
  });

  const option = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false,
      backgroundColor: "#f8f8f8",
      borderRadius: 12,
    },
    title: {
      text: "Unidade",
      align: "center",
      verticalAlign: "middle",
      y: 60,
    },
    tooltip: {
      pointFormat:
        "{series.name} <b>{point.percentage:.1f}%</b> </br>" +
        "{series.name} <b>{point.y}</b><br/>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          distance: -50,
          style: {
            fontWeight: "bold",
            color: "white",
          },
        },
        startAngle: -90,
        endAngle: 90,
        center: ["50%", "75%"],
        size: "110%",
      },
    },
    series: [
      {
        type: "pie",
        name: "",
        innerSize: "50%",
        data: [
          ["Usuários", usersFiltered.length],
          ["Ativos", assetsFiltered.length],
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <Container>
        <Content>
          <ButtonContainer>
            <Button>
              <span>Todas Unidades</span>
            </Button>
            <Button>
              <span>teste</span>
            </Button>
            <Button>
              <span>teste</span>
            </Button>
          </ButtonContainer>
        </Content>
      </Container>
    </>
  );
};

export default Units;
