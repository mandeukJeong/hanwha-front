import axios from 'axios';

export const publicApi = axios.create({
  withCredentials: true,
});

export const privateApi = axios.create({
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

privateApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const {
      config,
      response: { status },
    } = error;

    if (status === 401) {
      const originRequest = config;

      try {
        const response = await axios.get('/api/user/refresh');

        if (response.status === 200) {
          const newAccessToken = response.data.accessToken;
          localStorage.setItem('token', response.data.accessToken);
          originRequest.headers.Authorization = `Bearer ${newAccessToken}`;

          return axios(originRequest);
        }
      } catch (e) {
        localStorage.removeItem('token');
        alert('로그인 시간이 만료되었습니다.');
        window.location.replace('/login');
      }
    }
    return Promise.reject(error);
  }
);
