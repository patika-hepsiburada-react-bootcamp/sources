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
    removeItem: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);

      if (index > -1) {
        state.items.splice(index, 1);
      }
    },
  },
});

export const itemsSelector = (state) => state.contacts.items;

export const { addItem, removeItem } = contactsSlice.actions;

export default contactsSlice.reducer;
