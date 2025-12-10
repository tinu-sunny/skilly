import React from 'react'
import { Link } from 'react-router-dom'

function AppFooter() {
  return (
    <>
    
    <footer className=' p-5  w-full shadow-2xl shadow-amber-600'>

        <div className='flex flex-col gap-1 py-3 '>
                  <div className='flex justify-evenly items-center sm:mt-9'>
                      <Link to={'/'}>  <p className='text-[#617589] text-base font-normal leading-normal hover:underline hover:text-blue-600' >Home</p></Link>
                      <Link to={'/about'}> <p className='text-[#617589] text-base font-normal leading-normal hover:underline hover:text-blue-600' >About</p></Link>
                      <Link to={'/services'}><p className='text-[#617589] text-base font-normal leading-normal hover:underline hover:text-blue-600' >Services</p></Link>
                      <Link to={'/contact'}>  <p className='text-[#617589] text-base font-normal leading-normal hover:underline hover:text-blue-600' >Contact</p></Link>
                  </div>
            <div className='mt-10'>
                <p className='text-center text-[#617589] text-base font-normal leading-normal '>© 2025 Skillly. All rights reserved.</p>
            </div>
        </div>
    </footer>
    
    </>
  )
}

export default AppFooter