import { useAppSelector } from 'shared';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import {
  SignUp,
  SignIn,
  RestorePassword,
  RestoredPassword,
  DoctorView,
  UserView,
  AppointmentsView
} from 'pages';
import { Page404 } from 'components/Page404';
import { getStateOfLog } from '../pages/Authorization/redux';
import { PrivateRoute } from './PrivateRoute';
import {
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
  const isLogged = useAppSelector(getStateOfLog);
  console.log(isLogged);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path={MAIN_PATH}>
            {isLogged ? <Redirect to={PATIENT_VIEW_PATH} /> : <Redirect to={SIGN_UP_PATH} />}
          </Route>
          <PrivateRoute isLogged={!isLogged} path={SIGN_UP_PATH} component={SignUp} redirectPath={PATIENT_VIEW_PATH}/>
          <PrivateRoute isLogged={!isLogged} path={SIGN_IN_PATH} component={SignIn} redirectPath={PATIENT_VIEW_PATH}/>
          <PrivateRoute isLogged={!isLogged} path={RESTORE_PASSWORD_PATH} component={RestorePassword} redirectPath={PATIENT_VIEW_PATH}/>
          <PrivateRoute isLogged={!isLogged} path={RESTORED_PASSWORD_PATH} component={RestoredPassword} redirectPath={PATIENT_VIEW_PATH}/>
          <PrivateRoute isLogged={isLogged} path={DOCTOR_VIEW_PATH} component={DoctorView} redirectPath={SIGN_UP_PATH}/>
          <PrivateRoute isLogged={isLogged} path={PATIENT_VIEW_PATH} component={UserView} redirectPath={SIGN_UP_PATH}/>
          <PrivateRoute isLogged={isLogged} path={USER_APPOINTMENT_PATH} component={AppointmentsView} redirectPath={SIGN_IN_PATH}/>
          <Route path={PAGE_404_PATH} component={Page404} />
        </Switch>
      </div>
    </Router>
  );
}
