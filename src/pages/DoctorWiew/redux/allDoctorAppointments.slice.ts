import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { allAppointmentsForDoctor } from '../../../api';
import { AppointmentForDoctor } from '../../types'

export const getPatients = createAsyncThunk(
  'doctorAppointments/getPatients',
  async (_, { rejectWithValue }) => {
    try {
      const response = await allAppointmentsForDoctor(0, 20);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

interface InitialStateTypes {
  loading: boolean,
  error: string | null,
  patients: AppointmentForDoctor[] | []
}

const initialState = {
  loading: false,
  error: null,
  patients: [],
} as InitialStateTypes

const allDoctorAppointments = createSlice({
  name: 'doctorAppointments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPatients.pending, (state) => ({
      ...state,
      loading: true,
      patients: [],
    }));
    builder.addCase(getPatients.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      patients: action.payload,
    }));
    builder.addCase(getPatients.rejected, (state, action: PayloadAction<any>) => ({
      ...state,
      loading: false,
      error: action.payload,
      patients: [],
    }));
  },
});

export const allDoctorAppointmentsReducer = allDoctorAppointments.reducer;
