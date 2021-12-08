import { instance } from './instance.api';

export const allAppointmentsForDoctor = (offset, limit) => instance
  .get(`/appointments/doctor/me?offset=${offset}&limit=${limit}`);
