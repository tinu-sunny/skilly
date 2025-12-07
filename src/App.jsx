import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from './Pages/Index'
import PageNotFound from './Pages/PageNotFound'
import About from './Pages/About'

function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Index/>}/>
    <Route path='/about' element={<About/>}/>



    {/* Page Not Found */}
    <Route path='*' element={<PageNotFound/>}/>
   </Routes>
   </>
  )
}

export default App