import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from 'flowbite-react';
import { div } from 'framer-motion/client';
import React, { useEffect, useState } from 'react'
import { HiArrowSmLeft, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { Link } from 'react-router-dom';

function StudentHeader() {

    const [isMobile,setIsMobile]=useState(false);
  const [open, setOpen] = useState(false);

    const checkScreen =()=>{
        if(window.innerWidth<768){
            setIsMobile(true);
        }
        else{
            setIsMobile(false)
        }
    }

    useEffect(()=>{
        checkScreen();
        window.addEventListener("resize",checkScreen);
        return()=>window.removeEventListener("resize",checkScreen)
    },[])

    const SidebarContent = () => (
        <Sidebar
          aria-label="Sidebar Navigation"
          style={{ backgroundColor: "white", width: "200px", height: "100vh" }}
        >
          <SidebarItems>
            <SidebarItemGroup>
            { isMobile?<SidebarItem className="text-end  text-red-700 font-bold text-2xl" onClick={()=>setOpen(false)}> <button>×</button></SidebarItem>:''}
              <SidebarItem as={Link} to="/student-landing-page" icon={HiChartPie}>
                Dashboard
              </SidebarItem>
    
              <SidebarItem as={Link} to="/admin-user-management" icon={HiUser}>
             User
              </SidebarItem>
    
              <SidebarItem as={Link} to="/admin-feedback-management" icon={HiInbox}>FeedBack</SidebarItem>
              <SidebarItem as={Link} to="/admin-courses-workshop-management" icon={HiTable}>Courses</SidebarItem>
              <SidebarItem as={Link} to="/admin-careerFields-management" icon={HiViewBoards}>Career Fields</SidebarItem>
    
              <SidebarItem as={Link} to="/admin-promotion-management" icon={HiShoppingBag}>Promotions</SidebarItem>
            
            </SidebarItemGroup>
    
            <SidebarItemGroup className="sm:mt-90  mt-60">
                <SidebarItem as={Link} to="/" icon={HiArrowSmLeft}>Sign Out</SidebarItem>
              {/* <SidebarItem icon={HiChartPie}>Upgrade to Pro</SidebarItem>
              <SidebarItem icon={BiBuoy}>Help</SidebarItem> */}
    
             
            </SidebarItemGroup>
          </SidebarItems>
        </Sidebar>
      );
  return (
    <>
 {/* desktop */}

 {!isMobile && <SidebarContent/>}

 {/* mobile view icon */}

 {isMobile&& !open&&(
        <button
          onClick={() => setOpen(true)}
          className="text-heading bg-transparent border border-transparent hover:bg-neutral-secondary-medium 
                     focus:ring-4 focus:ring-neutral-tertiary rounded-base ms-3 mt-3 text-sm p-2 
                     inline-flex sm:hidden"
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M5 7h14M5 12h14M5 17h10"
            />
          </svg>
        </button>
 )}

 {/* moble view */}

 {isMobile && open &&(
    <div className='fixed inset-0 bg-transparent flex items-start justify-start z-50'>
        <SidebarContent/>
    </div>
 )}


    </>
  )
}

export default StudentHeader