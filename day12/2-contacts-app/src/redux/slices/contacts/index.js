import { createSlice, nanoid } from '@reduxjs/toolkit';

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
  reducers: {
    addItem: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: (payload) => {
        return {
          payload: {
            id: nanoid(),
            ...payload,
          },
        };
      },
    },
  },
});

export const { addItem } = contactsSlice.actions;

export default contactsSlice.reducer;
