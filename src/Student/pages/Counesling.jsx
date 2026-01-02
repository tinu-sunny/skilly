import React from 'react'
import StudentHeader from '../components/StudentHeader'
import { Button } from 'flowbite-react'
import AppFooter from '../../components/AppFooter'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

function Counesling() {
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

                             <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-2xl p-6 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 mt-5">

    {/* Details */}
    <div className="flex flex-col gap-3 w-full md:w-1/2">
        <h1 className="text-2xl font-bold text-gray-800">Dr. Babu</h1>

        <p className="text-gray-600 text-lg">
            Specialization:{" "}
            <span className="text-purple-600 font-semibold">
                Course Selection
            </span>
        </p>

    <div className='flex gap-5'>
            <Button color="purple" className="w-32 text-white font-semibold shadow-md hover:shadow-lg">
                Chat
            </Button>
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

</div>

                           {/* card-2 */}

                             <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-2xl p-6 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 mt-5">

    {/* Details */}
    <div className="flex flex-col gap-3 w-full md:w-1/2">
        <h1 className="text-2xl font-bold text-gray-800">Dr. Aswathy</h1>

        <p className="text-gray-600 text-lg">
            Specialization:{" "}
            <span className="text-purple-600 font-semibold">
             Career Guidance
            </span>
        </p>

         <div className='flex gap-5'>
            <Button color="purple" className="w-32 text-white font-semibold shadow-md hover:shadow-lg">
                Chat
            </Button>
            <Button color="yellow" className="w-32 text-white font-semibold shadow-md hover:shadow-lg">
                Book Section
            </Button>
    </div>
    </div>

    {/*  Image */}
    <div className="mt-5 md:mt-0">
        <motion.img
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4 }}
            src="https://images.ctfassets.net/pdf29us7flmy/4iXmY1wFryNLG4xAh5EgIY/6ce0a37cab630d77d6f2f89a6875a278/therapist_vs._psychologist.png?w=720&q=100&fm=jpg"
            alt="counsellor"
            className="rounded-xl shadow-lg object-cover"
            style={{ width: "230px", height: "180px" }}
        />
    </div>

</div>

                           {/* card-3 */}

                             <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-2xl p-6 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 mt-5">

    {/* Details */}
    <div className="flex flex-col gap-3 w-full md:w-1/2">
        <h1 className="text-2xl font-bold text-gray-800">Dr. Sabu</h1>

        <p className="text-gray-600 text-lg">
            Specialization:{" "}
            <span className="text-purple-600 font-semibold">
                Course Selection
            </span>
        </p>

         <div className='flex gap-5'>
            <Button color="purple" className="w-32 text-white font-semibold shadow-md hover:shadow-lg">
                Chat
            </Button>
            <Button color="yellow" className="w-32 text-white font-semibold shadow-md hover:shadow-lg">
                Book Section
            </Button>
    </div>
    </div>

    {/*  Image */}
    <div className="mt-5 md:mt-0">
        <motion.img
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4 }}
            src="https://firsteduindia.com/wp-content/uploads/2023/11/Responsibilities-of-a-Counsellor-in-Career-Counselling.jpg"
            alt="counsellor"
            className="rounded-xl shadow-lg object-cover"
            style={{ width: "230px", height: "180px" }}
        />
    </div>

</div>

                           {/* card-4 */}

                             <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-2xl p-6 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 mt-5">

    {/* Details */}
    <div className="flex flex-col gap-3 w-full md:w-1/2">
        <h1 className="text-2xl font-bold text-gray-800">Ann saji</h1>

        <p className="text-gray-600 text-lg">
            Specialization:{" "}
            <span className="text-purple-600 font-semibold">
                 Mind   
            </span>
        </p>

         <div className='flex gap-5'>
            <Button color="purple" className="w-32 text-white font-semibold shadow-md hover:shadow-lg">
                Chat
            </Button>
            <Button color="yellow" className="w-32 text-white font-semibold shadow-md hover:shadow-lg">
                Book Section
            </Button>
    </div>
    </div>

    {/*  Image */}
    <div className="mt-5 md:mt-0">
        <motion.img
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4 }}
            src="https://capitalchoicecounselling.com/wp-content/uploads/2022/04/shutterstock_1715734276.jpg"
            alt="counsellor"
            className="rounded-xl shadow-lg object-cover"
            style={{ width: "230px", height: "180px" }}
        />
    </div>

</div>
                           {/* card-5 */}

                             <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-2xl p-6 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 mt-5">

    {/* Details */}
    <div className="flex flex-col gap-3 w-full md:w-1/2">
        <h1 className="text-2xl font-bold text-gray-800">Dr.Bijo</h1>

        <p className="text-gray-600 text-lg">
            Specialization:{" "}
            <span className="text-purple-600 font-semibold">
                ---
            </span>
        </p>

       <div className='flex gap-5'>
            <Button color="purple" className="w-32 text-white font-semibold shadow-md hover:shadow-lg">
                Chat
            </Button>
            <Button color="yellow" className="w-32 text-white font-semibold shadow-md hover:shadow-lg">
                Book Section
            </Button>
    </div>
    </div>

    {/*  Image */}
    <div className="mt-5 md:mt-0">
        <motion.img
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4 }}
            src="https://exeedcollege.com/wp-content/uploads/2025/02/Why-School-Counsellors-are-important-768x512.jpg"
            alt="counsellor"
            className="rounded-xl shadow-lg object-cover"
            style={{ width: "230px", height: "180px" }}
        />
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

export default Counesling