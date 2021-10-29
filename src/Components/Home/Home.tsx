import React, { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import AddTask from '../AddTask/AddTask';
import DisplayTasks from '../DisplayTasks/DisplayTasks';

function Home(){
    //define dispatch
    const dispatch=useDispatch()
    //get user from the store
    const user=useSelector((store:any)=>{return store.user})

    useEffect(()=>{
       dispatch({type:'FETCH_TASKS', payload:user.id}) 
    },[]);
    return(
    <div>
        <div>
            <h1>Hello World</h1>
        </div>
        <div>
            <AddTask />
        </div>
        <div>
            <DisplayTasks />
        </div>
    </div>
    )
}

export default Home;