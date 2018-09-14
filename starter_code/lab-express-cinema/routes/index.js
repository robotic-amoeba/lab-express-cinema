const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie')



/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

//movies page
router.get('/movies', (req, res, next) => {
  Movie.find({})
    .then(movies => res.render('movies', { movies }))
    .catch(e => console.log(e));
});

router.get('/movies/:id', (req, res, next) => {
  let id = req.params.id
  Movie.findById({_id: id})
    .then(movie => {
      res.render('description', {movie} )
    })
})




module.exports = router;
