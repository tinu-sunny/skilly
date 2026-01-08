import React, { useState } from 'react'
import InstitutionSidebar from '../Components/InstitutionSidebar';
import { Button, Pagination } from 'flowbite-react';
import AppFooter from '../../components/AppFooter';
import WorkShopModal from '../Components/WorkShopModal';

function WorkshopInstitution() {

 const data = [
  {
    workshopName: "React Basics Workshop",
    description: "Hands-on introduction to React fundamentals and components.",
    category: "Web Development",
    dateTime: "2026-02-10 10:00 AM - 1:00 PM",
    mode: "Online",
    price: "999"
  },
  {
    workshopName: "Advanced JavaScript",
    description: "Deep dive into closures, promises, async/await, and ES6+ features.",
    category: "Programming",
    dateTime: "2026-02-15 2:00 PM - 5:00 PM",
    mode: "Online",
    price: "1299"
  },
  {
    workshopName: "UI/UX Design Crash Course",
    description: "Learn design thinking, wireframing, and prototyping tools.",
    category: "Design",
    dateTime: "2026-02-20 11:00 AM - 3:00 PM",
    mode: "Offline",
    price: "1499"
  },
  {
    workshopName: "Cyber Security Essentials",
    description: "Introduction to ethical hacking and security best practices.",
    category: "Cyber Security",
    dateTime: "2026-02-25 10:00 AM - 4:00 PM",
    mode: "Online",
    price: "1999"
  },
  {
    workshopName: "Data Science with Python",
    description: "Learn data analysis and visualization using Python libraries.",
    category: "Data Science",
    dateTime: "2026-03-01 9:30 AM - 2:30 PM",
    mode: "Online",
    price: "1799"
  },
  {
    workshopName: "Machine Learning Bootcamp",
    description: "Understand ML concepts with real-world examples.",
    category: "AI & ML",
    dateTime: "2026-03-05 10:00 AM - 5:00 PM",
    mode: "Offline",
    price: "2499"
  },
  {
    workshopName: "DevOps Fundamentals",
    description: "Learn CI/CD pipelines, Docker, and cloud basics.",
    category: "DevOps",
    dateTime: "2026-03-10 1:00 PM - 4:00 PM",
    mode: "Online",
    price: "1499"
  },
  {
    workshopName: "Mobile App Development with React Native",
    description: "Build cross-platform mobile apps in one day.",
    category: "Mobile Development",
    dateTime: "2026-03-15 10:00 AM - 6:00 PM",
    mode: "Online",
    price: "1999"
  },
  {
    workshopName: "Ethical Hacking Hands-on",
    description: "Live penetration testing and security tool usage.",
    category: "Cyber Security",
    dateTime: "2026-03-20 9:00 AM - 5:00 PM",
    mode: "Offline",
    price: "2999"
  },
  {
    workshopName: "Career Guidance for IT Students",
    description: "Learn career paths, resumes, and interview preparation.",
    category: "Career",
    dateTime: "2026-03-25 3:00 PM - 6:00 PM",
    mode: "Online",
    price: "499"
  }
];


     // pagenation try
          const itemsPerPage = 7; // change as needed
          const [currentPage, setCurrentPage] = useState(1);
        
          const totalPages =
            data.length > 0 ? Math.ceil(data.length / itemsPerPage) : 0;
        
          const startIndex = (currentPage - 1) * itemsPerPage;
          const endIndex = startIndex + itemsPerPage;
        
          const currentItems = data.slice(startIndex, endIndex);
          //
  return (
    <>
      <div className="flex sm:flex-row flex-col dark:bg-black  ">
        {/* header */}
        <div className="w-80">
          {" "}
          <InstitutionSidebar/>
        </div>

        {/* dashbord content  */}
        <div className="sm:mt-5 p-5 sm:p-0 w-full ">
        
{/* Heading */}
                    <div className='p-5 '>
                       <div>
                        <h1 className='text-4xl font-bold tracking-tight text-[#111418] leading-tight dark:text-white'>Course Management </h1>
                        <p className='font-medium text-slate-500 leading-tight text-xl dark:text-white'>Manage your course Details</p>
                       </div>
                  
                    </div>
                      <div className='flex justify-end items-end mr-10'>
                    <WorkShopModal/>
                    </div>

                  
                            {/* table and pagenation */}
                  
                            <div className="p-4">
                              {/* TABLE */}
                              <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                                <table className="w-full text-sm text-left text-gray-600 ">
                                  <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-300 ">
                                    <tr>
                                      <th className="px-6 py-3">Workshop Name</th>
                                      <th className="px-6 py-3">Description</th>
                                      <th className="px-6 py-3">category</th>
                                      <th className="px-6 py-3">Date & Time</th>
                                      <th className="px-6 py-3">mode </th>
                                      <th className="px-6 py-3">price </th>
                                      <th className="px-6 py-3"> </th>
                                      <th className="px-6 py-3"> </th>
                                      
                                      {/* <th className="px-6 py-3">thumbnail</th> */}

                                    </tr>
                                  </thead>
                  
                                  <tbody>
                                    {currentItems.map((user) => (
                                      <tr
                                        key={user.id}
                                        className="bg-white border-b hover:bg-gray-50 dark:bg-green-100"
                                      >
                                        <td className="px-6 py-4">{user.workshopName}</td>
                                        <td className="px-6 py-4 font-medium">{user.description}</td>
                                        <td className="px-6 py-4">{user.category}</td>
                                        <td className="px-6 py-4">{user.dateTime}</td>
                                        <td className="px-6 py-4">{user.mode}</td>
                                        <td className="px-6 py-4">{user.price}</td>
                                        <td className="px-6 py-4"><Button>Edit</Button></td>
                                        <td className="px-6 py-4"><Button className='bg-red-800'>Delete</Button></td>
                                        {/* <td className="px-6 py-4">{user.thumbnail}</td> */}
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                  
                              {/* PAGINATION */}
                              <div className="flex justify-center mt-5">
                                {totalPages > 0 && (
                                  <div className="flex justify-center mt-5">
                                    <Pagination
                                      currentPage={currentPage}
                                      totalPages={totalPages}
                                      onPageChange={(p) => setCurrentPage(p)}
                                      previousLabel="←"
                                      nextLabel="→"
                                    />
                                  </div>
                                )}
                              </div>
                            </div>



        </div>
      </div>

      <div>
        <AppFooter/>
      </div>
    </>
  )
}

export default WorkshopInstitution