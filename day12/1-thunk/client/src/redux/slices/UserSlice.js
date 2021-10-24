import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

const BASE_ENDPOINT = 'http://localhost:5000';

export const getUserAsync = createAsyncThunk('getUsersAsync', async () => {
  const res = await axios(`${BASE_ENDPOINT}/users`);
  return res.data;
});

export const postUserAsync = createAsyncThunk('postUsersAsync', async (data) => {
  const res = await axios.post(`${BASE_ENDPOINT}/users`, data);
  return res.data;
});

export const UserSlice = createSlice({
  name: 'user',
  initialState: {
    items: [],
    loading: false,
    error: null,
    new_user_loading: false,
  },
  reducers: {},
  extraReducers: {
    // getUserAsync
    [getUserAsync.pending]: (state) => {
      state.loading = true;
    },
    [getUserAsync.fulfilled]: (state, action) => {
      state.loading = false;
      state.items = action.payload;
    },
    [getUserAsync.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },

    // postUserAsync
    [postUserAsync.pending]: (state) => {
      state.new_user_loading = true;
    },
    [postUserAsync.fulfilled]: (state, action) => {
      state.new_user_loading = false;
      state.items.push(action.payload);
    },
    [postUserAsync.rejected]: (state) => {
      state.new_user_loading = false;
    },
  },
});

export default UserSlice.reducer;
