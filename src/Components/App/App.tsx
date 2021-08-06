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
        </div>
        <Switch>
          <Route exact path='/'>
            <LandingPage />
          </Route>
          <Route exact path='/login'>
            <LoginPage />
          </Route>
          <Route exact path='/registration'>
            <RegistrationPage />
          </Route>
          <ProtectedRoute exact path='/home'>
            <Home />
          </ProtectedRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
