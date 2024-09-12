import { createSlice } from '@reduxjs/toolkit';

const modal = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    modalText: '',
    modalBtnText: '',
    modalToLink: null,
  },
  reducers: {
    changeModalInfo(
      state,
      { payload: { isOpen, modalText, modalBtnText, modalToLink } }
    ) {
      state.isOpen = isOpen;
      state.modalText = modalText;
      state.modalBtnText = modalBtnText;
      state.modalToLink = modalToLink;
    },
  },
});

export const { changeModalInfo } = modal.actions;

export default modal;
