import React from 'react'
import CounsellorSidebar from '../Components/CounsellorSidebar'
import { FaCheckCircle } from 'react-icons/fa'
import { IoIosTrendingUp } from 'react-icons/io'
import { MdEventAvailable, MdPendingActions } from 'react-icons/md'

function ViewBookings() {
  return (
      <>
      <div className="flex sm:flex-row flex-col  ">
        {/* header */}
        <div className="w-80">
          {" "}
          <CounsellorSidebar />
        </div>

        {/* dashbord content  */}
        <div className="sm:mt-5 p-5 sm:p-0 w-full ">
        

<section>
  <div>
        <h1 className='text-4xl font-bold text-[#111418] leading-tight'>Booking Management</h1>
        <p className='text-xl font-medium text-slate-500 mt-2'>Manage your Upcoming Sessions </p>
  </div>

   {/*qucik cards  */}
                      <section>
                          <div className='flex sm:flex-col  lg:flex-row md:flex-row gap-5 p-8 justify-evenly items-center'>
                              {/* Upcoming Count */}
                              <div className='bg-gray-200 rounded-2xl p-5 shadow-2xl w-70 h-35'>
                                  <div className='flex  justify-Start items-center gap-2 text-[18px] font-medium'>
                                     <div className='text-blue-700'> <MdEventAvailable /> </div>
                                      <p className='text-[#111418]'>
                                          Upcoming Today
                                      </p>
                                  </div>
                                  <span className='text-slate-800 font-medium text-[18px] items-center justify-Start flex'>
                                      5
                                  </span>
                                 <p className='text-[18px] text-green-700 flex items-center justify-Start gap-2'> <IoIosTrendingUp /> <span>+2</span> from Yesterday</p>
                              </div>
  
                               {/* Pending Count */}
                              <div className='bg-gray-200 rounded-2xl p-5 shadow-2xl w-70 h-35'>
                                  <div className='flex  justify-Start items-center gap-2 text-[18px] font-medium'>
                                     <div className='text-orange-700'><MdPendingActions /> </div>
                                      <p className='text-[#111418]'>
                                         Pending Approval
                                      </p>
                                  </div>
                                  <span className='text-slate-800 font-medium text-[18px] items-center justify-Start flex'>
                                      8
                                  </span>
                                 <p className='text-[18px] text-green-700 flex items-center justify-Start gap-2'>  Requires attention</p>
                              </div>
  
                                 {/* Completed  Count () */}
                              <div className='bg-gray-200 rounded-2xl p-5 shadow-2xl w-70 h-35'>
                                  <div className='flex  justify-Start items-center gap-2 text-[18px] font-medium'>
                                     <div className='text-green-700'><FaCheckCircle /> </div>
                                      <p className='text-[#111418]'>
                                        completed
                                      </p>
                                  </div>
                                  <span className='text-slate-800 font-medium text-[18px] items-center justify-Start flex'>
                                      18
                                  </span>
                                 <p className='text-[18px] text-green-700 flex items-center justify-Start gap-2'> <IoIosTrendingUp /><span>18%</span> increase</p>
                              </div>
  
                                 {/* Completed  Count () */}
                              <div className='bg-gray-200 rounded-2xl p-5 shadow-2xl w-70 h-35'>
                                  <div className='flex  justify-Start items-center gap-2 text-[18px] font-medium'>
                                     <div className='text-green-700'><FaCheckCircle /> </div>
                                      <p className='text-[#111418]'>
                                       Cancellations
                                      </p>
                                  </div>
                                  <span className='text-slate-800 font-medium text-[18px] items-center justify-Start flex'>
                                      1
                                  </span>
                                 <p className='text-[18px] text-green-700 flex items-center justify-Start gap-2'></p>
                              </div>
                          </div>
                      </section>
</section>

        </div>
      </div>
    </>
  )
}

export default ViewBookings