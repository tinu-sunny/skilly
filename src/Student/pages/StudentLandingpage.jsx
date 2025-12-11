import React from 'react'
import StudentHeader from '../components/StudentHeader'
import { Button } from 'flowbite-react'
import AppFooter from '../../components/AppFooter'

function StudentLandingpage() {
  return (
   <>
   <div className='flex flex-col sm:flex-row'>
                {/* Header */}

                <div>
                    <StudentHeader/>
                </div>
                          
                          {/* DashBoard content */}
                <div className='p-10 w-full'>
                
                {/* welcome message with name */}
                <section className='mb-15'>
                    <h1 className='text-[#111418] text-4xl font-bold leading-tight '>Welcome Back,<span>Babu!</span></h1>
                </section>
                  
                  {/* Search Course
                        
                        <section className='w-full'>
                            heading
                            <div>
                                <h1 className='text-center font-bold text-4xl leading-tight text-[#111418]'>Find your  Career</h1>
                                <p className='text-center font-medium text-[17px] text-slate-600'>Find the path that matches your passions, skills, and future goals.</p>
                            </div>
                        </section> */}


                       

                        {/* JobApplication */}

                        <section className='flex flex-row gap-5 flex-wrap items-start justify-start w-full'>
                           <div className="sm:w-[68%] w-full">
                                {/* heading */}
                                <div className='mt-10'>
                                    <h1 className='text-[#111418] font-bold text-4xl leading-tight mb-4'>Job Appplication</h1>
                                </div>

                                {/* short-details */}

                                <div className='bg-gray-400 w-full h-auto rounded-2xl shadow-2xl'>
                                                  {/* each application status */}
                                                  <div className='p-5 flex flex-col gap-5'>
                                                       {/* card 1 */}
                                                       <div className='flex flex-row justify-between bg-amber-100 rounded-2xl p-5 '>
                                                        <p>
                                                            UX/UI desing
                                                        </p>
                                                        <p>status</p>
                                                       </div>

                                                        {/* card 2 */}
                                                       <div className='flex flex-row justify-between bg-amber-100 rounded-2xl p-5 '>
                                                        <p>
                                                                frontend developer
                                                        </p>
                                                        <p>status</p>
                                                       </div>

                                                        {/* card 3 */}
                                                       <div className='flex flex-row justify-between bg-amber-100 rounded-2xl p-5 '>
                                                        <p>
                                                                frontend developer
                                                        </p>
                                                        <p>status</p>
                                                       </div>

                                                         {/* card 4 */}
                                                       <div className='flex flex-row justify-between bg-amber-100 rounded-2xl p-5 '>
                                                        <p>
                                                                frontend developer
                                                        </p>
                                                        <p>status</p>
                                                       </div>


                                                 
                                                  </div>
                                </div> 
                            </div>
{/* counselling section */}
                           <div className="sm:w-[30%] w-full">

                                <div className='mt-10'>
                                    {/* heading */}
                                    <div className=''>
                                        <h1 className='text-[#111418] text-4xl font-bold mb-4 leading-tight'>Counselling Hub</h1>
                                    </div>

                                    {/* Details  card */}

                                    <div className='bg-slate-200 w-full h-auto items-center justify-center flex rounded-2xl '>
                                              
                                              <div className='p-5 flex flex-col gap-1 text-center  justify-center items-center '>
                                                   <img src="https://img.freepik.com/free-photo/closeup-young-female-professional-making-eye-contact-against-colored-background_662251-651.jpg?semt=ais_hybrid&w=740&q=80" alt="" style={{width:150 ,height:150,borderRadius:'50%', position:'center'}} className='border-5 border-green-500' />
                                                   <p>Dr.Sharon Babu</p>
                                                   <p>Career & Academic Counsellor</p>
                                                   <p>Next Session: Tomorrow At 2:00pm</p>
                                                   <Button className='rounded-4xl'>Join Section</Button>
                                                   <Button className='rounded-4xl'>Reschedule</Button>
                                              </div>
                                    </div>
                                </div>
                            </div>



                        </section>





                         {/* MyCourse */}

                        <section>
                                   {/* heading */}
                            <div className='mb-5'>
                                 <h1 className='text-[#111418] text-3xl font-bold leading-tight'>My Courses</h1>
                            </div>

                            {/* Active course  box */}
                            <div className='w-full shadow-2xl sm:h-70 h-auto bg-slate-100 rounded-2xl'>

                                {/* cards */}
                               <div className='py-10 px-10 flex gap-5 items-center justify-center flex-wrap'>
                                {/* card-1 */}
                                    <div className='w-30 h-30 border-2 shadow-2xl shadow-green-200 rounded-2xl'>
                                        <p className='text-center p-8'>card-1</p>
                                    </div>

                                    {/* card-2 */}
                                    <div className='w-30 h-30 border-2 shadow-2xl shadow-green-200 rounded-2xl'>
                                        <p className='text-center p-8'>card-2</p>
                                    </div>

                                    {/* card-3 */}
                                    <div className='w-30 h-30 border-2 shadow-2xl shadow-green-200 rounded-2xl'>
                                        <p className='text-center p-8'>card-3</p>
                                    </div>
                                    {/* card-4 */}
                                    <div className='w-30 h-30 border-2 shadow-2xl shadow-green-200 rounded-2xl'>
                                        <p className='text-center p-8'>card-4</p>
                                    </div>
    
                               </div>
                            </div>
                        </section>


 
                </div>

   

   </div>

     {/* footer */}
  <div className='sm:ml-50'> <AppFooter/></div>
   </>
  )
}

export default StudentLandingpage