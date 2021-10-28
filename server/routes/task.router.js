const axios = require('axios');
const express = require('express');
const pool = require('../modules/pool');
const tasksRouter= express.Router()
//POST ROUTE THAT ADDS A TASK TO THE DATABASE
tasksRouter.post('/', (req, res)=>{
    console.log(req.body)
    //database POST query
    const addTaskQuery= `INSERT INTO todo ("user_id", "task") VALUES ($1, $2);`
    //execute query
    pool.query(addTaskQuery,[req.body.user_id, req.body.task]).then(()=>{res.sendStatus(200)})
        .catch((err)=>{console.log('error in POST',err), res.sendStatus(500)});
}); //END POST
//GET ROUTE THAT GETS ALL OF THE TASKS FROM THE DATABASE
tasksRouter.get('/', (req, res)=>{
    //database GET query
    const getTasksQuery= `SELECT * FROM todo;`
    //execute query
    pool.query(getTasksQuery).then(result=>{res.send(result.rows)})
        .catch((err)=>{console.log('error in get tasks', err),res.sendStatus(500)});
}); //END GET
//PUT ROUTE THAT UPDATES THE TASK TO COMPLETE
tasksRouter.put('/:id', (req, res)=>{
    //set time the task was completed with a timestamp
    let date= new Date(Date.now()); 
    let timeStamp = date.toUTCString();
    //database PUT query
    const completeTaskQuery= `UPDATE todo SET completed = TRUE, date_completed = $1 WHERE id=$2;`
    //execute query
    pool.query(completeTaskQuery,[timeStamp, req.params.id]).then(()=>{res.sendStatus(200)})
        .catch((err)=>{console.log('error in complete task', err), res.sendStatus(500)})
}); //END PUT ROUTE

//DELETE ROUTE THAT REMOVES THE TASK TO COMPLETE
tasksRouter.delete('/:id', (req, res)=>{
    //database DELETE query
    const deleteTaskQuery=`DELETE FROM todo WHERE id=$1;`
    //execute query
    pool.query(deleteTaskQuery,[req.params.id]).then(()=>{res.sendStatus(200)})
        .catch((err)=>{console.log('error in delete route', err), res.sendStatus(500)})
}); //END DELETE ROUTE

module.exports= tasksRouter; 