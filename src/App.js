import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import { SignUp, SignIn, RestorePassword } from './pages/Authorization';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={SignUp} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/restore-password" component={RestorePassword} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
