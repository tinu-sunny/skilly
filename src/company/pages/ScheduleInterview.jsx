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
function ScheduleInterview() {
  const tabs = ["All", "New", "Shortlisted", "Under Review", "Rejected"];

  const data = [
  {
    id: 1,
    candidateName: "Rahul Sharma",
    position: "Frontend Developer",
    interviewDate: "2026-01-15",
    interviewTime: "10:30 AM",
    mode: "Online",
    meetingLink: "https://meet.google.com/abc1",
    status: "Scheduled"
  },
  {
    id: 2,
    candidateName: "Anjali Das",
    position: "Backend Developer",
    interviewDate: "2026-01-16",
    interviewTime: "02:00 PM",
    mode: "Offline",
    location: "Office – Kochi",
    status: "Rescheduled"
  },
  {
    id: 3,
    candidateName: "Arjun Kumar",
    position: "MERN Developer",
    interviewDate: "2026-01-17",
    interviewTime: "11:00 AM",
    mode: "Online",
    meetingLink: "https://meet.google.com/abc3",
    status: "Completed"
  },
  {
    id: 4,
    candidateName: "Sneha Patel",
    position: "UI/UX Designer",
    interviewDate: "2026-01-18",
    interviewTime: "01:00 PM",
    mode: "Offline",
    location: "Office – Bangalore",
    status: "Scheduled"
  },
  {
    id: 5,
    candidateName: "Vikram Singh",
    position: "DevOps Engineer",
    interviewDate: "2026-01-19",
    interviewTime: "03:30 PM",
    mode: "Online",
    meetingLink: "https://meet.google.com/abc5",
    status: "Rejected"
  },
  {
    id: 6,
    candidateName: "Meera Nair",
    position: "QA Engineer",
    interviewDate: "2026-01-20",
    interviewTime: "10:00 AM",
    mode: "Offline",
    location: "Office – Trivandrum",
    status: "Scheduled"
  },
  {
    id: 7,
    candidateName: "Amit Verma",
    position: "Data Analyst",
    interviewDate: "2026-01-21",
    interviewTime: "12:00 PM",
    mode: "Online",
    meetingLink: "https://meet.google.com/abc7",
    status: "Completed"
  },
  {
    id: 8,
    candidateName: "Neha Gupta",
    position: "HR Executive",
    interviewDate: "2026-01-22",
    interviewTime: "04:00 PM",
    mode: "Offline",
    location: "Office – Delhi",
    status: "Cancelled"
  },
  {
    id: 9,
    candidateName: "Rohit Menon",
    position: "Product Manager",
    interviewDate: "2026-01-23",
    interviewTime: "11:30 AM",
    mode: "Online",
    meetingLink: "https://meet.google.com/abc9",
    status: "Scheduled"
  },
  {
    id: 10,
    candidateName: "Pooja Iyer",
    position: "Business Analyst",
    interviewDate: "2026-01-24",
    interviewTime: "02:30 PM",
    mode: "Offline",
    location: "Office – Chennai",
    status: "Completed"
  },
  {
    id: 11,
    candidateName: "Karthik R",
    position: "Mobile App Developer",
    interviewDate: "2026-01-25",
    interviewTime: "09:30 AM",
    mode: "Online",
    meetingLink: "https://meet.google.com/abc11",
    status: "Scheduled"
  },
  {
    id: 12,
    candidateName: "Divya Mohan",
    position: "Content Writer",
    interviewDate: "2026-01-26",
    interviewTime: "01:30 PM",
    mode: "Offline",
    location: "Office – Kochi",
    status: "Rejected"
  },
  {
    id: 13,
    candidateName: "Suresh Babu",
    position: "System Administrator",
    interviewDate: "2026-01-27",
    interviewTime: "03:00 PM",
    mode: "Online",
    meetingLink: "https://meet.google.com/abc13",
    status: "Rescheduled"
  },
  {
    id: 14,
    candidateName: "Lakshmi Priya",
    position: "Cloud Engineer",
    interviewDate: "2026-01-28",
    interviewTime: "10:45 AM",
    mode: "Offline",
    location: "Office – Hyderabad",
    status: "Scheduled"
  },
  {
    id: 15,
    candidateName: "Nikhil Jain",
    position: "Cyber Security Analyst",
    interviewDate: "2026-01-29",
    interviewTime: "12:15 PM",
    mode: "Online",
    meetingLink: "https://meet.google.com/abc15",
    status: "Completed"
  },
  {
    id: 16,
    candidateName: "Ayesha Khan",
    position: "Digital Marketer",
    interviewDate: "2026-01-30",
    interviewTime: "04:30 PM",
    mode: "Offline",
    location: "Office – Mumbai",
    status: "Scheduled"
  },
  {
    id: 17,
    candidateName: "Manoj Pillai",
    position: "Support Engineer",
    interviewDate: "2026-01-31",
    interviewTime: "11:00 AM",
    mode: "Online",
    meetingLink: "https://meet.google.com/abc17",
    status: "Cancelled"
  },
  {
    id: 18,
    candidateName: "Ritika Sen",
    position: "Technical Recruiter",
    interviewDate: "2026-02-01",
    interviewTime: "02:45 PM",
    mode: "Offline",
    location: "Office – Kolkata",
    status: "Rescheduled"
  },
  {
    id: 19,
    candidateName: "Abhishek Paul",
    position: "AI Engineer",
    interviewDate: "2026-02-02",
    interviewTime: "10:15 AM",
    mode: "Online",
    meetingLink: "https://meet.google.com/abc19",
    status: "Scheduled"
  },
  {
    id: 20,
    candidateName: "Swathi R",
    position: "Software Tester",
    interviewDate: "2026-02-03",
    interviewTime: "03:15 PM",
    mode: "Offline",
    location: "Office – Coimbatore",
    status: "Completed"
  }
];

     // pagenation try
      const itemsPerPage = 6; // change as needed
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
          </div>

          {/* table and pagenation */}

          {/*implement pagenation  */}
          <div>
            <div className=" p-5   " style={{ width: "100%" }}>
              <div className="flex justify-end mb-5">
                <Button>Export</Button>
              </div>
              
                  <TabItem>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableHeadCell>Name</TableHeadCell>
                          <TableHeadCell>Role</TableHeadCell>
                          <TableHeadCell>mode</TableHeadCell>
                          <TableHeadCell>Date & Time</TableHeadCell>
                          <TableHeadCell>Status</TableHeadCell>
                          <TableHeadCell>Action</TableHeadCell>
                          <TableHeadCell></TableHeadCell>
                        </TableRow>
                      </TableHead>

                      <TableBody>
                        {currentItems.length > 0 ? (
                          currentItems.map((user) => (
                            <TableRow key={user.id}>
                              <TableCell>{user.candidateName}</TableCell>
                              <TableCell>{user.position}</TableCell>
                              <TableCell>{user.mode}</TableCell>
                              <TableCell>{user.interviewDate}<br/>{user.interviewTime}</TableCell>
                              <TableCell>{user.status}</TableCell>
                              <TableCell>
                                <Button>Edit</Button>
                              </TableCell>

                              <TableCell>
                                <Button className="bg-red-800">Delete</Button>
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
                    </Table>

                    {totalPages > 1 && (
                      <div className="flex justify-center mt-5">
                        <Pagination
                          currentPage={currentPage}
                          totalPages={totalPages}
                          onPageChange={setCurrentPage}
                        />
                      </div>
                    )}
                  </TabItem>
               
            </div>
          </div>
        </div>
      </div>
      {/* appfooter */}

      <AppFooter />
    </>
  )
}

export default ScheduleInterview