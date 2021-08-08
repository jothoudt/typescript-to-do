import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';

function LogOutButton(props:any) {
  const dispatch = useDispatch();
  return (
    <Button style={{padding:'8px', marginTop:'12px', marginBottom:'24px', backgroundColor: '#48BF84', width: "124px"}}
      onClick={() => dispatch({ type: 'LOGOUT' })}
    >
      Log Out
    </Button>
  );
}

export default LogOutButton;