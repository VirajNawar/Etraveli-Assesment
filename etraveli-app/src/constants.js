export const FETCH_MOVIE_DATA_URL = "https://swapi.dev/api/films/?format=json.";

export function filterMovies(searchMovie, movies) {
  
  const filter = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchMovie.toLowerCase())
  );
  
  return filter;
}
