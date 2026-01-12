// Configuração de variáveis de ambiente tipadas

interface EnvConfig {
  apiUrl: string;
  apiTimeout: number;
  env: 'development' | 'production' | 'test';
  features: {
    auth: boolean;
    analytics: boolean;
  };
}

export const env: EnvConfig = {
  apiUrl: process.env.REACT_APP_API_URL || 'http://localhost:3001/api',
  apiTimeout: Number(process.env.REACT_APP_API_TIMEOUT) || 10000,
  env: (process.env.REACT_APP_ENV as EnvConfig['env']) || 'development',
  features: {
    auth: process.env.REACT_APP_FEATURE_AUTH === 'true',
    analytics: process.env.REACT_APP_FEATURE_ANALYTICS === 'true',
  },
};

export const isDevelopment = env.env === 'development';
export const isProduction = env.env === 'production';
export const isTest = env.env === 'test';
