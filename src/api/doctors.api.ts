import { instance } from './instance.api';

export const allAppointmentsForDoctor = (offset: number, limit: number) => instance
  .get(`/appointments/doctor/me?offset=${offset}&limit=${limit}`);
