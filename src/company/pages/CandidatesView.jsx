import React, { useEffect, useState } from "react";
import CompanySidebar from "../Components/CompanySidebar";

import {
  Avatar,
  Badge,
  Button,
  Checkbox,
  Pagination,
  Table,
  TableHead,
  TableHeadCell,
  TableBody,
  TableRow,
  TableCell,
  TextInput,
  Dropdown,
  Tabs,
  TabItem,
} from "flowbite-react";

import { HiSearch } from "react-icons/hi";
import { FiFilter } from "react-icons/fi";
import AppFooter from "../../components/AppFooter";
import InterviewScheduleModal from "../Components/InterviewScheduleModal";

function CandidatesView() {
  const userdata = [
    {
      name: "Sarah Jenkins",
      email: "sarah.j@design.com",
      role: "Senior UI Designer",
      exp: "6 years",
      date: "Oct 12, 2023",
      status: "Shortlisted",
      color: "success",
    },
    {
      name: "Marcus Thorne",
      email: "m.thorne@corp.com",
      role: "Senior UI Designer",
      exp: "8 years",
      date: "Oct 09, 2023",
      status: "Rejected",
      color: "gray",
    },

    {
      name: "Marcus Thorne",
      email: "m.thorne@corp.com",
      role: "Senior UI Designer",
      exp: "8 years",
      date: "Oct 09, 2023",
      status: "Rejected",
      color: "gray",
    },
    {
      name: "Marcus Thorne",
      email: "m.thorne@corp.com",
      role: "Senior UI Designer",
      exp: "8 years",
      date: "Oct 09, 2023",
      status: "Rejected",
      color: "gray",
    },
    {
      name: "Marcus Thorne",
      email: "m.thorne@corp.com",
      role: "Senior UI Designer",
      exp: "8 years",
      date: "Oct 09, 2023",
      status: "Rejected",
      color: "gray",
    },
    {
      name: "Marcus Thorne",
      email: "m.thorne@corp.com",
      role: "Senior UI Designer",
      exp: "8 years",
      date: "Oct 09, 2023",
      status: "Rejected",
      color: "gray",
    },
    {
      name: "David Miller",
      email: "d.miller@tech.io",
      role: "Senior UI Designer",
      exp: "4 years",
      date: "Oct 14, 2023",
      status: "New",
      color: "info",
    },
    {
      name: "Elena Rodriguez",
      email: "elena.rod@web.com",
      role: "Senior UI Designer",
      exp: "5 years",
      date: "Oct 11, 2023",
      status: "Under Review",
      color: "warning",
    },
    {
      name: "Marcus Thorne",
      email: "m.thorne@corp.com",
      role: "Senior UI Designer",
      exp: "8 years",
      date: "Oct 09, 2023",
      status: "Rejected",
      color: "gray",
    },
  ];
  const tabs = ["New", "All", "Rejected"];
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems,SetCurrentItem]=useState([])
  const [totalPages ,SetTotalPages]=useState()

  const handleTabChange = (tab="New") => {
    console.log(tab);
   
    
const data = tab==="All"?userdata: userdata.filter(item => item.status==tab) 

    

  const itemsPerPage = 5; // change as needed

  const pages =
    data.length > 0 ? Math.ceil(data.length / itemsPerPage) : 0;
SetTotalPages(pages)
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const dataItems = data.slice(startIndex, endIndex);
  SetCurrentItem(dataItems)
  }
  
useEffect(()=>{
  handleTabChange()
},[currentPage])
  return (
    <>
      <div className=" flex sm:flex-row flex-col w-full dark:bg-black">
        {/* SIDEBAR */}
        <div className=" w-72">
          <CompanySidebar />
        </div>

        {/* MAIN CONTENT */}
        <div
          className="flex flex-col p-4 sm:p-6 w-full
          "
        >
          {/* PAGE HEADER */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800 leading-tight dark:text-white">
              Candidates
            </h1>
            <p className="text-xl font-medium text-gray-500 dark:text-white">
              Manage candidates
            </p>
          </div>

          {/* search bar */}

          <div>
            <div>
              <TextInput
                type="search"
                placeholder="search here .... 🔎"
              ></TextInput>
            </div>
            <div className="mt-5 flex sm:justify-center lg:justify-end items-center  gap-10">
              {/* sort */}
              <div className=" ">
                <select
                  name=""
                  id=""
                  className="bg-gray-300 border-0 rounded-2xl shadow-2xl p-2 dark:bg-blue-500 dark:text-white"
                >
                  <option value="">New</option>
                  <option value="">ongoing</option>
                  <option value="">Interview</option>
                  <option value="">rejected</option>
                </select>
              </div>
              <div>
                <Button>Export</Button>
              </div>
            </div>
          </div>

          {/* table and pagenation */}

              {/*implement pagenation  */}
                                  <div>
                                         <div className=' p-5   ' style={{ width: '100%' }}>
                      <Tabs aria-label="Candidates tabs" variant="default"   onActiveTabChange={(index) => handleTabChange(tabs[index])} >
                             {tabs.map((tab) => (
          <TabItem
            key={tab}
            title={tab}
             onClick={() => handleTabChange(tab)}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeadCell>Name</TableHeadCell>
                  <TableHeadCell>Role</TableHeadCell>
                  <TableHeadCell>Email</TableHeadCell>
                  <TableHeadCell>Date</TableHeadCell>
                  <TableHeadCell>Status</TableHeadCell>
                  <TableHeadCell>Action</TableHeadCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {currentItems.length > 0 ? (
                  currentItems.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.date}</TableCell>
                      <TableCell>{user.status}</TableCell>
                      <TableCell>
                        <InterviewScheduleModal />
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center">
                      No data found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
              {totalPages > 1 && (
              <div className="flex justify-center mt-5">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </div>
            )}
            </Table>

            
          </TabItem>

        ))}
        
        

                      </Tabs>
                    </div>
                                  </div>

          
        </div>
      </div>
      {/* appfooter */}

      <AppFooter />
    </>
  );
}

export default CandidatesView;
