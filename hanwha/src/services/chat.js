import { privateApi } from './index';

export const getTeamInfo = async () => {
  const response = await privateApi.get('/api/chat/team');
  return response;
};

export const makeChatRoom = async (ourTeam, vsTeam, startDate) => {
  const response = await privateApi.post('/api/chat/new', {
    ourTeam,
    vsTeam,
    startDate,
  });
  return response;
};

export const getChatRoomList = async () => {
  const response = await privateApi.get('/api/chat/list');
  return response;
};

export const getOneChatRoom = async (id) => {
  const response = await privateApi.get(`/api/chat/room?id=${id}`);
  return response;
};

export const increaseMember = async (id) => {
  const response = await privateApi.put(`/api/chat/member?id=${id}`);
  return response;
};

export const removeMember = async (id) => {
  const response = await privateApi.put(`/api/chat/remove?id=${id}`);
  return response;
};

export const getChatMessage = async (id) => {
  const response = await privateApi.get(`/api/chat/message?id=${id}`);
  return response;
};
