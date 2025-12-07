import React from 'react'
import { Link } from 'react-router-dom'

function AppFooter() {
  return (
    <>
    
    <footer className=' p-5  w-full shadow-2xl shadow-amber-600'>

        <div className='flex flex-col gap-1 py-3 '>
                  <div className='flex justify-evenly items-center sm:mt-9'>
                      <Link to={'/'}>  <a className='text-[#617589] text-base font-normal leading-normal hover:underline hover:text-blue-600' href="">Home</a></Link>
                      <Link to={'/about'}> <a className='text-[#617589] text-base font-normal leading-normal hover:underline hover:text-blue-600' href="">About</a></Link>
                      <Link to={'/service'}><a className='text-[#617589] text-base font-normal leading-normal hover:underline hover:text-blue-600' href="">Services</a></Link>
                      <Link to={'/contact'}>  <a className='text-[#617589] text-base font-normal leading-normal hover:underline hover:text-blue-600' href="">Contact</a></Link>
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