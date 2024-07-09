import axios from 'axios';

export const register = async (email, nickname, password) => {
  const response = await axios.post('/user/register', {
    email,
    nickname,
    password,
  });
  return response;
};

export const login = async (email, password) => {
  const response = await axios.post('/user/login', {
    email,
    password,
  });
  return response;
};
