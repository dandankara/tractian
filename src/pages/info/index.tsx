import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Exporting from "highcharts/modules/exporting";
import Header from "../../components/Header";
import { AssetsInfo } from "../../interfaces";

import api from "../../services/api";
import { Button, ContainerContent, ButtonContainer } from "../unitys/style";
import { Content } from "./style";
import { ContentGraph } from "../assets/style";

Exporting(Highcharts);

const Info: React.FC = () => {
  const [assets, setAssets] = useState<AssetsInfo[]>([]);
  const [heal, setHeal] = useState(true);
  const [power, setPower] = useState(false);
  const [rotation, setRotation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      api.get("assets").then((res) => {
        if (res.status === 200) {
          setAssets(res.data);
        } else {
          console.log("deu ruim");
        }
      });
    }, 5000);
  });

  const HealButton = (): void => {
    setHeal(true);
    setPower(false);
    setRotation(false);
  };

  const PoweButton = (): void => {
    setPower(true);
    setHeal(false);
    setRotation(false);
  };

  const RotationButton = (): void => {
    setRotation(true);
    setHeal(false);
    setPower(false);
  };

  const optionHeal = {
    chart: {
      type: "column",
      backgroundColor: "#f8f8f8",
      borderRadius: 12,
    },
    title: {
      text: "Saúde dos ativos",
    },
    subtitle: {
      text: "",
    },
    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    xAxis: {
      type: "category",
    },
    yAxis: {
      title: {
        text: "Saúde em %",
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: "{point.y:.1f}%",
        },
      },
    },

    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>',
    },

    series: [
      {
        name: "Ativos",
        colorByPoint: true,
        data: assets.map((asset) => {
          return {
            name: asset.name,
            y: asset.healthscore,
            drilldown: asset.name,
          };
        }),
      },
    ],
  };

  const optionPower = {
    chart: {
      type: "column",
      backgroundColor: "#f8f8f8",
      borderRadius: 12,
    },
    title: {
      text: "Potência dos ativos das unidades",
    },
    subtitle: {
      text: "",
    },
    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    xAxis: {
      type: "category",
    },
    yAxis: {
      title: {
        text: "Potência em kWh",
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: "{point.y}",
        },
      },
    },

    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}kWh</b><br/>',
    },

    series: [
      {
        name: "Ativos",
        colorByPoint: true,
        data: assets.map((asset) => {
          return {
            name: asset.name,
            y: asset.specifications.power,
            drilldown: asset.name,
          };
        }),
      },
    ],
  };

  const optionRotation = {
    chart: {
      type: "column",
      backgroundColor: "#f8f8f8",
      borderRadius: 12,
    },
    title: {
      text: "Rotação dos ativos das unidades",
    },
    subtitle: {
      text: "",
    },
    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    xAxis: {
      type: "category",
    },
    yAxis: {
      title: {
        text: "Rotação em RPM",
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: "{point.y}",
        },
      },
    },

    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}RPM</b><br/>',
    },

    series: [
      {
        name: "Ativos",
        colorByPoint: true,
        data: assets.map((asset) => {
          return {
            name: asset.name,
            y: asset.specifications.rpm,
            drilldown: asset.name,
          };
        }),
      },
    ],
  };

  return (
    <>
      <Header />
      <ContainerContent>
        <ButtonContainer>
          <Button onClick={HealButton}>Saúde</Button>
          <Button onClick={PoweButton}>Potência</Button>
          <Button onClick={RotationButton}>Rotação</Button>
        </ButtonContainer>

        <Content>
          {heal && (
            <>
              <ContentGraph>
                <HighchartsReact highcharts={Highcharts} options={optionHeal} />
              </ContentGraph>
            </>
          )}

          {power && (
            <>
              <ContentGraph>
                <HighchartsReact
                  highcharts={Highcharts}
                  options={optionPower}
                />
              </ContentGraph>
            </>
          )}

          {rotation && (
            <>
              <ContentGraph>
                <HighchartsReact
                  highcharts={Highcharts}
                  options={optionRotation}
                />
              </ContentGraph>
            </>
          )}
        </Content>
      </ContainerContent>
    </>
  );
};

export default Info;
