import { privateApi, publicApi } from './index';

export const postGalleryImages = async (formData) => {
  const response = await privateApi.post('/api/gallery/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response;
};

export const getGalleryImages = async (pageNum, order, renderNum) => {
  const response = await publicApi.get('/api/gallery/lists', {
    params: {
      pageNum,
      order,
      renderNum,
    },
  });
  return response;
};

export const getPostDetail = async (id) => {
  const response = await privateApi.get('/api/gallery/detail', {
    params: {
      id,
    },
  });
  return response;
};

export const increaseHeart = async (id) => {
  const response = await privateApi.put(`/api/gallery/heart?id=${id}`);
  return response;
};
