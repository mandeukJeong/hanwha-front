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

export const getChatRoomList = async () => {
  const response = await privateApi.get('/chat/list');
  return response;
};

export const getOneChatRoom = async (id) => {
  const response = await privateApi.get(`/chat/room?id=${id}`);
  return response;
};

export const increaseMember = async (id) => {
  const response = await privateApi.put(`/chat/member?id=${id}`);
  return response;
};

export const removeMember = async (id) => {
  const response = await privateApi.put(`/chat/remove?id=${id}`);
  return response;
};
