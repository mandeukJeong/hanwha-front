import { privateApi } from './index';

export const getTeamInfo = async () => {
  const response = await privateApi.get('/chat/team');
  return response;
};
