import { configureStore } from '@reduxjs/toolkit';
import user from './user';
import modal from './modal';

export default configureStore({
  reducer: { user: user.reducer, modal: modal.reducer },
});
