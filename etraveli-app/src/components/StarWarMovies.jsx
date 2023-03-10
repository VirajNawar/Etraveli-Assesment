import React, { useEffect, useState } from 'react'
import { filterMovies } from '../constants'
import useData from '../utils/useData'
import MovieCard from './MovieCard'
import SortBy from './SortBy'


function StarWarMovies() {
  const [selectedMovieTitle, setSelectedMovieTitle] = useState('')
  const [selectedMovieDescription, setSelectedMovieDecription] = useState('')
  const [searchMovie, setSearchMovie] = useState("")

  function handleSearch(e) {

    setSearchMovie(e.target.value)
  }
  const {
    movies,
    setMovies,
    filteredMovie,
    setFilteredMovie,
    sortedMovie,
    setSortedMovie
  } = useData([])



  const [sortBy, setSortBy] = useState("")


  function handleYearSort() {
    setSortBy("year")
  }

  function handleEpisodeSort() {
    setSortBy("episode")
  }



  const getSortedMovie = filteredMovie.sort((a, b) => {


    if (sortBy == "episode") {
      return a.episode_id - b.episode_id
    } else if (sortBy == "year") {
      return new Date(a.release_date) - new Date(b.release_date)
    } else {
      return 0
    }

  })





  return (

    <div className="">
      <div className="search__container  flex flex-wrap sm:flex-wrap md:flex-wrap p-3 bg-gray-400">
        <div className="btn">
          <SortBy
            handleEpisodeSort={handleEpisodeSort}
            handleYearSort={handleYearSort}
            getSortedMovie={getSortedMovie}
            setFilteredMovie={setFilteredMovie}
          />
        </div>
        <div className="search-input flex flex-1 max-w-full">
          <input type="text" className="px-2 flex-1 py-1 rounded-sm" placeholder='Type to search...' value={searchMovie} onChange={handleSearch} />
          <button className='mx-2 rounded-md bg-white bg-opacity-80 px-4 py-1 text-sm font-medium  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 '
            onClick={() => {
              const data = filterMovies(searchMovie, movies)
              setFilteredMovie(data)

            }}>Search</button>
        </div>
      </div>
      <div className='flex'>
        <div className="movie__name border-gray-400 basis-1/2 mt-2">
          <div className="mx-2 flex flex-col">
            {
              filteredMovie.map(movie => (
                <MovieCard {...movie} setSelectedMovieTitle={setSelectedMovieTitle} setSelectedMovieDecription={setSelectedMovieDecription} key={movie.episode_id} />
              )
              )
            }

          </div>
        </div>
        <div className="movie__desc basis-1/2 ">
          {
            selectedMovieTitle && selectedMovieDescription ? (
              <div className='flex flex-col p-6'>
                <h2 className='text-2xl font-bold mb-3'>{selectedMovieTitle}</h2>
                <p>{selectedMovieDescription}</p>
              </div>
            ) : (
              <h3 className='grid place-content-center pt-52'>No Movies Selected</h3>
            )
          }
        </div>
      </div>
    </div>

  )
}

export default StarWarMovies