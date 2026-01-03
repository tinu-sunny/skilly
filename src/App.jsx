import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from './Pages/Index'
import PageNotFound from './Pages/PageNotFound'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import AdminLandingpage from './admin/pages/AdminLandingpage'
import UserManagemet from './admin/pages/UserManagemet'
import FeedbackManagement from './admin/pages/FeedbackManagement'
import CourseandWorshopmanagement from'./admin/pages/CourseandWorshopmanagement'
import CareerFilelds from'./admin/pages/CareerFilelds'
import PromotionsManagement from './admin/pages/PromotionsManagement'
import StudentLandingpage from './Student/pages/StudentLandingpage'
import StudentCareer from './Student/pages/StudentCareer'
import JobApplication from './Student/pages/JobApplication'
import Counesling from './Student/pages/Counesling'
import CounsellorsChat from './Student/components/CounsellorsChat'
import FeedBack from './Student/pages/FeedBack'
import Experts from './Student/pages/Experts'
import DashBoard from './Counsellor/Pages/DashBoard'
import InstitutionDashBoard from './institution/pages/InstitutionDashBoard'
import CompayDashboard from './company/pages/CompayDashboard'
import CounselingBooking from './Student/pages/counselingBooking'
import Professionalindexpage from './professional/pages/Professionalindexpage'


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
    <Route path='/admin-landing-page' element={<AdminLandingpage/>}/>
    <Route path='/admin-user-management' element={<UserManagemet/>}/>
    <Route path='/admin-feedback-management' element={<FeedbackManagement/>}/>
    <Route path='/admin-courses-workshop-management'element={<CourseandWorshopmanagement/>}/>
    <Route path='/admin-careerFields-management' element={<CareerFilelds/>}/>
    <Route path='/admin-promotion-management'element={<PromotionsManagement/>}/>

    {/* Student Paths */}
    <Route path='/student-Landing-page' element={<StudentLandingpage/>}/>
    <Route path='/student-career-search-page' element={<StudentCareer/>}/>
    <Route path='/student-jobAplication' element={<JobApplication/>}/>
    <Route path='/student-counesling' element={<Counesling/>}/>
    <Route path='/student-couneslingchat' element={<CounsellorsChat/>}/>
    <Route path='/student-feedback' element={<FeedBack/>}/>
    <Route path='/student-experts' element={<Experts/>}/>
    <Route path='/counseling-booking' element={<CounselingBooking/>}/>

    {/* counselors path */}

    <Route path='/counsellor-dashboard' element={<DashBoard/>}/>



    {/*Institution  */}
    <Route path='/institution-dashboard' element={<InstitutionDashBoard/>}/>
    
    {/* Company */}
    <Route path='/company-dashboard' element={<CompayDashboard/>}/>

    {/* Career experts */}

    <Route path='/professional-index-page' element={<Professionalindexpage/>}/>


    {/* Page Not Found */}
    <Route path='*' element={<PageNotFound/>}/>
   </Routes>
   </>
  )
}

export default App