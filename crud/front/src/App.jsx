import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Forms from './Pages/Forms'
import Layout from './Pages/Layout'
import Display from './Pages/Display'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>



      <Routes>
        <Route path='/' element={<Layout />}>

          <Route path='form' element={<Forms />} />
          <Route index element={<Forms />} />
          <Route path='display' element={<Display/>} />
          <Route />

        </Route>
      </Routes>

    </>
  )
}

export default App; 
