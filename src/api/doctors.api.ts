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
export const allResolutionsForDoctor = ({offset, limit}: AllAppointmentsType) => instance
  .get('/resolutions/doctor/me', {
    params: {
      offset,
      limit
    }
  });
  
