import React from 'react'
import Adminheader from '../components/Adminheader'
import { TextInput } from 'flowbite-react'

function UserManagemet() {
  return (
    <>
    
    <div className='flex sm:flex-row flex-col  '>
    {/* header */}
          <div className='w-80' >  <Adminheader/>  </div>

              {/*admin dashbord content  */}
        <div className='sm:mt-5 p-5 sm:p-0 md:mt-6 lg:mt-15 w-full '>
         
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
  <div>
<TextInput type='search' placeholder='🔍Search Here..'></TextInput>
  </div>
  {/* sort menu */}
  <div>
            <div  className='flex justify-start gap-5 items-center mt-5'>
              {/* uerType */}
              <select className='p-1 rounded-lg shadow-2xl bg-slate-200
              font-medium'>
                <option value="">user type</option>
                <option value="">s type</option>
                <option value=""> type</option>
                <option value="">u type</option>
              </select>
              {/* Status */}
             <select className='p-1 rounded-lg shadow-2xl bg-slate-200 font-medium
              '>
                <option value="">user status</option>
                <option value="">s type</option>
                <option value=""> type</option>
                <option value="">u type</option>
              </select>
              {/* role */}
              <select className='p-1 rounded-lg shadow-2xl bg-slate-200 font-medium
              '>
                <option value="">user role</option>
                <option value="">s type</option>
                <option value=""> type</option>
                <option value="">u type</option>
              </select>
            </div>
  </div>
</div>


            </div>
      </div>
  
    
    
    
    </>
   
  )
}

export default UserManagemet