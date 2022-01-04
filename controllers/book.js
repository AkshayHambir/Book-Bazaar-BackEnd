const Book = require("../models/book");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
var multer =require('multer');

var storage = multer.diskStorage({
  destination:function (req, file, cb){
    cb(null,'uploads')
  },
  filename: function (req, file, cb){
    const uniqueSuffix= Date.now()+ '_' +Math.round(Math.random()* 1E9)
    cb(null, file.fieldname + '_' + uniqueSuffix)
  }
})

var upload = multer({ storage: storage})

exports.createBook = 
(req, res) =>
 {
 
  const book = new Book(req.body);
  book.productImagePath = req.file.path;
  book.save((err, category) => 
  {
    if (err) 
    {

      if(err.code === 11000 || err.code === 11001)
      {
        return res.status(400).json({
          error: "Duplicate Value " +req.body.name +",Value must be unique",
         
        });
      }
      else
      {
        return res.status(400).json({
          error: "NOT able to save category in DBs",
          messgae : err
         
        });
      }
      }

     
    res.json({ category });
  });
};

exports.getAllbooks =
   (req, res) => 
  {
    Book.find().exec((err, product) => {
      if (err) {
        return res.status(400).json({
          error: "NO categories found"
        });
      }
      res.json(product);
    });
  };

  exports.getBookById = (req, res, next, id) => {
    Book.findById(id)
      .populate("genre")
      .exec((err, product) => {
        if (err) {
          return res.status(400).json({
            error: "Product not found"
          });
        }
        req.book = product;
        next();
      });
  };

  exports.getBook = (req, res) => {
    req.book.photo = undefined;
    return res.json(req.book);
  };

  exports.deleteBook = (req, res) => {
    let product = req.book;
    product.remove((err, deletedProduct) => {
      if (err) {
        return res.status(400).json({
          error: "Failed to delete the product"
        });
      }
      res.json({
        message: "Deletion was a success",
        deletedProduct
      });
    });
  };

 /* exports.getBookByGenre = (req, res, next, id) => {
    Book.
      .exec((err, product) => {
        if (err) {
          return res.status(400).json({
            error: "Product not found"
          });
        }
        req.book1 = product;
        next();
      });
  };

  exports.getBookGenre = (req, res) => {
    req.book1.photo = undefined;
    return res.json(req.book1);
  };*/