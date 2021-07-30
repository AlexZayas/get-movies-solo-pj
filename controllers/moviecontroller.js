const { response } = require('express');
const fetch = require ('node-fetch');

const movieController = {};

movieController.search = async (req, res, next) => {
    try { 
        const {title} = req.params;
        const response =  await fetch(`https://tastedive.com/api/similar?q=${title}`);
        const movieData = await response.json();

        function movieDataManipulator(data) {
            let recommendations = [];
        
            data.Similar.Results.forEach(element => {
                if(element.Type === "movie"){
                    recommendations.push({element})
                }
            });
            return recommendations;
        };
        res.locals.recommendations = movieDataManipulator(movieData);
        res.locals.movieData = movieData;
        return next();      
    } catch (error) {
        return next(error);
        /////the value of error is the error message that comes back fro the api

        
        
    }
};


movieController.createAccountTable = (req, res, next) => {
    try{
        

    }

   " CREATE TABLE [IF NOT EXISTS] Account_Table (
        user_id serial PRIMARY KEY,
        username VARCHAR ( 50 ) UNIQUE NOT NULL,
        password VARCHAR ( 50 ) NOT NULL,
        email VARCHAR ( 255 ) UNIQUE NOT NULL,
        created_on TIMESTAMP NOT NULL,
            last_login TIMESTAMP
     )";
};

    // movieController.getFavs = (req, res, next => {
    //     try {
            
    //         return next();
    //     } catch (error) {
    //         return next({
    //             log: 'movieController.getFavs: ERROR: Error getting favorite movies from favs.json file', 
    //             message: { error: 'Error occured in movieController.getFavs. Check server logs for more details.'},
    //         });
    //     }

    // });

    // movieController.addToFavs = (req, res, next => {



    // });

    // movieController.deleteFavs =(req, res, next => {

    // });



module.exports = movieController;
