const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moviesSchema = new Schema({

  title: { type: String, required: true },
  director: { type: String, required: true },
  stars: Array,
  image: String,
  description: String,
  showtimes: Array
})

const Movie = mongoose.model("Movie", moviesSchema);
module.exports = Movie;