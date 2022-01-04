const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const bookschema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32
    },
    description: {
      type: String,
      trim: true,
      required: true,
      maxlength: 2000
    },
    authers: {
      type: String,
      trim: true,
      required: true,
      maxlength: 2000
    },
    price: {
      type: Number,
      required: true,
      maxlength: 32,
      trim: true
    },
    genre: {
      type: ObjectId,
      ref: "genre",
      required: true
    },
    stock: {
      type: Number
    },
    sold: {
      type: Number,
      default: 0
    },
    photo: {
      data: Buffer,
      contentType: String
    },
    productImagePath:{
        type:String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Books", bookschema);
