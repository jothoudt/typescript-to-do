import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import LoginPage from '../LoginPage/LoginPage';

function LandingPage() {
  const history = useHistory();

  const onLogin = (event:any) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <div className="grid">
        <div className="grid-col grid-col_8">

        </div>
        <div className="grid-col grid-col_4">
          <LoginPage />

          {/* <center>
            <Button style={{padding:'8px', backgroundColor: "#48BF84",color:"#14110F"}} onClick={onLogin}>
              Login
            </Button>
          </center> */}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;