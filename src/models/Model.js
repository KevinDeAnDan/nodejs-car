const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Model = new Schema({
    name: { type: String, required: true},
    description: { type: String},
    image: { type: String, required: true},
    price: { type: String, required: true},
    slug: { type: String, slug: 'name', unique: true },

}, {
    timestamps: true,
});

module.exports = mongoose.model('Model', Model)