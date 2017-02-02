var config = {
    baseUrl: 'http://api.themoviedb.org/3/',
	imageBase: 'http://image.tmdb.org/t/p/w300',
	imageBaseFull: 'http://image.tmdb.org/t/p/original',
    nowPlayingEP: 'movie/now_playing?',
    api_key: '&api_key=fec8b5ab27b292a68294261bb21b04a5',
    bpMovies11: 'discover/movie?with_people=287&primary_release_year=2011&sort_by=vote_average.desc',
};

config.sayHello = function(){
	console.log("Hello");
}

module.exports = config;