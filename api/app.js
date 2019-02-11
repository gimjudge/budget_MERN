const express = require('express');
const app = express();
 
// include routes
const routes = require('./routes/index');
app.use('/', routes);
 
app.listen(3001, function () {
    console.log('Express app listening on port 3001');
});