import { useState } from 'react'
import './App.css'
import StarWarMovies from './components/StarWarMovies'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <StarWarMovies />
    </div>
  )
}

export default App
