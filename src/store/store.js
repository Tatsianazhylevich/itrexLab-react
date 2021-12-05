import { configureStore } from '@reduxjs/toolkit';
import { authorizationReducer, userReducer } from '../pages/Authorization/redux';
import { appointmentReducer } from '../pages/Appointments/redux';

export const store = configureStore({
  reducer: {
    login: authorizationReducer,
    user: userReducer,
    appointment: appointmentReducer,
  },
});
