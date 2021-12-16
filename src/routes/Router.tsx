import React from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import {
  SignUp, SignIn, RestorePassword, RestoredPassword,
} from '../pages/Authorization';
import { AppointmentsView, DoctorView, UserView } from '../pages';
import { getStatus } from '../pages/Authorization/redux';

export function AppRouter() {
  const status = useSelector(getStatus);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            { status === 'OK' ? <Redirect to="/patient" /> : <Redirect to="/sign-up" />}
          </Route>
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/restore-password" component={RestorePassword} />
          <Route exact path="/restored-password" component={RestoredPassword} />
          <Route exact path="/doctor" component={DoctorView} />
          <Route exact path="/patient" component={UserView} />
          <Route exact path="/appointments" component={AppointmentsView} />
        </Switch>
      </div>
    </Router>
  );
}
