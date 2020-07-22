let movies = [
	{
		id: 0,
		name: "Doctor Who The Day of the Doctor",
		score: 1
	},
	{
		id: 1,
		name: "The Phantom of the Opera at the Royal Albert Hall",
		score: 8
	},
	{
		id: 2,
		name: "Forrest Gump1994",
		score: 5
	},
	{
		id: 3,
		name: "The Mountain II2",
		score: 3
	}
];

export const getMovies = () => movies;

export const getById = id => {
	const filteredMovies = movies.filter(movie => movie.id === String(id));
	return filteredMovies[0];
};

export const deleteMovie = id => {
	const cleanedMovies = movies.filter(movie => movie.id !== String(id));
	if (movies.length > cleanedMovies.length) {
		movies = cleanedMovies;
		return true;
	} else {
		return false;
	}
};

export const addMovie = (name, score) => {
	const newMovie = {
		id: `${movies.length + 1}`, 
		name, 
		score
	};
	movies.push(newMovie);
	return newMovie;
};