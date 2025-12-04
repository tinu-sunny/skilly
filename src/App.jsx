import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from './Pages/Index'
import PageNotFound from './Pages/PageNotFound'

function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Index/>}/>




    {/* Page Not Found */}
    <Route path='*' element={<PageNotFound/>}/>
   </Routes>
   </>
  )
}

export default App