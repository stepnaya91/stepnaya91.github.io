import { createSlice } from '@reduxjs/toolkit';
import { AppState } from 'store';

const initSlice = createSlice({
  name: 'init',
  initialState: true,
  reducers: {},
});
export const initActions = initSlice.actions;

export const initSelectors = {
  get: (state: AppState): AppState['init'] => {
    return state.init;
  },
};

export const init = initSlice.reducer;