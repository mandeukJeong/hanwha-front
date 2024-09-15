import { privateApi } from './index';

export const getTeamInfo = async () => {
  const response = await privateApi.get('/chat/team');
  return response;
};

export const makeChatRoom = async (ourTeam, vsTeam, startDate) => {
  const response = await privateApi.post('/chat/new', {
    ourTeam,
    vsTeam,
    startDate,
  });
  return response;
};
