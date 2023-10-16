const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const productSchema = new Schema({
    name: { type: String},
    email: { type: String},
    movie_id: { type: String},
    text: { type: String},
    date: {type: Date},
    // slug: { type: String, slug: 'name', unique: true },

}, {
    timestamps: true,
});

module.exports = mongoose.model('Product', productSchema)