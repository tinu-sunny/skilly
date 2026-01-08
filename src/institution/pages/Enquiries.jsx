import React, { useState } from 'react'
import AppFooter from '../../components/AppFooter'
import InstitutionSidebar from '../Components/InstitutionSidebar'
import { Button } from 'flowbite-react'
import { Pagination, TextInput } from "flowbite-react";

function Enquiries() {

    const data = [
  {
    name: "Rahul Sharma",
    phone: "9876543210",
    email: "rahul.sharma@gmail.com",
    description: "I want more details about the Full Stack course."
  },
  {
    name: "Anjali Menon",
    phone: "9123456789",
    email: "anjali.menon@gmail.com",
    description: "Is this workshop beginner friendly?"
  },
  {
    name: "Amit Kumar",
    phone: "9988776655",
    email: "amit.kumar@gmail.com",
    description: "Please share fee structure and duration."
  },
  {
    name: "Sneha Patel",
    phone: "9012345678",
    email: "sneha.patel@gmail.com",
    description: "Do you provide certificates after completion?"
  },
  {
    name: "Vikram Singh",
    phone: "8899001122",
    email: "vikram.singh@gmail.com",
    description: "I need information about online classes."
  },
  {
    name: "Priya Nair",
    phone: "9345678901",
    email: "priya.nair@gmail.com",
    description: "What are the prerequisites for this course?"
  },
  {
    name: "Karthik R",
    phone: "9567890123",
    email: "karthik.r@gmail.com",
    description: "Is there any discount available?"
  },
  {
    name: "Neha Verma",
    phone: "9786543210",
    email: "neha.verma@gmail.com",
    description: "Can I attend a demo class before enrolling?"
  },
  {
    name: "Arjun Das",
    phone: "9871234567",
    email: "arjun.das@gmail.com",
    description: "I am a working professional, is the timing flexible?"
  },
  {
    name: "Meera Joshi",
    phone: "9900112233",
    email: "meera.joshi@gmail.com",
    description: "Please contact me with more details."
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
                        <h1 className='text-4xl font-bold tracking-tight text-[#111418] leading-tight dark:text-white'>Enquiries Management </h1>
                        <p className='font-medium text-slate-500 leading-tight text-xl dark:text-white'>Manage your enquiries</p>
                       </div>
                  
                    </div>
                      <div className='flex justify-end items-end mr-10'>
                     <Button>Exports</Button>
                    </div>

                  
                            {/* table and pagenation */}
                  
                            <div className="p-4">
                              {/* TABLE */}
                              <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                                <table className="w-full text-sm text-left text-gray-600 ">
                                  <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-300 ">
                                    <tr>
                                      <th className="px-6 py-3"> Name</th>
                                      <th className="px-6 py-3">Phone</th>
                                      <th className="px-6 py-3">email</th>
                                      <th className="px-6 py-3">Description</th>
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
                                        <td className="px-6 py-4">{user.name}</td>
                                        <td className="px-6 py-4 font-medium">{user.phone}</td>
                                        <td className="px-6 py-4">{user.email}</td>
                                        <td className="px-6 py-4">{user.description}</td>
                                        <td className="px-6 py-4"><Button>Reply</Button></td>
                                        {/* <td className="px-6 py-4"><Button className='bg-red-800'>Delete</Button></td> */}
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

export default Enquiries