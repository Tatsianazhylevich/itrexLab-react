import { RootState } from '../../../store/store';

export const allSpecializations = (state: RootState) => state.newAppointment.specializations;
export const allDoctorsBySpecializationsID = (state: RootState) => state.newAppointment.doctors;
export const freeTimeForVisit = (state: RootState) => state.newAppointment.time;
export const newAppointment = (state: RootState) => state.newAppointment.newAppointment;
