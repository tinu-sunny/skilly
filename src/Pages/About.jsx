import React from "react";
import Header from "../components/Header";
import { Button } from "flowbite-react";
import AppFooter from "../components/AppFooter";

function About() {
  return (
    <>
      <div className="dark:bg-black">
        {/* App Header */}
        <Header />

        {/* About content */}

        {/* About Skilly */}

        <section className="w-full p-5 mt-5">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6">
            {/* Heading section */}
            <div className="flex flex-col flex-wrap ">
              <h1 className="text-start text-[#111418] font-bold tracking-light text-4xl leading-tight pb-3 dark:text-white">
                About Skilly
              </h1>
              <p className="text-base font-normal text-[#111418] leading-normal pb-3 pt-1 px-4 dark:text-[#f7f7f7c7]">
                Skillly is a leading career guidance and professional networking
                platform built to empower students, educators, counselors, and
                companies with the tools they need to navigate the ever-evolving
                world of education and careers. In an environment where career
                choices can be overwhelming and opportunities can feel out of
                reach, Skillly serves as a trusted ecosystem that connects
                individuals with the right guidance, resources, and industry
                networks.
              </p>
              <p className="text-base font-normal text-[#111418] leading-normal pb-3 pt-1 px-4 dark:text-[#f7f7f7c7]">
                At Skillly, users can explore personalized career paths, connect
                with certified counselors and industry experts, and discover
                opportunities offered by top institutions and companies. By
                combining technology, expert insights, and real-world
                connections, we aim to support every learner and professional in
                shaping a successful and fulfilling career journey.
              </p>
              <p className="text-base font-normal text-[#111418] leading-normal pb-3 pt-1 px-4 dark:text-[#f7f7f7c7]">
                Whether you are a student exploring your future, a counselor
                guiding young minds, an institution looking to bridge skill
                gaps, or a company seeking the right talent—Skillly brings you
                closer to your goals and helps shape a brighter, more informed
                professional world.
              </p>
            </div>

            {/* image */}

            <div className="h-auto">
              <img
                className=" h-auto shadow-2xl rounded-lg shadow-amber-200 dark:shadow-blue-300"
                src="https://jobble.com/wp-content/uploads/elementor/thumbs/MakingACareerMove-qz2p180tcavy7ldnbbc9itjfg8cstf4ej0rkqdsbuo.png"
                alt="about"
              />
            </div>
          </div>
        </section>

        {/* section who we serve */}
        <section className="w-full p-5 mt-5">
          <div className="flex flex-col gap-10 px-4 py-10 ">
            {/* heading  */}
            <div className="flex flex-col gap-4 ">
              <h1 className="text-black text-4xl leading-tight tracking-tight font-bold dark:text-white">
                Who We Serve
              </h1>
              <p className="text-black text-base font-normal leading-normal max-w-full dark:text-[#f7f7f7c7]">
                Skillly caters to a diverse range of users, each with unique
                needs and goals.
              </p>
            </div>
            {/* cards */}
            <div className=" grid grid-cols-1 md:grid-cols-4  gap-5 p-0">
              {/* card-1 */}
              <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4   flex-col dark:border-0 dark:bg-blue-800 ">
                {/* icon */}
                <div
                  className="text-[#111418] dark:text-white"
                  data-icon="GraduationCap"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path>
                  </svg>
                </div>
                {/* cpation-text */}
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#111418] text-base font-bold leading-tight dark:text-white">
                    Students
                  </h2>
                  <p className="text-[#617589] text-sm font-normal leading-normal dark:text-[#f7f7f7c7]">
                    career paths, connect with professionals, and gain insights
                    into various industries.
                  </p>
                </div>
              </div>

              {/* card -2 */}

              <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4  flex-col dark:bg-blue-800 dark:border-0">
                {/* icon */}
                <div
                  className="text-[#111418] dark:text-white"
                  data-icon="GraduationCap"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
                  </svg>
                </div>
                {/* cpation-text */}
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#111418] text-base font-bold leading-tight dark:text-white">
                    Counselors
                  </h2>
                  <p className="text-[#617589] text-sm font-normal leading-normal dark:text-[#f7f7f7c7]">
                    Provide personalized guidance, track student progress, and
                    access valuable resources.
                  </p>
                </div>
              </div>

              {/* card -3 */}

              <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4  flex-col dark:bg-blue-800 dark:border-0">
                {/* icon */}
                <div
                  className="text-[#111418] dark:text-white"
                  data-icon="GraduationCap"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M240,208H224V96a16,16,0,0,0-16-16H144V32a16,16,0,0,0-24.88-13.32L39.12,72A16,16,0,0,0,32,85.34V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM208,96V208H144V96ZM48,85.34,128,32V208H48ZM112,112v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm-32,0v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm0,56v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm32,0v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Z"></path>
                  </svg>
                </div>
                {/* cpation-text */}
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#111418] text-base font-bold leading-tight dark:text-white">
                    Institutions
                  </h2>
                  <p className="text-[#617589] text-sm font-normal leading-normal dark:text-[#f7f7f7c7]">
                    Enhance career services, connect students with
                    opportunities, and measure outcomes.
                  </p>
                </div>
              </div>

              {/* card -4 */}

              <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4  flex-col dark:border-0 dark:bg-blue-800">
                {/* icon */}
                <div
                  className="text-[#111418] dark:text-white"
                  data-icon="GraduationCap"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"></path>
                  </svg>
                </div>
                {/* cpation-text */}
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#111418] text-base font-bold leading-tight dark:text-white">
                    Companies
                  </h2>
                  <p className="text-[#617589] text-sm font-normal leading-normal dark:text-[#f7f7f7c7]">
                    Find top talent, engage with potential candidates, and build
                    a strong employer brand.
                  </p>
                </div>
              </div>

              {/* card -5 */}

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
            </div>
          </div>
        </section>

        {/* Our Vison and  Values */}
        <section className="w-full p-5 mt-5">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6">
            {/* Heading section */}
            <div className="flex flex-col flex-wrap  rounded-4xl shadow sm:shadow-lg border-5 border-amber-100 sm:shadow-amber-200 dark:shadow-blue-300 dark:border-blue-300 p-4 mb-8 ">
              <h1 className="text-center   text-[#111418] font-bold tracking-light text-4xl leading-tight pb-3 dark:text-white">
                Our Vison
              </h1>
              <p className="text-base font-normal text-[#111418] leading-normal pb-3 pt-1 px-4 dark:text-[#f7f7f7c7]">
                Skillly is a leading career guidance and professional networking
                platform built to empower students, educators, counselors, and
                companies with the tools they need to navigate the ever-evolving
                world of education and careers. In an environment where career
                choices can be overwhelming and opportunities can feel out of
                reach, Skillly serves as a trusted ecosystem that connects
                individuals with the right guidance, resources, and industry
                networks.
              </p>
              <p className="text-base font-normal text-[#111418] leading-normal pb-3 pt-1 px-4 dark:text-[#f7f7f7c7]">
                At Skillly, users can explore personalized career paths, connect
                with certified counselors and industry experts, and discover
                opportunities offered by top institutions and companies. By
                combining technology, expert insights, and real-world
                connections, we aim to support every learner and professional in
                shaping a successful and fulfilling career journey.
              </p>
              <p className="text-base font-normal text-[#111418] leading-normal pb-3 pt-1 px-4 dark:text-[#f7f7f7c7]">
                Whether you are a student exploring your future, a counselor
                guiding young minds, an institution looking to bridge skill
                gaps, or a company seeking the right talent—Skillly brings you
                closer to your goals and helps shape a brighter, more informed
                professional world.
              </p>
            </div>

            {/* image */}

            <div className="flex flex-col flex-wrap rounded-4xl shadow sm:shadow-lg border-5 border-amber-100 sm:shadow-amber-200 p-4 mb-8  dark:shadow-blue-300 dark:border-blue-300 ">
              <h1 className="text-center text-[#111418] font-bold tracking-light text-4xl leading-tight pb-3 dark:text-white">
                Our Values
              </h1>
              <p className="text-base font-normal text-[#111418] leading-normal pb-3 pt-1 px-4 dark:text-[#f7f7f7c7]">
                Skillly is a leading career guidance and professional networking
                platform built to empower students, educators, counselors, and
                companies with the tools they need to navigate the ever-evolving
                world of education and careers. In an environment where career
                choices can be overwhelming and opportunities can feel out of
                reach, Skillly serves as a trusted ecosystem that connects
                individuals with the right guidance, resources, and industry
                networks.
              </p>
              <p className="text-base font-normal text-[#111418] leading-normal pb-3 pt-1 px-4 dark:text-[#f7f7f7c7]">
                At Skillly, users can explore personalized career paths, connect
                with certified counselors and industry experts, and discover
                opportunities offered by top institutions and companies. By
                combining technology, expert insights, and real-world
                connections, we aim to support every learner and professional in
                shaping a successful and fulfilling career journey.
              </p>
              <p className="text-base font-normal text-[#111418] leading-normal pb-3 pt-1 px-4 dark:text-[#f7f7f7c7]">
                Whether you are a student exploring your future, a counselor
                guiding young minds, an institution looking to bridge skill
                gaps, or a company seeking the right talent—Skillly brings you
                closer to your goals and helps shape a brighter, more informed
                professional world.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}

        <section className="w-full p-5 mt-5">
          <div className="flex flex-wrap justify-center items-center mb-3 ">
            <div className="shadow-lg sm:shadow-amber-200 border-5 border-amber-100 p-5 rounded-lg  w-full  sm:ml-50 sm:mr-50 dark:shadow-blue-300 dark:border-blue-300 ">
              <h1 className="text-[#111418] text-4xl font-bold leading-light text-center  tracking-tight px-4 pb-5 pt-5 dark:text-white">
                Our Story
              </h1>
              <p className="text-[#111418] text-base font-normal leading-normal sm:pb-3 sm:pt-1 sm:px-4 dark:text-[#f7f7f7c7]">
                Every career journey begins with a choice—but for many students
                and young professionals, making the right choice can feel
                overwhelming. Founded in 2024,{" "}
                <span className="font-bold">Skillly</span> emerged from a shared
                passion for helping individuals navigate this uncertainty and
                unlock their true potential.
              </p>
              <p className="text-[#111418] text-base font-normal leading-normal sm:pb-3 sm:pt-1 sm:px-4 dark:text-[#f7f7f7c7]">
                We saw a world where students struggled to find guidance,
                counselors lacked the tools to reach those who needed help, and
                institutions and companies faced challenges connecting with the
                right talent. Inspired by this gap, we set out to create a
                platform that could bring all these stakeholders together,
                creating a seamless bridge between education and the
                professional world.
              </p>
              <p className="text-[#111418] text-base font-normal leading-normal sm:pb-3 sm:pt-1 sm:px-4 dark:text-[#f7f7f7c7]">
                From its early days as an idea to its growth into a thriving
                platform, Skillly has always been driven by one belief:
                <span className="font-bold">
                  {" "}
                  everyone deserves access to the right guidance, resources, and
                  connections to succeed.
                </span>{" "}
                Today, we connect thousands of users with mentors, career
                insights, and professional opportunities, empowering them to
                make informed decisions and take confident steps toward their
                future.
              </p>
              <p className="text-[#111418] text-base font-normal leading-normal sm:pb-3 sm:pt-1 sm:px-4 dark:text-[#f7f7f7c7]">
                Our journey is ongoing, and every day we strive to make career
                planning accessible, meaningful, and inspiring—helping
                individuals not just find a career, but build a path they can be
                proud of.
              </p>
            </div>
          </div>
        </section>

        {/* What We Offer  */}

        <section className="w-full p-5 ">
          <div className="flex flex-col gap-10 px-4 py-10 ">
            {/* heading  */}
            <div className="flex flex-col gap-4 ">
              <h1 className="text-black text-4xl leading-tight tracking-tight font-bold dark:text-white">
                What We Offer
              </h1>
              {/* <p className='text-black text-base font-normal leading-normal max-w-full'>Skillly caters to a diverse range of users, each with unique needs and goals.</p> */}
            </div>
            {/* cards */}
            <div className=" grid grid-cols-1 md:grid-cols-4  gap-5 p-0">
              {/* card-1 */}
              <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4  flex-col dark:bg-blue-800 border-0">
                {/* icon */}
                <div
                  className="text-[#111418] dark:text-white"
                  data-icon="GraduationCap"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
                  </svg>
                </div>
                {/* cpation-text */}
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#111418] text-base font-bold leading-tight dark:text-white">
                    Personalized Insights
                  </h2>
                  <p className="text-[#617589] text-sm font-normal leading-normal dark:text-[#f7f7f7c7]">
                    Gain personalized career insights through assessments and
                    data-driven recommendations.
                  </p>
                </div>
              </div>

              {/* card -2 */}

              <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4  flex-col dark:bg-blue-800 dark:border-0">
                {/* icon */}
                <div
                  className="text-[#111418] dark:text-white"
                  data-icon="GraduationCap"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM84,116a12,12,0,1,0,12,12A12,12,0,0,0,84,116Zm88,0a12,12,0,1,0,12,12A12,12,0,0,0,172,116Zm60,12A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-16,0A88,88,0,1,0,51.81,172.06a8,8,0,0,1,.66,6.54L40,216,77.4,203.53a7.85,7.85,0,0,1,2.53-.42,8,8,0,0,1,4,1.08A88,88,0,0,0,216,128Z"></path>
                  </svg>
                </div>
                {/* cpation-text */}
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#111418] text-base font-bold leading-tight dark:text-white">
                    Expert Counseling
                  </h2>
                  <p className="text-[#617589] text-sm font-normal leading-normal dark:text-[#f7f7f7c7]">
                    Connect with experienced counselors for one-on-one guidance
                    and support.
                  </p>
                </div>
              </div>

              {/* card -3 */}

              <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4  flex-col dark:bg-blue-800 dark:border-0">
                {/* icon */}
                <div
                  className="text-[#111418] dark:text-white"
                  data-icon="GraduationCap"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
                  </svg>
                </div>
                {/* cpation-text */}
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#111418] text-base font-bold leading-tight dark:text-white">
                    Professional Networking
                  </h2>
                  <p className="text-[#617589] text-sm font-normal leading-normal dark:text-[#f7f7f7c7]">
                    Build your professional network by connecting with peers,
                    mentors, and industry leaders.
                  </p>
                </div>
              </div>

              {/* card -4 */}

              <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4  flex-col dark:bg-blue-800 dark:border-0">
                {/* icon */}
                <div
                  className="text-[#111418] dark:text-white"
                  data-icon="GraduationCap"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M119.76,217.94A8,8,0,0,1,112,224a8.13,8.13,0,0,1-2-.24l-32-8a8,8,0,0,1-2.5-1.11l-24-16a8,8,0,1,1,8.88-13.31l22.84,15.23,30.66,7.67A8,8,0,0,1,119.76,217.94Zm132.69-96.46a15.89,15.89,0,0,1-8,9.25l-23.68,11.84-55.08,55.09a8,8,0,0,1-7.6,2.1l-64-16a8.06,8.06,0,0,1-2.71-1.25L35.86,142.87,11.58,130.73a16,16,0,0,1-7.16-21.46L29.27,59.58h0a16,16,0,0,1,21.46-7.16l22.06,11,53-15.14a8,8,0,0,1,4.4,0l53,15.14,22.06-11a16,16,0,0,1,21.46,7.16l24.85,49.69A15.9,15.9,0,0,1,252.45,121.48Zm-46.18,12.94L179.06,80H147.24L104,122c12.66,8.09,32.51,10.32,50.32-7.63a8,8,0,0,1,10.68-.61l34.41,27.57Zm-187.54-18,17.69,8.85L61.27,75.58,43.58,66.73ZM188,152.66l-27.71-22.19c-19.54,16-44.35,18.11-64.91,5a16,16,0,0,1-2.72-24.82.6.6,0,0,1,.08-.08L137.6,67.06,128,64.32,77.58,78.73,50.21,133.46l49.2,35.15,58.14,14.53Zm49.24-36.24L212.42,66.73l-17.69,8.85,24.85,49.69Z"></path>
                  </svg>
                </div>
                {/* cpation-text */}
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#111418] text-base font-bold leading-tight dark:text-white">
                    Industry Partnerships
                  </h2>
                  <p className="text-[#617589] text-sm font-normal leading-normal dark:text-[#f7f7f7c7]">
                    Access exclusive opportunities through our partnerships with
                    leading companies and institutions.
                  </p>
                </div>
              </div>

              {/* card -5 */}

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
            </div>
          </div>
        </section>

        {/* Our Core Values */}

        <section className="w-full p-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="shadow sm:shadow-lg border-5 border-amber-100    sm:shadow-amber-200 p-4 dark:shadow-blue-300 dark:border-blue-300">
              <h1 className="text-center font-bold text-4xl leading-tight tracking-tighter px-4 pb-3 pt-5 text-[#111418] dark:text-white">
                Our Core Values
              </h1>
              <p className="text-[#111418] text-base font-normal tracking-wider leading-tight pb-3 pt-1 px-4 dark:text-[#f7f7f7c7]">
                {" "}
                <span className="font-bold text-md">Integrity : </span>We uphold
                the highest standards of honesty and ethics in all our
                interactions. Innovation: We continuously seek new and improved
                ways to serve our users. Collaboration: We believe in the power
                of working together to achieve common goals. Empowerment: We are
                committed to empowering individuals to take control of their
                career paths.
              </p>
            </div>

            <div className="shadow sm:shadow-lg border-5 border-amber-100 sm:shadow-amber-200 dark:shadow-blue-300 dark:border-blue-300">
              <div className="items-center justify-center flex flex-col">
                <h2 className="text-start font-bold text-3xl leading-tight tracking-tighter px-4 pb-3 pt-5 text-[#111418] dark:text-white">
                  Milestones &amp; Achievements
                </h2>

                <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
                  {/* Launched */}
                  <div className="flex flex-col items-center gap-1 pt-3 ">
                    <div
                      className="text-[#111418] dark:text-[#f7f7f7c7]"
                      data-icon="RocketLaunch"
                      data-size="24px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M103.77,185.94C103.38,187.49,93.63,224,40,224a8,8,0,0,1-8-8c0-53.63,36.51-63.38,38.06-63.77a8,8,0,0,1,3.88,15.53c-.9.25-22.42,6.54-25.56,39.86C81.7,204.48,88,183,88.26,182a8,8,0,0,1,15.51,4Zm93-67.4L192,123.31v58.33A15.91,15.91,0,0,1,187.32,193L153,227.3A15.91,15.91,0,0,1,141.7,232a16.11,16.11,0,0,1-5.1-.83,15.94,15.94,0,0,1-10.78-12.92l-5.37-38.49L76.24,135.55l-38.47-5.37A16,16,0,0,1,28.7,103L63,68.68A15.91,15.91,0,0,1,74.36,64h58.33l4.77-4.77c26.68-26.67,58.83-27.82,71.41-27.07a16,16,0,0,1,15,15C224.6,59.71,223.45,91.86,196.78,118.54ZM40,114.34l37.15,5.18L116.69,80H74.36ZM91.32,128,128,164.68l57.45-57.45a76.46,76.46,0,0,0,22.42-59.16,76.65,76.65,0,0,0-59.11,22.47ZM176,139.31l-39.53,39.53L141.67,216,176,181.64Z"></path>
                      </svg>
                    </div>
                    <div className="w-[1.5px] bg-[#dbe0e6] h-2 grow"></div>
                  </div>
                  <div className="flex flex-1 flex-col py-3">
                    <p className="text-[#111418] text-base font-medium leading-normal dark:text-[#f7f7f7c7]">
                      Launched Skillly Platform
                    </p>
                    <p className="text-[#617589] text-base font-normal leading-normal dark:text-[#f7f7f7c7]">
                      2024
                    </p>
                  </div>

                  {/* Reached 10,000 Users */}

                  <div className="flex flex-col items-center gap-1 pt-3">
                    <div
                      className="text-[#111418] dark:text-[#f7f7f7c7]"
                      data-icon="RocketLaunch"
                      data-size="24px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"></path>
                      </svg>
                    </div>
                    <div className="w-[1.5px] bg-[#dbe0e6] h-2 grow"></div>
                  </div>
                  <div className="flex flex-1 flex-col py-3">
                    <p className="text-[#111418] text-base font-medium leading-normal dark:text-[#f7f7f7c7]">
                      Reached 10,000 Users
                    </p>
                    <p className="text-[#617589] text-base font-normal leading-normal dark:text-[#f7f7f7c7]">
                      2025
                    </p>
                  </div>

                  {/* Expanded Services to International Markets */}

                  <div className="flex flex-col items-center gap-1 pt-3">
                    <div
                      className="text-[#111418] dark:text-[#f7f7f7c7]"
                      data-icon="RocketLaunch"
                      data-size="24px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm88,104a87.62,87.62,0,0,1-6.4,32.94l-44.7-27.49a15.92,15.92,0,0,0-6.24-2.23l-22.82-3.08a16.11,16.11,0,0,0-16,7.86h-8.72l-3.8-7.86a15.91,15.91,0,0,0-11-8.67l-8-1.73L96.14,104h16.71a16.06,16.06,0,0,0,7.73-2l12.25-6.76a16.62,16.62,0,0,0,3-2.14l26.91-24.34A15.93,15.93,0,0,0,166,49.1l-.36-.65A88.11,88.11,0,0,1,216,128ZM143.31,41.34,152,56.9,125.09,81.24,112.85,88H96.14a16,16,0,0,0-13.88,8l-8.73,15.23L63.38,84.19,74.32,58.32a87.87,87.87,0,0,1,69-17ZM40,128a87.53,87.53,0,0,1,8.54-37.8l11.34,30.27a16,16,0,0,0,11.62,10l21.43,4.61L96.74,143a16.09,16.09,0,0,0,14.4,9h1.48l-7.23,16.23a16,16,0,0,0,2.86,17.37l.14.14L128,205.94l-1.94,10A88.11,88.11,0,0,1,40,128Zm102.58,86.78,1.13-5.81a16.09,16.09,0,0,0-4-13.9,1.85,1.85,0,0,1-.14-.14L120,174.74,133.7,144l22.82,3.08,45.72,28.12A88.18,88.18,0,0,1,142.58,214.78Z"></path>
                      </svg>
                    </div>
                    <div className="w-[1.5px] bg-[#dbe0e6] h-2 grow"></div>
                  </div>
                  <div className="flex flex-1 flex-col py-3">
                    <p className="text-[#111418] text-base font-medium leading-normal dark:text-[#f7f7f7c7]">
                      Expanded Services to International Markets
                    </p>
                    <p className="text-[#617589] text-base font-normal leading-normal dark:text-[#f7f7f7c7]">
                      2026
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us */}

        <section className="w-full p-5 mb-10">
          <div className="flex justify-center items-center mt-10 flex-col gap-5">
            <div className="flex flex-col gap-5 ">
              <h1 className="text-[#111418] tracking-light text-2xl  sm:text-4xl font-bold leading-tight dark:text-white">
                Ready to embark on your career journey with Skillly?
              </h1>
              <p className="text-[#111418] text-base font-normal leading-normal text-center dark:text-[#f7f7f7c7]">
                Sign up today and unlock your full potential.
              </p>
            </div>

            <div>
              {" "}
              <Button className="text-center px-6">Join Us</Button>
            </div>
          </div>
        </section>

        {/* App Footer */}

        <AppFooter />
      </div>
    </>
  );
}

export default About;
