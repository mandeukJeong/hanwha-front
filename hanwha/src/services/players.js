import { privateApi } from './index';

export const getPlayerList = async (posCd) => {
  const response = await privateApi.get('/players', {
    params: {
      posCd,
    },
  });
  return response;
};
