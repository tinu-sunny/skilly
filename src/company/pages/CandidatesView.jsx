import React, { useState } from "react";
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
} from "flowbite-react";

import { HiSearch } from "react-icons/hi";
import { FiFilter } from "react-icons/fi";
import AppFooter from "../../components/AppFooter";

function CandidatesView() {
  const data = [
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

          <div className="p-4">
            {/* TABLE */}
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
              <table className="w-full text-sm text-left text-gray-600 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-green-300 ">
                  <tr>
                    <th className="px-6 py-3">name</th>
                    <th className="px-6 py-3">role</th>
                    <th className="px-6 py-3">Email</th>
                    <th className="px-6 py-3">date</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">View Cv</th>
                  </tr>
                </thead>

                <tbody>
                  {currentItems.map((user) => (
                    <tr
                      key={user.id}
                      className="bg-white border-b hover:bg-gray-50 dark:bg-green-100"
                    >
                      <td className="px-6 py-4">{user.name}</td>
                      <td className="px-6 py-4 font-medium">{user.role}</td>
                      <td className="px-6 py-4">{user.email}</td>
                      <td className="px-6 py-4">{user.date}</td>
                      <td className="px-6 py-4">{user.status}</td>

                      <td className="px-6 py-4">
                        <Button outline>view</Button>
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
        </div>
      </div>
      {/* appfooter */}

      <AppFooter />
    </>
  );
}

export default CandidatesView;
