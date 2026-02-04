import React, { useEffect, useState } from 'react'
import StudentHeader from '../components/StudentHeader'
import { Button, TextInput } from 'flowbite-react'
import AppFooter from '../../components/AppFooter'
import { motion } from "framer-motion";
import { MdOutlineAccessTime, MdOutlineDateRange, MdSchedule } from 'react-icons/md';
import { CiBookmark } from 'react-icons/ci';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { studentjobview } from '../../services/allAPIs';
import { serverURL } from '../../services/serverURL';
function JobApplication() {
  const [jobDatas,setJobDatas]=useState([])
console.log(jobDatas);

    // featch all job posted 

    const jobdatafeatch = async()=>{
        const response = await studentjobview()
        console.log(response);
        if(response.status==200){
            setJobDatas(response.data.jobs)
        }
        
    }

    useEffect(()=>{
        jobdatafeatch()
    },[])

  return (
      <>
   <div className='flex flex-col sm:flex-row'>
                {/* Header */}

                <div className='fixed'>
                    <StudentHeader/>
                </div>
                          
                          {/*  content */}
                <div className='p-10 w-full sm:ml-50'>
                
                {/* welcome message with name */}
                <section className='mb-8'>
                    <h1 className='text-[#111418] text-4xl font-bold leading-tight '>Job Applications</h1>

                    <p className='text-slate-500 font-medium leading-tight'>Manage your job search, track applications, and find new opportunities.</p>
                </section>

                {/* Qick tab */}

                <section>
                    <div className='flex justify-evenly
                     items-center flex-wrap gap-5'>
                        {/* Total Applied jobs count */}
                        <motion.div whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
                }}
                transition={{ duration: 0.5 }} className='bg-gray-100 p-5 rounded-4xl w-50 shadow-2xl'>
                            <div>
                                <p className='text-slate-400 font-medium'>Total Applied</p>
                                <span className='text-[#111418] font-bold text-2xl'>12</span>
                            </div>
                        </motion.div>

                          {/* interviewing */}
                        <motion.div whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
                }}
                transition={{ duration: 0.5 }}className='bg-gray-100 p-5 rounded-4xl w-50 shadow-2xl '>
                            <div>
                                <p className='text-slate-400 font-medium'>Interviewing</p>
                                <span className='text-[#111418] font-bold text-2xl'>3</span>
                            </div>
                        </motion.div>

                         {/* Offers */}
                        <motion.div whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
                }}
                transition={{ duration: 0.5 }}className='bg-gray-100 p-5 rounded-4xl w-50 shadow-2xl'>
                            <div>
                                <p className='text-slate-400 font-medium'>Offers</p>
                                <span className='text-[#111418] font-bold text-2xl'>1</span>
                            </div>
                        </motion.div>

                          {/* Saved Jobs */}
                        <motion.div whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
                }}
                transition={{ duration: 0.5 }}className='bg-gray-100 p-5 rounded-4xl w-50 shadow-2xl '>
                            <div>
                                <p className='text-slate-400 font-medium'>Saved Jobs</p>
                                <span className='text-[#111418] font-bold text-2xl'>8</span>
                            </div>
                        </motion.div>

                    </div>
                </section>

      
                  
                  {/* job , Applcation ,upcoming inderview */}

                  <section className='mt-10'>

                    <div className='flex w-full  flex-wrap gap-2'>
                        {/* recommended jobs */}

                        <div className='w-[70%]'>
                        {/* Heading  */}
                        <div>
                            <h1 className='text-[#111418] text-3xl font-bold leading-tight'>Recommended Jobs</h1>
                        </div>
                        {/* job cards */}

                        <div className='w-full p-5 flex flex-col gap-5 '>
                            {/* card  */}
                         {
  jobDatas && jobDatas.length > 0 ? (
    jobDatas.slice(0, 3).map((item) => (
      <div
        key={item._id}
        className="bg-gray-100 p-5 rounded-3xl flex flex-col gap-5"
      >
        <div className="flex w-full">
          <div className="w-[20%]">
            <img
              src={`${serverURL}/uploads/${item.comapnyProfile}`}
              alt={item.comapnyname}
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            />
          </div>

          <div className="flex flex-col justify-between w-[70%]">
            <h3 className="text-[#111418] font-bold text-2xl leading-tight">
              {item.jobtitle}
            </h3>

            <p className="text-slate-500 font-medium">
              {item.companyname} • {item.location}
            </p>

            <div className="flex flex-row gap-4 justify-start mt-5">
              <span className="bg-gray-200 rounded-2xl p-1 font-medium text-sm">
                {item.worktype}
              </span>
              <span className="bg-gray-200 rounded-2xl p-1 font-medium text-sm">
                {item.salary}
              </span>
            </div>
          </div>

          <div className="ml-50 text-2xl">
            <FaRegBookmark />
          </div>
        </div>

        <hr />

        <div className="flex justify-between items-center px-6">
          <p className="flex items-center gap-1 text-slate-400">
            <MdSchedule /> Posted {item.dataofupdate}
          </p>

          <Button>Apply Now</Button>
        </div>
      </div>
    ))
  ) : (
    <p>No Jobs</p>
  )
}


                           
                           <div>
                            <Button className='w-full bg-slate-400 text-black hover:bg-slate-400 font-bold'> Load More Jobs </Button>
                           </div>
                        </div>
                        </div>

                        {/* applcation and  upcoming interview */}

                        <div className='flex flex-col gap-5'>
                            {/* Appcation */}
                            <div>
                               {/* Heading  */}
                        <div className='flex justify-center items-center'>
                           <div> <h1 className='text-[#111418] text-3xl font-bold leading-tight'> Applications</h1></div>
                           <div className='ml-30 hover:cursor-pointer hover:underline'>
                            View all 
                           </div>
                        </div>

                        <div className='bg-gray-100 p-5 rounded-2xl mt-5 flex flex-col gap-3'>
                              {/* ongoing 1 */}
                              <div className='flex flex-row gap-4'>
                                <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm77gLy8TZr-GbYxrVeyX0MCbyhuN9KaF9zA&s" alt="" style={{width:'50px',height:'50px',borderRadius:'50%'}} /></div>
                               <div className='flex  justify-between items-center'>
                                <h2 className='text-[#111418] font-bold leading-tight'>UX Researcher</h2>
                                <p className='ml-20  font-medium'>Status</p>
                                </div>
                                
                              </div>

                                {/* ongoing 2 */}
                              <div className='flex flex-row gap-4'>
                                <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm77gLy8TZr-GbYxrVeyX0MCbyhuN9KaF9zA&s" alt="" style={{width:'50px',height:'50px',borderRadius:'50%'}} /></div>
                               <div className='flex  justify-between items-center'>
                                <h2 className='text-[#111418] font-bold leading-tight'>Product Intern</h2>
                                <p className='ml-20  font-medium'>Status</p>
                                </div>
                                
                              </div>

                                {/* ongoing 3 */}
                               <div className='flex flex-row gap-4'>
                                <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm77gLy8TZr-GbYxrVeyX0MCbyhuN9KaF9zA&s" alt="" style={{width:'50px',height:'50px',borderRadius:'50%'}} /></div>
                               <div className='flex  justify-between items-center'>
                                <h2 className='text-[#111418] font-bold leading-tight'>Software Inter</h2>
                                <p className='ml-20  font-medium'>Status</p>
                                </div>
                                
                              </div>
                        </div>

                        <div>

                        </div>
                            </div>
                            {/* Upcomming innterview */}

                            <div>
                            {/* Heading  */}
                        <div>
                            <h1 className='text-[#111418] text-3xl font-bold leading-tight'>Upcoming </h1>
                        </div>
                            {/* heading or meeting name */}
                        <div className='bg-gray-100 p-5 flex flex-col gap-4 items-center rounded-3xl mt-5 justify-center w-full'>
                                <div className='w-full text-start'>
                                     <h1 className='text-[#111418] font-bold text-2xl leading-tight'>Technical Interview</h1>
                                        <p className='font-medium text-slate-500'>with Sara from google</p>
    
                                    <div className='flex  justify-start gap-8'>
                                        <p className=' flex items-center gap-2
                                         mt-4  font-medium' > <span><MdOutlineDateRange /></span> Day or date</p>
                                           <p className=' flex items-center gap-2
                                            mt-4  font-medium'><span><MdOutlineAccessTime /></span>Time</p>
                                    </div>
                                </div>
                      
                        {/* joinButton */}
                        <div className='
                        mt-4'>
                            <Button>Join Meeting Room</Button>
                        </div>
                          </div>
                            </div>
                        </div>
                    </div>
                  </section>
                


                       

                     




                        


 
                </div>

   

   </div>
     {/* footer */}
  <div className='mt-10'> <AppFooter/></div>
   </>
  )
}

export default JobApplication