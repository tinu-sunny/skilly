import React from 'react'
import Header from '../components/Header'
import AppFooter from '../components/AppFooter'

function Services() {
  return (
   <>
   {/* App Header */}
   <Header/>
<div className='dark:bg-black'>
  
  {/* main Heading */}
  
     <section>
            <h1 className='text-center font-bold text-[#111418] tracking-light  leading-tight text-4xl p-4 dark:text-white'>Skillly Services</h1>
            <p className='text-center  text-[#617589] text-sm font-normal leading-normal dark:text-[#f7f7f7c7]'>Empowering your career journey with comprehensive support and resources.</p>
     </section>
  
     {/* career Guidances */}
  
     <section className='p-10 sm:p-15 w-full'>
      <div className='flex flex-col gap-5'>
           {/* Heading and discription */}
           <div className=''>
              <h1 className='font-bold text-4xl text-[#111418] tracking-light  leading-tight mb-3 dark:text-white'>Career Guidance</h1>
              <p className='text-[#111418cc] text-sm font-bold leading-normal max-w-250 sm:px-10 dark:text-[#f7f7f7c7]'> Skillly offers personalized career guidance to help you discover your ideal path. Our tools and resources provide insights into various career options, helping you
                make informed decisions about your future.</p>
           </div>
  
           {/* card  */}
  
           <div className='gap-5 flex flex-col sm:flex-row'>
   {/* card -1 */}
               <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 flex-col dark:bg-blue-800 dark:border-0 ">
                  <div className="text-[#111418] dark:text-white" data-icon="MagnifyingGlass" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#111418] text-base font-bold leading-tight dark:text-white">Personalized Recommendations</h2>
                    <p className="text-[#111418cc] text-sm font-normal leading-normal dark:text-[#f7f7f7c7]">Tailored career suggestions based on your skills and interests.</p>
                  </div>
                </div>
  {/* card-2 */}
   <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 flex-col dark:bg-blue-800 border-0 ">
                  <div className="text-[#111418] dark:text-white" data-icon="MagnifyingGlass" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176ZM104,120v24a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm32-16v40a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32-16v56a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#111418] text-base font-bold leading-tight dark:text-white">Career Path Exploration</h2>
                    <p className="text-[#111418cc] text-sm font-normal leading-normal dark:text-[#f7f7f7c7]">Explore diverse career paths and their requirements.</p>
                  </div>
                </div>
               
                {/* card-3 */}
                <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 flex-col dark:bg-blue-800 border-0">
                  <div className="text-[#111418] dark:text-white" data-icon="MagnifyingGlass" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                       <path
                        d="M235.92,199A8,8,0,0,1,225,195.92L155.32,72H136v8a8,8,0,0,1-16,0V72H100.68L31,195.92A8,8,0,0,1,17,188.08L82.32,72H24a8,8,0,0,1,0-16H232a8,8,0,0,1,0,16H173.68L239,188.08A8,8,0,0,1,235.92,199ZM128,112a8,8,0,0,0-8,8v16a8,8,0,0,0,16,0V120A8,8,0,0,0,128,112Zm0,56a8,8,0,0,0-8,8v16a8,8,0,0,0,16,0V176A8,8,0,0,0,128,168Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#111418] text-base font-bold leading-tight dark:text-white">Industry Insights</h2>
                    <p className="text-[#111418cc] text-sm font-normal leading-normal dark:text-[#f7f7f7c7]">Stay updated with the latest industry trends and opportunities.</p>
                  </div>
                </div>
           </div>
      </div>
     </section>
  
     {/* professional Networking */}
  
      <section className='p-10 sm:p-15 w-full'>
      <div className='flex flex-col gap-5'>
           {/* Heading and discription */}
           <div className=''>
              <h1 className='font-bold text-4xl text-[#111418] tracking-light  leading-tight mb-3 dark:text-white'>Professional Networking</h1>
              <p className='text-[#111418cc] text-sm font-bold leading-normal max-w-250 sm:px-10 dark:text-[#f7f7f7c7]'> Connect with professionals and peers in your field of interest. Skillly's networking platform facilitates meaningful interactions, helping you build valuable
                relationships and expand your professional circle.</p>
           </div>
  
           {/* card  */}
  
           <div className='gap-5 flex  flex-wrap'>
   {/* card -1 */}
               <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 flex-col dark:bg-blue-800 dark:border-0">
                  <div className="text-[#111418] dark:text-white" data-icon="MagnifyingGlass" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                     <path
                        d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#111418] text-base font-bold leading-tight dark:text-white">Connect with Professionals</h2>
                    <p className="text-[#111418cc] text-sm font-normal leading-normal dark:text-[#f7f7f7c7]">Build connections with industry experts and peers.</p>
                  </div>
                </div>
  {/* card-2 */}
   <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 flex-col dark:bg-blue-800 dark:border-0">
                  <div className="text-[#111418] dark:text-white" data-icon="MagnifyingGlass" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M119.76,217.94A8,8,0,0,1,112,224a8.13,8.13,0,0,1-2-.24l-32-8a8,8,0,0,1-2.5-1.11l-24-16a8,8,0,1,1,8.88-13.31l22.84,15.23,30.66,7.67A8,8,0,0,1,119.76,217.94Zm132.69-96.46a15.89,15.89,0,0,1-8,9.25l-23.68,11.84-55.08,55.09a8,8,0,0,1-7.6,2.1l-64-16a8.06,8.06,0,0,1-2.71-1.25L35.86,142.87,11.58,130.73a16,16,0,0,1-7.16-21.46L29.27,59.58h0a16,16,0,0,1,21.46-7.16l22.06,11,53-15.14a8,8,0,0,1,4.4,0l53,15.14,22.06-11a16,16,0,0,1,21.46,7.16l24.85,49.69A15.9,15.9,0,0,1,252.45,121.48Zm-46.18,12.94L179.06,80H147.24L104,122c12.66,8.09,32.51,10.32,50.32-7.63a8,8,0,0,1,10.68-.61l34.41,27.57Zm-187.54-18,17.69,8.85L61.27,75.58,43.58,66.73ZM188,152.66l-27.71-22.19c-19.54,16-44.35,18.11-64.91,5a16,16,0,0,1-2.72-24.82.6.6,0,0,1,.08-.08L137.6,67.06,128,64.32,77.58,78.73,50.21,133.46l49.2,35.15,58.14,14.53Zm49.24-36.24L212.42,66.73l-17.69,8.85,24.85,49.69Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#111418] text-base font-bold leading-tight dark:text-white">Networking Events</h2>
                    <p className="text-[#111418cc] text-sm font-normal leading-normal dark:text-[#f7f7f7c7]">Participate in virtual and in-person networking events.</p>
                  </div>
                </div>
               
                {/* card-3 */}
                <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 flex-col dark:bg-blue-800 dark:border-0">
                  <div className="text-[#111418] dark:text-white" data-icon="MagnifyingGlass" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                        d="M240,120a48.05,48.05,0,0,0-48-48H152.2c-2.91-.17-53.62-3.74-101.91-44.24A16,16,0,0,0,24,40V200a16,16,0,0,0,26.29,12.25c37.77-31.68,77-40.76,93.71-43.3v31.72A16,16,0,0,0,151.12,214l11,7.33A16,16,0,0,0,186.5,212l11.77-44.36A48.07,48.07,0,0,0,240,120ZM40,199.93V40h0c42.81,35.91,86.63,45,104,47.24v65.48C126.65,155,82.84,164.07,40,199.93Zm131,8,0,.11-11-7.33V168h21.6ZM192,152H160V88h32a32,32,0,1,1,0,64Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#111418] text-base font-bold leading-tight dark:text-white">Community Forums</h2>
                    <p className="text-[#111418cc] text-sm font-normal leading-normal dark:text-[#f7f7f7c7]">Engage in discussions and share insights with the community.</p>
                  </div>
                </div>
           </div>
      </div>
     </section>
  
     {/* Counseling section */}
  
         <section className='p-10 sm:p-15 w-full'>
      <div className='flex flex-col gap-5'>
           {/* Heading and discription */}
           <div className=''>
              <h1 className='font-bold text-4xl text-[#111418] tracking-light  leading-tight mb-3 dark:text-white'>Counseling</h1>
              <p className='text-[#111418cc] text-sm font-bold leading-normal max-w-250 sm:px-10 dark:text-[#f7f7f7c7]'>  Receive guidance from experienced counselors and mentors who can provide personalized advice and support. Our mentorship program connects you with professionals who
                can share their expertise and help you navigate your career.</p>
           </div>
  
           {/* card  */}
  
           <div className='gap-5 flex flex-col sm:flex-row'>
   {/* card -1 */}
               <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 flex-col dark:bg-blue-800 dark:border-0">
                  <div className="text-[#111418] dark:text-white" data-icon="MagnifyingGlass" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                     <path
                        d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"
                      ></path>    
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#111418] text-base font-bold leading-tight dark:text-white">Verified Mentors</h2>
                    <p className="text-[#111418cc] text-sm font-normal leading-normal dark:text-[#f7f7f7c7]">Connect with mentors who have been vetted for their expertise.</p>
                  </div>
                </div>
  {/* card-2 */}
   <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 flex-col dark:bg-blue-800 dark:border-0">
                  <div className="text-[#111418] dark:text-white" data-icon="MagnifyingGlass" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                       <path
                        d="M216,80H184V48a16,16,0,0,0-16-16H40A16,16,0,0,0,24,48V176a8,8,0,0,0,13,6.22L72,154V184a16,16,0,0,0,16,16h93.59L219,230.22a8,8,0,0,0,5,1.78,8,8,0,0,0,8-8V96A16,16,0,0,0,216,80ZM66.55,137.78,40,159.25V48H168v88H71.58A8,8,0,0,0,66.55,137.78ZM216,207.25l-26.55-21.47a8,8,0,0,0-5-1.78H88V152h80a16,16,0,0,0,16-16V96h32Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#111418] text-base font-bold leading-tight dark:text-white">Real-time Chats</h2>
                    <p className="text-[#111418cc] text-sm font-normal leading-normal dark:text-[#f7f7f7c7]">Engage in live conversations with mentors for immediate support.</p>
                  </div>
                </div>
               
                {/* card-3 */}
                <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 flex-col dark:bg-blue-800 dark:border-0">
                  <div className="text-[#111418] dark:text-white" data-icon="MagnifyingGlass" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                        d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#111418] text-base font-bold leading-tight dark:text-white">Personalized Advice</h2>
                    <p className="text-[#111418cc] text-sm font-normal leading-normal dark:text-[#f7f7f7c7]">Receive tailored guidance based on your specific needs and goals.</p>
                  </div>
                </div>
           </div>
      </div>
     </section>
  
     {/* Skill Development */}
  
      <section className='p-10 sm:p-15 w-full'>
      <div className='flex flex-col gap-5'>
           {/* Heading and discription */}
           <div className=''>
              <h1 className='font-bold text-4xl text-[#111418] tracking-light  leading-tight mb-3 dark:text-white'>Skill Development</h1>
              <p className='text-[#111418cc] text-sm font-bold leading-normal max-w-250 sm:px-10 dark:text-[#f7f7f7c7] '>     Enhance your skills with Skillly's curated resources and training programs. We offer a range of courses and workshops designed to help you develop the competencies
                needed to succeed in your chosen career.</p>
           </div>
  
           {/*  card  */}

           <div className='gap-5 flex flex-col sm:flex-row'>
   {/* card -1 */}
               <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 flex-col dark:bg-blue-800 dark:border-0">
                  <div className="text-[#111418] dark:text-white" data-icon="MagnifyingGlass" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                     <path
                        d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"
                      ></path> 
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#111418] text-base font-bold leading-tight dark:text-white">Curated Courses</h2>
                    <p className="text-[#111418cc] text-sm font-normal leading-normal dark:text-[#f7f7f7c7]">Access a selection of courses relevant to your career path.</p>
                  </div>
                </div>
  {/* card-2 */}
   <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 flex-col dark:bg-blue-800 dark:border-0">
                  <div className="text-[#111418] dark:text-white" data-icon="MagnifyingGlass" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                       <path
                        d="M251.77,73a8,8,0,0,0-8.21.39L208,97.05V72a16,16,0,0,0-16-16H32A16,16,0,0,0,16,72V184a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V159l35.56,23.71A8,8,0,0,0,248,184a8,8,0,0,0,8-8V80A8,8,0,0,0,251.77,73ZM192,184H32V72H192V184Zm48-22.95-32-21.33V116.28L240,95Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#111418] text-base font-bold leading-tight dark:text-white">Interactive Workshops</h2>
                    <p className="text-[#111418cc] text-sm font-normal leading-normal dark:text-[#f7f7f7c7]">Participate in hands-on workshops to develop practical skills.</p>
                  </div>
                </div>
               
                {/* card-3 */}
                <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 flex-col dark:bg-blue-800 dark:border-0">
                  <div className="text-[#111418] dark:text-white" data-icon="MagnifyingGlass" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                         <path
                        d="M248,128a56,56,0,1,0-96,39.14V224a8,8,0,0,0,11.58,7.16L192,216.94l28.42,14.22A8,8,0,0,0,232,224V167.14A55.81,55.81,0,0,0,248,128ZM192,88a40,40,0,1,1-40,40A40,40,0,0,1,192,88Zm3.58,112.84a8,8,0,0,0-7.16,0L168,211.06V178.59a55.94,55.94,0,0,0,48,0v32.47ZM136,192a8,8,0,0,1-8,8H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216a16,16,0,0,1,16,16,8,8,0,0,1-16,0H40V184h88A8,8,0,0,1,136,192Zm-16-56a8,8,0,0,1-8,8H72a8,8,0,0,1,0-16h40A8,8,0,0,1,120,136Zm0-32a8,8,0,0,1-8,8H72a8,8,0,0,1,0-16h40A8,8,0,0,1,120,104Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#111418] text-base font-bold leading-tight dark:text-white">Skill Certification</h2>
                    <p className="text-[#111418cc] text-sm font-normal leading-normal dark:text-[#f7f7f7c7]">Earn certifications to validate your expertise and enhance your resume.</p>
                  </div>
                </div>
           </div>
      </div>
     </section>
  
     {/* Institution  Company Partnership */}
   <section className='p-10 sm:p-15 w-full'>
      <div className='flex flex-col gap-5'>
           {/* Heading and discription */}
           <div className=''>
              <h1 className='font-bold text-4xl text-[#111418] tracking-light  leading-tight mb-3 dark:text-white'>Institution &amp; Company Partnership</h1>
              <p className='text-[#111418cc] text-sm font-bold leading-normal max-w-250 sm:px-10 dark:text-[#f7f7f7c7]'>      Skillly partners with educational institutions and companies to provide comprehensive career support. We offer tailored programs and resources to help students and
                employees achieve their career goals.</p>
           </div>
  
           {/* card  */}
  
           <div className='gap-5 flex flex-col sm:flex-row'>
   {/* card -1 */}
               <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 flex-col dark:bg-blue-800 dark:border-0">
                  <div className="text-[#111418] dark:text-white" data-icon="MagnifyingGlass" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                        d="M240,208H224V96a16,16,0,0,0-16-16H144V32a16,16,0,0,0-24.88-13.32L39.12,72A16,16,0,0,0,32,85.34V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM208,96V208H144V96ZM48,85.34,128,32V208H48ZM112,112v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm-32,0v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm0,56v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm32,0v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#111418] text-base font-bold leading-tight dark:text-white">Tailored Programs</h2>
                    <p className="text-[#111418cc] text-sm font-normal leading-normal dark:text-[#f7f7f7c7]">Customized career services for institutions and companies.</p>
                  </div>
                </div>
  {/* card-2 */}
   <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 flex-col dark:bg-blue-800 dark:border-0">
                  <div className="text-[#111418] dark:text-white" data-icon="MagnifyingGlass" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                       <path
                        d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#111418] text-base font-bold leading-tight dark:text-white">Student Support</h2>
                    <p className="text-[#111418cc] text-sm font-normal leading-normal dark:text-[#f7f7f7c7]">Dedicated resources and support for students.</p>
                  </div>
                </div>
               
                {/* card-3 */}
                <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 flex-col dark:bg-blue-800 dark:border-0">
                  <div className="text-[#111418] dark:text-white" data-icon="MagnifyingGlass" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                           <path
                        d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#111418] text-base font-bold leading-tight dark:text-white">Employee Development</h2>
                    <p className="text-[#111418cc] text-sm font-normal leading-normal dark:text-[#f7f7f7c7]">Programs to enhance employee skills and career progression.</p>
                  </div>
                </div>
           </div>
      </div>
     </section>
  
     {/* Career Resources  Tools */}
   <section className='p-10 sm:p-15 w-full'>
      <div className='flex flex-col gap-5'>
           {/* Heading and discription */}
           <div className=''>
              <h1 className='font-bold text-4xl text-[#111418] tracking-light  leading-tight mb-3 dark:text-white'>Career Resources &amp; Tools</h1>
              <p className='text-[#111418cc] text-sm font-bold leading-normal max-w-250 sm:px-10 dark:text-[#f7f7f7c7]'>  Access a variety of resources and tools to support your career journey. Skillly provides articles, guides, and interactive tools to help you navigate the job market
                and achieve your professional aspirations.</p>
           </div>
  
           {/* card  */}
  
           <div className='gap-5 flex flex-col sm:flex-row'>
   {/* card -1 */}
               <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 flex-col dark:bg-blue-800 dark:border-0">
                  <div className="text-[#111418] dark:text-white" data-icon="MagnifyingGlass" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                        d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM184,96a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,96Zm0,32a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,128Zm0,32a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,160Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#111418] text-base font-bold leading-tight dark:text-white">Career Articles</h2>
                    <p className="text-[#111418cc] text-sm font-normal leading-normal dark:text-[#f7f7f7c7]">Stay informed with articles on career trends and advice.</p>
                  </div>
                </div>
  {/* card-2 */}
   <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 flex-col dark:bg-blue-800 dark:border-0">
                  <div className="text-[#111418] dark:text-white" data-icon="MagnifyingGlass" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                        d="M224,64H176V56a24,24,0,0,0-24-24H104A24,24,0,0,0,80,56v8H32A16,16,0,0,0,16,80V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V80A16,16,0,0,0,224,64ZM96,56a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM224,80v32H192v-8a8,8,0,0,0-16,0v8H80v-8a8,8,0,0,0-16,0v8H32V80Zm0,112H32V128H64v8a8,8,0,0,0,16,0v-8h96v8a8,8,0,0,0,16,0v-8h32v64Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#111418] text-base font-bold leading-tight dark:text-white">Interactive Tools</h2>
                    <p className="text-[#111418cc] text-sm font-normal leading-normal dark:text-[#f7f7f7c7]">Use tools like resume builders and interview simulators.</p>
                  </div>
                </div>
               
                {/* card-3 */}
                <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 flex-col dark:bg-blue-800 dark:border-0">
                  <div className="text-[#111418] dark:text-white" data-icon="MagnifyingGlass" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                           <path
                        d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0v94.37L90.73,98a8,8,0,0,1,10.07-.38l58.81,44.11L218.73,90a8,8,0,1,1,10.54,12l-64,56a8,8,0,0,1-10.07.38L96.39,114.29,40,163.63V200H224A8,8,0,0,1,232,208Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#111418] text-base font-bold leading-tight dark:text-white">Market Analysis</h2>
                    <p className="text-[#111418cc] text-sm font-normal leading-normal dark:text-[#f7f7f7c7]">Gain insights into job market trends and salary expectations.</p>
                  </div>
                </div>
           </div>
      </div>
     </section>
  
</div>

   {/* App Footer */}
    <AppFooter/>
    </>
  
  )
}

export default Services