import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import {
  SignUp, SignIn, RestorePassword, RestoredPassword,
} from '../pages/Authorization';
import { AppointmentsView, DoctorWiew, UserView } from '../pages';

export function AppRouter() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={SignUp} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/restore-password" component={RestorePassword} />
          <Route exact path="/restored-password" component={RestoredPassword} />
          <Route exact path="/doctor" component={DoctorWiew} />
          <Route exact path="/patient" component={UserView} />
          <Route exact path="/appointments" component={AppointmentsView} />
        </Switch>
      </div>
    </Router>
  );
}
