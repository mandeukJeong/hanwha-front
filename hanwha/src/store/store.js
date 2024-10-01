import { configureStore } from '@reduxjs/toolkit';
import user from './user';
import modal from './modal';
import header from './header';

export default configureStore({
  reducer: { user: user.reducer, modal: modal.reducer, header: header.reducer },
});
