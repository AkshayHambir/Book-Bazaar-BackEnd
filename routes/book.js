const express = require("express");
const router = express.Router();
var multer = require('multer');

const storage =multer.diskStorage({
  destination: function(req,file,cb){
    cb(null, './uploads/');
  },
  filename: function(req, file, cb){
    cb(null, file.originalname);
  }
});

var upload=multer({storage: storage})
const {createBook,getAllbooks,getBookById,getBook,deleteBook,getBookByGenre,getBookGenre} = require("../controllers/book");
router.param("bookId", getBookById);

router.post("/book/create",upload.single('productImage'),createBook );
router.get("/books",getAllbooks);
router.get("/book/:bookId", getBook);

//router.param("genrId", getBookByGenre);
//router.get("/book/genre/:genrId", getBookGenre);


router.delete("/book/:bookId",deleteBook);

module.exports = router;