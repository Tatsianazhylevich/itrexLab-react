import {
   APPOINTMENTS_LIST_PATH,
   PATIENTS_LIST_PATH,
   PROFILE_LIST_PATH,
   RESOLUTION_DOCTOR_LIST_PATH,
   RESOLUTION_PATIENT_LIST_PATH
} from '../../routes'

export const navButtons = {
  doctorsButtons: [
    { title: 'Patients', id: '1', path: PATIENTS_LIST_PATH },
    { title: 'Resolutions', id: '2', path: RESOLUTION_DOCTOR_LIST_PATH },
  ],
  usersButtons: [
    { title: 'Profile', id: '3', path: PROFILE_LIST_PATH },
    { title: 'Appointments', id: '4', path:  APPOINTMENTS_LIST_PATH, className: 'active'},
    { title: 'Resolutions', id: '2', path: RESOLUTION_PATIENT_LIST_PATH },
  ],
};
