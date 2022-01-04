const Genre = require("../models/genre")

exports.createGenre = (req, res) => {
    const genre = new Genre(req.body);
    genre.save((err, genre) => {
      if (err) {
        return res.status(400).json({
          error: "NOT able to save category in DB"
        });
      }
      res.json({ genre });
    });
  };

  exports.getAllGenres = (req, res) => 
  {
    Genre.find().exec((err, genres) => {
      if (err) {
        return res.status(400).json({
          error: "NO categories found"
        });
      }
      res.json(genres);
    });
  };

  exports.getGenreById = (req, res, next, id) => {
    Genre.findById(id).exec((err, cate) => {
      if (err) {
        return res.status(400).json({
          error: "Category not found in DB"
        });
      }
      req.genre = cate;
      next();
    });
  };

  exports.getGenre = (req, res) => {
    return res.json(req.genre);
  };

  exports.removeGenre = (req, res) => {
    const genre = req.genre;
    genre.remove((err, genre) => {
      if (err) {
        return res.status(400).json({
          error: "Failed to delete this category"
        });
      }
      res.json({
        message: "Successfull deleted"
      });
    });
  };

  exports.updateGenre = (req, res) => {
    const genre = req.genre;
    genre.name = req.body.name;
    genre.save((err, updatedGenre) => {
     if (err) {
       return res.status(400).json({
         error: "Failed to update category"
       });
     }
     res.json(updatedGenre);
   });
 };

/*
const Category = require("../models/category")


  
  exports.createCategory = (req, res) => {
    const category = new Category(req.body);
    category.save((err, category) => {
      if (err) {
        return res.status(400).json({
          error: "NOT able to save category in DB"
        });
      }
      res.json({ category });
    });
  };
  

  exports.getAllCategory = (req, res) => 
  {
    Category.find().exec((err, categories) => {
      if (err) {
        return res.status(400).json({
          error: "NO categories found"
        });
      }
      res.json(categories);
    });
  };


  exports.getCategoryById = (req, res, next, id) => {
    Category.findById(id).exec((err, cate) => {
      if (err) {
        return res.status(400).json({
          error: "Category not found in DB"
        });
      }
      req.category = cate;
      next();
    });
  };


  exports.getCategory = (req, res) => {
    return res.json(req.category);
  };

  exports.removeCategory = (req, res) => {
    const category = req.category;
    category.remove((err, category) => {
      if (err) {
        return res.status(400).json({
          error: "Failed to delete this category"
        });
      }
      res.json({
        message: "Successfull deleted"
      });
    });
  };

  exports.updateCategory = (req, res) => {
     const category = req.category;
     category.name = req.body.name;
     category.save((err, updatedCategory) => {
      if (err) {
        return res.status(400).json({
          error: "Failed to update category"
        });
      }
      res.json(updatedCategory);
    });
  };
  
 
*/