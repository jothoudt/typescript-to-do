import { all } from 'redux-saga/effects';
//import sagas
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import taskSaga from './task.saga';
import userSaga from './user.saga';

export default function* rootSaga(){
    yield all([
        loginSaga(),
        registrationSaga(),
        taskSaga(),
        userSaga(),
    ]);
}; //end rootSaga