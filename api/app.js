// Main Express App

// require Express
const express = require('express');
const app = express();

// require routes
const routes = require('./routes/index');

//Need Logs to TroubleShoot ¯\_(ツ)_/¯
const logger = require("morgan");

app.use(logger("dev"));

//Allow Return Response
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if(req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT,POST,DELETE");
    }
    next();
});

// direct to routes
app.use('/', routes);

//Error Handler
app.use((err, req, res, next) => {
    res.status(err.status);
    res.json({
        error: {
            message: err.message
        }
    });
});

// Express App Listen
app.listen(3001, function () {
    console.log('Express app listening on port 3001');
});