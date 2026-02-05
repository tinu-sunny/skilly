import React, { useEffect, useState } from 'react'
import StudentHeader from '../components/StudentHeader'
import { Button } from 'flowbite-react'
import AppFooter from '../../components/AppFooter'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import ChatModal from '../components/ChatModal';
import { getallusers } from '../../services/allAPIs';

function Counesling() {

    const [consellors,setConsellors]=useState([])
    // get  consellors

    const getconsellors  = async()=>{
        const response = await getallusers()
        console.log(response.data.allusers);
        const data = response.data.allusers
        const sortdata = data.filter(item=>item.role==="counsellor" && item.status ===true)
console.log(sortdata);
setConsellors(sortdata)

        
    }

    useEffect(()=>{
        getconsellors()
    },[])
  return (
     <>
   <div className='flex flex-col sm:flex-row'>
                {/* Header */}

                <div className='fixed'>
                    <StudentHeader/>
                </div>
                          
                          {/* DashBoard content */}
                <div className='p-10 w-full sm:ml-50'>
                
                {/* welcome message with name */}
                <section className='mb-8'>
                    <h1 className='text-[#111418] text-4xl font-bold leading-tight text-center '>Counselling Hub</h1>
                </section>
                        
                        {/* heading */}

                        <div>
                            <h1 className='text-[#111418] font-bold text-3xl leading-tight mb-3 '>Our Counsellors</h1>
                            <p className='text-slate-500 font-medium leading-tight max-w-[900px]'>Our counsellors offer compassionate, professional support in a safe and welcoming space, helping you navigate challenges and move forward with clarity and confidence.</p>
                        </div>
                     
                     {/* Counsellors  */}
                     
                     <section>
                        <div>
                              {/* card-1 */}
{consellors && consellors.length > 0 ? consellors.map(item=>( <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-2xl p-6 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 mt-5">

    {/* Details */}
    <div className="flex flex-col gap-3 w-full md:w-1/2">
        <h1 className="text-2xl font-bold text-gray-800">{item.username   }</h1>

        <p className="text-gray-600 text-lg">
            Specialization:{" "}
            <span className="text-purple-600 font-semibold">
                Course Selection
            </span>
        </p>

    <div className='flex gap-5'>
         <ChatModal/>
            <Link to='/counseling-booking'>
                <Button color="yellow" className="w-32 text-white font-semibold shadow-md hover:shadow-lg">
                    Book Section
                </Button>
               
            </Link>
           
    </div>
    </div>

    {/*  Image */}
    <div className="mt-5 md:mt-0">
        <motion.img
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4 }}
            src="https://www.rhodescollege.ca/wp-content/uploads/2017/11/Contact-Rhodes-Wellness-College-to-begin-professional-counsellor-training.jpg"
            alt="counsellor"
            className="rounded-xl shadow-lg object-cover"
            style={{ width: "230px", height: "180px" }}
        />
    </div>

</div>)) :<h1>No consellors avalibable</h1>}
                           

               

                        </div>
                     </section>

                  



 
                </div>

   

   </div>
     {/* footer */}
  <div className='mt-10'> <AppFooter/></div>
   </>
  )
}

export default Counesling