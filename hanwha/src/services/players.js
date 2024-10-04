import { privateApi } from './index';

export const getPlayerList = async (posCd) => {
  const response = await privateApi.get('/api/players', {
    params: {
      posCd,
    },
  });
  return response;
};

export const getPlayerProfile = async (pCd) => {
  const response = await privateApi.get(`/api/players/${pCd}`);
  return response;
};

export const getPlayerScore = async (pCd) => {
  const response = await privateApi.get('/api/players/score', {
    params: {
      pCd,
    },
  });
  return response;
};
