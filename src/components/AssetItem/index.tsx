import React, { useState } from "react";
import { AssetsInfo } from "../../interfaces";
import { Modal } from "react-responsive-modal";

import { ModalText, Container } from "./style";

export interface AssetProps {
  asset: AssetsInfo;
}

const UnityItem: React.FC<AssetProps> = ({ asset }) => {
  const [open, setOpen] = useState(false);

  const OpenModal = () => setOpen(true);
  const CloseModal = () => setOpen(false);

  // arrendondar um número inteiro mais próximo
  const totalUptime = Math.round(asset.metrics.totalUptime);
  const lastUptimeAt = new Date(asset.metrics.lastUptimeAt)
    .toISOString()
    .replace(/T.*/, "")
    .split("-")
    .reverse()
    .join("/");
  //Formataçã oda DATE
  return (
    <>
      <Container>
        <img src={asset.image} alt={asset.name} />
        <p>{asset.name}</p>
        <p>Modelo: {asset.model === "motor" ? "Motor" : "Ventilador"}</p>
        <p>Sensor: {asset.sensors}</p>
        <button type="button" onClick={OpenModal}>
          <p>Informações</p>
        </button>

        <Modal
          open={open}
          onClose={CloseModal}
          center
          styles={{ modal: { borderRadius: "10px" } }}
        >
          <ModalText>
            <h2>{asset.name}</h2>
            <p>Modelo: {asset.model === "motor" ? "Motor" : "Ventilador"}</p>
            {asset.status === "inAlert" && (
              <p>
                Status: <span style={{ color: "#de9d26" }}>Em alerta</span>
              </p>
            )}
            {asset.status === "inOperation" && (
              <p>
                Status: <span style={{ color: "#26de45" }}>Em Operação</span>
              </p>
            )}
            {asset.status === "inDowntime" && (
              <p>
                Status: <span style={{ color: "#b01b19" }}>Em Parada</span>
              </p>
            )}
            {asset.status === undefined && <p>Status: -</p>}

            <p>Saúde: {asset.healthscore ? `${asset.healthscore}%` : "-"}</p>
            <p>Total de coletas: {asset.metrics.totalCollectsUptime}</p>
            <p>Total de Horas de coletas: {totalUptime} horas</p>
            <p>Ultima Coleta: {lastUptimeAt || "-"}</p>
            <p>Máxima temperatura: {asset.specifications.maxTemp}ºC</p>
            <p>Unidade: {asset.unitId === 1 ? "Jaguar" : "Tobias"}</p>
            <p>Empresa: {asset.companyId === 1 && "Teste"}</p>
          </ModalText>
        </Modal>
      </Container>
    </>
  );
};

export default UnityItem;
