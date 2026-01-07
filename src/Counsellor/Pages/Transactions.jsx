import React, { useState } from 'react'
import CounsellorSidebar from '../Components/CounsellorSidebar'
import { FaCheckCircle } from 'react-icons/fa'
import { IoIosTrendingUp } from 'react-icons/io'
import { MdEventAvailable, MdPendingActions } from 'react-icons/md'
import { Button, Pagination } from 'flowbite-react'
import { CiMoneyCheck1 } from 'react-icons/ci'

function Transactions() {
    const data = [
     {
                   
        name: "Amit Kumar",
        date: "2026-01-10",
        time: "10:00 AM",
        sessionType: "Video Call",
        status: "Confirmed",
        amount:25
      },
      {
        id: 2,
        name: "Sneha R",
        date: "2026-01-10",
        time: "11:30 AM",
        sessionType: "Voice Call",
        status: "Pending",
        amount:25
      },
      {
        id: 3,
        name: "Rahul Mehta",
        date: "2026-01-11",
        time: "09:45 AM",
        sessionType: "In-Person",
        status: "Completed",
        amount:25
      },
      {
        id: 4,
        name: "Neha Patel",
        date: "2026-01-11",
        time: "02:00 PM",
        sessionType: "Video Call",
        status: "Cancelled",
        amount:25
      },
      {
        id: 5,
        name: "Vikram Singh",
        date: "2026-01-14",
        time: "09:30 AM",
        sessionType: "Chat",
        status: "Confirmed",
        amount:25
      },
      {
        id: 6,
        name: "Pooja Sharma",
        date: "2026-01-14",
        time: "10:45 AM",
        sessionType: "Video Call",
        status: "Confirmed",
        amount:25
      },
      {
        id: 7,
        name: "Rohit Verma",
        date: "2026-01-15",
        time: "12:00 PM",
        sessionType: "Voice Call",
        status: "Pending",
        amount:25
      },
      {
        id: 8,
        name: "Anjali Nair",
        date: "2026-01-15",
        time: "03:15 PM",
        sessionType: "Chat",
        status: "Confirmed",
        amount:25
      },
      {
        id: 9,
        name: "Karan Malhotra",
        date: "2026-01-16",
        time: "11:00 AM",
        sessionType: "In-Person",
        status: "Completed",
        amount:25
      },
      {
        id: 10,
        name: "Meera Joshi",
        date: "2026-01-16",
        time: "04:30 PM",
        sessionType: "Video Call",
        status: "Confirmed",
        amount:25
      },
      {
        id: 11,
        name: "Arjun Rao",
        date: "2026-01-17",
        time: "09:00 AM",
        sessionType: "Voice Call",
        status: "Cancelled",
        amount:25
      },
      {
        id: 12,
        name: "Kavya Iyer",
        date: "2026-01-17",
        time: "01:15 PM",
        sessionType: "Chat",
        status: "Pending",
        amount:25
      },
      {
        id: 13,
        name: "Suresh Patil",
        date: "2026-01-18",
        time: "10:30 AM",
        sessionType: "In-Person",
        status: "Completed",
        amount:25
      },
      {
        id: 14,
        name: "Nikita Deshmukh",
        date: "2026-01-18",
        time: "02:45 PM",
        sessionType: "Video Call",
        status: "Confirmed",
        amount:25
      },
      {
        id: 15,
        name: "Manish Gupta",
        date: "2026-01-19",
        time: "11:20 AM",
        sessionType: "Chat",
        status: "Pending",
        amount:25
      }
    ];
    
    
    
          const itemsPerPage = 5;
        const [currentPage, setCurrentPage] = useState(1);
        
        const totalPages = Math.max(1, Math.ceil(data.length / itemsPerPage));
        
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        
        const currentItems = data.slice(startIndex, endIndex);
  return (
     <>
      <div className="flex sm:flex-row flex-col  ">
        {/* header */}
        <div className="w-80">
          {" "}
          <CounsellorSidebar />
        </div>

        {/* dashbord content  */}
        <div className="sm:mt-5 p-5 sm:p-0 w-full ">
        

<section>
  <div>
        <h1 className='text-4xl font-bold text-[#111418] leading-tight'> Transactions</h1>
        <p className='text-xl font-medium text-slate-500 mt-2'>Manage your Payment Transactions </p>
  </div>

   {/*qucik cards  */}
                      <section>
                          <div className='flex sm:flex-col  lg:flex-row md:flex-row gap-5 p-8 justify-evenly items-center'>
                              {/* Upcoming Count */}
                              <div className='bg-gray-200 rounded-2xl p-5 shadow-2xl w-70 h-35'>
                                  <div className='flex  justify-Start items-center gap-2 text-[18px] font-medium'>
                                     <div className='text-blue-700'> <CiMoneyCheck1 /> </div>
                                      <p className='text-[#111418]'>
                                        Total Amount
                                      </p>
                                  </div>
                                  <span className='text-slate-800 font-medium text-[18px] items-center justify-Start flex'>
                                      5
                                  </span>
                              </div>
  
                               {/* Pending Count */}
                              <div className='bg-gray-200 rounded-2xl p-5 shadow-2xl w-70 h-35'>
                                  <div className='flex  justify-Start items-center gap-2 text-[18px] font-medium'>
                                     <div className='text-orange-700'><MdPendingActions /> </div>
                                      <p className='text-[#111418]'>
                                         Pending Amount
                                      </p>
                                  </div>
                                  <span className='text-slate-800 font-medium text-[18px] items-center justify-Start flex'>
                                      8
                                  </span>
                              </div>
  
                          
                          </div>

                          <div className='flex justify-end items-end mr-20'>
                          
                                <Button>export</Button>
                          
                          </div>
                      </section>
</section>

<div>
      <div className="p-4">
               {/* TABLE */}
               <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                 <table className="w-full text-sm text-left text-gray-600">
                   <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-green-400">
                     <tr>
                       <th className="px-6 py-3">Date</th>
                       <th className="px-6 py-3">Name</th>
                       <th className="px-6 py-3">Session Type</th>
                       <th className="px-6 py-3">status</th>
                       <th className="px-6 py-3">Amount</th>
                       <th className="px-6 py-3">action</th>
                      
                     </tr>
                   </thead>
         
                   <tbody>
                     {currentItems.map((user) => (
                       <tr
                         key={user.id}
                         className="bg-white border-b hover:bg-gray-50 dark:bg-green-200"
                       >
                         <td className="px-6 py-4 font-medium">{user.date}</td>
                         <td className="px-6 py-4"><span>{user.name}</span></td>
                         <td className="px-6 py-4">{user.sessionType}</td>
                         <td className="px-6 py-4">{user.status}</td>
                         <td className="px-6 py-4">{user.amount}</td>
                         <td className="px-6 py-4"><select>
                            <option value="">Take Action</option>
                            <option value="">Confirme</option>
                            <option value="">Completed</option>
                       
                            <option value=""> Cancell</option>

                            </select></td>
                         {/* <td className="px-6 py-4">{user.role}</td>
                         <td className="px-6 py-4">{user.phone}</td>
                         <td
                           className={`px-6 py-4 font-semibold ${
                             user.status === "Active"
                               ? "text-green-600"
                               : user.status === "Inactive"
                               ? "text-red-600"
                               : "text-orange-500"
                           }`}
                         >
                           {user.status}
                         </td>
                         <td className="px-6 py-4">{user.createdAt}</td> */}
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
         
               {/* PAGINATION */}
               <div className="flex justify-center mt-5">
                 <Pagination
                   currentPage={currentPage}
                   totalPages={totalPages}
                   onPageChange={(p) => setCurrentPage(p)}
                    previousLabel="← "
           nextLabel="→"
                 />
               </div>
             </div>
</div>

        </div>
      </div>
    </>
  )
}

export default Transactions