import { configureStore } from '@reduxjs/toolkit';

import users from './slices/UserSlice';

export default configureStore({
  reducer: {
    users,
  },
});
