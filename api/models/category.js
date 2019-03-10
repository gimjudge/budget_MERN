'use strict';

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SubCategorySchema = new Schema({
    subCategory: { type: String, required: true },
    date_created: { type: Date, default: Date.now },
    date_deleted: { type: Date, default: null }
});

const CategorySchema = new Schema({
    category: { type: String, required: true },
    subCategory: [SubCategorySchema],
    date_created: { type: Date, default: Date.now },
    date_deleted: { type: Date, default: null }
});

const CategoryModel = mongoose.model('Category', CategorySchema);

module.exports.CategoryModel = CategoryModel;