const express = require('express');
const categoryRouter = express.Router({mergeParams: true});

const CategoryModel = require('../models/category.js').CategoryModel;

/*
Post Cetegory (Functions)
expects JSON body
    {
    category: { type: string, required: true },
    subCategory: [
        {
            subCategory: { type: string, required: true },
            date_created: { type: Date, default: Date.now },
            date_deleted: { type: Date, default: null }
        }
    ],
    date_created: { type: Date, default: Date.now },
    date_deleted: { type: Date, default: null }
    }
*/
categoryRouter.post("/", (req, res, next) => {
// Check Authorization (middleware)

// Insert category Details
    //Currently no extra validation
    let categoryInstance = new CategoryModel(req.body);
    categoryInstance.save(function (err, category) {
        // Error, add more error handling? 
        if(err) {
            err.status = 400;
            return next(err);
        }
        // Send JSON Error Response
        res.status(201);
        res.json(category);
    });
});

/*
    Get Details (Functions)
    expects String ID
*/
categoryRouter.get("/:tID", (req, res, next) => {
// Check Authorization (middleware)

// Select category Details
    CategoryModel.findById(req.params.tID, function (err, category) {
    // Send JSON Error response
        if(err) {
            err.status = 404;
            return next(err);
        }
        if(!category) {
            err = new Error("Not Found");
            err.status = 404;
            return next(err);
        }
    // Send JSON response
        res.json(category);
    });
});

/*
    Put Details (Functions)
    expects String ID & JSON body
*/
categoryRouter.put("/:tID", (req, res, next) => {
// Check Authorization (middleware)

// Update category Details
    CategoryModel.findOne({ _id: req.params.tID }).updateOne(req.body, function(err, result) {
        //may need to make changes.
        if(err) {
            err.status = 400;
            return next(err);
        }
        // Send JSON response
        res.json(result);
    });
});

/*
    Delete (Functions)
    expects String ID
*/
categoryRouter.delete("/:tID", (req, res, next) => {
// Check Authorization

// Update category Details
    CategoryModel.deleteOne({ _id: req.params.tID }, function(err, result) {
        // Send JSON Error response
        if(err) {
            err.status = 400;
            return next(err);
        }
        if(!result) {
            err = new Error("Not Found");
            err.status = 404;
            return next(err);
        }
        // Send JSON response
        res.json(result);
    });
});

module.exports = categoryRouter;