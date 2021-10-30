import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Header.css';

function Header(){
    return(
        <div className="header">
            <div>
            <h1 className="header-title">TypeScript To Do App</h1>
            </div>
            <div style={{position:"absolute", right:5}}>
                <LogOutButton />
            </div>

        </div>
        
    )
}

export default Header;