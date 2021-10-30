import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';

function LogOutButton(props:any) {
  const dispatch = useDispatch();
  return (
    <Button style={{backgroundColor: "#4DA1A9", color:"#F8F8F8", width: "100px"}}
      onClick={() => dispatch({ type: 'LOGOUT' })}
    >
      Log Out
    </Button>
  );
}

export default LogOutButton;