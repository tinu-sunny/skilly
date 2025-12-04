import { Button } from 'flowbite-react'
import { backgroundImage } from 'flowbite-react/plugin/tailwindcss/theme'
import React from 'react'

function Index() {
  return (
    <>


    {/* section banner */}
    <section className='mt-5 ml-5 mr-5 h-100 flex flex-col justify-center align-center items-center'  
  style={{
    backgroundImage: "url('../Media/banner.png')",
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    borderRadius:'20px'
  }}>

          
                <h1 className='text-white text-4xl font-black leading-tight tracking-[-0.033em] mt-3 mb-5'> Navigate Your Future with Skillly</h1>
                <h2 className='text-dark text-sm font-normal leading-normal mb-5'> Empowering students, counselors, institutions, and companies through comprehensive career guidance and professional networking.</h2>
                <Button className='cursor-pointer items-center justify-center h-10 px-4 '><span className='truncate'>Get Started</span></Button>      
    </section>


{/* section who we serve */}
<section>

<div className='flex flex-col gap-10 px-4 py-10 '>
  {/* heading  */}
<div className='flex flex-col gap-4 '>
  <h1 className='text-black text-4xl leading-tight tracking-tight font-bold'>
    Who We Serve
  </h1>
  <p className='text-black text-base font-normal leading-normal max-w-full'>Skillly caters to a diverse range of users, each with unique needs and goals.</p>
</div>
{/* cards */}

<div className='grid  grid-cols-2 gap-7 p-0'>
  {/* card-1 */}
  <div className='flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4  flex-col'>
    {/* icon */}
    <div className='text-[#111418]'  data-icon="GraduationCap" data-size="24px" data-weight="regular">
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"
                      ></path>
                    </svg>
    </div>
    {/* cpation-text */}
      <div className='flex flex-col gap-1'>
        <h2 className='text-[#111418] text-base font-bold leading-tight'>
          Students
        </h2>
        <p className='text-[#617589] text-sm font-normal leading-normal'>career paths, connect with professionals, and gain insights into various industries.</p>
      </div>
  </div>

  {/* card -2 */}

  <div className='flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4  flex-col'>
    {/* icon */}
    <div className='text-[#111418]'  data-icon="GraduationCap" data-size="24px" data-weight="regular">
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"
                      ></path>
                    </svg>
    </div>
    {/* cpation-text */}
      <div className='flex flex-col gap-1'>
        <h2 className='text-[#111418] text-base font-bold leading-tight'>
          Counselors
        </h2>
        <p className='text-[#617589] text-sm font-normal leading-normal'>Provide personalized guidance, track student progress, and access valuable resources.</p>
      </div>
  </div>


</div>


</div>


</section>


    </>
  )
}

export default Index