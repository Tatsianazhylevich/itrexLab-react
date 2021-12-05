import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { allAppointmentsForDoctor } from '../../../services';

export const getPatients = createAsyncThunk(
  'patients/getPatients',
  async (_, { rejectWithValue }) => {
    try {
      const response = await allAppointmentsForDoctor();
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const patientsSlice = createSlice({
  name: 'patient',
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

export const patientsReducer = patientsSlice.reducer;
