const express = require('express');
const router = express.Router();
const app = express();

router.get('/', function (req, res) {
    res.send('Hello World');
});

// Authentication
//

// Authorize
//

// Post Transaction
// Check Authorization
// Insert entry in the database

router.post("/transaction", (req, res, next) => {
    res.json({
        response: "You sent me a POST request to /transaction",
        body: req.body
    });
}); 

// Get Month Transactions
// Check Authorization
// Select Month of Transactions

// Get Details
// Check Authorization
// Select Transaction Details

// Put Details
// Check Authorization
// Update Transaction Details


// export router
module.exports = router;