import React from "react";
import StudentHeader from "../components/StudentHeader";
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import AppFooter from "../../components/AppFooter";
import { Rating, RatingStar } from "flowbite-react";
import { useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import { FaSortAmountDown } from "react-icons/fa";

function Experts() {
  return (
    <>
      <div className="flex flex-col sm:flex-row">
        {/* Header */}

        <div className="fixed">
          <StudentHeader />
        </div>

        {/* DashBoard content */}
        <div className="p-10 w-full sm:ml-50">
          {/* welcome message with name */}
          <section className="mb-8">
            <h1 className="text-[#111418] text-4xl font-bold leading-tight mb-3 ">
              Find Professionals in Your Field
            </h1>
            <p className="text-slate-500 font-medium leading-tight mb-5">
             Connect with experienced individuals in your field of interest
            </p>
          </section>

           {/* search bar  */}
          
                          <section>
                         <div className='flex w-full items-stretch justify-center rounded-xl h-14  p-2'>
                             <div className='w-[50%] '> <TextInput type='search' placeholder='search for careers,skills or industries...'/></div>
                            <div className=''> <Button>Explore</Button></div>
                         </div>
                          </section>
          
                          {/* #tag section */}
          
                          <section>
                              <div className='flex justify-center flex-wrap items-center sm:ml-[-100px] gap-3'>
                                  <p className='text-[#111418] font-medium'>Popular :</p>
                                  <Button className='bg-transparent text-black hover:border-2 rounded-4xl hover:bg-transparent'>#Tech</Button>
                                      <Button className='bg-transparent text-black hover:border-2 rounded-4xl hover:bg-transparent'>#Healthcare</Button>
                                          <Button className='bg-transparent text-black hover:border-2 rounded-4xl hover:bg-transparent'>#Creative</Button>
                                          <Button className='bg-transparent text-black hover:border-2 rounded-4xl hover:bg-transparent'>#Engineering</Button>
                                          <Button className='bg-transparent text-black hover:border-2 rounded-4xl hover:bg-transparent'>#Business</Button>
                              </div>
                          </section>
 
{/*  sort  */}
          <section className='mt-5'>
                                <div className='flex sm:justify-between '>
                                          {/* Sort  option */}
                                          <div className='justify-start'>
                                               <div className='flex items-start gap-2'>
                                                 <label className='text-[#111418] sm:font-medium whitespace-nowrap'>Sort by :</label>
                                                 <select className='cursor-pointer rounded-4xl sm:font-medium text-center '>
                                                     <option>Recommended</option>
                                                     <option>it Paying</option>
                                                     <option>Fastest Growing</option>
                                                     <option>Most Popular</option>
                                                 </select>
                                               </div>
                                          </div>
         
         
                                          {/* Fillter Button */}
         
                                          <div className='justify-end '>
                                            <Button className='bg-transparent text-black text-xl hover:bg-transparent border-2'><FaSortAmountDown /></Button>
                                          </div>
                                </div>
                         </section>   


                         {/* display course cards */}
                         
                            <section className='mt-13'>
                         
                             <div className='grid sm:grid-cols-3 gap-5'>
                                 {/* cards-1 */}
                                 <div className="">
                                     <div className=" h-100 w-80 rounded-xl border-2  hover:border-primary hover:shadow-[0_0_20px_rgba(43,238,121,0.1)] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col">
                         <div className="h-50 bg-cover bg-center relative" data-alt="Abstract visualization of data networks and graphs"  style={{
                             backgroundImage: `url("https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")`,
                             backgroundSize: "cover",
                             backgroundPosition: "top",
                             width: "100%",
                             height: "250px"
                           }}>
                         <div className="absolute inset-0 bg-gradient-to-t from-card-dark to-transparent"></div>
                         <div className="absolute top-3 left-3">
                         </div>
                         </div>
                         <div className="p-5 flex flex-col flex-1">
                         <div className="flex items-start flex-col mb-2">
                         <h3 className="text-xl font-bold  group-hover:text-primary transition-colors">Babu</h3>
                         <p className="font-bold text-sm line-clamp-2">Data Scientist</p>
                         </div>
                         <p className="text-gray-400 text-sm line-clamp-2 mb-4">Analyze complex data to help companies make smarter decisions and predict future trends.</p>
                         <div className="mt-auto grid grid-cols-2 gap-4 border-t border-[#234832] pt-4">
                         <div>
                       <Button>View</Button>
                         </div>
                         <div>
                        <Button>chat</Button>
                         </div>
                         </div>
                         </div>
                         </div>
                                 </div>
                         
                             
                         
                         
                                     {/* cards-2 */}
                                 <div className="">
                                     <div className=" h-100 w-80 rounded-xl border-2  hover:border-primary hover:shadow-[0_0_20px_rgba(43,238,121,0.1)] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col">
                         <div className="h-50 bg-cover bg-center relative" data-alt="Abstract visualization of data networks and graphs"  style={{
                             backgroundImage: `url("https://images.unsplash.com/photo-1493519823106-602cbf9a280c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
                             backgroundSize: "cover",
                             backgroundPosition: "top",
                             width: "100%",
                             height: "250px"
                           }}>
                         <div className="absolute inset-0 bg-gradient-to-t from-card-dark to-transparent"></div>
                         <div className="absolute top-3 left-3">
                         </div>
                         </div>
                         <div className="p-5 flex flex-col flex-1">
                         <div className="flex items-start flex-col  mb-2">
                        <h3 className="text-xl font-bold  group-hover:text-primary transition-colors">Sabu</h3>
                         <p className="font-bold text-sm line-clamp-2">Data Scientist</p>
                         </div>
                         <p className="text-gray-400 text-sm line-clamp-2 mb-4">Analyze complex data to help companies make smarter decisions and predict future trends.</p>
                         <div className="mt-auto grid grid-cols-2 gap-4 border-t border-[#234832] pt-4">
                         <div>
                       <Button>View</Button>
                         </div>
                         <div>
                        <Button>chat</Button>
                         </div>
                         </div>
                         </div>
                         </div>
                                 </div>
                         
                                   {/* cards-3 */}
                                   <div className="">
                                     <div className=" h-100 w-80 rounded-xl border-2  hover:border-primary hover:shadow-[0_0_20px_rgba(43,238,121,0.1)] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col">
                         <div className="h-50 bg-cover bg-center relative" data-alt="Abstract visualization of data networks and graphs"  style={{
                             backgroundImage: `url("https://media.istockphoto.com/id/531970202/photo/indian-woman.jpg?s=170667a&w=0&k=20&c=TayoJQPO39MU1KCWyl-OAzUbhsVQaf-OoxDoBNXi1jc=")`,
                             backgroundSize: "cover",
                             backgroundPosition: "top",
                             width: "100%",
                             height: "250px"
                           }}>
                         <div className="absolute inset-0 bg-gradient-to-t from-card-dark to-transparent"></div>
                         <div className="absolute top-3 left-3">
                         </div>
                         </div>
                         <div className="p-5 flex flex-col flex-1">
                        <div className="flex items-start flex-col  mb-2">
                        <h3 className="text-xl font-bold  group-hover:text-primary transition-colors">Ann</h3>
                         <p className="font-bold text-sm line-clamp-2">Data Scientist</p>
                         </div>
                         <p className="text-gray-400 text-sm line-clamp-2 mb-4">Analyze complex data to help companies make smarter decisions and predict future trends.</p>
                         <div className="mt-auto grid grid-cols-2 gap-4 border-t border-[#234832] pt-4">
                         <div>
                       <Button>View</Button>
                         </div>
                         <div>
                        <Button>chat</Button>
                         </div>
                         </div>
                         </div>
                         </div>
                                 </div>
                         
                         
                                 
                             </div>
                            </section>
        </div>
      </div>



      {/* footer */}
      <div className="mt-10">
        {" "}
        <AppFooter />
      </div>
    </>
  )
}

export default Experts