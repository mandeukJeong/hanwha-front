import { privateApi } from './index';

export const getPlayerList = async (posCd) => {
  const response = await privateApi.get('/players', {
    params: {
      posCd,
    },
  });
  return response;
};

export const getPlayerProfile = async (pCd) => {
  const response = await privateApi.get(`/players/${pCd}`);
  return response;
};

export const getPlayerScore = async (pCd, posCd) => {
  const response = await privateApi.get('/players/score', {
    params: {
      pCd,
      posCd,
    },
  });
  return response;
};
