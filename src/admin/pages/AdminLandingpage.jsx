import React from "react";
import Adminheader from "../components/Adminheader";
import { motion } from "framer-motion";

function AdminLandingpage() {
  return (
    <>
      <div className="flex sm:flex-row flex-col  ">
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
              <h1 className="text-2xl sm:text-4xl text-[#111418] font-bold leading-tight ">
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
                className="border-2  border-slate-300 rounded-2xl p-3 text-center w-50 h-30"
              >
                <p className="text-[#111418] font-medium">Total Users</p>
                <p className="font-bold text-[#111418] leading-tight m-2">
                  12,300
                </p>
                <span className="font-medium text-[17px] text-green-500 m-2">
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
                className="border-2  border-slate-300 rounded-2xl p-3 text-center w-50 h-30"
              >
                <p className="text-[#111418] font-medium">Active Users</p>
                <p className="font-bold text-[#111418] leading-tight m-2">
                  10,300
                </p>
                <span className="font-medium text-[17px] text-green-500 m-2">
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
                className="border-2  border-slate-300 rounded-2xl p-3 text-center w-50 h-30"
              >
                <p className="text-[#111418] font-medium">New Users</p>
                <p className="font-bold text-[#111418] leading-tight m-2">
                  300
                </p>
                <span className="font-medium text-[17px] text-green-500 m-2">
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
                className="border-2  border-slate-300 rounded-2xl p-3 text-center w-50 h-30"
              >
                <p className="text-[#111418] font-medium"> Users FeedBack</p>
                <p className="font-bold text-[#111418] leading-tight m-2">
                  250
                </p>
                <span className="font-medium text-[17px] text-green-500 m-2">
                  +2%
                </span>
              </motion.div>
            </div>
          </div>

          {/* user growth */}

          <div >
            {/* heading */}
            <div className="mb-5 ">
              <h1 className=" text-2xl sm:text-4xl text-[#111418] font-bold leading-tight ">
                User Growth
              </h1>
            </div>
            {/* grap */}
            <div className="w-full bg-white rounded-2xl p-5 shadow-2xl h-auto">
              {/* heading grap */}
              <div className="p-3">
                <p className="font-medium text-[#111418] leading-tight mb-2">
                  User Growth Over Time
                </p>
                <p className="text-[#111418] font-bold text-3xl mb-2">+15%</p>
                <p className="font-medium text-[#111418] leading-tight">
                  Last 30 Days <span className="text-green-500">+15%</span>
                </p>
              </div>
              {/* grap */}
              <div className="bg-gray-300 w-full h-50  rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLandingpage;
