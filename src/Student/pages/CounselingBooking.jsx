import React from 'react'
import StudentHeader from '../components/StudentHeader'
import { Button } from 'flowbite-react'
import AppFooter from '../../components/AppFooter'
import Calendar from '../components/Calendar'



function CounselingBooking() {
  
  return (
    <>
   <div className='flex flex-col sm:flex-row'>
                {/* Header */}

                <div className='fixed'>
                    <StudentHeader/>
                </div>
                          
                          {/* DashBoard content */}
                <div className='p-10 w-full sm:ml-50'>
                
              
                    {/* heading */}
                  <div>
                      <h1 className='text-4xl font-bold leading-tight'>Book Counselling Session</h1>
                      </div>

                      {/* section type and date selection */}

                      <div className='mt-10 w-full'>
                       
                       
                      
                            <Calendar/>
                      
                      </div>
                 
                  



 
                </div>

   

   </div>
     {/* footer */}
  <div className='mt-10'> <AppFooter/></div>
   </>
  )
}

export default CounselingBooking