import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUserProfile } from '../../../services';
// import * as tokenRepository from '../../../services';

export const userProfile = createAsyncThunk(
  'user/userProfile',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getUserProfile();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },

);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    profile: {},
    error: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userProfile.pending, (state, action) => ({
      ...state,
      loading: true,
      profile: {},
    }));
    builder.addCase(userProfile.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      profile: action.payload,
    }));
    builder.addCase(userProfile.rejected,
      (state) => ({
        ...state,
        profile: {},
      }));
  },
});

export const userReducer = userSlice.reducer;
