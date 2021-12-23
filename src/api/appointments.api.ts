import { instance } from './instance.api';

export const specializations = () => instance
  .get('specializations');

export const doctorsBySpecialization = (param: string) => instance
  .get(`doctors/specialization/${param}`);


type FreeTimeType = {
    date: string,
    doctorId: string
}
export const freeTime = ({ date, doctorId}: FreeTimeType) => instance
  .get('appointments/time/free', {
    params: {
      doctorId,
      date,
    },
  });

export const appointments = (body: {}) => instance
  .post('appointments', body);

type AllAppointmentsType = {
  offset: number,
  limit: number
}

export const allPatientAppointments = ({offset, limit}: AllAppointmentsType) => instance
  .get('appointments/patient/me', {
    params: {
      offset,
      limit
    }
  });


export const allResolutionsForPatient = ({offset, limit}: AllAppointmentsType) => instance
.get('/resolutions/patient/me', {
  params: {
    offset,
    limit
  }
});
