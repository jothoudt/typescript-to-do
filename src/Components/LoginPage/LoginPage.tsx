import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
function LoginPage() {
  const history = useHistory();

  return (
    <div className="login-page-container">
      <Box border={1} boxShadow={12} style={{width:'360px', margin: 'auto', padding:'50px', fontSize: '20px', marginTop: '100px', backgroundColor:"white"}}>
      <LoginForm />

      {/* <center> */}
        <Button style={{padding:'8px', marginTop:'12px', backgroundColor: '#48BF84', width: "88px"}}
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </Button>
      {/* </center> */}
      </Box>
    </div>
  );
}

export default LoginPage;