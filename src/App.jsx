import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from './Pages/Index'
import PageNotFound from './Pages/PageNotFound'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import AdminLandingpage from './admin/pages/AdminLandingpage'

function App() {
  return (
   <>
   <Routes>
    {/* User path */}
    <Route path='/' element={<Index/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/contact' element={<Contact/>}/>

    {/* Adminn path */}
    <Route path='/adminlandingpage' element={<AdminLandingpage/>}/>



    {/* Page Not Found */}
    <Route path='*' element={<PageNotFound/>}/>
   </Routes>
   </>
  )
}

export default App