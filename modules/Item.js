const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemShema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.new
    }
});

module.exports = Item = mongoose.model('item', ItemShema);