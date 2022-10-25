const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Model = new Schema({
    name: { type: String},
    description: { type: String},
    image: { type: String},
    price: { type: String},

}, {
    timestamps: true,
});

module.exports = mongoose.model('Model', Model)