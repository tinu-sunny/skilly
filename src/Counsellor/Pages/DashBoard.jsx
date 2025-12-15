import React from 'react'
import CounsellorSidebar from '../Components/CounsellorSidebar'
import { Button } from 'flowbite-react'
import { SlCalender } from 'react-icons/sl'
import { IoAddSharp, IoPersonAddSharp } from 'react-icons/io5'
import { MdEditCalendar, MdEventAvailable, MdNoteAdd, MdPendingActions } from 'react-icons/md'
import { IoIosTrendingUp } from 'react-icons/io'
import { FaAngleDoubleRight, FaCheckCircle } from 'react-icons/fa'
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { PiUploadFill } from 'react-icons/pi'
function DashBoard() {
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
        
{/* Heading */}
                    <div className='flex flex-row justify-between items-center p-5'>
                       <div>
                        <h1 className='text-4xl font-bold tracking-tight text-[#111418] leading-tight'>Welcome back, <span>Name</span>. </h1>
                        <p className='font-medium text-slate-500 leading-tight text-xl'>Here's what's happening today. </p>
                       </div>
{/* view Calender And Booking Button */}
                       <div className='flex gap-5'>
                         <Button outline ><SlCalender />View Calender</Button>
                         <Button><IoAddSharp /> New Booking</Button>
                       </div>
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
{/* 2 70%/30% */}
                    <section>
                        {/* 100% */}
                              <div className='w-full flex  justify-center gap-5'>
                                 {/* upcoming section 60% */}
                                 <div className='w-[60%] bg-gray-300 rounded-2xl h-105'>
                                       <div className='flex justify-between items-center p-5 '>
                                        <h1 className='font-bold text-[#111418] leading-tight  text-2xl'>Upcoming Sessions</h1>
                                        <Button>
                                            View All<FaAngleDoubleRight />
                                        </Button>
                                       </div>
                                       <hr />
                                       {/* table */}
                                        <div className="overflow-x-auto w-full px-2 py-1">
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Time</TableHeadCell>
            <TableHeadCell>Type</TableHeadCell>
            <TableHeadCell>Action</TableHeadCell>
          
          </TableRow>
        </TableHead>
        <TableBody className="divide-y">
          <TableRow className="bg-white dark:border-gray-700 ">
            <TableCell className="whitespace-nowrap font-medium text-gray-900">
           Emma Roberts <br/> <span>Career Guidance</span>
            </TableCell>
            <TableCell>10:00 AM<br/> <span>60 mins</span></TableCell>
            <TableCell>  Video</TableCell>
      
            <TableCell>
              <Button href="#" className="font-medium text-white  ">
                Join
              </Button>
            </TableCell>
          </TableRow>
            <TableRow className="bg-white dark:border-gray-700 ">
            <TableCell className="whitespace-nowrap font-medium text-gray-900">
           Emma Roberts <br/> <span>Career Guidance</span>
            </TableCell>
            <TableCell>10:00 AM<br/> <span>60 mins</span></TableCell>
            <TableCell>  Video</TableCell>
      
            <TableCell>
              <Button href="#" className="font-medium text-white  ">
                Join
              </Button>
            </TableCell>
          </TableRow>
            <TableRow className="bg-white dark:border-gray-700 ">
            <TableCell className="whitespace-nowrap font-medium text-gray-900">
           Emma Roberts <br/> <span>Career Guidance</span>
            </TableCell>
            <TableCell>10:00 AM<br/> <span>60 mins</span></TableCell>
            <TableCell>  Video</TableCell>
      
            <TableCell>
              <Button href="#" className="font-medium text-white  ">
                Join
              </Button>
            </TableCell>
          </TableRow>
            <TableRow className="bg-white dark:border-gray-700 ">
            <TableCell className="whitespace-nowrap font-medium text-gray-900">
           Emma Roberts <br/> <span>Career Guidance</span>
            </TableCell>
            <TableCell>10:00 AM<br/> <span>60 mins</span></TableCell>
            <TableCell>  Video</TableCell>
      
            <TableCell>
              <Button href="#" className="font-medium text-white  ">
                Join
              </Button>
            </TableCell>
          </TableRow>
          
         
        </TableBody>
      </Table>
      
    </div>
    
  
                                 </div>

                                 {/* 40% */}
                                 <div className='w-[40%] flex gap-5 flex-col'>
                                    {/* quick ction */}
                                      <div className='bg-gray-200 h-105 w-[90%] rounded-2xl p-10'>
                                        <h3 className=' text-2xl font-bold leading-tight mb-2 text-center '>Quick Actions</h3>
                                        <div className='grid grid-cols-2 gap-5 py-5 px-10 w-full'>
                                            <div className='bg-white rounded-xl p-2 h-30 flex flex-col items-center justify-center '>
                                                <span><MdEditCalendar /></span>
                                                <p>Availability</p>
                                            </div>
                                            <div className='bg-white rounded-xl p-2 h-30 flex flex-col items-center justify-center '>
                                                <span><IoPersonAddSharp /></span>
                                                <p>Student</p>
                                            </div>
                                            <div className='bg-white rounded-xl p-2 h-30 flex flex-col items-center justify-center '>
                                                <span><MdNoteAdd /></span>
                                                <p>Log Note</p>
                                            </div>
                                            <div className='bg-white rounded-xl p-2 flex flex-col items-center justify-center h-30'>
                                                <PiUploadFill />
                                                <p>Resources</p>
                                            </div>
                                        </div>
                                      </div>
                                    
                                 </div>
                              </div>
                    </section>
        </div>
      </div>
    </>
  )
}

export default DashBoard