
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const ProductCartSchema = new mongoose.Schema({
  product: {
    type: ObjectId,
    ref: "Books"
  },
  name: String,
  count: Number,
  price: Number
});

const BookCart = mongoose.model("BookCart", ProductCartSchema);



const OrderSchema = new mongoose.Schema(
  {
    products: [ProductCartSchema],
    amount: { type: Number },
    address:String,
    status: {
      type: String,
      default: "Recieved"
    },
    user: {
      type: ObjectId,
      ref: "BookUser"
    }
  },
  { timestamps: true }
);

const BookOrder = mongoose.model("BookOrder", OrderSchema);

module.exports = { BookOrder, BookCart }; 
 
 		



