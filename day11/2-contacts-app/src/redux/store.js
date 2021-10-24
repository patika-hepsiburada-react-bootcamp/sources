import { configureStore } from '@reduxjs/toolkit';

import contacts from 'redux/slices/contacts';

export default configureStore({
  reducer: {
    contacts,
  },
});
