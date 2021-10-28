//this reducer stores the values of the to do list
const taskReducer = (state=[], action:any)=>{
    switch(action.type){
        case 'SET_TASKS' :
            return action.payload;
        default:
            return state;
    }
}

export default taskReducer;