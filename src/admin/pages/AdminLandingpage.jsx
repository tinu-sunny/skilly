import React from "react";
import Adminheader from "../components/Adminheader";
import { motion } from "framer-motion";

function AdminLandingpage() {

     


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
                Dashboard
              </h1>
            </div>

            <div className=" gap-3 flex-col sm:gap-8 sm:flex-row sm:px-28 sm:py-5 flex items-center justify-center ">
              {/* total users */}
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
                  12,300
                </p>
                <span className="font-medium text-[17px] text-green-500 m-2 dark:text-black">
                  +12%
                </span>
              </motion.div>

              {/* Active users */}
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
                  10,300
                </p>
                <span className="font-medium text-[17px] text-green-500 m-2 dark:text-black">
                  +8%
                </span>
              </motion.div>

              {/* new users */}
              <motion.div
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
                }}
                transition={{ duration: 0.5 }}
                className="border-2  border-slate-300 rounded-2xl p-3 text-center w-50 h-30 dark:bg-blue-500 dark:border-0"
              >
                <p className="text-[#111418] font-medium dark:text-white">New Users</p>
                <p className="font-bold text-[#111418] leading-tight m-2 dark:text-white">
                  300
                </p>
                <span className="font-medium text-[17px] text-green-500 m-2 dark:text-black">
                  +5%
                </span>
              </motion.div>

              {/*Feedback  */}
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
                  250
                </p>
                <span className="font-medium text-[17px] text-green-500 m-2 dark:text-black">
                  +2%
                </span>
              </motion.div>
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
                <p className="text-[#111418] font-bold text-3xl mb-2 dark:text-white">+15%</p>
                <p className="font-medium text-[#111418] leading-tight dark:text-white">
                  Last 30 Days <span className="text-green-500 dark:text-black">+15%</span>
                </p>
              </div>
              {/* grap */}
              <div className="bg-gray-300 w-full h-50  rounded-2xl dark:bg-green-200 "></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLandingpage;
