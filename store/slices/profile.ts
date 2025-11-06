import { createSlice } from '@reduxjs/toolkit';
import { Profile } from 'src/types/Profile';
import { AppState } from 'store/index';

const initialState: Profile = null;

const profileSlice = createSlice({
  name: 'profile',
  initialState: initialState,
  reducers: {
    set: (_, action) => action.payload
  },
});
export const profileActions = profileSlice.actions;

export const profileSelectors = {
  get: (state: AppState): AppState['profile'] => state.profile
};

export const profile = profileSlice.reducer;
