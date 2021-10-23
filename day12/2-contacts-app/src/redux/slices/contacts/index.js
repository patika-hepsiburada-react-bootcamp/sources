import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

export const contactAdapter = createEntityAdapter();
const initialState = contactAdapter.getInitialState();

export const contactSelectors = contactAdapter.getSelectors((state) => state.contacts);

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addItem: contactAdapter.addOne,
    addItems: contactAdapter.addMany,
    removeItem: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);

      if (index > -1) {
        state.items.splice(index, 1);
      }
    },
    updateItem: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id);

      if (index > -1) {
        state.items[index] = action.payload.data;
      }
    },
  },
});

export const { addItem, addItems, removeItem, updateItem } = contactsSlice.actions;

export default contactsSlice.reducer;
