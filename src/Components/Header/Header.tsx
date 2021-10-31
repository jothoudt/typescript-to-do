import React from 'react';
import { useSelector } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Header.css';

function Header(){
    const user=useSelector((store:any)=>{return store.user})
    return(
        <div className="header">
            <div>
            <h1 className="header-title">TypeScript To Do App</h1>
            </div>
            <div style={{position:"absolute", right:140}}>
                {user.id ? <LogOutButton /> : <></>}
            </div>

        </div>
        
    )
}

export default Header;