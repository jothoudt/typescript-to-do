import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
//components
import Header from '../Header/Header';
import Home from '../Home/Home';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import RegistrationPage from '../RegistrationPage/RegistrationPage';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Switch>
            <div className="app-body">
            <Route exact path='/'>
              <LandingPage />
            </Route>
            <Route exact path='/login'>
              <LoginPage />
            </Route>
            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows RegisterPage at "/registration"
              exact
              path="/registration"
              authRedirect="/home"
            >
              <RegistrationPage />
            </ProtectedRoute>
            <ProtectedRoute exact path='/home'>
              <Home />
            </ProtectedRoute>
            </div>
          </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;
