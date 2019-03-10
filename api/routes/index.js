const express = require('express');
const router = express.Router();

// require routes
const single =  require('./single');
const group =  require('./group');

// Root '/' ?
router.get('/', function (req, res, next) {
    res.status(204);
});
router.post('/', function (req, res, next) {
    res.status(204);
});

// Get post '/transaction' ?
router.get('/transaction', function (req, res, next) {
    res.status(204);
});
router.post('/transaction', function (req, res, next) {
    res.status(204);
});

// Authentication

// Authorize

app.use("/transaction/group", group);
app.use("/transaction/single", single);

// export router
module.exports = router;