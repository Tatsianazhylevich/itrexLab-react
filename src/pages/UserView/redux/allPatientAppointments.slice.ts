import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { allPatientAppointments } from '../../../api';
import { AppointmentForPatient } from '../../types'

export const getAllAppointmentsforPatient = createAsyncThunk(
  'patientAppointments/getAllAppointmentsforPatient',
  async (_, { rejectWithValue }) => {
    try {
      const response = await allPatientAppointments(0, 20);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

interface InitialStateTypes {
  loading: boolean,
  error: string | null,
  appointments: AppointmentForPatient[] | [],
}

const initialState = {
  loading: false,
  error: null,
  appointments: [],
} as InitialStateTypes

const allPatientAppointmentsSlice = createSlice({
  name: 'patientAppointments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllAppointmentsforPatient.pending, (state) => ({ ...state, loading: true }));
    builder.addCase(getAllAppointmentsforPatient.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      appointments: action.payload,
    }));
    builder.addCase(getAllAppointmentsforPatient.rejected, (state, action: PayloadAction<any> ) => ({
      ...state,
      loading: false,
      appointments: [],
      error: action.payload,

    }));
  },
});

export const allPatientAppointmentsReducer = allPatientAppointmentsSlice.reducer;
