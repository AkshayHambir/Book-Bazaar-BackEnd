const express = require('express')

const router = express.Router();

const {createGenre,getAllGenres,getGenreById,getGenre,removeGenre,updateGenre} = require("../controllers/genre");

router.post(
    "/genre/create/",createGenre );

 router.get("/genres", getAllGenres);

 router.param("genreId", getGenreById);
 router.get("/genre/:genreId", getGenre);

 router.delete("/genre/:genreId",removeGenre);
 router.put("/genre/:genreId",updateGenre);



module.exports = router;



/*

const express = require('express')

const router = express.Router();

const {getCategoryById,
  createCategory,
  getCategory,
  getAllCategory,
  updateCategory,
  removeCategory} = require("../controller/category");

router.param("categoryId", getCategoryById);

router.post(
  "/category/create/",
  
  createCategory
);

router.get("/category/:categoryId", getCategory);
router.get("/categories", getAllCategory);

//update
router.put(
  "/category/:categoryId",
 
  updateCategory
);

//delete

router.delete(
  "/category/:categoryId",

  removeCategory
);


module.exports = router;

*/