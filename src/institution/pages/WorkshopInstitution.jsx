import React, { useEffect, useState } from 'react'
import InstitutionSidebar from '../Components/InstitutionSidebar';
import { Button, Pagination } from 'flowbite-react';
import AppFooter from '../../components/AppFooter';
import WorkShopModal from '../Components/WorkShopModal';
import { workshopviewinstitution } from '../../services/allAPIs';

function WorkshopInstitution() {

 const [data,setData]=useState([]) 


const worshopdata =async()=>{

  const response = await workshopviewinstitution()
  console.log(response);
  if(response.status==200){
    setData(response.data.data)
  }
}

useEffect(()=>{
  worshopdata()
},[])

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
                        <h1 className='text-4xl font-bold tracking-tight text-[#111418] leading-tight dark:text-white'>Workshop Management </h1>
                        <p className='font-medium text-slate-500 leading-tight text-xl dark:text-white'>Manage your workshop Details</p>
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
                                      <th className="px-6 py-3">Date & Location</th>
                                      <th className="px-6 py-3">mode </th>
                                      <th className="px-6 py-3">registrationlink </th>
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
                                        <td className="px-6 py-4">{user.title}</td>
                                        <td className="px-6 py-4 font-medium">{user.description}</td>
                                        <td className="px-6 py-4">{user.category}</td>
                                        <td className="px-6 py-4">{user.date}<br/>{user.location}</td>
                                        <td className="px-6 py-4">{user.mode}</td>
                                        <td className="px-6 py-4">{user.registrationlink}</td>
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