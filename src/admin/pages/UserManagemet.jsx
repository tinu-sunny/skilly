import React, { useEffect, useState } from 'react'
import Adminheader from '../components/Adminheader'
import { Pagination, TextInput } from 'flowbite-react'
import { users } from '../../services/allAPIs';

function UserManagemet() {
const [data,setData]=useState([])

// userdetails

const userdata =async ()=>{
  const response = await users()
  console.log(response);
  if(response.status==200){
 console.log(response.data.userData);
 setData(response.data.userData || [])
 console.log(setData);
 
 
  }
  
}

useEffect(()=>{
userdata()
},[])


  // pagenation try
 const itemsPerPage = 7;  // change as needed
  const [currentPage, setCurrentPage] = useState(1);

const totalPages =
  data.length > 0 ? Math.ceil(data.length / itemsPerPage) : 0;

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
                <td className="px-6 py-4">{user._id}</td>
                <td className="px-6 py-4 font-medium">{user.username}</td>
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
  
    
    
    
    </>
   
  )
}

export default UserManagemet