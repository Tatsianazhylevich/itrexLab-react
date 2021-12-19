import { DOCTOR_VIEW_PATH,PATIENT_VIEW_PATH } from '../../routes'

export const navButtons = {
  doctorsButtons: [
    { title: 'Patients', id: '1', path: DOCTOR_VIEW_PATH },
    { title: 'Resolutions', id: '2', path: DOCTOR_VIEW_PATH },
  ],
  usersButtons: [
    { title: 'Profile', id: '3', path: PATIENT_VIEW_PATH },
    { title: 'Appointments', id: '4', path:  PATIENT_VIEW_PATH },
    { title: 'Resolutions', id: '2', path: PATIENT_VIEW_PATH },
  ],
};
