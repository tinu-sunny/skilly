import React from "react";
import CompanySidebar from "../Components/CompanySidebar";
import { FaBagShopping } from "react-icons/fa6";
import { IoPersonAdd } from "react-icons/io5";
import { FaCalendarCheck } from "react-icons/fa";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import AppFooter from "../../components/AppFooter";

function CompayDashboard() {
  return (
    <>
      <div className="flex sm:flex-row flex-col  dark:bg-black ">
        {/* header */}
        <div className="w-80">
          {" "}
          <CompanySidebar />
        </div>

        {/*admin dashbord content  */}
        <div className="sm:mt-5 p-5 sm:p-0 w-full ">
          {/* heading  */}

          <div>
            <h1 className="text-[#11418] text-3xl font-bold leading-tight dark:text-white">
              Welcome Back <span>Companay name</span>
            </h1>
            <p className="text-slate-400 leading-tight font-semibold dark:text-white">
              Manage you job applcationa
            </p>
          </div>
          {/* 3 qucki books */}
          <div className="flex gap-5 mt-10 justify-evenly items-center flex-wrap">
            {/* total job posted */}
            <div className="bg-gray-50 p-5 rounded-4xl shadow-2xl flex flex-col gap-3 justify-center items-center border-2 border-gray-200 w-50 dark:bg-blue-500 dark:border-0 dark:text-white">
              {/* icon,heading,number */}
              <span>
                <FaBagShopping />
              </span>
              <h3>Total job posting</h3>
              <p>5</p>
            </div>
            {/*Active application  */}
            <div className="bg-gray-50 p-5 rounded-4xl shadow-2xl flex flex-col gap-3 justify-center items-center border-2 border-gray-200 dark:bg-blue-500 dark:border-0 dark:text-white">
              {/* icon,heading,number */}
              <span>
                <IoPersonAdd />
              </span>
              <h3>Total active appliccation </h3>
              <p>5</p>
            </div>

            {/* interview sheducled */}

            <div className="bg-gray-50 p-5 rounded-4xl shadow-2xl flex flex-col gap-3 justify-center items-center border-2 border-gray-200  dark:bg-blue-500 dark:border-0 dark:text-white">
              {/* icon,heading,number */}
              <span>
                <FaCalendarCheck />
              </span>
              <h3>Total interview sheduled </h3>
              <p>5</p>
            </div>
          </div>

          {/* recent Application */}

          <section className="sm:w-full lg:w-[90%]">
            <div className="border-2 border-gray-300 bg-gray-50 shadow-2xl rounded-2xl p-5  mt-10  dark:bg-gray-500 dark:border-0 dark:text-white">
              <div className="flex justify-between items-center">
                <p className="text-[#11418] font-bold leading-tight text-xl">
                  Recent Application
                </p>
                <Button outline className="dark:text-white">
                  view all
                </Button>
              </div>
              <hr className="mt-4 " />

              {/* view 5 application */}

              <div className="overflow-x-auto ">
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableHeadCell className="dark:text-white">
                        Name
                      </TableHeadCell>
                      <TableHeadCell className="dark:text-white">
                        Position
                      </TableHeadCell>
                      <TableHeadCell className="dark:text-white">
                        Applied Date
                      </TableHeadCell>
                      <TableHeadCell className="dark:text-white">
                        Status
                      </TableHeadCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    <TableRow>
                      <TableCell className="dark:text-white">Tinu</TableCell>
                      <TableCell className="dark:text-white">
                        Developer
                      </TableCell>
                      <TableCell className="dark:text-white">
                        20-01-2026
                      </TableCell>
                      <TableCell className="dark:text-white">
                        Under review
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="dark:text-white">Tinu</TableCell>
                      <TableCell className="dark:text-white">
                        Developer
                      </TableCell>
                      <TableCell className="dark:text-white">
                        20-01-2026
                      </TableCell>
                      <TableCell className="dark:text-white">
                        Under review
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="dark:text-white">Tinu</TableCell>
                      <TableCell className="dark:text-white">
                        Developer
                      </TableCell>
                      <TableCell className="dark:text-white">
                        20-01-2026
                      </TableCell>
                      <TableCell className="dark:text-white">
                        Under review
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="dark:text-white">Tinu</TableCell>
                      <TableCell className="dark:text-white">
                        Developer
                      </TableCell>
                      <TableCell className="dark:text-white">
                        20-01-2026
                      </TableCell>
                      <TableCell className="dark:text-white">
                        Under review
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="dark:text-white">Tinu</TableCell>
                      <TableCell className="dark:text-white">
                        Developer
                      </TableCell>
                      <TableCell className="dark:text-white">
                        20-01-2026
                      </TableCell>
                      <TableCell className="dark:text-white">
                        Under review
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* app footer */}
      <AppFooter />
    </>
  );
}

export default CompayDashboard;
