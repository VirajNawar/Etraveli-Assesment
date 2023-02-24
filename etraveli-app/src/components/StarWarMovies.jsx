import React from 'react'

import useData from '../utils/useData'


function StarWarMovies() {
  
  const {
    movies,
    setMovies,
    selectedMovie,
    setSelectedMovie
  } = useData([])
  

  function handleClick(title,opening_crawl){
      setSelectedMovie(title,opening_crawl)
  }
  return (

    <div className="">
      <div className="search__container  flex flex-wrap sm:flex-wrap md:flex-wrap p-3 bg-gray-400">
        <div className="btn">
          <button className='mr-3 bg-gray-100 px-3 py-1 rounded-sm shadow-sm text-xs'>
            Sort by..
          </button>
        </div>
        <div className="search-input max-w-full">
          <input type="text" className="" />
        </div>
      </div>
      <div className='flex'>
        <div className="movie__name border-gray-400 basis-1/2">
          <ul className="mx-2 flex flex-col">               
              { 
                movies.map(movie=>(
                  <li key={movie.episode_id} className="flex mb-4 justify-between">
                    <li className=' '>
                      Episode{movie.episode_id}
                    </li>
                    <li className='' onClick={handleClick(movie.title,movie.opening_crawl)}>
                      Episode{movie.episode_id}-{movie.title}
                    </li>
                    <li>
                      {movie.release_date}
                    </li>
                  </li>
                )
                )
              }
           
          </ul>
        </div>
        <div className="movie__desc basis-1/2">
         {
          selectedMovie ? (
            <>
            <h2>{selectedMovie.title}</h2>
            <p>{selectedMovie.opening_crawl}</p>
            </>
          ):(
            <h3>No Data Found</h3>
          )
         }
        </div>
      </div>
    </div>

  )
}

export default StarWarMovies