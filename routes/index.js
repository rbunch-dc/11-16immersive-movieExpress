var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('../config/config');

config.sayHello();

// req.body
// req.params
// req.query

/* GET home page. */
router.get('/', function(req, res, next) {

	request.get(config.baseUrl  + config.nowPlayingEP + config.api_key, (err, response,movieData)=>{
		movieData = JSON.parse(movieData);
		// console.log("MovieData", typeof(movieData));
		// res.json(movieData);
		res.render('index', { 
			movieData: movieData,
			imageUrl: config.imageBase
		})
	});
  // res.render('index', { title: 'Express' });
});

router.get('/search', function(req, res, next){
	res.render('search', {});
});

router.get('/movie/:movieId', (req,res,next)=>{
	var url = config.baseUrl+ 'movie/'+req.params.movieId+'?api_key=fec8b5ab27b292a68294261bb21b04a5';
	request.get(url, (error, response, movieData)=>{
		movieData = JSON.parse(movieData);
		res.render('singleMovie', {movieData: movieData});
	});

	// res.send("You searched for " + req.params.movieId);
});

router.get('/search/:searchString', (req, res, next) =>{
	var searchString = req.params.searchString;
	var queryUrl = config.baseUrl + 'search/movie?'+config.api_key+'&query='+searchString;
	// res.send(queryUrl);
	request.get(queryUrl, (error, response, searchData)=>{
		searchData = JSON.parse(searchData);
		res.render('index',{
			movieData: searchData,
			imageUrl: config.imageBase,
			searchString: searchString
		})
	})

});

router.get('/searchMovie', function(req, res, next){
	res.send("Haha, I'm a get route.");
})

router.post('/searchMovie', function(req, res, next){
	var searchString = encodeURI(req.body.movieSearch);
	var queryUrl = config.baseUrl + 'search/movie?'+config.api_key+'&query='+searchString;
	// res.send(queryUrl);
	request.get(queryUrl, (error, response, searchData)=>{
		searchData = JSON.parse(searchData);
		res.render('index',{
			movieData: searchData,
			imageUrl: config.imageBase,
			searchString: searchString
		})
	})
});

router.get('/bradPitt', function(req, res, next) {
	request.get(config.baseUrl + config.bpMovies11 + config.api_key, (err, response,movieData)=>{
		movieData = JSON.parse(movieData);
		res.render('index', { 
			movieData: movieData,
			imageUrl: config.imageBase
		})
	});
});

module.exports = router;
