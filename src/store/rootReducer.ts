import { authorizationReducer, userReducer } from '../pages/Authorization/redux';
import { appointmentReducer } from '../pages/Appointments/redux';
import { allPatientAppointmentsReducer } from '../pages/UserView/redux';
import { allDoctorAppointmentsReducer } from '../pages/DoctorWiew/redux/allDoctorAppointments.slice';

export const rootReducer = {
  login: authorizationReducer,
  user: userReducer,
  newAppointment: appointmentReducer,
  patientAppointments: allPatientAppointmentsReducer,
  doctorAppointments: allDoctorAppointmentsReducer,
};
