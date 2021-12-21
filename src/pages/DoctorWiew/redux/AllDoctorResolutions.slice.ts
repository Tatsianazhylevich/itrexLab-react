import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { allResolutionsForDoctor } from 'api';
import { DoctorResolutionType,  } from 'pages'

type AllResolutionsType = {
  offset: number,
  limit: number
}

export const getResolutions = createAsyncThunk(
  'doctorAppointments/getResolutions',
  async (params: AllResolutionsType, { rejectWithValue }) => {
    try {
      const response = await allResolutionsForDoctor(params);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);


interface InitialStateTypes {
  loading: boolean,
  error: string | null,
  resolutions: DoctorResolutionType | { resolutions: [] },
}

const initialState = {
  loading: false,
  error: null,
  resolutions: { resolutions: [] },
} as InitialStateTypes

const allDoctorResolutions = createSlice({
  name: 'doctorResolutions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getResolutions.pending, (state) => ({ ...state, loading: true, }));
    builder.addCase(getResolutions.fulfilled, (state, action: PayloadAction<DoctorResolutionType>) => ({
      ...state,
      loading: false,
      resolutions: action.payload,
    }));
    builder.addCase(getResolutions.rejected, (state, action: PayloadAction<any>) => ({
      ...state,
      loading: false,
      error: action.payload,
      resolutions: { resolutions: [] },
    }));
  },
});

export const allDoctorResolutionsReducer = allDoctorResolutions.reducer;
