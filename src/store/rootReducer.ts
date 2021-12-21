import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authorizationReducer, userReducer } from '../pages/Authorization/redux';
import { appointmentReducer } from '../pages/Appointments/redux';
import { allPatientAppointmentsReducer } from '../pages/UserView/redux';
import { allDoctorAppointmentsReducer } from '../pages/DoctorWiew/redux/allDoctorAppointments.slice';
import { allDoctorResolutionsReducer} from '../pages/DoctorWiew/redux/AllDoctorResolutions.slice';

const loginPersistConfig = {
  key: 'login',
  storage,
};
const userPersistConfig = {
  key: 'user',
  storage,
};

export const rootReducer = {
  login: persistReducer(loginPersistConfig, authorizationReducer),
  user: persistReducer(userPersistConfig, userReducer),
  newAppointment: appointmentReducer,
  patientAppointments: allPatientAppointmentsReducer,
  doctorAppointments: allDoctorAppointmentsReducer,
  doctorResolutions: allDoctorResolutionsReducer,
};
