'use strict';

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var TransactionSchema = new Schema({
    amount: { type: Number },
    type: { type: Boolean },
    category: { type: String },
    note: { type: String },
    date: { type: Date, default: Date.now },
    date_created: { type: Date, default: Date.now },
    date_deleted: { type: Date, default: null }
});

var TransactionModel = mongoose.model('Transaction', TransactionSchema);

module.exports.TransactionModel = TransactionModel;