import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';

function Home(){
    return(
    <div>
        <div>
            <h1>Hello World</h1>
            <input type="text" placeholder="Task" />
            <button>Add Task</button>
        </div>
        <div>
            <LogOutButton />
        </div>
    </div>
    )
}

export default Home;