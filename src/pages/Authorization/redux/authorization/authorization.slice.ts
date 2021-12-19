import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { registration, login } from '../../../../api';
import * as tokenRepository from '../../../../api';
import { responceNotify, errorNotify } from 'components';
import { notifyMessages } from 'shared';

export const createUser = createAsyncThunk(
  'login/createUser',
  async (params: {}, { rejectWithValue }) => {
    try {
      const response = await registration(params);
      responceNotify(notifyMessages.signUp);
      const token = response.data.access_token;
      if (token) {
        tokenRepository.setToken(token);
      }
      return response.statusText;
    } catch (error: any) {
      errorNotify(notifyMessages.signUp);
      return rejectWithValue(error.response.data);
    }
  },
);

export const loginUser = createAsyncThunk(
  'login/loginUser',
  async (params: {}, { rejectWithValue }) => {
    try {
      const response = await login(params);
      responceNotify(notifyMessages.signIn);
      const token = response.data.access_token;
      if (token) {
        tokenRepository.setToken(token);
      }
      return response.statusText;
    } catch (error: any) {
      errorNotify(notifyMessages.failedSignin);
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
    builder.addCase(createUser.fulfilled, (state, action: PayloadAction<string>) => ({
      ...state,
      status: action.payload,
    }));
    builder.addCase(createUser.rejected,
      (state) => ({
        ...state,
        status: 'rejected',
      }));

    builder.addCase(loginUser.fulfilled, (state, action: PayloadAction<string>) => ({
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
