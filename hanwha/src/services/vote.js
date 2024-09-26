import { privateApi } from './index';

export const getVoteList = async () => {
  const response = await privateApi.get('/vote');
  return response;
};

export const updateVoteList = async (voteDone) => {
  const response = await privateApi.post('/vote/complete', { voteDone });
  return response;
};

export const isUserVoted = async () => {
  const response = await privateApi.get('/vote/done');
  return response;
};

export const getVoteRank = async () => {
  const response = await privateApi.get('/vote/rank');
  return response;
};
