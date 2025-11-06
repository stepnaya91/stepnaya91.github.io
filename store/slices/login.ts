import { createSlice } from '@reduxjs/toolkit';
import { AppState } from 'store/index';


const loginSlice = createSlice({
  name: 'login',
  initialState: "",
  reducers: {
    set: (_, action) => action.payload
  },
});
export const loginActions = loginSlice.actions;

export const loginSelectors = {
  admin: (state: AppState): boolean => state.login=="admin"
};

export const login = loginSlice.reducer;