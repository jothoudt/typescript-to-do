import {combineReducers} from 'redux';
import errors from './errors.reducer'
import task from './task.reducer';
import user from './user.reducer';

const rootReducer = combineReducers({
    errors,
    task,
    user,
})

export default rootReducer