import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Container, ContainerGraph, Text } from "./style";

import Header from "../../components/Header";

import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import Exporting from "highcharts/modules/exporting";
import {
  AssetsInfo,
  CompaniesInfo,
  UnitInfo,
  UsersInfo,
} from "../../interfaces";

Exporting(Highcharts);

export default function Companies() {
  const [companies, setCompanies] = useState<CompaniesInfo[]>([]);
  const [units, setUnits] = useState<UnitInfo[]>([]);
  const [assets, setAssets] = useState<AssetsInfo[]>([]);
  const [users, setUsers] = useState<UsersInfo[]>([]);

  useEffect(() => {
    setTimeout(() => {
      api.get("companies").then((res) => {
        if (res.status === 200) {
          setCompanies(res.data);
        } else {
          console.log("deu ruim");
        }
      });

      api.get("units").then((res) => {
        if (res.status === 200) {
          setUnits(res.data);
        } else {
          console.log("deu ruim units");
        }
      });

      api.get("assets").then((res) => {
        if (res.status === 200) {
          setAssets(res.data);
        } else {
          console.log("deu ruim assets");
        }
      });

      api.get("users").then((res) => {
        if (res.status === 200) {
          setUsers(res.data);
        } else {
          console.log("deu ruim users");
        }
      });
    }, );
  });

  const option = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
      backgroundColor: "#f8f8f8",
      borderRadius: 12,
    },

    title: {
      text: `Detalhes da: ${companies[0]?.name}`,
    },

    tooltip: {
      pointFormat:
        "{series.name}: <b>{point.percentage:.1f}%</b> <br/>" +
        "{series.name}: <b>{point.y}</b><br/>",
    },

    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },

    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    series: [
      {
        name: "Data",
        colorByPoint: true,
        data: [
          {
            name: "Empresa",
            y: companies.length,
            sliced: true,
            selected: true,
          },
          {
            name: "Unidades",
            y: units.length,
          },
          {
            name: "Ativos",
            y: assets.length,
          },
          {
            name: "Usuários",
            y: users.length,
          },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <Container>
        <Text>
          <p>Quantidade de ativos: {assets.length}</p>
          <p>Quantidade de usuários no: {users.length}</p>
          <p>Quantidade de empresas atualmente: {companies.length}</p>
          <p>Quantidade unidades em funcionamento: {units.length}</p>
          <p>Segue os dados base como exemplo da {companies[0]?.name}:</p>
        </Text>

        <ContainerGraph>
          <HighchartsReact highcharts={Highcharts} options={option} />
        </ContainerGraph>
      </Container>
    </>
  );
}
