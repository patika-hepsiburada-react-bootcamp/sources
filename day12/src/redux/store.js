import { configureStore } from '@reduxjs/toolkit';

import counter from './slices/counter';

export const store = configureStore({
  reducer: {
    counter,
  },
});
