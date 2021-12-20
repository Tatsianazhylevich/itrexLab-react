import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUserProfile } from '../../../../api';

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
    status: 'idle',
    profile: {},
    error: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userProfile.pending, (state, action) => ({
      ...state,
      loading: true,
      status: 'pending',
      profile: {},
    }));
    builder.addCase(userProfile.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      status: 'fulfilled',
      profile: action.payload,
    }));
    builder.addCase(userProfile.rejected,
      (state, action) => ({
        ...state,
        status: 'rejected',
        profile: {},
        error: action.error.message,
      }));
  },
});

export const userReducer = userSlice.reducer;
