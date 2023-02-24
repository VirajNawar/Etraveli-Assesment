import React, { useState } from 'react'

import useData from '../utils/useData'


function StarWarMovies() {
  const [selectedMovieTitle, setSelectedMovieTitle] = useState('')
  const [selectedMovieDescription, setSelectedMovieDecription] = useState('')
  const {
    movies,
    setMovies,
  } = useData([])
  


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
                    <li className='cursor-pointer' onClick={()=>{
                      setSelectedMovieTitle(movie.title)
                      setSelectedMovieDecription(movie.opening_crawl)
                      }}>
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
        <div className="movie__desc basis-1/2 ">
         {
          selectedMovieTitle && selectedMovieDescription ? (
            <div className='flex flex-col p-6'>
            <h2 className='text-2xl font-bold mb-3'>{selectedMovieTitle}</h2>
            <p>{selectedMovieDescription}</p>
            </div>
          ):(
            <h3 className='grid place-content-center pt-52'>No Data Found</h3>
          )
         }
        </div>
      </div>
    </div>

  )
}

export default StarWarMovies