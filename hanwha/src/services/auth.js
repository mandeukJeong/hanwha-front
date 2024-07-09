import { privateApi, publicApi } from './index';

export const register = async (email, nickname, password) => {
  const response = await publicApi.post('/user/register', {
    email,
    nickname,
    password,
  });
  return response;
};

export const login = async (email, password) => {
  const response = await publicApi.post('/user/login', {
    email,
    password,
  });
  return response;
};

export const getUser = async () => {
  const response = await privateApi.get('/user');
  return response;
};
