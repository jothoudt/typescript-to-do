//globals
const express =require('express');
const bodyParser = require('body-parser');

const app = express();
const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

//This route gets the user
const router = require('./routes/user.router');
const tasksRouter=require('./routes/task.router');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

//--------------------------------------------------------//
//this route is for the user
app.use('/api/user', router);
//this route is for the tasks
app.use('/api/tasks/', tasksRouter)
//--------------------------------------------------------//

app.use(express.static('build'));
const PORT = process.env.PORT || 5000;
//spin up server
app.listen(PORT, ()=>{
    console.log('listening on port', PORT)
})