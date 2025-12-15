import React from 'react'
import AppFooter from '../components/AppFooter'
import Header from '../components/Header'
import { Button, Label, Textarea, TextInput } from 'flowbite-react'

function Contact() {
  return (
    <>
    {/* App header */}
    <Header/>

{/* contact */}
<section>
 <div className=' grid sm:grid-cols-2 justify-between gap-5 sm:m-15 m-5  '>
     {/* contact Details */}
     <div className='sm:shadow-2xl shadow-amber-200 sm:p-15 p-4 rounded-4xl shadow border-5 border-amber-200 sm:h-150'>
        {/* heading  */}
         <div className=' flex flex-col gap-2'>
              <h2 className='text-[#111418] font-extrabold  text-4xl '>Let's build your future, together.</h2>
              <p className='text-slate-500'>Have questions about Skillly? Whether you're a student, a partner, or a company — we’re ready to help. Pick a category, tell us your story, and we'll route your message to the right team.</p>
         </div>
         {/* contat details */}
         <div className='flex sm:flex-row flex-col gap-5 justify-evenly m-5'>
            {/* email */}
            <div className=' shadow p-3 sm:w-50 rounded-xl'>
                email
            </div>
            {/* Phone number */}
            <div className='sm:w-50 shadow p-3 rounded-xl'>
                phone
            </div>

         </div>
         {/* time response */}
         <div>
            <div className='flex flex-row gap-3'>
                <p className='border-2 rounded-4xl sm:w-50 sm:px-5 p-3 sm:py-2 text-center'>Response time:<span className='font-bold'> 24 hrs</span></p>
                <p className='border-2 rounded-4xl sm:w-70 sm:px-5 sm:py-2 p-3 text-center'>Support:<span className='font-bold'>Mon–Fri, 9am–6pm</span> </p>
            </div>
         </div>
         {/* Social media */}
         <div>
            <p className='text-slate-300 font-medium mt-5'>Follow Us</p>
            <div className='flex flex-wrap sm:flex-nowrap  gap-5 p-6 justify-center'>
                <a className='border-2 border-white  shadow  rounded p-3 cursor-pointer  hover:bg-amber-50 hover:border-0 hover:shadow-black'>Linkedin</a>
                <a className='border-2 border-white  shadow  rounded p-3 cursor-pointer  hover:bg-amber-50 hover:border-0 hover:shadow-black'>Instagram</a>
                <a className='border-2 border-white  shadow  rounded p-3 cursor-pointer  hover:bg-amber-50 hover:border-0 hover:shadow-black'>Facebook</a>
                <a className='border-2 border-white  shadow  rounded p-3 cursor-pointer  hover:bg-amber-50 hover:border-0 hover:shadow-black'>X</a>
                <a className='border-2 border-white  shadow  rounded p-3 cursor-pointer  hover:bg-amber-50 hover:border-0 hover:shadow-black'>Youtube</a>
            </div> 
         </div>
     </div>

     {/* Contact Support */}
     <div className='sm:shadow-2xl shadow-amber-200 sm:p-15 p-4 rounded-4xl shadow border-5 border-amber-200 sm:h-150'>
                {/* heading */}

                <div className='flex flex-row justify-between gap-5 flex-wrap mb-1'>
                    {/* heading */}
                    <div>
                        <h1 className='text-[#111418] text-2xl mb-2 sm:text-3xl leading-tight  font-extrabold'>Contact Support</h1>
                        <p className='text-slate-500 font-medium max-w-70  '>Fill this form and we'll get back to you fast.</p>
                    </div>
                    {/*contact */}
                    <div className='sm:text-start flex sm:flex-col gap-3 mb-3 '  >
                        <p className='text-slate-500 font-medium leading-normal '>Need immediate help?</p>
                        <p className='text-green-700 text-end hover:underline cursor-pointer font-medium hover:text-blue-600'><a>Call us </a>→</p>
                    </div>
                </div>

                {/* form */}
                <div>
<form>
   <div className='grid sm:grid-cols-2 gap-3'>
       <div>
            <Label className='text-slate-500 font-medium'>Full Name</Label>
            <input className='w-full p-2 border border-slate-500 rounded-lg' type='text' placeholder='Enter Your Name'></input>
       </div>
       <div>
            <Label className='text-slate-500 font-medium'>Email</Label>
            <input className='w-full p-2 border border-slate-500 rounded-lg' type='email' placeholder='You@gmail.com'></input>
       </div>
       <div>
            <Label className='text-slate-500 font-medium'>Phone Number</Label>
            <input className='w-full p-2 border border-slate-500 rounded-lg' type='number' placeholder='+91 8123456687'></input>
       </div>
    
      <div>
            <Label className='text-slate-500 font-medium'>Inquiry Type</Label>
            <select className="w-full p-2 border border-slate-500 rounded-lg">
                      <option>Select Inquiry Type</option>
                      <option>Student Support</option>
                      <option>Counselor Partnership</option>
                      <option>Institution Inquiries</option>
                      <option>Company Collaboration</option>
                      <option>Technical Support</option>
                      <option>General Queries</option>
                    </select>
      </div>
    
    <Label className='text-slate-500 font-medium'>Message</Label>
   </div>
<Textarea rows={'3'} className='mb-5'></Textarea>

<div className=' flex flex-2   justify-between gap-3 sm:m-3 items-center  w-full '>
    <div className=' '> <Button className='text-center sm:p-8 p-6  sm:rounded-4xl rounded-2xl sm:w-30 cursor-pointer'>Send Message</Button></div>
   <div className='mr-8'>  <Button className=' cursor-pointer text-center sm:p-2 sm:rounded-3xl bg-transparent sm:w-20 text-slate-500 hover:text-black hover:bg-transparent outline'>Clear</Button></div>
</div>
     <p className='text-slate-500 font-medium w-full text-center'>Prefer live chat? <a className='text-blue-600 hover:cursor-pointer hover:underline'>Start a conversation</a></p>

</form>
                </div>

     </div>
 </div>

</section>



                {/* location */}
                <div className='sm:p-15 p-5 rounded-lg'>
                         <iframe
            title="google-map"
            className="w-full h-56 rounded-2xl shadow"
            src="https://maps.google.com/maps?q=Kochi&t=&z=13&ie=UTF8&iwloc=&output=embed"
          ></iframe>
          <h2>

          </h2>
                </div>

    {/* App Footer */}
    <AppFooter/>
    </>
  )
}

export default Contact