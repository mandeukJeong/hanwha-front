import { createSlice } from '@reduxjs/toolkit';

const modal = createSlice({
  name: 'modal',
  initialState: {
    isOpen: true,
    modalText: '',
  },
  reducers: {
    changeModalInfo(state, { payload: { isOpen, modalText } }) {
      state.isOpen = isOpen;
      state.modalText = modalText;
    },
  },
});

export const { changeModalInfo } = modal.actions;

export default modal;
