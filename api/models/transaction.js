import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let LedgerSchema = new Schema({
    amount: {type: Date, default: Date.now},
    type: {type: Date, default: Date.now},
    category: {type: Date, default: Date.now},
    note: {type: Date, default: Date.now},
    datet: {type: Date, default: Date.now},
    date_created: {type: Date, default: Date.now},
    date_deleted:{type: Date, default: null}
});

