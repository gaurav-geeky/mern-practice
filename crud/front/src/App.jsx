import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Forms from './Pages/Forms'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Forms/>


      <Routes>
        <Route>

          <Route />
          <Route />
          <Route />

        </Route>
      </Routes>

    </>
  )
}

export default App; 
