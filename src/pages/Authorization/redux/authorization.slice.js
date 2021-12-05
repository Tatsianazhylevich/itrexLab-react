import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { registration, login } from '../../../services';
import * as tokenRepository from '../../../services';

export const createUser = createAsyncThunk(
  'login/createUser',
  async (params, { rejectWithValue }) => {
    try {
      const response = await registration(params);
      const token = response.data.access_token;
      if (token) {
        tokenRepository.setToken(token);
      }
      return response.statusText;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const loginUser = createAsyncThunk(
  'login/loginUser',
  async (params, { rejectWithValue }) => {
    try {
      const response = await login(params);
      const token = response.data.access_token;
      if (token) {
        tokenRepository.setToken(token);
      }
      return response.statusText;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const authorizationSlice = createSlice({
  name: 'login',
  initialState: {
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => ({
      ...state,
      status: action.payload,
    }));
    builder.addCase(createUser.rejected,
      (state) => ({
        ...state,
        status: 'rejected',
      }));

    builder.addCase(loginUser.fulfilled, (state, action) => ({
      ...state,
      status: action.payload,
    }));
    builder.addCase(loginUser.rejected,
      (state) => ({
        ...state,
        status: 'rejected',
      }));
  },
});

export const authorizationReducer = authorizationSlice.reducer;
