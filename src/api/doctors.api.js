import { instance } from './instance.api';

export const allAppointmentsForDoctor = () => instance
  .get('/appointments/doctor/me?offset=0&limit=20');
