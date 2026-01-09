import React, { useState } from 'react'
import CompanySidebar from '../Components/CompanySidebar'
import { Button, Pagination } from 'flowbite-react'
import AppFooter from '../../components/AppFooter';

function JobAddPage() {

   const data = [
  {
    id: 1,
    title: "Frontend Developer",
    department: "Engineering",
    workMode: "Remote",
  },
  {
    id: 2,
    title: "Backend Developer",
    department: "Engineering",
    workMode: "Onsite",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    department: "Design",
    workMode: "Hybrid",
  },
  {
    id: 4,
    title: "HR Executive",
    department: "Human Resources",
    workMode: "Onsite",
  },
  {
    id: 5,
    title: "Product Manager",
    department: "Product",
    workMode: "Hybrid",
  },
  {
    id: 6,
    title: "QA Engineer",
    department: "Quality Assurance",
    workMode: "Remote",
  },
  {
    id: 7,
    title: "DevOps Engineer",
    department: "Infrastructure",
    workMode: "Remote",
  },
  {
    id: 8,
    title: "Marketing Executive",
    department: "Marketing",
    workMode: "Onsite",
  },
  {
    id: 9,
    title: "Data Analyst",
    department: "Analytics",
    workMode: "Hybrid",
  },
  {
    id: 10,
    title: "Technical Support",
    department: "Support",
    workMode: "Onsite",
  },
];

    
       const itemsPerPage = 7; // change as needed
        const [currentPage, setCurrentPage] = useState(1);
      
        const totalPages =
          data.length > 0 ? Math.ceil(data.length / itemsPerPage) : 0;
      
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
      
        const currentItems = data.slice(startIndex, endIndex);
  return (
    <>
     <div className=" flex sm:flex-row flex-col w-full dark:bg-black">
          {/* SIDEBAR */}
          <div className=" w-72">
            <CompanySidebar />
          </div>
    
          {/* MAIN CONTENT */}
          <div className="flex flex-col p-4 sm:p-6 w-full h-auto">


            <div >
              <div>
                    <h1 className=' text-3xl text-[#111418] leading-tight  font-bold  dark:text-white'>Jobs Management</h1>
                    <p className='text-xl font-medium leading-tight dark:text-white'> Manage your job applications </p>
              </div>
                
           
            </div>
 <div className='flex justify-end items-center mt-5'>
                <Button>
                    Add New
                </Button>
            </div>


{/* list of add  jobs  */}

<section>
     {/* table and pagenation */}
             
                       <div className="p-4">
                         {/* TABLE */}
                         <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                           <table className="w-full text-sm text-left text-gray-600 ">
                             <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-green-300 ">
                               <tr>
                                 <th className="px-6 py-3">Title</th>
                                 <th className="px-6 py-3">Department</th>
                                 <th className="px-6 py-3">Work Mode</th>
                                 <th className="px-6 py-3">Edit</th>
                                 <th className="px-6 py-3">Close</th>
                                 <th className="px-6 py-3">Delete</th>
                               </tr>
                             </thead>
             
                             <tbody>
                               {currentItems.map((user) => (
                                 <tr
                                   key={user.id}
                                   className="bg-white border-b hover:bg-gray-50 dark:bg-green-100"
                                 >
                                   <td className="px-6 py-4">{user.title}</td>
                                   <td className="px-6 py-4 font-medium">{user.department}</td>
                                   <td className="px-6 py-4">{user.workMode}</td>
                                <td className="px-6 py-4"><Button outline>view</Button></td>
                                 <td className="px-6 py-4"><Button outline >Close</Button></td>
                                   <td className="px-6 py-4"><Button outline    >Delete</Button></td>
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
</section>



</div>          </div>

<AppFooter/>
    </>
  )
}

export default JobAddPage