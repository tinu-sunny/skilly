import React, { useEffect, useState } from "react";
import CompanySidebar from "../Components/CompanySidebar";
import { Button, Pagination } from "flowbite-react";
import AppFooter from "../../components/AppFooter";
import AddJobModal from "../Components/AddJobModal";
import JobEditModal from "../Components/JobEditModal";
import { closejobaplication, deletejobaplication, jobviewcompany } from "../../services/allAPIs";

function JobAddPage() {
  const [data,setData] =useState([]) 
// console.log(data);

  const jobdetails = async()=>{
    const response = await jobviewcompany()
    // console.log(response);
    if(response.status==200){
      setData(response.data.jobData
)
    }
    
  }

  useEffect(()=>{
    jobdetails()
  },[])



// application close

const handleaplicationstop =async(id)=>{
  const reqbody = {
    userid:id,
    status:true
  }

  const response = await closejobaplication(reqbody)
  console.log(response);
  

}

const handledeletejob = async(id)=>{
  const reqbody ={
    job_id:id
  }

  const response =await deletejobaplication(reqbody)
  console.log(response);
  
}




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
          <div>
            <div>
              <h1 className=" text-3xl text-[#111418] leading-tight  font-bold  dark:text-white">
                Jobs Management
              </h1>
              <p className="text-xl font-medium leading-tight dark:text-white">
                {" "}
                Manage your job applications{" "}
              </p>
            </div>
          </div>
          <div className="flex justify-end items-center mt-5">
          <AddJobModal/>
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
                      <th className="px-6 py-3">Last Date</th>
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
                        <td className="px-6 py-4">{user.jobtitle
}</td>
                        <td className="px-6 py-4 font-medium">
                          {user.lastdate}
                        </td>
                        <td className="px-6 py-4">{user.workmode}</td>
                        <td className="px-6 py-4">
                        <JobEditModal id={user._id} jobdata={data}/>
                        </td>
                        <td className="px-6 py-4">
                          <Button outline onClick={()=>{handleaplicationstop(user._id)}}>Close</Button>
                        </td>
                        <td className="px-6 py-4">
                          <Button outline onClick={()=>{handledeletejob(user._id)}}>Delete</Button>
                        </td>
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
        </div>{" "}
      </div>

      <AppFooter />
    </>
  );
}

export default JobAddPage;




          {/* search Bar */}

                // <section className='mt-10'>
                //     <div className='flex flex-wrap gap-4 w-full bg-gray-100 p-4 rounded-3xl' >
                        {/* search bar */}

                        {/* <div className='sm:w-[60%]'>
                            <TextInput type='search' placeholder='🔍 search by job title ..'></TextInput>
                        </div> */}
                        {/* sort by location */}
                        {/* <div className='bg-gray-300 rounded-3xl p-3'>
                            <select>
                                <option value="">All Location</option>
                                <option value="">Kochi</option>
                                <option value="">Trivandram</option>
                                <option value="">Banglur</option>
                                <option value="">New York, NY</option>
                                <option value="">San Francisco, CA</option>
                            </select>
                        </div> */}

                          {/* sort by Roles */}
                        {/* <div className='bg-gray-300 rounded-3xl p-3'>
                            <select>
                                <option value="">All Roles</option>
                                <option value="">Engineering</option>
                                <option value="">Design</option>
                                <option value="">Product</option>
                               
                            </select>
                        </div> */}

                              {/* sort by Industries */}
                        {/* <div className='bg-gray-300 rounded-3xl p-3'>
                            <select>
                                <option value="">All Industries</option>
                                <option value="">Technology</option>
                                <option value="">Finance</option>
                                <option value="">Healthcare</option>
                               
                            </select>
                        </div>
                    </div>
                </section> */}