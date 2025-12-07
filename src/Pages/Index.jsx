import { Button } from 'flowbite-react'
import { backgroundImage } from 'flowbite-react/plugin/tailwindcss/theme'
import React from 'react'
import Header from '../components/Header'

function Index() {
  return (
    <>
<Header/>

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
{/* <section>

<div className='flex flex-col gap-10 px-4 py-10 '> */}
  {/* heading  */}
{/* <div className='flex flex-col gap-4 '>
  <h1 className='text-black text-4xl leading-tight tracking-tight font-bold'>
    Who We Serve
  </h1>
  <p className='text-black text-base font-normal leading-normal max-w-full'>Skillly caters to a diverse range of users, each with unique needs and goals.</p>
</div> */}
{/* cards */}
{/* <div className=' grid grid-cols-1 md:grid-cols-4  gap-7 p-0'> */}
  {/* card-1 */}
  {/* <div className='flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4  flex-col'> */}
    {/* icon */}
    {/* <div className='text-[#111418]'  data-icon="GraduationCap" data-size="24px" data-weight="regular"> */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"> */}
                      {/* <path */}
                        {/* d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z" */}
                      {/* ></path> */}
                    {/* </svg> */}
    {/* </div> */}
    {/* cpation-text */}
      {/* <div className='flex flex-col gap-1'> */}
        {/* <h2 className='text-[#111418] text-base font-bold leading-tight'> */}
          {/* Students */}
        {/* </h2> */}
        {/* <p className='text-[#617589] text-sm font-normal leading-normal'>career paths, connect with professionals, and gain insights into various industries.</p> */}
      {/* </div> */}
  {/* </div> */}

  {/* card -2 */}

  {/* <div className='flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4  flex-col'> */}
    {/* icon */}
    {/* <div className='text-[#111418]'  data-icon="GraduationCap" data-size="24px" data-weight="regular">
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"
                      ></path>
                    </svg>
    </div> */}
    {/* cpation-text */}
      {/* <div className='flex flex-col gap-1'>
        <h2 className='text-[#111418] text-base font-bold leading-tight'>
          Counselors
        </h2>
        <p className='text-[#617589] text-sm font-normal leading-normal'>Provide personalized guidance, track student progress, and access valuable resources.</p>
      </div>
  </div> */}

    {/* card -3 */}

  {/* <div className='flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4  flex-col'> */}
    {/* icon */}
    {/* <div className='text-[#111418]'  data-icon="GraduationCap" data-size="24px" data-weight="regular">
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                       <path
                        d="M240,208H224V96a16,16,0,0,0-16-16H144V32a16,16,0,0,0-24.88-13.32L39.12,72A16,16,0,0,0,32,85.34V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM208,96V208H144V96ZM48,85.34,128,32V208H48ZM112,112v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm-32,0v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm0,56v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm32,0v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Z"
                      ></path>
                    </svg>
    </div> */}
    {/* cpation-text */}
      {/* <div className='flex flex-col gap-1'>
        <h2 className='text-[#111418] text-base font-bold leading-tight'>
          Institutions
        </h2>
        <p className='text-[#617589] text-sm font-normal leading-normal'>Enhance career services, connect students with opportunities, and measure outcomes.</p>
      </div>
  </div> */}


    {/* card -4 */}

  {/* <div className='flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4  flex-col'> */}
    {/* icon */}
    {/* <div className='text-[#111418]'  data-icon="GraduationCap" data-size="24px" data-weight="regular">
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                     <path
                        d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"
                      ></path>
                    </svg>
    </div> */}
    {/* cpation-text */}
      {/* <div className='flex flex-col gap-1'>
        <h2 className='text-[#111418] text-base font-bold leading-tight'>
          Companies
        </h2>
        <p className='text-[#617589] text-sm font-normal leading-normal'>Find top talent, engage with potential candidates, and build a strong employer brand.</p>
      </div>
  </div> */}

    {/* card -5 */}

  {/* <div className='flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4  flex-col'> */}
    {/* icon */}
    {/* <div className='text-[#111418]'  data-icon="GraduationCap" data-size="24px" data-weight="regular"> */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"> */}
                      {/* <path
                        d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"
                      ></path>
                    </svg>
    </div> */}
    {/* cpation-text */}
      {/* <div className='flex flex-col gap-1'>
        <h2 className='text-[#111418] text-base font-bold leading-tight'>
          Counselors
        </h2>
        <p className='text-[#617589] text-sm font-normal leading-normal'>Provide personalized guidance, track student progress, and access valuable resources.</p>
      </div> */}
  {/* </div> */}


{/* </div> */}


{/* </div> */}


{/* </section> */}

{/* section  How skilly Works  */}

  <section>
    <div className='flex flex-col gap-10 px-4 py-10 '>
      {/* heading */}
      <div className='flex flex-col gap-4'>
<h1 className='text-[#111418] tracking-light font-bold text-4xl leading-tight'>
   How Skillly Works
</h1>
<p className='text-[#111418] text-base font-normal leading-normal '> Skillly provides a comprehensive suite of tools and resources to support career development and professional networking.</p>
      </div>
{/* card section */}

<div className='grid  sm:grid-cols-4 gap-3 w'>
  {/* card 1 */}  
  <div className='flex flex-col gap-3 pb-3'>
  {/* image section  */}
<div className='w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg'
style={{
  backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBVpLL-ZLifmrBKvfsGoQOzOd6dLc0i6SRcvv6Pd7SfdKVz0qGVqyb-_JP1ktL2VlQmb1nw7kZkb61dEAnhpniLe4Vhbu4sCx3HMsal7S-ydMVaOTVsW1mbKK7-JwGmb5J7M85B4VOhHce2VwBStT23mj7Frak-jmFzbF2DjZCwCQCuG7q6qakaig9fJwo6CL8porvDH1LQJObZgS0z1V5ssyCg18CzYbxZxz7Eu6U8arkjn9-inexqfSmL2wY2VcS_b-FqM2xa--pT')"
}}
>
</div>
{/* content section */}
<div>
  <p className='text-[#111418] text-base font-medium leading-normal'>For Students</p>
  <p className='text-[#617589] text-sm font-normal leading-normal'> Students can explore career options, connect with professionals, and access personalized guidance.</p>
</div>
  </div>

    {/* card 2 */}
  <div className='flex flex-col gap-3 pb-3'>
  {/* image section  */}
<div className='w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg'
style={{
  backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBA6QUfX72mVmiK2LxCL-axnVhkJFW5mgTrp2TgIAskMG273tk1pBPnWiT_WwSPIC6nIh-LEv9J3f1SQSBdU44zgcJAbFLWOrxSiMZblgsXnWFPz0bEZp37AExnv2NgPlKa8fP-3QLU2m6PyFEVkHI20XOrIx6wyCEf9OSsBbSJooP4X9aio2McUloo1E-VGun7p4C25P3PLIp_8ZuthP4vFAgkwIMSCRWZfjyzRl40abVhSHTe6Rb4__sEEeNE71upIKOYS3ndJVRN')"
}}
>
</div>
{/* content section */}
<div>
  <p className='text-[#111418] text-base font-medium leading-normal'>For Counselors</p>
  <p className='text-[#617589] text-sm font-normal leading-normal'>Counselors can provide tailored support, track student progress, and access valuable resources.</p>
</div>
  </div>

    {/* card 3 */}
  <div className='flex flex-col gap-3 pb-3'>
  {/* image section  */}
<div className='w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg'
style={{
  backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCufaTKi5lxZAbfN4VNNb-pmj6tNdMvDI3TE4DcyWSpVyZ_ZZE1eq37224xYydGb0hKs8kSOmIrxmNfEsGSSHE6bkVLvMvBHePESDL34NpZB5MvaJDyglnyd0ph34r4cEHAUl5atBVcz49bHiHI5aG16dxgMkk5zTAJU8NfIolGL-HGzzMZpzhhHDNpqFVBWN8CsGOxZp9VWwBqgqAOjy_6Zt2yDZGaDWxdW0cXP1DCZ8PcQp3PJYsE26sBHZfZip4yjfSKFU3pVtrW')"
}}
>
</div>
{/* content section */}
<div>
  <p className='text-[#111418] text-base font-medium leading-normal'>For Institutions</p>
  <p className='text-[#617589] text-sm font-normal leading-normal'> Institutions can enhance career services, connect students with opportunities, and measure outcomes.</p>
</div>
  </div>

    {/* card 4 */}
  <div className='flex flex-col gap-3 pb-3'>
  {/* image section  */}
<div className='w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg'
style={{
  backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA1NF-AJ7-poKKIvL2FpSDMAk39rvqDi-ANGRsggWF8TAwqkVOku5bE_A8l08AmI2yUuAivoxHGZk84tH9USeMtz80DWgCBNhqy5I_UB69hNlCMGxDux15CuueGulm1lGEJxDy0J0PObl-yvwAGOtBG34raLmRi9NIcHVNntgHmkHw8wwu9EArtsp5W65CdcES8AyLzwMezAnUPkKINDrnAPJ86U0fdh6-LQt1k2_0WZBtEEsifKwtJZFhO8L4rkcV6DX_Khb22n5H8')"
}}
>
</div>
{/* content section */}
<div>
  <p className='text-[#111418] text-base font-medium leading-normal'>For Companies</p>
  <p className='text-[#617589] text-sm font-normal leading-normal'>  Companies can find top talent, engage with potential candidates, and build a strong employer brand.</p>
</div>
  </div>



</div>
    </div>
  </section>

  {/* About section */}

<section>
  <div className='grid grid-cols sm:grid-cols-2 m-5 '>
    {/* Heading section */}
    <div className='flex flex-col gap-5 text-start justify-center mb-5'>
      {/* About */}
     <div className='flex  flex-wrap justify-between gap-3 p-0 sm:p-4'>
        <h1 className='text-[#111418] font-bold leading-tight text-4xl tracking-light'>About Skilly</h1>
        <p className='text-[#111418] text-base font-medium leading-normal  sm:pt-1 sm:px-2 sm:font-normal sm:text-base'>  Skillly is a leading career guidance and professional networking platform designed to connect students, counselors, educational institutions, and companies. Our mission is to empower individuals to make informed career decisions and build meaningful professional relationships.</p>
     </div>
     {/* Vison */}
   <div className='flex  flex-wrap justify-between gap-3 p-0 sm:p-4'>
        <h1 className='text-[#111418] font-bold leading-tight text-3xl tracking-light'>Our Vison</h1>
        <p className='text-[#111418] text-base font-medium leading-normal  sm:pt-1 sm:px-2 sm:font-normal sm:text-base'>   To be the premier global platform for career development, fostering a community where every individual can achieve their professional aspirations.</p>
     </div>
{/* our Values */}
   <div className='flex  flex-wrap justify-between gap-3 p-0 sm:p-4'>
        <h1 className='text-[#111418] font-bold leading-tight text-3xl tracking-light'>Our Values</h1>
        <p className='text-[#111418] text-base font-medium leading-normal  sm:pt-1 sm:px-2 sm:font-normal sm:text-base'>    Integrity: We uphold the highest standards of honesty and ethics in all our interactions. Innovation: We continuously seek new and improved ways to serve our users.
              Collaboration: We believe in the power of working together to achieve common goals. Empowerment: We are committed to empowering individuals to take control of their
              career paths.</p>
     </div>

    </div>

    {/* image section */}
    <div
    className='w-full'>

      <img className='w-full aspect-auto rounded-lg h-auto shadow-2xl shadow-amber-100  sm:p-3' src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL2IrBo4HW2UzWAWJMpfn1a9akYmHB1S4BVhTNZOMOPWcn8JMEWZNhxVkwEYP48ojZN9TwaGAwDt4cYqhxqQhg_CFvrumP9uTfoskIeoElRKmU3ONoUIIMnQXizXDNgFaAMMiddWgkswiSmKmNnh0HdmiI-uZz6NZ9kp4VyBhd8VWhtaAgnTaZfS8zra6LerBcTNDpcFG-epbnNVsw4e5DZRm0du-UzkecJHHKXGmK2N2vEqeFTCc5Pwlv08X6uEgdzMANwa_JUNpa" alt="" />
    </div>
  </div>
</section>

{/* News And update section */}
<section>
  <div className='mt-8'>
    {/* headings */}
    <div className='flex  justify-center mt-5 mb-5'>
      <h1 className='text-[#111418] text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 mt-4'> News & Updates </h1>
    </div>
    {/* news */}
 <div className='flex flex-wrap flex-col gap-3'>
    {/* news-1 */}

      <div className='flex flex-row justify-around flex-wrap gap-3 p-4 sm:p-0  '>
         {/* title */}
         <div>
          {/* event status */}
          <p className='text-[#617589] text-sm font-normal leading-normal'>Latest News</p>
          <h1 className='text-[#111418] text-base font-bold leading-tight'>Skilly Announces New Partnership with Leading Universities</h1>
          <p className='text-[#617589] text-sm font-normal leading-normal'>Skilly Partners with top Universities to enhance career services for student.</p>
         </div>
         {/* image /poster  */}
         <div className=' flex flex-end'>
          <img className='rounded-lg h-40 w-70 ' src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxZsX2CGD0gayAEg5_pcvp7zPuNOfsNAplfByYADAU8Rp60ZN9Fs70uoFjvUcXGz0ibmp4IUl7LdgaFGqrFfKSXKM9BjaMpXWa7_HogoyKYKWvvwDQcHF7-wdbRwzt1OjtgDrqvWmAovOPTYzIsdDIOWL9m7j5qKqIXUi58fSd7HlMZcG_h_vr0ej2DM7yUipaQ-lEfZotwCjlfixqDLW5knY7ogoeYJaoMPomOHEuc3d4m8rLhnb6YieIgTR1Q7pm1FYT5vyBSoBO  " alt=""  />
         </div>
      </div>

      {/* news-2 */}
       <div className='flex flex-row justify-around flex-wrap gap-3  '>
         {/* title */}
         <div className='sm:p-0 p-4'>
          {/* event status */}
          <p className='text-[#617589] text-sm font-normal leading-normal'>Upcoming Event</p>
          <h1 className='text-[#111418] text-base font-bold leading-tight'>Career Fair 2024: Connect with Top Employers</h1>
          <p className='text-[#617589] text-sm font-normal leading-normal'>Join us for our annual career fair featuring leading companies and recruiters.</p>
         </div>
         {/* image /poster  */}
         <div className=' flex flex-end'>
          <img className='rounded-lg h-40 w-70 ' src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9NtEX2YuoGZgxn7Lc3JiNDjB9MW8G_fZd5W-FIgeEk-m_Crvys0DQAaj3v2dKQ4CPmEkOcBWtu3nQwc5Zn8cGB2h2ZPMlVm0dOn4bq_gFov0eoMxIp8ytNVhjt58fnF4Nfr1VF8gQenMKg1S8sdcODMBBW6ExQQQd4WW0EcABJH1cCavlZ3CjQtUm42QY-O6UvQt_C0mb3siMdfpp_BgIXLK08PkG8vEwcHr6ciEj99okx_7u6N-HDWGJDBbJGYQQhNj8uCaENhdP" alt=""  />
         </div>
      </div>
 </div>

    
  </div>
</section>



    </>
  )
}

export default Index