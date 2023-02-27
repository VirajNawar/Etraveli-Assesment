import { useEffect, useState } from "react";
import { FETCH_MOVIE_DATA_URL } from "../constants";

const useData = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovie, setFilteredMovie] = useState([]);
  const [sortedMovie, setSortedMovie] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);

  
  useEffect(() => {
    console.log(sortedMovie);
  },[sortedMovie])

  async function fetchApi() {
    const data = await fetch("https://swapi.dev/api/films/?format=json");
    const json = await data.json();
    setMovies(json.results);
    setFilteredMovie(json.results);
    setSortedMovie(json.results);
  }

  return {
    movies,
    setMovies,
    filteredMovie,
    setFilteredMovie,
    sortedMovie,
    setSortedMovie,
  };
};

export default useData;
