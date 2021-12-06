import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  specializations, doctorsBySpecialization, allPatientAppointments, freeTime, appointments,
} from '../../../api';

export const getSpecializations = createAsyncThunk(
  'appointment/getSpecializations',
  async (_, { rejectWithValue }) => {
    try {
      const response = await specializations();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const getDoctorsBySpecializations = createAsyncThunk(
  'appointment/getDoctorsBySpecializations',
  async (params, { rejectWithValue }) => {
    try {
      const response = await doctorsBySpecialization(params);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const getFreeTime = createAsyncThunk(
  'appointment/getFreeTime',
  async (params, { rejectWithValue }) => {
    try {
      const response = await freeTime(params);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const createNewAppointment = createAsyncThunk(
  'appointment/createNewAppointment',
  async (params, { rejectWithValue }) => {
    try {
      const response = await appointments(params);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const appointmentSlice = createSlice({
  name: 'appointment',
  initialState: {
    loading: false,
    error: null,
    specializations: [],
    doctors: [],
    time: [],
    newAppointment: {},
  },
  extraReducers: (builder) => {
    builder.addCase(getSpecializations.pending, (state) => ({ ...state, loading: true }));
    builder.addCase(getSpecializations.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      specializations: action.payload,
    }));
    builder.addCase(getSpecializations.rejected, (state, action) => ({
      ...state,
      loading: false,
      error: action.error.message,
      specializations: [],
    }));

    builder.addCase(getDoctorsBySpecializations.pending, (state) => ({ ...state, loading: true }));
    builder.addCase(getDoctorsBySpecializations.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      doctors: action.payload,
    }));
    builder.addCase(getDoctorsBySpecializations.rejected, (state, action) => ({
      ...state,
      loading: false,
      doctors: [],
      error: action.error.message,

    }));

    builder.addCase(getFreeTime.pending, (state) => ({ ...state, loading: true }));
    builder.addCase(getFreeTime.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      time: action.payload,
    }));
    builder.addCase(getFreeTime.rejected, (state, action) => ({
      ...state,
      loading: false,
      time: [],
      error: action.error.message,
    }));

    builder.addCase(createNewAppointment.pending, (state) => ({ ...state, loading: true }));
    builder.addCase(createNewAppointment.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      newAppointment: action.payload,
    }));
    builder.addCase(createNewAppointment.rejected, (state, action) => ({
      ...state,
      loading: false,
      newAppointment: {},
      error: action.error.message,
    }));
  },
});

export const appointmentReducer = appointmentSlice.reducer;
