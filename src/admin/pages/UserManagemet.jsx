import React, { useEffect, useState } from "react";
import Adminheader from "../components/Adminheader";
import { Button, Pagination, TextInput } from "flowbite-react";
import { users } from "../../services/allAPIs";

function UserManagemet() {
  const [data, setData] = useState([]);
  const [sortData ,setSortData]=useState([])
  const [keyword,setKeyword]=useState('')
console.log(sortData);

  console.log(keyword);

  
    // search and sort 

    const searchdata =  ()=>{
      if(keyword){
        const search = keyword.trim().toLowerCase()
       const fliterdata = data.filter(item=>item.username.toLowerCase().includes(search)||item.role.toLowerCase().includes(search) || item.status==keyword)
       console.log(fliterdata);
       setSortData(fliterdata)
      console.log("inside");
      }
      else{
        console.log('n0 data');
       setSortData(data)
       
        
      }
      
    }
   
    useEffect(()=>{
      searchdata()
    },[keyword,data])


  // userdetails

  const userdata = async () => {
    const response = await users();
    // console.log(response);
    if (response.status == 200) {
      // console.log(response.data.userData);
      setData(response.data.userData || []);
      // console.log(setData);
    }
  };

  useEffect(() => {
    userdata();
  }, []);





  // pagenation try
  const itemsPerPage = 7; // change as needed
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages =
    sortData.length > 0 ? Math.ceil(sortData.length / itemsPerPage) : 0;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = sortData.slice(startIndex, endIndex);
  //
  return (
    <>
      <div className="flex sm:flex-row flex-col w-full dark:bg-black ">
        {/* header */}
        <div className="w-80">
          {" "}
          <Adminheader />{" "}
        </div>

        {/*admin dashbord content  */}
        <div className="sm:mt-5 p-5 sm:p-0 md:mt- lg:mt-15 w-full dark:bg-black ">
          {/* heading */}

          <div className="sm:text-start text-center">
            <h1 className="text-[#111418] font-bold text-2xl sm:text-[30px] md:text-4xl leading-tight dark:text-white">
              Usermanagement
            </h1>

            <p className="text-slate-500 font-medium leading-tight m-2 dark:text-white">
              Manage all users across the platform
            </p>
          </div>

          {/* search bar and sort menu */}

          <div>
            {/* search bar */}
            <div>
              <TextInput
                type="search"
                placeholder="🔍Search Here.." 
                onChange={(e) => setKeyword(e.target.value)}
              ></TextInput>
            </div>
            {/* sort menu */}
            <div>
              <div className="flex justify-start sm:gap-2 lg:gap-5 items-center mt-5">
                {/* uerType */}
                <select
                  className="lg:p-1 sm:p-0 rounded-lg shadow-2xl sm:bg-transparent sm:border-1 md:border-1 lg:border-0 lg:bg-slate-200
              font-medium dark:text-white dark:bg-blue-500 "  onClick={(e)=>setKeyword(e.target.value)}
                >
                  <option value="">user type</option>
                  <option value="student">student</option>
                  <option value="working"> working</option>
                  <option value="counsellor">counsellor</option>
                  <option value="institution"> institution</option>
                  <option value="company"> company</option>
                </select>
                {/* Status */}
                <select
                  className="lg:p-1 sm:p-0 rounded-lg shadow-2xl sm:bg-transparent sm:border-1 md:border-1 lg:border-0 lg:bg-slate-200
              font-medium dark:text-white dark:bg-blue-500 "onClick={(e)=>setKeyword(e.target.value)}
                >
                  <option value="">user status</option>
                  <option value="1">Active</option>
                  <option value="0"> InActive</option>
                </select>
              
              </div>
            </div>
          </div>

          {/* table and pagenation */}

          <div className="p-4">
            {/* TABLE */}
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
              <table className="w-full text-sm text-left text-gray-600 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-green-300 ">
                  <tr>
                    <th className="px-6 py-3">ID</th>
                    <th className="px-6 py-3">Name</th>
                    <th className="px-6 py-3">Email</th>
                    <th className="px-6 py-3">Role</th>
                    <th className="px-6 py-3">Phone</th>
                    <th className="px-6 py-3">Created At</th>
                    <th className="px-6 py-3">Status</th>
                    <th></th>

                  </tr>
                </thead>

                <tbody>
                  {currentItems.map((user) => (
                    <tr
                      key={user._id}
                      className="bg-white border-b hover:bg-gray-50 dark:bg-green-100"
                    >
                      <td className="px-6 py-4">{user._id}</td>
                      <td className="px-6 py-4 font-medium">{user.username}</td>
                      <td className="px-6 py-4">{user.email}</td>
                      <td className="px-6 py-4">{user.role}</td>
                      <td className="px-6 py-4">{user.phone}</td>
                      <td className="px-6 py-4">{user.regdate}</td>

                      <td
                        className={`px-6 py-4 font-semibold ${
                          user.status === true
                            ? "text-green-600"
                            : user.status === false
                            ? "text-red-600"
                            : "text-orange-500"
                        }`}
                      >
                        {user.status === true ? <p>Active</p> : <p>inactive</p>}
                      </td>
                      <td>{user.status === true ? <Button color={'red'}>inactive</Button> : <Button color={'green'}>Active</Button>}</td>
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
  );
}

export default UserManagemet;
