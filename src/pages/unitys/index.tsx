import React, { useEffect, useState } from "react";
import { AssetsInfo, UnitInfo, UsersInfo } from "../../interfaces";
import api from "../../services/api";
import Highcharts from "highcharts";
import Exporting from "highcharts/modules/exporting";

import Header from "../../components/Header";
import {
  ButtonContainer,
  Container,
  Button,
  DataItem,
  Graph,
  ContainerContent,
} from "./style";
import { Content } from "../home/style";

import UnidadeItem from "../../components/UnitItem";
import HighchartsReact from "highcharts-react-official";

Exporting(Highcharts);

const Units: React.FC = () => {
  // seta as informaçoes vinda da api no interface
  const [unit, setUnit] = useState<UnitInfo[]>([]);
  const [all, setAll] = useState(true);
  const [unit0, setUnit0] = useState(false);
  const [unit1, setUnit1] = useState(false);
  const [assets, setAssets] = useState<AssetsInfo[]>([]);
  const [users, setUsers] = useState<UsersInfo[]>([]);
  const [usersFiltered, setUsersFiltered] = useState<UsersInfo[]>([]);
  const [assetsFiltered, setAssetsFiltered] = useState<AssetsInfo[]>([]);

  useEffect(() => {
    setTimeout(() => {
      api.get("units").then((res) => {
        if (res.status === 408) {
          console.log("deu ruim units");
        } else {
          setUnit(res.data);
        }
      });
      api.get("assets").then((res) => {
        if (res.status === 408) {
          console.log("deu ruim assets");
        } else {
          setAssets(res.data);
        }
      });
      api.get("users").then((res) => {
        if (res.status === 408) {
          console.log("deu ruim users");
        } else {
          setUsers(res.data);
        }
      });
    }, 3000);
  });

  const AllUnit = (): void => {
    //Mantem o valor de all true
    //e troca o valor de unit0 e unit1 pra não mostrar
    setAll(true);
    setUnit0(false);
    setUnit1(false);
  };

  const UnitX = (): void => {
    setAll(false);
    setUnit0(true);
    setUnit1(false);

    setAssetsFiltered(assets.filter((asset) => asset.unitId === 1));
    setUsersFiltered(users.filter((user) => user.unitId === 1));
  };

  const UnitY = (): void => {
    setAll(false);
    setUnit0(false);
    setUnit1(true);

    setAssetsFiltered(assets.filter((asset) => asset.unitId === 2));
    setUsersFiltered(users.filter((user) => user.unitId === 2));
  };

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
        <ContainerContent>
          <ButtonContainer>
            <Button onClick={AllUnit}>
              <span>Todas Unidades</span>
            </Button>
            <Button onClick={UnitX}>
              {/* Pega o índice 0 do nome e coloca no span */}
              <span>{unit[0]?.name}</span>
            </Button>
            <Button onClick={UnitY}>
              {/* Pega o índice 1 do nome e coloca no span */}
              <span>{unit[1]?.name}</span>
            </Button>
          </ButtonContainer>
          <Content>
            <>
              {all && (
                <>
                  <DataItem>
                    {unit.map((eachUnity: UnitInfo) => (
                      <UnidadeItem key={eachUnity.id} eachUnity={eachUnity} />
                    ))}
                  </DataItem>
                  {unit0 && (
                    <Graph>
                      <HighchartsReact
                        highcharts={Highcharts}
                        options={option}
                      />
                    </Graph>
                  )}

                  {unit1 && (
                    <Graph>
                      <HighchartsReact
                        highcharts={Highcharts}
                        options={option}
                      />
                    </Graph>
                  )}
                </>
              )}
            </>
          </Content>
        </ContainerContent>
      </Container>
    </>
  );
};

export default Units;
