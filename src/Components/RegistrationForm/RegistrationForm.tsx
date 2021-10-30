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
    <Box style={{padding:"50px"}}>
    <Typography
    display="block"
    variant="h4"
  >
    Register
  </Typography>
  <Typography variant="body2" style={{padding:"4px"}}>
    Welcome to TypeScript To Do APP
  </Typography>
      <form onSubmit={registerUser}>
        {errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {errors.registrationMessage}
          </h3>
        )}
        <Grid container justify="center">
          <Grid item xs={12} style={{padding:"4px"}}>
            <TextField
              label="Username"
              type="text"
              variant="standard"
              fullWidth
              value={username}
              required
              onChange={(event) => setUsername(event.target.value)}
                />
          </Grid>
          <Grid item xs={12} style={{padding:"4px"}}>
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
              <Button style={{margin:"12px", backgroundColor:"#4DA1A9"}} variant="contained" type="submit" name="submit">Join</Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default RegisterForm;