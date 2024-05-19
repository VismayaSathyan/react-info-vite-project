import { useState } from 'react'
import Main from './components/Main'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Navbar />
      <Main />
      {/* Here in HMR the state is always maintained and only the changes related to a module gets updated */}
      {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}

    </>
  )
}

export default App
