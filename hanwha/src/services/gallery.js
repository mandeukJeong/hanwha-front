import { privateApi } from './index';

export const postGalleryImages = async (formData) => {
  const response = await privateApi.post('/gallery/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response;
};

export const getGalleryImages = async (pageNum, order, renderNum) => {
  const response = await privateApi.get('/gallery/lists', {
    params: {
      pageNum,
      order,
      renderNum,
    },
  });
  return response;
};

export const getPostDetail = async (id) => {
  const response = await privateApi.get('/gallery/detail', {
    params: {
      id,
    },
  });
  return response;
};
