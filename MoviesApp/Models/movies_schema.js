const mongoose = require('mongoose')

const movies = new mongoose.Schema({
    "backdrop": String,
    "cast": Array,
    "classification": String,
    "director":String,
    "genres": Array,
    "id": String,
    "imdb_rating": Number,
    "length": String,
    "overview": String,
    "poster": String,
    "released_on": String,
    "slug": String,
    "title": String
},{timestamps:true})

module.exports = mongoose.model('movies', movies)