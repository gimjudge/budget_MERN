const express = require('express');
const router = express.Router();
const TransactionModel = require('../models/transaction.js').TransactionModel;

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


// Get Month Transactions (WORKS)
router.get("/transaction/month/:monthNumber", (req, res, next) => {
// Check Authorization (middleware)
    //console.log(req.params.monthNumber);
    const date = new Date();
    const firstDay = new Date(date.getFullYear(), parseInt(req.params.monthNumber), 1);
    const lastDay = new Date(date.getFullYear(), parseInt(req.params.monthNumber) + 1, 0,0,0,0,-1);

    const conditions = {
        "date" : {
            "$gte": firstDay, 
            "$lte": lastDay
        }
    };

// Select Month of Transactions
    TransactionModel.find(conditions, (err, transactions) => {
    // Send JSON response
        if(err) return next(err);
        if(!transactions) {
            err = new Error("Not Found");
            err.status = 404;
            return next(err);
        }
        // Send JSON response with month transaction totals
        res.json({
            transaction: transactions
        });
    });
});

// Post Details (WORKS)
router.post("/transaction/detail", (req, res, next) => {
// Check Authorization (middleware)
// Insert Transaction Details
    let transactionInstance = new TransactionModel(req.body);
    console.log(req.body);
    transactionInstance.save(function (err) {
        if(err) return next(err);
        // Send JSON Response
        res.status(201);
        //res.json({"yes":"yes"});
        res.json(req.body);
    });
});

// Get Details (WORKS)
router.get("/transaction/detail/:tID", (req, res, next) => {
// Check Authorization (middleware)
// Select Transaction Details
    TransactionModel.findById(req.params.tID, function (err, transaction) {
    // Send JSON response
        if(err) return next(err);
        if(!transaction) {
            err = new Error("Not Found");
            err.status = 404;
            return next(err);
        }
        res.json(transaction);
    });
});

// Put Details (WORKS)
router.put("/transaction/detail/:tID", (req, res, next) => {
// Check Authorization

// Update Transaction Details
    TransactionModel.findOne({ _id: req.params.tID }).updateOne(req.body, function(err, result) {
        //may need to make changes.
        // Send JSON response
        res.json(result);
    });
});

// Put Details (WORKS)
router.delete("/transaction/delete/:tID", (req, res, next) => {
// Check Authorization

// Update Transaction Details
    TransactionModel.deleteOne({ _id: req.params.tID }, function(err, result) {
        //may need to make changes.
        if(err) return next(err);
        if(!result) {
            err = new Error("Not Found");
            err.status = 404;
            return next(err);
        }
        // Send JSON response
        res.json(result);
    });
});

// export router
module.exports = router;