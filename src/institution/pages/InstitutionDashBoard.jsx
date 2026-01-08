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
import AppFooter from '../../components/AppFooter'

function InstitutionDashBoard() {
  return (
    <>
      <div className="flex sm:flex-row flex-col dark:bg-black  ">
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
                        <h1 className='text-4xl font-bold tracking-tight text-[#111418] leading-tight dark:text-white'>Welcome back, <span>Institution Name</span>. </h1>
                        <p className='font-medium text-slate-500 leading-tight text-xl dark:text-white'>Here's what's happening at your institution today. </p>
                       </div>

                    </div>

                    {/*qucik cards  */}
                    <section>
                        <div className='flex  flex-wrap gap-5 p-8 justify-evenly items-center'>
                            {/* Total Enquiries */}
                            <div className='flex  flex-row gap-5 items-center justify-between bg-gray-200 rounded-2xl p-5 shadow-2xl w-70 h-35 dark:bg-blue-500'>
                                <div className=' text-[18px] font-medium dark:text-white'>
                                   <h1>Total Enquiries</h1>
                                   <p className='text-slate-800 dark:text-white'>125</p>
                                </div>
                                   <div className='text-blue-700 text-4xl dark:text-white'> <BiSolidMessage /></div>

                      
                            </div>

                             {/*  Active course */}
                       <div className='flex  flex-row gap-5 items-center justify-between bg-gray-200 rounded-2xl p-5 shadow-2xl w-70 h-35 dark:bg-blue-500'>
                                <div className=' text-[18px] font-medium dark:text-white'>
                                   <h1>Active course</h1>
                                   <p className='text-slate-800 dark:text-white'>15</p>
                                </div>
                                   <div className='text-blue-700 text-4xl dark:text-white'> <FaBook /></div>

                      
                            </div>

                               {/* Pending Applicants */}
                         <div className='flex  flex-row gap-5 items-center justify-between bg-gray-200 rounded-2xl p-5 shadow-2xl w-70 h-35 dark:bg-blue-500'>
                                <div className=' text-[18px] font-medium dark:text-white'>
                                   <h1>Pending Applicants</h1>
                                   <p className='text-slate-800 dark:text-white'>25</p>
                                </div>
                                   <div className='text-blue-700 text-4xl dark:text-white'> <FaUserPlus /></div>

                      
                            </div>

                               {/*Monthly revenue */}
                               <div className='flex  flex-row gap-5 items-center justify-between bg-gray-200 rounded-2xl p-5 shadow-2xl w-70 h-35 dark:bg-blue-500'>
                                <div className=' text-[18px] font-medium dark:text-white'>
                                   <h1>Monthly revenue </h1>
                                   <p className='text-slate-800 dark:text-white'>125</p>
                                </div>
                                   <div className='text-blue-700 text-4xl dark:text-white'><FaCreditCard /></div>

                      
                            </div>
                            
                        </div>
                    </section>
{/* 2 70%/30% */}
                   <section className="w-full px-4">
  <div className="w-full flex flex-col lg:flex-row justify-center gap-6">

    {/* QUICK ACCESS */}
    <div className="w-full lg:w-[80%] rounded-2xl">
      <h1 className="text-2xl sm:text-3xl font-bold ml-2 sm:ml-5 mb-4 dark:text-white">
        Quick Access
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-2 sm:p-5">

        {[
          {
            title: "Course Management",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmY-fXa83-F0Bs6X0TkwtAd38uJIQICXSK4g&s",
          },
          {
            title: "Enquiries & Bookings",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1CsEEcWbotGnLdYxBeKxFehVQseTInQjJiCFCoeu6DNuMq9nwC2J9RJu0JRB9maRKqHl6JlxAF7ok2thGMIdl6IeY-cmu6eSW1UQnvrNUi_NR_tL9AlcHIY-OLMeWWLi_vsP7tI0L3LmqXtdmfZqNQ0HAU5Cwk8wqjHdjZ9HFFELE5rkdFpcSKOp7kyAHUT92i7G47L-WNsEUYSPz0m4qlTbQk4CMDZfMCnB444H4V2lVcuYYJcA6O085uCBGaBA4aPiE36nGoeA",
          },
          {
            title: "Promotions",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC60tC-h5zTPKQZRo7rA-lVZf3qcunrZcdBYnM-zqCTND4-1QJ31qENBeFBIHrPxBMICNmzMFk2Ytlb4esCcQ2nwMB9ozA8S4kEmq2ApOT45VH5D5WLO4ZB3Ki3IFD3S0_KsvUzVGkLRxN9iAniYWvZkN36f13_ZG5ayAYjJ_pTN7J7y0CDZpVouy0GfPFF3I7Ka5OJBcH1Og8qc9gO6ECnA1JWC0iSqNQhFe5288DN43xWOWQmJp2-bDklMX2lLtiGvm3qHIe01KU",
          },
          {
            title: "Faculty Management",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCe7kp2OYAjJ2O0mMFsMX4IPl1LXb2STLB8UkbqE9o83iXKY-caFg4n9l-ZoHcoguJi38wnvNz1_wktWkfRJWzO4e-pfVaCeqHTzlIWg2u0dYjU8WYOQktl37B4DRL2vzojuLLM5Ff9p8Hl5VcgzJ4nPH3xTfmsGRmoChp3AeMwNAON26GMbzekVgkh20HqIQFDiIBI_KZ8jvoRKl5EqmBihNMYq9-ZOmo1KSkT_IN2Jt6zJ-LX5R4comlMG1PBNFztaScBjzW8tpM",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="h-40 rounded-2xl p-5 flex items-end text-black font-semibold text-lg shadow-md"
            style={{
              backgroundImage: `url(${item.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <p className='text-[#11418]'>{item.title}</p>
          </div>
        ))}
      </div>
    </div>

    {/* RECENT ENQUIRIES */}
    <div className="w-full lg:w-[25%] flex justify-center">
      <div className="bg-gray-200 w-full lg:w-[90%] rounded-2xl p-4 flex flex-col dark:bg-blue-500">
        <h1 className="text-center font-bold text-lg mb-4 dark:text-white">
          Recent Enquiries
        </h1>

        <div className="flex flex-col gap-4 overflow-y-auto max-h-[350px]">
          {[1, 2, 3, 4].map((_, i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-white p-3 rounded-xl shadow-sm"
            >
              <div>
                <p className="font-medium leading-tight">Name</p>
                <p className="text-sm text-gray-500">Course</p>
              </div>
              <span className="px-3 py-1 text-sm rounded-full bg-gray-100 font-semibold">
                Status
              </span>
            </div>
          ))}
        </div>

        <button className="mt-4 border rounded-full py-2 font-bold hover:bg-amber-50 transition">
          View All
        </button>
      </div>
    </div>
  </div>
</section>

        </div>
      </div>

      <div>
        <AppFooter/>
      </div>
    </>
  )
}

export default InstitutionDashBoard