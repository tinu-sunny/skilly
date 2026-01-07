
import React, { useEffect, useState } from "react";
import Adminheader from "../components/Adminheader";
import { motion } from "framer-motion";
import { Button, Checkbox, Pagination, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, TextInput } from "flowbite-react";
import CareerAdminaddModal from "../components/CareerAdminaddModal";
import { viewCarreerAPI } from "../../services/allAPIs";


function CareerFilelds() {
  
//     const data = [
//   { id: 1, title: "Software Developer", description: "Builds and maintains applications and systems." },
//   { id: 2, title: "Data Analyst", description: "Analyzes data to provide insights and support decisions." },
//   { id: 3, title: "Cybersecurity Analyst", description: "Protects systems from cyber threats and vulnerabilities." },
//   { id: 4, title: "AI/ML Engineer", description: "Develops machine learning models and AI solutions." },
//   { id: 5, title: "Cloud Engineer", description: "Manages cloud infrastructure and services." },
//   { id: 6, title: "UI/UX Designer", description: "Designs user-friendly interfaces and experiences." },
//   { id: 7, title: "Graphic Designer", description: "Creates visual content for branding and marketing." },
//   { id: 8, title: "Web Developer", description: "Builds websites and web applications." },
//   { id: 9, title: "Mobile App Developer", description: "Creates applications for iOS and Android." },
//   { id: 10, title: "Blockchain Developer", description: "Builds secure blockchain-based applications." },
//   { id: 11, title: "Network Engineer", description: "Maintains networking systems and connectivity." },
//   { id: 12, title: "Database Administrator", description: "Manages database systems and optimization." },
//   { id: 13, title: "IT Support Specialist", description: "Provides technical assistance to users." },
//   { id: 14, title: "DevOps Engineer", description: "Automates development and deployment workflows." },
//   { id: 15, title: "Game Developer", description: "Creates interactive video games and simulations." },
//   { id: 16, title: "Digital Marketer", description: "Promotes brands through digital channels." },
//   { id: 17, title: "Content Writer", description: "Creates written content for web or print." },
//   { id: 18, title: "SEO Specialist", description: "Optimizes content to improve search rankings." },
//   { id: 19, title: "Social Media Manager", description: "Handles brand communication on social platforms." },
//   { id: 20, title: "Product Manager", description: "Oversees development and lifecycle of products." },
//   { id: 21, title: "Project Manager", description: "Plans and manages project execution." },
//   { id: 22, title: "HR Manager", description: "Manages hiring, onboarding, and employee relations." },
//   { id: 23, title: "Business Analyst", description: "Analyzes business needs and recommends solutions." },
//   { id: 24, title: "Financial Analyst", description: "Analyzes financial data for decision-making." },
//   { id: 25, title: "Accountant", description: "Manages financial records and compliance." },
//   { id: 26, title: "Teacher", description: "Educates students in academic subjects." },
//   { id: 27, title: "Mechanical Engineer", description: "Designs mechanical systems and machinery." },
//   { id: 28, title: "Civil Engineer", description: "Plans infrastructure like roads, bridges, buildings." },
//   { id: 29, title: "Electrical Engineer", description: "Works on electrical systems and components." },
//   { id: 30, title: "Architect", description: "Designs buildings and oversees construction." },
//   { id: 31, title: "Doctor", description: "Diagnoses and treats medical conditions." },
//   { id: 32, title: "Nurse", description: "Provides patient care in medical settings." },
//   { id: 33, title: "Pharmacist", description: "Dispenses medications and advises patients." },
//   { id: 34, title: "Physiotherapist", description: "Helps patients recover mobility and function." },
//   { id: 35, title: "Lawyer", description: "Represents clients in legal matters." },
//   { id: 36, title: "Journalist", description: "Reports news and writes articles." },
//   { id: 37, title: "Photographer", description: "Captures photos for events or media." },
//   { id: 38, title: "Video Editor", description: "Edits and assembles video content." },
//   { id: 39, title: "Chef", description: "Prepares meals and manages kitchen operations." },
//   { id: 40, title: "Hotel Manager", description: "Oversees hotel operations and guest services." },
//   { id: 41, title: "Event Manager", description: "Plans and executes events." },
//   { id: 42, title: "Sales Executive", description: "Drives sales and manages client relationships." },
//   { id: 43, title: "Real Estate Agent", description: "Helps clients buy and sell properties." },
//   { id: 44, title: "Fashion Designer", description: "Designs clothing and accessories." },
//   { id: 45, title: "Interior Designer", description: "Designs interior spaces for aesthetics and function." },
//   { id: 46, title: "Logistics Manager", description: "Manages supply chain and delivery operations." },
//   { id: 47, title: "Aviation Pilot", description: "Operates aircraft professionally." },
//   { id: 48, title: "Automobile Engineer", description: "Designs and improves vehicles and systems." },
//   { id: 49, title: "Environmental Scientist", description: "Studies environmental problems and solutions." },
//   { id: 50, title: "Research Scientist", description: "Conducts experiments and scientific investigations." }
// ];


const [data,setData]=useState([])

console.log(data);

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
},[])




    // pagenation try
  const itemsPerPage = 5;
const [currentPage, setCurrentPage] = useState(1);

const totalPages = Math.max(1, Math.ceil(data.length / itemsPerPage));

const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;

const currentItems = data.slice(startIndex, endIndex);







      
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
               <div className="flex  justify-end"><CareerAdminaddModal/></div>
             
              <TextInput type="search" placeholder="🔍search here...." />
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
                 {currentItems.map((user) => (
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
      </div>
    </>
  )
}

export default CareerFilelds




