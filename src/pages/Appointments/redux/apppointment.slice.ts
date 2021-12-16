import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  specializations, doctorsBySpecialization, allPatientAppointments, freeTime, appointments,
} from '../../../api';
import { FreeTimeType} from '../../types'

export const getSpecializations = createAsyncThunk(
  'appointment/getSpecializations',
  async (_, { rejectWithValue }) => {
    try {
      const response = await specializations();
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const getDoctorsBySpecializations = createAsyncThunk(
  'appointment/getDoctorsBySpecializations',
  async (params: string, { rejectWithValue }) => {
    try {
      const response = await doctorsBySpecialization(params);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const getFreeTime = createAsyncThunk(
  'appointment/getFreeTime',
  async (params: FreeTimeType, { rejectWithValue }) => {
    try {
      const response = await freeTime(params);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const createNewAppointment = createAsyncThunk(
  'appointment/createNewAppointment',
  async (params: {}, { rejectWithValue }) => {
    try {
      const response = await appointments(params);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export interface SpecializationType {
  specialization_name: string,
  id: string
}
export interface DoctorType {
  first_name: string,
  last_name: string,
  id: string
}

interface InitialStateTypes {
  loading: boolean,
  status: string,
  error: string | null,
  specializations: SpecializationType[] | [],
  doctors: DoctorType[] | [],
  time: FreeTimeType[] | [],
  newAppointment: {},
}

const initialState = {
  loading: false,
  status: '',
  error: null,
  specializations: [],
  doctors: [],
  time: [],
  newAppointment: {},
} as InitialStateTypes


const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSpecializations.pending, (state) => ({ ...state, loading: true }));
    builder.addCase(getSpecializations.fulfilled, (state, action: PayloadAction<SpecializationType[]>) => ({
      ...state,
      loading: false,
      specializations: action.payload,
    }));
    builder.addCase(getSpecializations.rejected, (state, action: PayloadAction<any>) => ({
      ...state,
      loading: false,
      error: action.payload,
      specializations: [],
    }));

    builder.addCase(getDoctorsBySpecializations.pending, (state) => ({ ...state, loading: true }));
    builder.addCase(getDoctorsBySpecializations.fulfilled, (state, action: PayloadAction<DoctorType[]>) => ({
      ...state,
      loading: false,
      doctors: action.payload,
    }));
    builder.addCase(getDoctorsBySpecializations.rejected, (state, action: PayloadAction<any>) => ({
      ...state,
      loading: false,
      doctors: [],
      error: action.payload,

    }));

    builder.addCase(getFreeTime.pending, (state) => ({ ...state, loading: true }));
    builder.addCase(getFreeTime.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      time: action.payload,
    }));
    builder.addCase(getFreeTime.rejected, (state, action: PayloadAction<any>) => ({
      ...state,
      loading: false,
      time: [],
      error: action.payload,
    }));

    builder.addCase(createNewAppointment.pending, (state) => ({ ...state, loading: true }));
    builder.addCase(createNewAppointment.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      status: 'Created',
      newAppointment: action.payload,
    }));
    builder.addCase(createNewAppointment.rejected, (state, action: PayloadAction<any>) => ({
      ...state,
      loading: false,
      newAppointment: {},
      error: action.payload,
    }));
  },
});

export const appointmentReducer = appointmentSlice.reducer;
