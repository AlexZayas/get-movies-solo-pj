const express = require('express');
const router = express.Router();
const movieController = require('../controllers/moviecontroller')


// router.post('/addToFavs', (req, res) => {

// });

// router.delete('/deleteFromFavs', (req, res) => {

// });

router.post('/search/:title', movieController.search, (req, res) => {
   res.send({'response': 'You requested movie recomendations based off of your interest in the movie ' + req.params.title, 
   'movieRecommendations' : res.locals.recommendations, "movieData": res.locals.movieData});

}); 

router.post('/createAccountTable', movieController.createAccountTable, (req, res) => {
   res.send({})

});


module.exports = router;

