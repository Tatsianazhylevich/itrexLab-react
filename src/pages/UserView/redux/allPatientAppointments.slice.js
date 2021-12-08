import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { allPatientAppointments } from '../../../api';

export const getAllAppointmentsforPatient = createAsyncThunk(
  'patientAppointments/getAllAppointmentsforPatient',
  async (_, { rejectWithValue }) => {
    try {
      const response = await allPatientAppointments(0, 20);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const allPatientAppointmentsSlice = createSlice({
  name: 'patientAppointments',
  initialState: {
    loading: false,
    error: null,
    appointments: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getAllAppointmentsforPatient.pending, (state) => ({ ...state, loading: true }));
    builder.addCase(getAllAppointmentsforPatient.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      appointments: action.payload,
    }));
    builder.addCase(getAllAppointmentsforPatient.rejected, (state, action) => ({
      ...state,
      loading: false,
      appointments: [],
      error: action.error.message,

    }));
  },
});

export const allPatientAppointmentsReducer = allPatientAppointmentsSlice.reducer;
