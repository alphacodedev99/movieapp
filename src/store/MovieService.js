import axios from 'axios';

class MovieService {
	static getGenre = () =>
		axios.get(
			'https://api.themoviedb.org/3/genre/movie/list?language=en'
		);
}

export default MovieService;
