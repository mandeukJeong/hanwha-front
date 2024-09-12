import { createSlice } from '@reduxjs/toolkit';

const modal = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    modalText: '',
    modalBtnText: '',
  },
  reducers: {
    changeModalInfo(state, { payload: { isOpen, modalText, modalBtnText } }) {
      state.isOpen = isOpen;
      state.modalText = modalText;
      state.modalBtnText = modalBtnText;
    },
  },
});

export const { changeModalInfo } = modal.actions;

export default modal;
