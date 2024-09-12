import { privateApi } from './index';

export const postGalleryImages = async (formData) => {
  const response = await privateApi.post('/gallery/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response;
};
