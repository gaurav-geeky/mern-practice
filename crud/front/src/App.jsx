import './App.css'
import { Route, Routes } from 'react-router-dom'
import Forms from './Pages/Forms'
import Layout from './Pages/Layout'
import Display from './Pages/Display'
import Edit from './Pages/Edit' 
import EditUpdate from './Pages/EditUpdate'


function App() {

  return (
    <>



      <Routes>
        <Route path='/' element={<Layout />}>

          <Route path='form' element={<Forms />} />
          <Route index element={<Forms />} />
          <Route path='display' element={<Display/>} />
          <Route path='edit' element={<Edit/>} />
          <Route path='editupdate/:id' element={<EditUpdate/>} />
          

        </Route>
      </Routes>

    </>
  )
}

export default App; 
