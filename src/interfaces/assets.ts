// Criando interface para Assets, vindo da api, todas as info disponíveis.

export interface AssetsInfo {
    id: number;
    sensors: Array<string>;
    model: string;
    status: string;
    healthscore: number;
    name: string;
    image: string;
    metrics: {
      totalCollectsUptime: number;
      totalUptime: number;
      lastUptimeAt: string;
    };
    specifications: {
      maxTemp: number;
      rpm: number | null;
      power: number;
    };
    unitId: number;
    companyId: number;
  }
  