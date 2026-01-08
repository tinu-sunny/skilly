import React from 'react'
import Headerprofessionals from '../components/HeaderProfessionals'
import { FaEdit } from 'react-icons/fa'
import ProfileEditModal from '../components/ProfileEditModal'

function ProfessionalProfile() {
  return (
   <>
<div><Headerprofessionals/></div>

<div>
      <div
        className=" w-full h-60"
        style={{
          backgroundColor: "rgba(237, 126, 15, 0.67)",
          backgroundImage: `url('https://media.licdn.com/dms/image/v2/D5616AQEKjGg-4zL3Ow/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1708015077343?e=2147483647&v=beta&t=Utel6EGrOCH6lJp1HoAzgNlK4A3I4LhzH5QcbXEHBBo')`,
          backgroundRepeat:'no-repeat',
          backgroundPosition:'center',
          backgroundSize:'cover'
        }}
      >
   
        {/* Top Background */}
      </div>
           <div className='text-4xl flex justify-end mt-[-20px] px-10'><FaEdit/></div>

      {/* profile pic */}

      <div className="ml-10" style={{ marginTop: "-100px" }}>
        <img
          src='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
          alt=""
          className="w-50 h-50 rounded-full object-cover shadow-md mb-4"
        />
           <p className='text-4xl mt-[-65px] ml-38  '><ProfileEditModal/></p> 
      </div>

      {/* details of users */}

      <div className=" ml-20 mr-20">
        <div className="flex justify-between  p-5 ">
          <h4 className="mb-5 font-bold text-2xl "> name</h4>
    
        </div>
        <hr className="mb-5" />
        <p className=" leading-relaxed ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          officia possimus voluptatem quisquam vitae iste non recusandae,
          voluptates laborum voluptate doloribus soluta est sapiente, ullam
          nesciunt fuga a officiis nihil? Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Recusandae similique laboriosam deserunt
          accusamus quidem rerum voluptatibus provident maiores optio aut
          inventore, dolorem eius. Deserunt ex quos recusandae nam, accusamus
          placeat?
        </p>
      </div>

{/* post section */}
    <section className="px-4 py-10 flex justify-center">
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 max-w-5xl">
    
    {Array(5).fill("").map((_, index) => (
      <div
        key={index}
        className="relative group aspect-square overflow-hidden bg-gray-200"
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQILHj7frrgtbe7UlmPivAkAmQ1RbS_wvULOg&s"
          alt="post"
          className="w-full h-full object-cover"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
          <span className="text-white text-sm font-semibold">
            ❤️ 120 &nbsp; 💬 15
          </span>
        </div>
      </div>
    ))}

  </div>
</section>


</div>

   </>
  )
}

export default ProfessionalProfile