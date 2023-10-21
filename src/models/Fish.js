const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);

const priceSchema = new Schema({
  weight: String, // Ví dụ: "500g", "1kg"
  price: Number, // Giá cho khối lượng tương ứng
});

const productSchema = new Schema(
  {
    name: { type: String },
    description: { type: String },
    image: { type: String },
    prices: [priceSchema],
    slug: { type: String, slug: "name", unique: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Fish", productSchema);
