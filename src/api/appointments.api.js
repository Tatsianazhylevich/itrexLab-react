import { instance } from './instance.api';

export const specializations = () => instance
  .get('specializations');

export const doctorsBySpecialization = (param) => instance
  .get(`doctors/specialization/${param}`);

export const freeTime = ({ date, doctorId }) => instance
  .get('appointments/time/free', {
    params: {
      doctorId,
      date,
    },
  });

export const appointments = (body) => instance
  .post('appointments', body);

export const allPatientAppointments = (offset, limit) => instance
  .get(`appointments/patient/me/?offset=${offset}&limit=${limit}`);
