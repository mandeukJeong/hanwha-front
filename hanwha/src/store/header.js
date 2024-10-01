import { createSlice } from '@reduxjs/toolkit';

const header = createSlice({
  name: 'header',
  initialState: {
    nowPage: null,
  },
  reducers: {
    changeNowPage(state, { payload: { nowPage } }) {
      state.nowPage = nowPage;
    },
  },
});

export const { changeNowPage } = header.actions;

export default header;
