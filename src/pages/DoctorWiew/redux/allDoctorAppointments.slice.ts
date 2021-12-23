import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { allAppointmentsForDoctor } from 'api';
import { DoctorAppointmentsType } from 'pages'

type AllAppointmentsType = {
  offset: number,
  limit: number
}

export const getPatients = createAsyncThunk(
  'doctorAppointments/getPatients',
  async (params: AllAppointmentsType, { rejectWithValue }) => {
    try {
      const response = await allAppointmentsForDoctor(params);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

interface InitialStateTypes {
  loading: boolean,
  error: string | null,
  patients: DoctorAppointmentsType | { appointments: [] },
}

const initialState = {
  loading: false,
  error: null,
  patients: { appointments: [] },
} as InitialStateTypes

const allDoctorAppointments = createSlice({
  name: 'doctorAppointments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPatients.pending, (state) => ({ ...state, loading: true, }));
    builder.addCase(getPatients.fulfilled, (state, action: PayloadAction<DoctorAppointmentsType>) => ({
      ...state,
      loading: false,
      patients: action.payload,
    }));
    builder.addCase(getPatients.rejected, (state, action: PayloadAction<any>) => ({
      ...state,
      loading: false,
      error: action.payload,
      patients: { appointments: [] },
    }));
  },
});

export const allDoctorAppointmentsReducer = allDoctorAppointments.reducer;
