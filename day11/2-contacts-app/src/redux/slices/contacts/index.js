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
    removeItem: contactAdapter.removeOne,
    removeAllItems: contactAdapter.removeAll,
    updateItem: contactAdapter.updateOne,
  },
});

export const { addItem, addItems, removeItem, updateItem, removeAllItems } = contactsSlice.actions;

export default contactsSlice.reducer;
