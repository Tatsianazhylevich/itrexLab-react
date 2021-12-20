import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { allAppointmentsForDoctor } from '../../../api';

export const getPatients = createAsyncThunk(
  'doctorAppointments/getPatients',
  async (_, { rejectWithValue }) => {
    try {
      const response = await allAppointmentsForDoctor(0, 20);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const allDoctorAppointments = createSlice({
  name: 'doctorAppointments',
  initialState: {
    loading: false,
    error: null,
    patients: [],
  },
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
    builder.addCase(getPatients.rejected, (state, action) => ({
      ...state,
      loading: false,
      error: action.error.message,
      patients: [],
    }));
  },
});

export const allDoctorAppointmentsReducer = allDoctorAppointments.reducer;
