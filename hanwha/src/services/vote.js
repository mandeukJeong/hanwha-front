import { privateApi } from './index';

export const getVoteList = async () => {
  const response = await privateApi.get('/api/vote');
  return response;
};

export const updateVoteList = async (voteDone) => {
  const response = await privateApi.post('/api/vote/complete', { voteDone });
  return response;
};

export const isUserVoted = async () => {
  const response = await privateApi.get('/api/vote/done');
  return response;
};

export const getVoteRank = async () => {
  const response = await privateApi.get('/api/vote/rank');
  return response;
};

export const getVoteResult = async (id) => {
  const response = await privateApi.get(`/api/vote/result?id=${id}`);
  return response;
};
