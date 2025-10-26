import { createSlice } from '@reduxjs/toolkit';
import { AppState } from 'store/index';


const tokenSlice = createSlice({
  name: 'token',
  initialState: localStorage.getItem('token'),
  reducers: {
    gen: () => Math.random().toString(16),
    empty: () => null,
  },
});
export const tokenActions = tokenSlice.actions;

export const tokenSelectors = {
  get: (state: AppState): AppState['token'] => {
    return state.token;
  },
};

export const token = tokenSlice.reducer;