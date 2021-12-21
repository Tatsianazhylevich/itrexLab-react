import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { allPatientAppointments } from 'api';
import { PatientAppointmentsType } from 'pages'

type AllAppointmentsType = {
  offset: number,
  limit: number
}

export const getAllAppointmentsforPatient = createAsyncThunk(
  'patientAppointments/getAllAppointmentsforPatient',
  async (params: AllAppointmentsType, { rejectWithValue }) => {
    try {
      const response = await allPatientAppointments(params);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

interface InitialStateTypes {
  loading: boolean,
  error: string | null,
  appointments: PatientAppointmentsType | { appointments:[] },
}

const initialState = {
  loading: false,
  error: null,
  appointments: { appointments:[] },
} as InitialStateTypes

const allPatientAppointmentsSlice = createSlice({
  name: 'patientAppointments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllAppointmentsforPatient.pending, (state) => ({ ...state, loading: true }));
    builder.addCase(getAllAppointmentsforPatient.fulfilled, (state, action: PayloadAction<PatientAppointmentsType>) => ({
      ...state,
      loading: false,
      appointments: action.payload,
    }));
    builder.addCase(getAllAppointmentsforPatient.rejected, (state, action: PayloadAction<any> ) => ({
      ...state,
      loading: false,
      appointments: { appointments:[] },
      error: action.payload,

    }));
  },
});

export const allPatientAppointmentsReducer = allPatientAppointmentsSlice.reducer;
