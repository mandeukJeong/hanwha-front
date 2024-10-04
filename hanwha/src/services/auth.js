import { privateApi, publicApi } from './index';

export const register = async (email, nickname, password) => {
  const response = await publicApi.post('/api/user/register', {
    email,
    nickname,
    password,
  });
  return response;
};

export const login = async (email, password) => {
  const response = await publicApi.post('/api/user/login', {
    email,
    password,
  });
  return response;
};

export const getUser = async () => {
  const response = await privateApi.get('/api/user');
  return response;
};

export const logout = async () => {
  const response = await privateApi.post('/api/user/logout');
  return response;
};

export const sendEmail = async (email) => {
  const response = await publicApi.post('/api/user/email', { email });
  return response;
};

export const checkAuth = async (email, verifyNumber) => {
  const response = await publicApi.post('/api/user/check', {
    email,
    verifyNumber,
  });
  return response;
};

export const changePassword = async (email, verifyNumber, password) => {
  const response = await publicApi.post('/api/user/password', {
    email,
    verifyNumber,
    password,
  });
  return response;
};
