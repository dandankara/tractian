import React, { useState, useEffect } from "react";
import { AssetsInfo, UnitInfo } from "../../interfaces";
import { Container, ContentGraph } from "./style";
import Header from "../../components/Header";
import AssetItem from "../../components/AssetItem";

import api from "../../services/api";
import { Button, ButtonContainer, ContainerContent } from "../unitys/style";

const Assets: React.FC = () => {
  const [unit, setUnit] = useState<UnitInfo[]>([]);
  const [assets, setAssets] = useState<AssetsInfo[]>([]);

  useEffect(() => {
    setTimeout(() => {
      api.get("units").then((rest) => {
        if (rest.status === 200) {
          setUnit(rest.data);
        } else {
          console.log("deu ruim units");
        }
      });
      api.get("assets").then((rest) => {
        if (rest.status === 200) {
          setAssets(rest.data);
        } else {
          console.log("deu ruim assets");
        }
      });
    }, 2000);
  });

  const AllUnities = (): void => {
    api.get("assets").then((res) => {
      setAssets(res.data);
    });
  };

  const Unity1 = (): void => {
    api
      .get("assets", {
        params: {
          unitId: 1,
        },
      })
      .then((res) => {
        setAssets(res.data);
      });
  };

  const Unity2 = (): void => {
    api
      .get("assets", {
        params: {
          unitId: 2,
        },
      })
      .then((res) => {
        setAssets(res.data);
      });
  };

  return (
    <>
      <Header />
      <Container>
        <ContainerContent>
          <ButtonContainer>
            <Button onClick={AllUnities}>Ativos</Button>
            <Button onClick={Unity1}>{unit[0]?.name}</Button>
            <Button onClick={Unity2}>{unit[1]?.name}</Button>
          </ButtonContainer>
          <>
            <ContentGraph>
              {assets.map((asset: AssetsInfo) => (
                <AssetItem key={asset.id} asset={asset} />
              ))}
            </ContentGraph>
          </>
        </ContainerContent>
      </Container>
    </>
  );
};

export default Assets;
