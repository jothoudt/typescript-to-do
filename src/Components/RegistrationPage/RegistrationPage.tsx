import React from 'react';
import { useHistory } from 'react-router-dom';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
//styling with MUI
import {
  Button,
  Box,
  Typography
} from '@material-ui/core';

function RegisterPage() {
  const history = useHistory();
    //needed for styling

  return (
    <Box className="registerContainer">
            <RegistrationForm />
            <br />
            <Typography variant="body2" color="textSecondary">
              Already have a login?
            </Typography>
            <Button onClick={() => { history.push( '/login' ) } }>
              Login
            </Button>
    </Box>
  );
}

export default RegisterPage;