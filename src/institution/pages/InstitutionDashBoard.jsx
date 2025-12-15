import React from 'react'

import { Button } from 'flowbite-react'
import { SlCalender } from 'react-icons/sl'
import { IoAddSharp, IoPersonAddSharp } from 'react-icons/io5'
import { MdEditCalendar, MdEventAvailable, MdNoteAdd, MdPendingActions } from 'react-icons/md'
import { IoIosTrendingUp } from 'react-icons/io'
import { FaAngleDoubleRight, FaCheckCircle } from 'react-icons/fa'
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { PiUploadFill } from 'react-icons/pi'
import InstitutionSidebar from '../Components/InstitutionSidebar'
import { BiSolidMessage } from 'react-icons/bi'
import { FaBook, FaCreditCard, FaUserPlus } from 'react-icons/fa6'

function InstitutionDashBoard() {
  return (
    <>
      <div className="flex sm:flex-row flex-col  ">
        {/* header */}
        <div className="w-80">
          {" "}
          <InstitutionSidebar/>
        </div>

        {/* dashbord content  */}
        <div className="sm:mt-5 p-5 sm:p-0 w-full ">
        
{/* Heading */}
                    <div className='p-5'>
                       <div>
                        <h1 className='text-4xl font-bold tracking-tight text-[#111418] leading-tight'>Welcome back, <span>Institution Name</span>. </h1>
                        <p className='font-medium text-slate-500 leading-tight text-xl'>Here's what's happening at your institution today. </p>
                       </div>

                    </div>

                    {/*qucik cards  */}
                    <section>
                        <div className='flex sm:flex-col  lg:flex-row md:flex-row gap-5 p-8 justify-evenly items-center'>
                            {/* Total Enquiries */}
                            <div className='flex  flex-row gap-5 items-center justify-between bg-gray-200 rounded-2xl p-5 shadow-2xl w-70 h-35'>
                                <div className=' text-[18px] font-medium'>
                                   <h1>Total Enquiries</h1>
                                   <p className='text-slate-800'>125</p>
                                </div>
                                   <div className='text-blue-700 text-4xl'> <BiSolidMessage /></div>

                      
                            </div>

                             {/*  Active course */}
                       <div className='flex  flex-row gap-5 items-center justify-between bg-gray-200 rounded-2xl p-5 shadow-2xl w-70 h-35'>
                                <div className=' text-[18px] font-medium'>
                                   <h1>Active course</h1>
                                   <p className='text-slate-800'>15</p>
                                </div>
                                   <div className='text-blue-700 text-4xl'> <FaBook /></div>

                      
                            </div>

                               {/* Pending Applicants */}
                         <div className='flex  flex-row gap-5 items-center justify-between bg-gray-200 rounded-2xl p-5 shadow-2xl w-70 h-35'>
                                <div className=' text-[18px] font-medium'>
                                   <h1>Pending Applicants</h1>
                                   <p className='text-slate-800'>25</p>
                                </div>
                                   <div className='text-blue-700 text-4xl'> <FaUserPlus /></div>

                      
                            </div>

                               {/*Monthly revenue */}
                               <div className='flex  flex-row gap-5 items-center justify-between bg-gray-200 rounded-2xl p-5 shadow-2xl w-70 h-35'>
                                <div className=' text-[18px] font-medium'>
                                   <h1>Monthly revenue </h1>
                                   <p className='text-slate-800'>125</p>
                                </div>
                                   <div className='text-blue-700 text-4xl'><FaCreditCard /></div>

                      
                            </div>
                            
                        </div>
                    </section>
{/* 2 70%/30% */}
                    <section>
                        {/* 100% */}
                              <div className='w-full flex  justify-center gap-5'>
                                 {/*quick 60% */}
                                 <div className='w-[80%]  rounded-2xl h-105'>
                                 <h1 className='text-3xl font-bold  ml-5'>Quick Access</h1>
                                <div className='grid grid-cols-2 gap-5 p-5 text-center justify-evenly items-center w-full h-full'>
                                      <div className=' text-white h-40  rounded-2xl p-5 text-start ' style={{backgroundImage:`url("https://lh3.googleusercontent.com/aida-public/AB6AXuCDVIK8kxtjASrAr3y8JReW6oSswdXyaiZjNsp7EWDeZ_rYwGuzavaSb1QvKm1orx9TNcGAMOLGfEQOIRn2-dD-s3_AVDTTdvvJYQo8AFE7dVNnDwS9reRSi1H-r0tqb2T8Dba9AbAkAX1Ft6dZqhfUi7qKDOgsK6VlZmKTmfh87m3dWIVyI_ZhvEt4GC3wHVaxLxI__oJctILyf3jfCpu_XDYL52PdEwRebjfynXejr-40RvT9_Y8WmNYkFv7JhaapsDCb5bFdqbY")`, backgroundRepeat:"no-repeat", backgroundSize:"cover",backgroundPosition:"center" ,  opacity: 0.9}}>
                                        <p className='text-black font-medium text-xl mt-10'>course Management</p>
                                      </div>
                                       <div className=' text-white h-40  rounded-2xl p-5 text-start ' style={{backgroundImage:`url("https://lh3.googleusercontent.com/aida-public/AB6AXuB1CsEEcWbotGnLdYxBeKxFehVQseTInQjJiCFCoeu6DNuMq9nwC2J9RJu0JRB9maRKqHl6JlxAF7ok2thGMIdl6IeY-cmu6eSW1UQnvrNUi_NR_tL9AlcHIY-OLMeWWLi_vsP7tI0L3LmqXtdmfZqNQ0HAU5Cwk8wqjHdjZ9HFFELE5rkdFpcSKOp7kyAHUT92i7G47L-WNsEUYSPz0m4qlTbQk4CMDZfMCnB444H4V2lVcuYYJcA6O085uCBGaBA4aPiE36nGoeA")`, backgroundRepeat:"no-repeat", backgroundSize:"cover",backgroundPosition:"center",opacity:0.9}}>
                                     <p className='text-black font-medium text-xl mt-10'> Enquiries &amp; Bookings</p>
                                      </div>
                                       <div className=' text-white h-40  rounded-2xl p-5 text-start ' style={{backgroundImage:`url("https://lh3.googleusercontent.com/aida-public/AB6AXuC60tC-h5zTPKQZRo7rA-lVZf3qcunrZcdBYnM-zqCTND4-1QJ31qENBeFBIHrPxBMICNmzMFk2Ytlb4esCcQ2nwMB9ozA8S4kEmq2ApOT45VH5D5WLO4ZB3Ki3IFD3S0_KsvUzVGkLRxN9iAniYWvZkN36f13_ZG5ayAYjJ_pTN7J7y0CDZpVouy0GfPFF3I7Ka5OJBcH1Og8qc9gO6ECnA1JWC0iSqNQhFe5288DN43xWOWQmJp2-bDklMX2lLtiGvm3qHIe01KU")`, backgroundRepeat:"no-repeat", backgroundSize:"cover",backgroundPosition:"center",opacity: 0.9}}>
                                       <p className='text-black font-medium text-xl mt-10'>Promotions</p>
                                      </div>
                                       <div className=' text-white h-40  rounded-2xl p-5 text-start ' style={{backgroundImage:`url("https://lh3.googleusercontent.com/aida-public/AB6AXuCe7kp2OYAjJ2O0mMFsMX4IPl1LXb2STLB8UkbqE9o83iXKY-caFg4n9l-ZoHcoguJi38wnvNz1_wktWkfRJWzO4e-pfVaCeqHTzlIWg2u0dYjU8WYOQktl37B4DRL2vzojuLLM5Ff9p8Hl5VcgzJ4nPH3xTfmsGRmoChp3AeMwNAON26GMbzekVgkh20HqIQFDiIBI_KZ8jvoRKl5EqmBihNMYq9-ZOmo1KSkT_IN2Jt6zJ-LX5R4comlMG1PBNFztaScBjzW8tpM")`, backgroundRepeat:"no-repeat", backgroundSize:"cover",backgroundPosition:"center",opacity: 0.9}}>
                                        <p className='text-black font-medium text-xl mt-10'>Faculty Management</p>
                                      </div>
                                </div>
  
                                 </div>

                                 {/* 40% */}
                                 <div className='w-[20%] flex gap-5 flex-col'>
                                    {/*recent enquiries*/}
                                      <div className='bg-gray-200 h-105 w-[90%] rounded-2xl '>
                                        {/* Heading */}
                                          <div className='text-center'>
                                            <h1 className=' font-bold text-xl mt-5 '>Recent Equiries  </h1>  
                                          </div>
                                          {/* enquiries */}
                                         <div className='flex flex-col p-5 gap-5 '>
                                          {/*  */}
                                            <div className='flex justify-between items-center'>
                                              <div className='flex flex-col'>
                                                <p className='font-medium tracking-tight leading-tight'>name</p>
                                                <p className='text-slate-600 font-medium leading-tight'>course</p>
                                              </div>
                                              <div className='font-bold leading-tight rounded-2xl bg-gray-100 p-3'>status</div>
                                            </div>

                                            {/*  */}
                                             <div className='flex justify-between items-center'>
                                              <div className='flex flex-col'>
                                                <p className='font-medium tracking-tight leading-tight'>name</p>
                                                <p className='text-slate-600 font-medium leading-tight'>course</p>
                                              </div>
                                              <div className='font-bold leading-tight rounded-2xl bg-gray-100 p-3'>status</div>
                                            </div>
                                            
                                            {/*  */}
                                              <div className='flex justify-between items-center'>
                                              <div className='flex flex-col'>
                                                <p className='font-medium tracking-tight leading-tight'>name</p>
                                                <p className='text-slate-600 font-medium leading-tight'>course</p>
                                              </div>
                                              <div className='font-bold leading-tight rounded-2xl bg-gray-100 p-3'>status</div>
                                            </div>
                                            {/*  */}
                                             <div className='flex justify-between items-center'>
                                              <div className='flex flex-col'>
                                                <p className='font-medium tracking-tight leading-tight'>name</p>
                                                <p className='text-slate-600 font-medium leading-tight'>course</p>
                                              </div>
                                              <div className='font-bold leading-tight rounded-2xl bg-gray-100 p-3'>status</div>
                                            </div>
                                            {/*  */}
                                             <div className='flex justify-between items-center'>
                                              <div className='flex flex-col'>
                                                <p className='font-medium tracking-tight leading-tight'>name</p>
                                                <p className='text-slate-600 font-medium leading-tight'>course</p>
                                              </div>
                                              <div className='font-bold leading-tight rounded-2xl bg-gray-100 p-3'>status</div>
                                            </div>

                                         </div>
                                                <div className=' border-2 text-center rounded-3xl bg-transparent hover:bg-amber-50 text-black font-bold shadow-2xl'>  <button>View All</button></div>
                                      </div>
                                    
                                 </div>
                              </div>
                    </section>
        </div>
      </div>
    </>
  )
}

export default InstitutionDashBoard