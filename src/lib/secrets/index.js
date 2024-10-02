const getEnv = name => {
  return import.meta.env[`VITE_${name}`]
};

export const API_BASE_URL = getEnv('API_BASE_URL');
export const ENV_MODE = getEnv('ENV_MODE');
