 import { Button,
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import { useEffect, useState } from "react";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmLeft,
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { IoBag, IoPeople } from "react-icons/io5";
import { Link } from "react-router-dom";

function CompanySidebar() {
    const [isMobile, setIsMobile] = useState(false);
      const [open, setOpen] = useState(false);
    
      const checkScreen = () => {
        if (window.innerWidth < 768) {
          setIsMobile(true);
          setOpen(false);
        } else {
          setIsMobile(false);
        }
      };
    
      useEffect(() => {
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
      }, []);
    
      const SidebarContent = () => (
        <Sidebar
          aria-label="Sidebar Navigation"
          style={{ backgroundColor: "white", width: "200px", height: "100vh" }}
        >
          <SidebarItems>
            <SidebarItemGroup>
            { isMobile?<SidebarItem className="text-end  text-red-700 font-bold text-2xl" onClick={()=>setOpen(false)}> <button>×</button></SidebarItem>:''}
              <SidebarItem as={Link} to="/company-dashboard" icon={HiChartPie}>
                Dashboard
              </SidebarItem>
              <SidebarItem as={Link} to="/" icon={IoBag}>Jobs</SidebarItem>
    
              <SidebarItem as={Link} to="/" icon={IoPeople}>
             Candidates
              </SidebarItem>
              <SidebarItem as={Link} to="/" icon={IoBag}> Schedule Interview</SidebarItem>
    
              {/* <SidebarItem as={Link} to="/" icon={HiTable}>Jobs</SidebarItem>
              <SidebarItem as={Link} to="/" icon={HiViewBoards}>Career Fields</SidebarItem>
    
              <SidebarItem as={Link} to="/" icon={HiShoppingBag}>Promotions</SidebarItem> */}
            
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
      {/* MOBILE HAMBURGER BUTTON */}
      {isMobile && !open && (
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

      {/* DESKTOP/TABLET SIDEBAR */}
      {!isMobile && <SidebarContent />}

      {/* MOBILE SLIDE SIDEBAR */}
      {isMobile && open && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-30 flex items-start justify-start z-50">
          <SidebarContent />
        </div>
      )}
    </>
  )
}

export default CompanySidebar