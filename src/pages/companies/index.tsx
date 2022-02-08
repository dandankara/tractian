import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Container, ContainerGraph, Text } from "./style";
import Loader from "../../components/Loader";
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

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const getCompaniesPromisse = api.get("companies");
    const getUnitsPromisse = api.get("units");
    const getAssetsPromisse = api.get("assets");
    const getUsersPromisse = api.get("users");

    Promise.all([
      getCompaniesPromisse,
      getUnitsPromisse,
      getAssetsPromisse,
      getUsersPromisse,
    ]).then((values) => {
      if (values[0].status === 200) {
        setCompanies(values[0].data);
      } else {
        console.log("deu ruim");
      }
      if (values[1].status === 200) {
        setUnits(values[1].data);
      } else {
        console.log("deu ruim units");
      }
      if (values[2].status === 200) {
        setAssets(values[2].data);
      } else {
        console.log("deu ruim assets");
      }
      if (values[3].status === 200) {
        setUsers(values[3].data);
      } else {
        console.log("deu ruim users");
      }
      setLoader(false)
    });
  }, []);

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
    {loader ? <Loader /> : null}
      <Container>
        <Text>
          <p>Quantidade de ativos: {assets.length}</p>
          <p>Usuários cadastrados: {users.length}</p>
          <p>Empresas em funcionamento: {companies.length}</p>
          <p>Unidades em operação: {units.length}</p>
          <p>Segue os dados base como exemplo da {companies[0]?.name}:</p>
        </Text>

        <ContainerGraph>
          <HighchartsReact highcharts={Highcharts} options={option} />
        </ContainerGraph>
      </Container>
    </>
  );
}
