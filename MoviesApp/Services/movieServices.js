const MoviesCollection = require('../Models/movies_schema')

exports.getMovies = async(req,res) => {
    try {
        const allMovies = await MoviesCollection.find()
        let genres = []
        allMovies.forEach(movie => {
            movie.genres.forEach(g => {
                if(!(genres.find(gener => gener === g))) genres.push(g)
            })
        })
        let grouped_by_gener = []
        genres.forEach(gener => {
            const gener_movies = allMovies.filter(movie => movie.genres.includes(gener))
            grouped_by_gener.push({
                gener,
                movies : gener_movies
            })
        })
        res.json({grouped_by_gener})
    } catch (error) {
        console.error(JSON.stringify(error))
        res.status(500).json({error: JSON.stringify(error)})
    }
}