import { useEffect, useState } from "react"
import { FETCH_MOVIE_DATA_URL } from '../constants'

const useData = () => {
    const [movies, setMovies] = useState([])
 

  useEffect(()=>{
    fetchApi()
  },[])

  async function fetchApi() {
    const data = await fetch("https://swapi.dev/api/films/?format=json")
    const json = await data.json()
    // console.log(json.results)
    setMovies(json.results)
    
  }

  return {movies,setMovies}
}

export default useData
