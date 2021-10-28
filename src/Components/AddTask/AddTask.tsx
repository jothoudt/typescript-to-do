import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
//this component is for adding tasks to the list
function AddTask(){
    //define dispatch
    const dispatch = useDispatch();
    //useState Variable
    const [task, setTask]=useState<string>('')
    //get user from the store
    let user=useSelector((store:any)=>{return store.user})
    //this function sends the task to the saga and eventually to the database
    const addThisTask=()=>{
        console.log('this is the task', task)
        //object to be sent to the database
        const taskToAdd={
            user_id: user.id,
            task:task,
        }   //end object
        //send object to the Saga and then the database
        dispatch({type:'ADD_NEW_TASK', payload:taskToAdd})
    }   //end addThisTaks
    return(
        <div>
            <input type="text" placeholder="Task" onChange={(event)=>{setTask(event.target.value)}} />
            <button onClick={addThisTask}>Add Task</button>
        </div>
    )
};  //end AddTask

export default AddTask;