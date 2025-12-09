import React, { useState } from 'react'
import Adminheader from '../components/Adminheader'
import { Pagination, TextInput } from 'flowbite-react'

function UserManagemet() {
 const data = [
  { id: 1, name: "Aarav Sharma", email: "aarav.sharma@example.com", role: "Admin", phone: "+91 9876500001", status: "Active", createdAt: "2024-12-01" },
  { id: 2, name: "Meera Nair", email: "meera.nair@example.com", role: "Editor", phone: "+91 9876500002", status: "Inactive", createdAt: "2024-12-02" },
  { id: 3, name: "Rohit Verma", email: "rohit.verma@example.com", role: "User", phone: "+91 9876500003", status: "Active", createdAt: "2024-12-03" },
  { id: 4, name: "Sneha Gupta", email: "sneha.gupta@example.com", role: "User", phone: "+91 9876500004", status: "Pending", createdAt: "2024-12-04" },
  { id: 5, name: "Arjun Menon", email: "arjun.menon@example.com", role: "Admin", phone: "+91 9876500005", status: "Active", createdAt: "2024-12-05" },
  { id: 6, name: "Diya Kamat", email: "diya.kamat@example.com", role: "User", phone: "+91 9876500006", status: "Inactive", createdAt: "2024-12-06" },
  { id: 7, name: "Kiran Kumar", email: "kiran.kumar@example.com", role: "Editor", phone: "+91 9876500007", status: "Active", createdAt: "2024-12-07" },
  { id: 8, name: "Lakshmi Pillai", email: "lakshmi.pillai@example.com", role: "User", phone: "+91 9876500008", status: "Pending", createdAt: "2024-12-08" },
  { id: 9, name: "Vikram Rao", email: "vikram.rao@example.com", role: "Admin", phone: "+91 9876500009", status: "Active", createdAt: "2024-12-09" },
  { id:10, name: "Ananya Das", email: "ananya.das@example.com", role: "User", phone: "+91 9876500010", status: "Inactive", createdAt: "2024-12-10" },
  { id:11, name: "Rahul Mehta", email: "rahul.mehta@example.com", role: "Editor", phone: "+91 9876500011", status: "Active", createdAt: "2024-12-11" },
  { id:12, name: "Pooja Joshi", email: "pooja.joshi@example.com", role: "User", phone: "+91 9876500012", status: "Active", createdAt: "2024-12-12" },
  { id:13, name: "Suresh Babu", email: "suresh.babu@example.com", role: "Admin", phone: "+91 9876500013", status: "Inactive", createdAt: "2024-12-13" },
  { id:14, name: "Tara Iyer", email: "tara.iyer@example.com", role: "User", phone: "+91 9876500014", status: "Pending", createdAt: "2024-12-14" },
  { id:15, name: "Manoj Krishnan", email: "manoj.krishnan@example.com", role: "Editor", phone: "+91 9876500015", status: "Active", createdAt: "2024-12-15" },
  { id:16, name: "Vidya Ramesh", email: "vidya.ramesh@example.com", role: "User", phone: "+91 9876500016", status: "Inactive", createdAt: "2024-12-16" },
  { id:17, name: "Harish Kumar", email: "harish.kumar@example.com", role: "Admin", phone: "+91 9876500017", status: "Active", createdAt: "2024-12-17" },
  { id:18, name: "Nisha Varma", email: "nisha.varma@example.com", role: "User", phone: "+91 9876500018", status: "Inactive", createdAt: "2024-12-18" },
  { id:19, name: "Mohan Shaji", email: "mohan.shaji@example.com", role: "Editor", phone: "+91 9876500019", status: "Active", createdAt: "2024-12-19" },
  { id:20, name: "Divya Soman", email: "divya.soman@example.com", role: "User", phone: "+91 9876500020", status: "Pending", createdAt: "2024-12-20" },
  { id:21, name: "Kavya Nair", email: "kavya.nair@example.com", role: "User", phone: "+91 9876500021", status: "Active", createdAt: "2024-12-21" },
  { id:22, name: "Amit Reddy", email: "amit.reddy@example.com", role: "Editor", phone: "+91 9876500022", status: "Inactive", createdAt: "2024-12-22" },
  { id:23, name: "Riya Sharma", email: "riya.sharma@example.com", role: "User", phone: "+91 9876500023", status: "Active", createdAt: "2024-12-23" },
  { id:24, name: "Siddharth Verma", email: "siddharth.verma@example.com", role: "Admin", phone: "+91 9876500024", status: "Pending", createdAt: "2024-12-24" },
  { id:25, name: "Anika Menon", email: "anika.menon@example.com", role: "User", phone: "+91 9876500025", status: "Active", createdAt: "2024-12-25" },
  { id:26, name: "Pranav Sharma", email: "pranav.sharma@example.com", role: "Editor", phone: "+91 9876500026", status: "Inactive", createdAt: "2024-12-26" },
  { id:27, name: "Ishita Gupta", email: "ishita.gupta@example.com", role: "User", phone: "+91 9876500027", status: "Active", createdAt: "2024-12-27" },
  { id:28, name: "Arnav Kumar", email: "arnav.kumar@example.com", role: "Admin", phone: "+91 9876500028", status: "Pending", createdAt: "2024-12-28" },
  { id:29, name: "Meghna Iyer", email: "meghna.iyer@example.com", role: "User", phone: "+91 9876500029", status: "Active", createdAt: "2024-12-29" },
  { id:30, name: "Vikas Reddy", email: "vikas.reddy@example.com", role: "Editor", phone: "+91 9876500030", status: "Inactive", createdAt: "2024-12-30" },
  { id:31, name: "Nandini Pillai", email: "nandini.pillai@example.com", role: "User", phone: "+91 9876500031", status: "Active", createdAt: "2024-12-31" },
  { id:32, name: "Aditya Rao", email: "aditya.rao@example.com", role: "Admin", phone: "+91 9876500032", status: "Pending", createdAt: "2025-01-01" },
  { id:33, name: "Snehal Sharma", email: "snehal.sharma@example.com", role: "User", phone: "+91 9876500033", status: "Active", createdAt: "2025-01-02" },
  { id:34, name: "Raghav Verma", email: "raghav.verma@example.com", role: "Editor", phone: "+91 9876500034", status: "Inactive", createdAt: "2025-01-03" },
  { id:35, name: "Anjali Gupta", email: "anjali.gupta@example.com", role: "User", phone: "+91 9876500035", status: "Active", createdAt: "2025-01-04" },
  { id:36, name: "Dhruv Menon", email: "dhruv.menon@example.com", role: "Admin", phone: "+91 9876500036", status: "Pending", createdAt: "2025-01-05" },
  { id:37, name: "Mira Kamat", email: "mira.kamat@example.com", role: "User", phone: "+91 9876500037", status: "Active", createdAt: "2025-01-06" },
  { id:38, name: "Kartik Kumar", email: "kartik.kumar@example.com", role: "Editor", phone: "+91 9876500038", status: "Inactive", createdAt: "2025-01-07" },
  { id:39, name: "Ananya Pillai", email: "ananya.pillai@example.com", role: "User", phone: "+91 9876500039", status: "Active", createdAt: "2025-01-08" },
  { id:40, name: "Rohit Rao", email: "rohit.rao@example.com", role: "Admin", phone: "+91 9876500040", status: "Pending", createdAt: "2025-01-09" },
  { id:41, name: "Sanya Sharma", email: "sanya.sharma@example.com", role: "User", phone: "+91 9876500041", status: "Active", createdAt: "2025-01-10" },
  { id:42, name: "Vivaan Verma", email: "vivaan.verma@example.com", role: "Editor", phone: "+91 9876500042", status: "Inactive", createdAt: "2025-01-11" },
  { id:43, name: "Megha Gupta", email: "megha.gupta@example.com", role: "User", phone: "+91 9876500043", status: "Active", createdAt: "2025-01-12" },
  { id:44, name: "Aditya Menon", email: "aditya.menon@example.com", role: "Admin", phone: "+91 9876500044", status: "Pending", createdAt: "2025-01-13" },
  { id:45, name: "Diya Sharma", email: "diya.sharma@example.com", role: "User", phone: "+91 9876500045", status: "Active", createdAt: "2025-01-14" },
  { id:46, name: "Kunal Kumar", email: "kunal.kumar@example.com", role: "Editor", phone: "+91 9876500046", status: "Inactive", createdAt: "2025-01-15" },
  { id:47, name: "Anika Rao", email: "anika.rao@example.com", role: "User", phone: "+91 9876500047", status: "Active", createdAt: "2025-01-16" },
  { id:48, name: "Raghav Sharma", email: "raghav.sharma@example.com", role: "Admin", phone: "+91 9876500048", status: "Pending", createdAt: "2025-01-17" },
  { id:49, name: "Mira Verma", email: "mira.verma@example.com", role: "User", phone: "+91 9876500049", status: "Active", createdAt: "2025-01-18" },
  { id:50, name: "Aarav Gupta", email: "aarav.gupta@example.com", role: "Editor", phone: "+91 9876500050", status: "Inactive", createdAt: "2025-01-19" },

  // IDs 51-100: Continue similar pattern
  { id:51, name: "Diya Menon", email: "diya.menon@example.com", role: "User", phone: "+91 9876500051", status: "Active", createdAt: "2025-01-20" },
  { id:52, name: "Rohan Kumar", email: "rohan.kumar@example.com", role: "Editor", phone: "+91 9876500052", status: "Inactive", createdAt: "2025-01-21" },
  { id:53, name: "Nisha Sharma", email: "nisha.sharma@example.com", role: "User", phone: "+91 9876500053", status: "Active", createdAt: "2025-01-22" },
  { id:54, name: "Aditya Verma", email: "aditya.verma@example.com", role: "Admin", phone: "+91 9876500054", status: "Pending", createdAt: "2025-01-23" },
  { id:55, name: "Sanya Menon", email: "sanya.menon@example.com", role: "User", phone: "+91 9876500055", status: "Active", createdAt: "2025-01-24" },
  { id:56, name: "Kiran Sharma", email: "kiran.sharma@example.com", role: "Editor", phone: "+91 9876500056", status: "Inactive", createdAt: "2025-01-25" },
  { id:57, name: "Ananya Menon", email: "ananya.menon@example.com", role: "User", phone: "+91 9876500057", status: "Active", createdAt: "2025-01-26" },
  { id:58, name: "Rohit Sharma", email: "rohit.sharma@example.com", role: "Admin", phone: "+91 9876500058", status: "Pending", createdAt: "2025-01-27" },
  { id:59, name: "Mira Kumar", email: "mira.kumar@example.com", role: "User", phone: "+91 9876500059", status: "Active", createdAt: "2025-01-28" },
  { id:60, name: "Aarav Menon", email: "aarav.menon@example.com", role: "Editor", phone: "+91 9876500060", status: "Inactive", createdAt: "2025-01-29" },

  { id:61, name: "Diya Rao", email: "diya.rao@example.com", role: "User", phone: "+91 9876500061", status: "Active", createdAt: "2025-01-30" },
  { id:62, name: "Raghav Menon", email: "raghav.menon@example.com", role: "Editor", phone: "+91 9876500062", status: "Inactive", createdAt: "2025-01-31" },
  { id:63, name: "Anika Sharma", email: "anika.sharma@example.com", role: "User", phone: "+91 9876500063", status: "Active", createdAt: "2025-02-01" },
  { id:64, name: "Aditya Menon", email: "aditya.menon@example.com", role: "Admin", phone: "+91 9876500064", status: "Pending", createdAt: "2025-02-02" },
  { id:65, name: "Meera Sharma", email: "meera.sharma@example.com", role: "User", phone: "+91 9876500065", status: "Active", createdAt: "2025-02-03" },
  { id:66, name: "Rohan Menon", email: "rohan.menon@example.com", role: "Editor", phone: "+91 9876500066", status: "Inactive", createdAt: "2025-02-04" },
  { id:67, name: "Nandini Sharma", email: "nandini.sharma@example.com", role: "User", phone: "+91 9876500067", status: "Active", createdAt: "2025-02-05" },
  { id:68, name: "Dhruv Menon", email: "dhruv.menon@example.com", role: "Admin", phone: "+91 9876500068", status: "Pending", createdAt: "2025-02-06" },
  { id:69, name: "Sanya Sharma", email: "sanya.sharma@example.com", role: "User", phone: "+91 9876500069", status: "Active", createdAt: "2025-02-07" },
  { id:70, name: "Kartik Menon", email: "kartik.menon@example.com", role: "Editor", phone: "+91 9876500070", status: "Inactive", createdAt: "2025-02-08" },

  { id:71, name: "Ananya Sharma", email: "ananya.sharma@example.com", role: "User", phone: "+91 9876500071", status: "Active", createdAt: "2025-02-09" },
];



  // pagenation try
 const itemsPerPage = 7;  // change as needed
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = data.slice(startIndex, endIndex);
  // 
  return (
    <>
    
    <div className='flex sm:flex-row flex-col w-full '>
    {/* header */}
          <div className='w-80' >  <Adminheader/>  </div>

              {/*admin dashbord content  */}
        <div className='sm:mt-5 p-5 sm:p-0 md:mt- lg:mt-15 w-full '>
         
            {/* heading */}

          <div className='sm:text-start text-center'>
          <h1 className="text-[#111418] font-bold text-2xl sm:text-[30px] md:text-4xl leading-tight">
  Usermanagement
</h1>

            <p className='text-slate-500 font-medium leading-tight m-2'>Manage all users across the platform</p>
            </div>

            {/* search bar and sort menu */}
            
<div>
  {/* search bar */}
  <div >
<TextInput type='search' placeholder='🔍Search Here..'></TextInput>
  </div>
  {/* sort menu */}
  <div>
            <div  className='flex justify-start sm:gap-2 lg:gap-5 items-center mt-5'>
              {/* uerType */}
              <select className='lg:p-1 sm:p-0 rounded-lg shadow-2xl sm:bg-transparent sm:border-1 md:border-1 lg:border-0 lg:bg-slate-200
              font-medium '>
                <option value="">user type</option>
                <option value="">s type</option>
                <option value=""> type</option>
                <option value="">u type</option>
              </select>
              {/* Status */}
             <select className='lg:p-1 sm:p-0 rounded-lg shadow-2xl sm:bg-transparent sm:border-1 md:border-1 lg:border-0 lg:bg-slate-200
              font-medium 
              '>
                <option value="">user status</option>
                <option value="">s type</option>
                <option value=""> type</option>
                <option value="">u type</option>
              </select>
              {/* role */}
              <select className='lg:p-1 sm:p-0 rounded-lg shadow-2xl sm:bg-transparent sm:border-1 md:border-1 lg:border-0 lg:bg-slate-200
              font-medium 
              '>
                <option value="">user role</option>
                <option value="">s type</option>
                <option value=""> type</option>
                <option value="">u type</option>
              </select>
            </div>
  </div>
</div>


{/* table and pagenation */}

 <div className="p-4">
      {/* TABLE */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-600">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Role</th>
              <th className="px-6 py-3">Phone</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Created At</th>
            </tr>
          </thead>

          <tbody>
            {currentItems.map((user) => (
              <tr
                key={user.id}
                className="bg-white border-b hover:bg-gray-50"
              >
                <td className="px-6 py-4">{user.id}</td>
                <td className="px-6 py-4 font-medium">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.role}</td>
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
                <td className="px-6 py-4">{user.createdAt}</td>
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
  
    
    
    
    </>
   
  )
}

export default UserManagemet