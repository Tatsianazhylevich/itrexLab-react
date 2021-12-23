import { RootState } from 'store/store';

export const doctorsAppointments = (state: RootState) => state.doctorAppointments.patients;
export const loadingForDoctorAppointments = (state: RootState) => state.doctorAppointments.loading;
