
import React, { useEffect, useState } from "react";
import Adminheader from "../components/Adminheader";
import { motion } from "framer-motion";
import { Button, Checkbox, Pagination, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, TextInput } from "flowbite-react";
import CareerAdminaddModal from "../components/CareerAdminaddModal";
import { viewCarreerAPI } from "../../services/allAPIs";
import { td } from "framer-motion/client";


function CareerFilelds() {
  // get all data 
const [data,setData]=useState([])
// to refresh after adding new course
const [refresh,setRefresh]=useState(true)

// sort data for store sorted data 
const [sortData,setSortData]=useState([])

// is userd to store search words
const [keyword,setKeyword]=useState('')

// err mesage is searchdata not found

const [errMsg, setErrMsg]=useState('')

console.log(data);
// search and sort

 const searchdata =  ()=>{
  console.log(keyword);
  
      if(keyword){
        const search = keyword.trim().toLowerCase()
        console.log("trim keyword",search);
        
       const fliterdata = data.filter(item=>item.coursename?.toLowerCase().includes(search) || item.category?.toLowerCase().includes(search))
       console.log(fliterdata);
       setSortData(fliterdata)
      // console.log("inside");
      }
      else{
        console.log('no data');
       setErrMsg("no data found...!!")
       setSortData(data)
       
        
      }
      
    }
   
    useEffect(()=>{
      searchdata()
    },[keyword,data])


// view add fields
const carreradminview = async()=>{
   const response = await viewCarreerAPI()
   console.log(response);
   console.log(response.data.carrefields);
   if(response.status==200){
     setData(response.data.carrefields)
   }
   
}

useEffect(()=>{
  carreradminview()
},[refresh])



    // pagenation 
  const itemsPerPage = 5;
const [currentPage, setCurrentPage] = useState(1);

const totalPages = Math.max(1, Math.ceil(sortData.length / itemsPerPage));

const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;

const currentItems = sortData.slice(startIndex, endIndex);

      
  return (
   <>
      <div className="flex sm:flex-row flex-col dark:bg-black ">
        {/* header */}
        <div className="w-80">
          {" "}
          <Adminheader />
        </div>

        {/*admin dashbord content  */}
        <div className="sm:mt-5 p-5 sm:p-0 w-full ">
          {/* dashboard */}
          <div className="p-3">
            {/* heading */}
            <div className="mb-5">
              <h1 className="text-2xl sm:text-4xl text-[#111418] font-bold leading-tight dark:text-white ">
             Manage Carrer Fields
              </h1>
            </div>

            {/* Add button and side bar */}

            <div className="flex flex-col gap-3 p-4">
               <div className="flex  justify-end"><CareerAdminaddModal setRefresh={setRefresh}/></div>
             
              <TextInput type="search" placeholder="🔍search here...."  onChange={(e) => setKeyword(e.target.value)}  />
            </div>

            {/* sort Button */}

            <div className="flex  flex-row justify-evenly items-center">
                {/* Career Field */}
                <div className="bg-slate-300  shadow-2xl p-1 rounded-3xl dark:bg-blue-500">
                        <select className="w-full  ">
                            <option> Carreer Field</option>
                            <option value="">sample</option>
                            <option value="">sample</option>
                            <option value="">sample</option>
                            <option value="">sample</option>
                            <option value="">sample</option>
                            <option value="">sample</option>
                        </select>
                </div>

                {/* Category */}
                
                 <div  className="bg-slate-300  shadow-2xl p-1 rounded-3xl dark:bg-blue-500">
                        <select className="w-full">
                            <option>Category</option>
                            <option value="">sample</option>
                            <option value="">sample</option>
                            <option value="">sample</option>
                            <option value="">sample</option>
                            <option value="">sample</option>
                            <option value="">sample</option>
                        </select>
                </div>
            </div>

            {/* Table  */}

            <div>
     
      <div className="p-4">
           {/* TABLE */}
           <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
             <table className="w-full text-sm text-left text-gray-600">
               <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-green-400">
                 <tr>
                   <th className="px-6 py-3">title</th>
                   <th className="px-6 py-3">Description</th>
                   <th className="px-6 py-3">avg-salary</th>
                   <th className="px-6 py-3">category</th>
                   <th className="px-6 py-3"></th>
                   <th className="px-6 py-3"></th>
                  
                 </tr>
               </thead>
     
               <tbody>
                 {currentItems&& currentItems.length > 0? currentItems.map((user) => (
                   <tr
                     key={user.id}
                     className="bg-white border-b hover:bg-gray-50 dark:bg-green-200"
                   >
                     <td className="px-6 py-4 font-medium">{user.coursename}</td>
                     <td className="px-6 py-4">{user.description}</td>
                     <td className="px-6 py-4">{user.avgsalary}</td>
                     <td className="px-6 py-4">{user.category}</td>
                     <td className="px-6 py-4"><Button className="bg-indigo-500 dark:bg-indigo-500">edit</Button></td>
                     <td className="px-6 py-4"><Button className="bg-red-800 hover:bg-red-400 dark:bg-red-800">delete</Button></td>
                   
                   </tr>
                 )):<td colSpan={6} className="text-center text-2xl p-5  bg-gray-300">{errMsg}</td>}
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
      </div>
    </>
  )
}

export default CareerFilelds




