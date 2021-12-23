import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { allResolutionsForPatient } from 'api';
import { PatientResolutionType,  } from 'pages'

type AllResolutionsType = {
  offset: number,
  limit: number
}

export const getPatientResolutions = createAsyncThunk(
  'patientResolutions/getResolutions',
  async (params: AllResolutionsType, { rejectWithValue }) => {
    try {
      const response = await allResolutionsForPatient(params);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);


interface InitialStateTypes {
  loading: boolean,
  error: string | null,
  resolutions: PatientResolutionType | { resolutions: [] },
}

const initialState = {
  loading: false,
  error: null,
  resolutions: { resolutions: [] },
} as InitialStateTypes

const allPatientResolutions = createSlice({
  name: 'patientResolutions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPatientResolutions.pending, (state) => ({ ...state, loading: true, }));
    builder.addCase(getPatientResolutions.fulfilled, (state, action: PayloadAction<PatientResolutionType>) => ({
      ...state,
      loading: false,
      resolutions: action.payload,
    }));
    builder.addCase(getPatientResolutions.rejected, (state, action: PayloadAction<any>) => ({
      ...state,
      loading: false,
      error: action.payload,
      resolutions: { resolutions: [] },
    }));
  },
});

export const allPatientResolutionsReducer = allPatientResolutions.reducer;
