import { Button } from 'flowbite-react'
import { backgroundImage } from 'flowbite-react/plugin/tailwindcss/theme'
import React from 'react'
import Header from '../components/Header'
import AppFooter from '../components/AppFooter'
import { motion } from "framer-motion";
function Index() {
  return (
    <>
    {/* App Header */}
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

<div className='grid   sm:grid-cols-4 gap-3 w'>
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
    <motion.div initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}} transition={{duration:1}} viewport={{once:false,amount:0.2}} className='flex flex-col gap-5 text-start justify-center mb-5'>
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

    </motion.div>

    {/* image section */}
    <motion.div initial={{opacity:0,x:100}} whileInView={{opacity:1,x:0}} transition={{duration:1}} viewport={{once:false,amount:0.2}}
    className='w-full'>

      <img className='w-full aspect-auto rounded-lg h-auto shadow-2xl shadow-amber-100  sm:p-3' src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL2IrBo4HW2UzWAWJMpfn1a9akYmHB1S4BVhTNZOMOPWcn8JMEWZNhxVkwEYP48ojZN9TwaGAwDt4cYqhxqQhg_CFvrumP9uTfoskIeoElRKmU3ONoUIIMnQXizXDNgFaAMMiddWgkswiSmKmNnh0HdmiI-uZz6NZ9kp4VyBhd8VWhtaAgnTaZfS8zra6LerBcTNDpcFG-epbnNVsw4e5DZRm0du-UzkecJHHKXGmK2N2vEqeFTCc5Pwlv08X6uEgdzMANwa_JUNpa" alt="" />
    </motion.div>
  </div>
</section>

{/* News And update section */}
<motion.section initial={{opacity:0, y:100}} whileInView={{opacity:1,y:0}} transition={{duration:1}} viewport={{once:false, amount:0.4 }}className='mb-10'>
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
          <motion.img initial={{opacity:1, scale:1}} whileHover={{opacity:1 ,scale:2}} transition={{duration:0.7}}  className='rounded-lg h-40 w-70 ' src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxZsX2CGD0gayAEg5_pcvp7zPuNOfsNAplfByYADAU8Rp60ZN9Fs70uoFjvUcXGz0ibmp4IUl7LdgaFGqrFfKSXKM9BjaMpXWa7_HogoyKYKWvvwDQcHF7-wdbRwzt1OjtgDrqvWmAovOPTYzIsdDIOWL9m7j5qKqIXUi58fSd7HlMZcG_h_vr0ej2DM7yUipaQ-lEfZotwCjlfixqDLW5knY7ogoeYJaoMPomOHEuc3d4m8rLhnb6YieIgTR1Q7pm1FYT5vyBSoBO  " alt=""  />
         </div>
      </div>

      {/* news-2 */}
       <div className='flex flex-row justify-around flex-wrap gap-3  '>
         {/* title */}
         <div className='sm:p-0 p-4'>
          {/* event status */}
          <p  className='text-[#617589] text-sm font-normal leading-normal'>Upcoming Event</p>
          <h1 className='text-[#111418] text-base font-bold leading-tight'>Career Fair 2024: Connect with Top Employers</h1>
          <p className='text-[#617589] text-sm font-normal leading-normal'>Join us for our annual career fair featuring leading companies and recruiters.</p>
         </div>
         {/* image /poster  */}
         <div className=' flex flex-end'>
          <motion.img initial={{ opacity: 1, scale: 1 }}
        whileHover={{ opacity: 1, scale: 2 }}
        transition={{ duration: 0.7 }} className='rounded-lg h-40 w-70 ' src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9NtEX2YuoGZgxn7Lc3JiNDjB9MW8G_fZd5W-FIgeEk-m_Crvys0DQAaj3v2dKQ4CPmEkOcBWtu3nQwc5Zn8cGB2h2ZPMlVm0dOn4bq_gFov0eoMxIp8ytNVhjt58fnF4Nfr1VF8gQenMKg1S8sdcODMBBW6ExQQQd4WW0EcABJH1cCavlZ3CjQtUm42QY-O6UvQt_C0mb3siMdfpp_BgIXLK08PkG8vEwcHr6ciEj99okx_7u6N-HDWGJDBbJGYQQhNj8uCaENhdP" alt=""  />
         </div>
      </div>
 </div>

    
  </div>
</motion.section>


{/* App Footer */}
  <AppFooter/>
    </>
  )
}

export default Index