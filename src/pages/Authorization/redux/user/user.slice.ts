import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUserProfile } from '../../../../api';
import { UserProfileType } from 'pages';

export const userProfile = createAsyncThunk(
  'user/userProfile',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getUserProfile();
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },

);


interface InitialStateTypes {
  loading: boolean,
  status: string,
  profile?: UserProfileType,
  error: string,
}
const initialState = {
  loading: false,
  status: 'idle',
  profile: {},
  error: '',
} as InitialStateTypes

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userProfile.pending, (state) => ({
      ...state,
      loading: true,
      status: 'pending',
    }));
    builder.addCase(userProfile.fulfilled, (state, action: PayloadAction<UserProfileType>) => ({
      ...state,
      loading: false,
      status: 'fulfilled',
      profile: action.payload,
    }));
    builder.addCase(userProfile.rejected,
      (state, action: PayloadAction<any>) => ({
        ...state,
        status: 'rejected',
        error: action.payload,
      }));
  },
});

export const userReducer = userSlice.reducer;
