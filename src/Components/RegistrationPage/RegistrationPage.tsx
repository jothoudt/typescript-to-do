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
    <Box border={2} borderColor="#deb887" boxShadow={12} style={{width:'360px', margin:"auto", marginTop:"100px", padding:"50px"}}>
            <RegistrationForm />
            <br />
            <Typography>
              Already have a login?
            </Typography>
            <Button onClick={() => { history.push( '/login' ) } }>
              Login
            </Button>
    </Box>
  );
}

export default RegisterPage;