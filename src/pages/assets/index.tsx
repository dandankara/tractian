import React, { useState, useEffect } from "react";
import { AssetsInfo, UnitInfo } from "../../interfaces";
import { Container, ContentGraph } from "./style";
import Header from "../../components/Header";
import AssetItem from "../../components/AssetItem";
import Loader from '../../components/Loader';
import api from "../../services/api";
import { Button, ButtonContainer, ContainerContent } from "../unitys/style";

const Assets: React.FC = () => {
  const [unit, setUnit] = useState<UnitInfo[]>([]);
  const [assets, setAssets] = useState<AssetsInfo[]>([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const getUnitiesPromisse = api.get("units");
    const getAssetsPromisse = api.get("assets");
    
    Promise.all([getUnitiesPromisse, getAssetsPromisse]).then((values) => {
        if (values[0].status === 200) {
          setUnit(values[0].data);
        } else {
          console.log("deu ruim units");
        }

        if (values[1].status === 200) {
          setAssets(values[1].data);
        } else {
          console.log("deu ruim assets");
        }
        setLoader(false)
      });
  },[]);

  const AllUnities = (): void => {
    api.get("assets").then((res) => {
      setAssets(res.data);
    });
  };

  // Seleciona a unidade com ID 1 pra renderizar
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

  // Seleciona a unidade com id 2 para renderizar
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
      {loader ? <Loader /> : null}

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
