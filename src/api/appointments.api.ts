import { instance } from './instance.api';
import { FreeTimeType} from '../pages/types'

export const specializations = () => instance
  .get('specializations');

export const doctorsBySpecialization = (param: string) => instance
  .get(`doctors/specialization/${param}`);



export const freeTime = ({ date, doctorId}: FreeTimeType) => instance
  .get('appointments/time/free', {
    params: {
      doctorId,
      date,
    },
  });

export const appointments = (body: {}) => instance
  .post('appointments', body);

export const allPatientAppointments = (offset: number, limit: number) => instance
  .get(`appointments/patient/me/?offset=${offset}&limit=${limit}`);
