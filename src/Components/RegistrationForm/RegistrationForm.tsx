import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//styling with MUI
import {
  Button,
  Box,
  Grid, 
  TextField,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function RegisterForm( { setLoginToggle, loginToggle }:any ) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store:any) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event:any) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  return (
    <Box>
    <Typography
    color="primary"
    display="block"
    variant="h4"
  >
    Register
  </Typography>
  <Typography variant="body2">
    Welcome to YourPath Dashboard. 
    Please fill out these two fields:
  </Typography>
      <form onSubmit={registerUser}>
        {errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {errors.registrationMessage}
          </h3>
        )}
        <Grid container justify="center">
          <Grid item xs={12}>
            <TextField
              label="Username"
              type="text"
              variant="standard"
              color="secondary"
              fullWidth
              value={username}
              required
              onChange={(event) => setUsername(event.target.value)}
                />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              variant="standard"
              color="secondary"
              fullWidth
              value={password}
              required
              onChange={(event) => setPassword(event.target.value)}
            />
          </Grid>
          <Grid item xs={12} justify="center">
              <Button variant="contained" color="primary" type="submit" name="submit">Join</Button>
          </Grid>
          <Grid item xs={12} justify="center">
            <Button onClick={()=>setLoginToggle(!loginToggle)}>Go to login</Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default RegisterForm;