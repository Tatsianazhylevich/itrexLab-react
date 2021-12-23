import { RootState } from 'store/store';

export const allApppointmentsOfPatient = (state: RootState) => state.patientAppointments.appointments;
export const loadingForAppointments = (state: RootState) => state.patientAppointments.loading;
