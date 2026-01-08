import React, { useState } from 'react'
import AppFooter from '../../components/AppFooter'
import InstitutionSidebar from '../Components/InstitutionSidebar'
import { Button } from 'flowbite-react'
import { Pagination, TextInput } from "flowbite-react";
import CourseAddModal from '../Components/CourseAddModal';

function CourseManagement() {

const data = [
  {
    coursename: "Full Stack Web Development",
    description: "Learn HTML, CSS, JavaScript, React, Node.js, and MongoDB.",
    category: "Web Development",
    price: "4999",
    thumbnail: "https://example.com/images/fullstack.jpg",
    duration: "6 Months"
  },
  {
    coursename: "Frontend Development with React",
    description: "Build modern user interfaces using React and Tailwind CSS.",
    category: "Web Development",
    price: "3999",
    thumbnail: "https://example.com/images/react.jpg",
    duration: "4 Months"
  },
  {
    coursename: "Backend Development with Node.js",
    description: "Create REST APIs using Node.js, Express, and MongoDB.",
    category: "Backend",
    price: "4499",
    thumbnail: "https://example.com/images/node.jpg",
    duration: "4 Months"
  },
  {
    coursename: "Data Science with Python",
    description: "Learn data analysis, visualization, and machine learning.",
    category: "Data Science",
    price: "5999",
    thumbnail: "https://example.com/images/datascience.jpg",
    duration: "5 Months"
  },
  {
    coursename: "Machine Learning Basics",
    description: "Understand ML algorithms and real-world use cases.",
    category: "AI & ML",
    price: "5499",
    thumbnail: "https://example.com/images/ml.jpg",
    duration: "4 Months"
  },
  {
    coursename: "Cyber Security Fundamentals",
    description: "Learn ethical hacking and network security basics.",
    category: "Cyber Security",
    price: "4499",
    thumbnail: "https://example.com/images/cyber.jpg",
    duration: "3 Months"
  },
  {
    coursename: "Ethical Hacking",
    description: "Hands-on penetration testing and security tools.",
    category: "Cyber Security",
    price: "6999",
    thumbnail: "https://example.com/images/hacking.jpg",
    duration: "5 Months"
  },
  {
    coursename: "UI/UX Design",
    description: "Design beautiful and user-friendly interfaces.",
    category: "Design",
    price: "3999",
    thumbnail: "https://example.com/images/uiux.jpg",
    duration: "3 Months"
  },
  {
    coursename: "Mobile App Development with React Native",
    description: "Build cross-platform mobile apps for Android and iOS.",
    category: "Mobile Development",
    price: "5499",
    thumbnail: "https://example.com/images/reactnative.jpg",
    duration: "4 Months"
  },
  {
    coursename: "DevOps Fundamentals",
    description: "Learn CI/CD, Docker, Kubernetes, and cloud basics.",
    category: "DevOps",
    price: "4999",
    thumbnail: "https://example.com/images/devops.jpg",
    duration: "3 Months"
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
                      <CourseAddModal/>
                    </div>

                  
                            {/* table and pagenation */}
                  
                            <div className="p-4">
                              {/* TABLE */}
                              <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                                <table className="w-full text-sm text-left text-gray-600 ">
                                  <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-300 ">
                                    <tr>
                                      <th className="px-6 py-3">Course Name</th>
                                      <th className="px-6 py-3">Description</th>
                                      <th className="px-6 py-3">category</th>
                                      <th className="px-6 py-3">price</th>
                                      <th className="px-6 py-3">duration </th>
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
                                        <td className="px-6 py-4">{user.coursename}</td>
                                        <td className="px-6 py-4 font-medium">{user.description}</td>
                                        <td className="px-6 py-4">{user.category}</td>
                                        <td className="px-6 py-4">{user.price}</td>
                                        <td className="px-6 py-4">{user.duration}</td>
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

export default CourseManagement