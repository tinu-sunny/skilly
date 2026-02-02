import React, { useEffect, useState } from "react";
import CompanySidebar from "../Components/CompanySidebar";
import { Button, Pagination } from "flowbite-react";
import AppFooter from "../../components/AppFooter";
import AddJobModal from "../Components/AddJobModal";
import JobEditModal from "../Components/JobEditModal";
import { jobviewcompany } from "../../services/allAPIs";

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
                          <Button outline>Close</Button>
                        </td>
                        <td className="px-6 py-4">
                          <Button outline>Delete</Button>
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
