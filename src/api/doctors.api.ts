import { instance } from './instance.api';

type AllAppointmentsType = {
  offset: number,
  limit: number
}

export const allAppointmentsForDoctor = ({offset, limit}: AllAppointmentsType) => instance
  .get('/appointments/doctor/me', {
    params: {
      offset,
      limit
    }
  });
  