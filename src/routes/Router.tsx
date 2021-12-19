import React from 'react';
import { useAppSelector } from 'shared';
import {
  BrowserRouter as Router, Switch, Route, Redirect
} from 'react-router-dom';
import {
  SignUp, SignIn, RestorePassword, RestoredPassword,
} from '../pages/Authorization';
import { AppointmentsView, DoctorCardList, DoctorView, UserView } from '../pages';
import { Page404 } from 'components/Page404';
import { getStatus } from '../pages/Authorization/redux';
import { RedirectRoute } from './RedirectRoute';
import {
  APPOINTMENTS_LIST_PATH,
  DOCTOR_VIEW_PATH, 
  MAIN_PATH, 
  PAGE_404_PATH, 
  PATIENT_VIEW_PATH, 
  RESTORED_PASSWORD_PATH, 
  RESTORE_PASSWORD_PATH, 
  SIGN_IN_PATH, 
  SIGN_UP_PATH, 
  USER_APPOINTMENT_PATH
} from './routes';

export function AppRouter() {
  const status = useAppSelector(getStatus);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path={MAIN_PATH}>
            <RedirectRoute logStatus={status} pathTo={PATIENT_VIEW_PATH} redirect={SIGN_UP_PATH}/>
          </Route>
          <Route exact path={SIGN_UP_PATH} component={SignUp} />
          <Route exact path={SIGN_IN_PATH} component={SignIn} />
          <Route exact path={RESTORE_PASSWORD_PATH} component={RestorePassword} />
          <Route exact path={RESTORED_PASSWORD_PATH} component={RestoredPassword} />
          <Route exact path={DOCTOR_VIEW_PATH} component={DoctorView} />
          <Route exact path={PATIENT_VIEW_PATH} component={UserView}>
            {/* {status !== 'OK' ? <Redirect to={SIGN_UP_PATH} /> : <Route path={PATIENT_VIEW_PATH} component={UserView} />} */}
          </Route>
          <Route exact path={USER_APPOINTMENT_PATH} component={AppointmentsView} />
          <Route exact path={APPOINTMENTS_LIST_PATH} component={DoctorCardList} />
           <Route path={PAGE_404_PATH} component={Page404} />
        </Switch>
      </div>
    </Router>
  );
}
