import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [
      {
        id: '1',
        name: 'Ahmet',
      },
      {
        id: '2',
        name: 'Ayşe',
      },
    ],
  },
  reducers: {},
});

export default contactsSlice.reducer;
