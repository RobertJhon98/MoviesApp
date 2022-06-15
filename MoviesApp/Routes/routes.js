const { getMovies } = require("../Services/movieServices")

module.exports = function (router) {
    router.get('/getMovies',getMovies)
}