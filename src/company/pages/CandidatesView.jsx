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
  const tabs = ["All", "New", "Shortlisted", "Under Review", "Rejected"];
  const [data, SetData] = useState([]);
  const userview = (value) => {
    let sortdata;
    console.log(value);
    switch (value) {
      case 0:
        sortdata = userdata;
        SetData(sortdata);
        break;
      case 1:
        sortdata = userdata.filter((item) => item.status == "New");
        SetData(sortdata);

        break;

      case 2:
        sortdata = userdata.filter((item) => item.status == "Shortlisted");
        SetData(sortdata);
        break;

      case 3:
        sortdata = userdata.filter((item) => item.status == "Under Review");
        SetData(sortdata);
        break;

      case 4:
        sortdata = userdata.filter((item) => item.status == "Rejected");
        SetData(sortdata);
        break;
      default:
        SetData([]);
        break;
    }
    // const sortdata = value=="0"?userdata: userdata.filter(item => item.status=="New" && value==1)
    // SetData(sortdata)
  };

  useEffect(() => {
    userview(0);
  }, []);

  // pagenation try
  const itemsPerPage = 5; // change as needed
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
              <div className="flex justify-end mb-[-20px]">
                <Button>Export</Button>
              </div>
              <Tabs
                aria-label="Candidates tabs"
                variant="default"
                onActiveTabChange={(e) => userview(e)}
              >
                {tabs.map((tab) => (
                  <TabItem key={tab} title={tab}>
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
