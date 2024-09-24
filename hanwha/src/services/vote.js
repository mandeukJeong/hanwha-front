import { privateApi } from './index';

export const getVoteList = async () => {
  const response = await privateApi.get('/vote');
  return response;
};
