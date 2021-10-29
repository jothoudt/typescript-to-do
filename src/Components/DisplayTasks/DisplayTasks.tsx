import React from 'react'
import {useSelector} from 'react-redux';
import DisplayTasksEach from '../DisplayTasksEach/DisplayTasksEach';
//material ui
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function DisplayTasks(){
    //get tasks from the store
    const tasks=useSelector((store:any)=>{return store.task})
    //function to conditionally render tasks
    const displayAllTasks=()=>{
        //define display
        let display:any=''
        //if there are no tasks or the tasks have not loaded yet
        if(!tasks || tasks.length === 0){
            display= <h2>No tasks</h2>
        }
        //if there are tasks, map through them and display them as rows in the table
        else{
            display=
            <>
            {tasks.map((task:any, id:number)=>{
                return(
                    <DisplayTasksEach task={task} key={id} />
                )
            })}
            </>
        }
        return display;
    }
    //returns a table to display the tasks
    return(
        <Box border={1} borderColor="#1E3163" style={{marginLeft:"auto", marginRight:"auto", width:"80%", marginTop:'50px'}}>
            <Table>
                <TableHead>
                    <TableRow style={{backgroundColor:"#deb887"}}>
                        <TableCell>Task</TableCell>
                        <TableCell align="right">Date Added</TableCell>
                        <TableCell align="right">Completed?</TableCell>
                        <TableCell align="right">Date Completed</TableCell>
                        <TableCell align="right">Delete Task</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {displayAllTasks()}
                </TableBody>
            </Table>         
        </Box>
    )
}

export default DisplayTasks;