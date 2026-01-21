
import React, { useEffect, useState } from "react";
import Adminheader from "../components/Adminheader";
import { motion } from "framer-motion";
import { Card, TabItem, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, Tabs, TextInput } from "flowbite-react";
import { feedbackadminview } from "../../services/allAPIs";
import { serverURL } from "../../services/serverURL";

function FeedbackManagement() {

  const [feedbackdata,setFeedbackdata]=useState([])
    const[keyword,setKeyword]=useState('')
    const[sortData,setSortData]=useState([])
    const getfeedback = async()=>{
      const response = await feedbackadminview()
      console.log(response);
      if(response.status==200){
        setFeedbackdata(response.data.feedbackdata)
      }
      else{
        alert('err,try after some time')
      }
      
    }

    useEffect(()=>{
      getfeedback()
    },[])


     const search =()=>{
      if(keyword){
          const search = keyword.trim().toLowerCase()
           const fliterdata = feedbackdata.filter(item=>item.usertype.toLowerCase().includes(search)||item.email.toLowerCase().includes(search))
       setSortData(fliterdata)
          }
      else{
   setSortData(feedbackdata)
      }
     }

     useEffect(()=>{
      search();
     },[keyword,feedbackdata])
  return (
      <>
      <div className="flex sm:flex-row flex-col dark:bg-black    " style={{height:"100vh"}}>
        {/* header */}
        <div className="">
          {" "}
          <Adminheader />
        </div>

        {/*feedback management  */}
        <div className=" p-5 w-full  dark:bg-black ">
        {/* heading */}
             <div className='sm:text-start text-center'>
          <h1 className="text-[#111418] font-bold text-2xl sm:text-[30px] md:text-4xl leading-tight dark:text-white">
  Feedback
</h1>

            <p className='text-slate-500 font-medium leading-tight m-2 dark:text-white'>Manage and respond to user feedback</p>
            </div>

                     {/* search bar and sort menu */}
                        
        
              {/* search bar */}
              <div className="mt-5" >
            <TextInput type='search' placeholder='🔍Search Here..'onChange={(e)=>{setKeyword(e.target.value)}}></TextInput>
              </div>


                        {/*implement pagenation  */}
                        <div>
                               <div className=' p-5   ' style={{ width: '100%'}}>
            <Tabs aria-label="Default tabs" variant="default">
              <TabItem active title="General-Comments" >
                       <div className="overflow-x-auto overflow-y-auto h-130">
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell> Email</TableHeadCell>
            {/* <TableHeadCell>feedbacktype</TableHeadCell> */}
            <TableHeadCell>Type</TableHeadCell>
            <TableHeadCell>rating</TableHeadCell>
            <TableHeadCell>message</TableHeadCell>
            <TableHeadCell>
              <span className="sr-only">Edit</span>
            </TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className="divide-y">
        { sortData && sortData.length > 0 ? sortData.filter(item=>item.feedbacktype=='general comments').map(item => ( <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {item.email}
            </TableCell>
            {/* <TableCell>{item.feedbacktype}</TableCell> */}
            <TableCell>{item.usertype}</TableCell>
            <TableCell>{item.rating}</TableCell>
            <TableCell>{item.message}</TableCell>
            <TableCell>
              <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                Reply
              </a>
            </TableCell>
          </TableRow>)):<h1>data not found</h1>}
         
        </TableBody>
      </Table>
    </div>
              </TabItem>
              <TabItem title="Feature request "  >
                       <div className="overflow-x-auto overflow-y-auto h-130">
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Usertype</TableHeadCell>
            <TableHeadCell>Email</TableHeadCell>
            <TableHeadCell>Message</TableHeadCell>
            <TableHeadCell>Action</TableHeadCell>
         
          </TableRow>
        </TableHead>
        <TableBody className="divide-y">
        { sortData && sortData.length > 0 ?sortData.filter(item=>item.feedbacktype=='feature request').map(item => ( <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {item.usertype}
            </TableCell>
            {/* <TableCell>{item.feedbacktype}</TableCell> */}
            {/* <TableCell>{item.usertype}</TableCell> */}
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.message}</TableCell>
            <TableCell>
              <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                Reply
              </a>
            </TableCell>
          </TableRow>)):<h1>data not found</h1>}
        </TableBody>
      </Table>
    </div>
              </TabItem>

               <TabItem title="Bug report "  >
                  <div className="overflow-x-auto overflow-y-auto h-130">
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Email </TableHeadCell>
            {/* <TableHeadCell></TableHeadCell> */}
            {/* <TableHeadCell>Category</TableHeadCell> */}
            <TableHeadCell>Message</TableHeadCell>
            <TableHeadCell>image</TableHeadCell>
            <TableHeadCell>
              <span className="sr-only">Edit</span>
            </TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className="divide-y">
          { sortData && sortData.length > 0 ? sortData.filter(item=>item.feedbacktype=='bug report').map(item => ( <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {item.email}
            </TableCell>
            {/* <TableCell>{item.feedbacktype}</TableCell> */}
            {/* <TableCell>{item.usertype}</TableCell> */}
            {/* <TableCell>{item.rating}</TableCell> */}
            <TableCell>{item.message}</TableCell>
            <TableCell><motion.img initial={{ opacity: 1, scale: 1 }}
                    whileHover={{ opacity: 1, scale: 8 }}
                    transition={{ duration: 0.7 }} src={`${serverURL}/uploads/${item.uploadImg}`} alt="bug-sreenshot" srcset="" className="h-20  w-20" /></TableCell>
            <TableCell>
              <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                Reply
              </a>
            </TableCell>
          </TableRow>)):<h1>data not found</h1>}
        </TableBody>
      </Table>
    </div>
                 
              
              </TabItem>

            </Tabs>
          </div>
                        </div>


        </div>
      </div>
    </>
  )
}

export default FeedbackManagement


