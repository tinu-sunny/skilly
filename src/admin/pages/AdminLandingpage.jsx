import React, { useEffect, useState } from "react";
import Adminheader from "../components/Adminheader";
import { motion } from "framer-motion";
import { feedbackadminview, users } from "../../services/allAPIs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Link } from "react-router-dom";
function AdminLandingpage() {
  const [user,setUsers]=useState([])
  const [feedbackcound,setfeedbackcound]=useState([])
const activeUsers = user.filter(user => user.status === true).length;
const inactiveUsers = user.filter(user => user.status === false).length;
const userData = [
  { name: "Active Users", count: activeUsers },
  { name: "Inactive Users", count: inactiveUsers },
];

const COLORS = ["#2563eb","#22c55e", "#f97316","#ef4444", "#a855f7"];

const Student = user.filter(user => user.role === 'student').length;
const Working = user.filter(user => user.role === 'working').length;
const Company = user.filter(user => user.role === 'company').length;
const counsellor = user.filter(user => user.role === 'counsellor').length;
const institution = user.filter(user => user.role === 'institution').length;

const roleData = [
  { name: "Student", value: Student },
  { name: "Working", value: Working },
  { name: "Company", value: Company },
  { name: "counsellor", value: counsellor },
  { name: "institution", value: institution },
];
  const data = async()=>{

    const response =await users()
    const response2=await feedbackadminview()
    console.log(response2);
    
    console.log(response);
    if(response.status==200 && response2.status==200){
      setUsers(response.data.userData)
      setfeedbackcound(response2.data.feedbackdata)
    }
    
  }

  useEffect(()=>{
    data()
  },[])
     


  return (
    <>
      <div className="flex sm:flex-row flex-col dark:bg-black ">
        {/* header */}
        <div className="w-80 h-200px">
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
                Dashboard
              </h1>
            </div>

            <div className=" gap-3 flex-col sm:gap-8 sm:flex-row sm:px-28 sm:py-5 flex items-center justify-center ">
              {/* total users */}
       <Link to={'/admin-user-management'}>
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
                  }}
                  transition={{ duration: 0.5 }}
                  className="border-2  border-slate-300 rounded-2xl p-3 text-center w-50 h-30 dark:bg-blue-500 dark:border-0"
                >
                  <p className="text-[#111418] font-medium dark:text-white">Total Users</p>
                  <p className="font-bold text-[#111418] leading-tight m-2 dark:text-white">
                   {user?user.length+1:'0'}
                  </p>
             
                </motion.div>
       </Link>

              {/* Active users */}
          <Link to={'/admin-user-management'}>
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
                  }}
                  transition={{ duration: 0.5 }}
                  className="border-2  border-slate-300 rounded-2xl p-3 text-center w-50 h-30 dark:bg-blue-500 dark:border-0"
                >
                  <p className="text-[#111418] font-medium dark:text-white">Active Users</p>
                  <p className="font-bold text-[#111418] leading-tight m-2 dark:text-white">
             
                   {user ? user.filter(item => item.status === true).length : 0}
                  </p>
                
                </motion.div>
          </Link>

              {/* inactive user users */}
         <Link to={'/admin-user-management'}>
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
                  }}
                  transition={{ duration: 0.5 }}
                  className="border-2  border-slate-300 rounded-2xl p-3 text-center w-50 h-30 dark:bg-blue-500 dark:border-0"
                >
                  <p className="text-[#111418] font-medium dark:text-white">Inactive Users</p>
                  <p className="font-bold text-[#111418] leading-tight m-2 dark:text-white">
                   {user ? user.filter(item => item.status === false).length : 0}
                  </p>
               
                </motion.div>
         </Link>

              {/*Feedback  */}
             <Link to={'/admin-feedback-management'}>
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
                  }}
                  transition={{ duration: 0.5 }}
                  className="border-2  border-slate-300 rounded-2xl p-3 text-center w-50 h-30 dark:bg-blue-500 dark:border-0"
                >
                  <p className="text-[#111418] font-medium dark:text-white"> Users FeedBack</p>
                  <p className="font-bold text-[#111418] leading-tight m-2 dark:text-white">
                    {feedbackcound ? feedbackcound.length : 0}
                  </p>
               
                </motion.div>
             </Link>
            </div>
          </div>

          {/* user growth */}

          <div >
            {/* heading */}
            <div className="mb-5 ">
              <h1 className=" text-2xl sm:text-4xl text-[#111418] font-bold leading-tight dark:text-white">
                User Growth
              </h1>
            </div>
            {/* grap */}
            <div className="w-full bg-white rounded-2xl p-5 shadow-2xl h-auto dark:bg-blue-500 ">
              {/* heading grap */}
              <div className="p-3">
                <p className="font-medium text-[#111418] leading-tight mb-2 dark:text-white">
                  User Growth Over Time
                </p>
              
               
              </div>
              {/* grap */}
              <div className="bg-gray-300 w-full   rounded-2xl dark:bg-green-200 h-auto p-5   flex flex-col">    
               <div>
                <h1 className="text-[#111418] leading-tight font-bold text-2xl mb-5">Active and inactive users </h1>

                  <ResponsiveContainer width="100%" height={300}>
        <BarChart data={userData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#22c55e" />
        </BarChart>
      </ResponsiveContainer>
               </div>
               <div className="flex justify-center items-center mt-6 flex-col">
                <h1 className="text-[#111418] leading-tight font-bold text-2xl">Users chart with user type</h1>
                <PieChart width={300} height={300}>
      <Pie
        data={roleData}
        cx="50%"
        cy="50%"
        outerRadius={100}
        dataKey="value"
      >
        {roleData.map((_, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart></div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLandingpage;
