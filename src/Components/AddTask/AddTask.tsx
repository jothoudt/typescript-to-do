import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import './AddTask.css'
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
        <Box border={1} borderColor="#deb887" boxShadow={12} style={{width:"400px", height:"200px", marginTop:"50px", marginLeft:"auto", marginRight:"auto", padding:"25px"}}>
            <div>
                <h2>Add A Task</h2>
            </div>
            <div>
                <input className={task === '' ? "add-task-input" : "text-entered-input"} type="text" placeholder="Task" onChange={(event)=>{setTask(event.target.value)}} />
            </div>
            <div>
                <Button style={{backgroundColor:"#deb887", marginTop: "24px", fontSize: "large"}}onClick={addThisTask}>Add Task</Button>
            </div>
        </Box>
    )
};  //end AddTask

export default AddTask;