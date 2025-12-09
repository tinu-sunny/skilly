import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { tr } from "framer-motion/m";
import { useEffect, useState } from "react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";


function Adminheader() {
  const [size ,setSize]=useState(false)
  const [open ,setOpen]=useState(false)

const screensize = ()=>{
 const screenWidth =window.innerWidth
// console.log(screenWidth);
if(screenWidth >320){
  console.log('flase');
  setSize(false)
  setOpen(false)
  
}
else{
  console.log('true');
  setSize(true)
  
}

}

useEffect(()=>{
  window.addEventListener('resize',screensize)
    return () => window.removeEventListener("resize", screensize);
},[])

// setInterval(screensize,1000)



  return (
    
    <>
    
{ !size ?<div className="h-auto">
   <Sidebar aria-label="Sidebar with content separator example " >
      
        <SidebarItems >
          <SidebarItemGroup >
            <SidebarItem href="#" icon={HiChartPie}>
              Dashboard
            </SidebarItem>
            <SidebarItem href="#" icon={HiViewBoards}>
              Kanban
            </SidebarItem>
            <SidebarItem href="#" icon={HiInbox}>
              Inbox
            </SidebarItem>
            <SidebarItem href="#" icon={HiUser}>
              Users
            </SidebarItem>
            <SidebarItem href="#" icon={HiShoppingBag}>
              Products
            </SidebarItem>
            <SidebarItem href="#" icon={HiArrowSmRight}>
              Sign In
            </SidebarItem>
            <SidebarItem href="#" icon={HiTable}>
              Sign Up
            </SidebarItem>
          </SidebarItemGroup>
          <SidebarItemGroup>
            <SidebarItem href="#" icon={HiChartPie}>
              Upgrade to Pro
            </SidebarItem>
            <SidebarItem href="#" icon={HiViewBoards}>
              Documentation
            </SidebarItem>
            <SidebarItem href="#" icon={BiBuoy}>
              Help
            </SidebarItem>
          </SidebarItemGroup>
        </SidebarItems>
      </Sidebar>
  
 </div>:   <button  onClick={()=>setOpen(true)} data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="text-heading bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-base ms-3 mt-3 text-sm p-2 focus:outline-none inline-flex sm:hidden">
   <span className="sr-only">Open sidebar</span>
   <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10"/>
   </svg>
</button>}


 <div>

  {open && (
        <div className="fixed inset-0 bg-black/50 flex items-start justify-start">
         
           <Sidebar aria-label="Sidebar with content separator example">
      
        <SidebarItems>
          <SidebarItemGroup>
            <SidebarItem href="#" icon={HiChartPie}>
              Dashboard
            </SidebarItem>
            <SidebarItem href="#" icon={HiViewBoards}>
              Kanban
            </SidebarItem>
            <SidebarItem href="#" icon={HiInbox}>
              Inbox
            </SidebarItem>
            <SidebarItem href="#" icon={HiUser}>
              Users
            </SidebarItem>
            <SidebarItem href="#" icon={HiShoppingBag}>
              Products
            </SidebarItem>
            <SidebarItem href="#" icon={HiArrowSmRight}>
              Sign In
            </SidebarItem>
            <SidebarItem href="#" icon={HiTable}>
              Sign Up
            </SidebarItem>
          </SidebarItemGroup>
          <SidebarItemGroup>
            <SidebarItem href="#" icon={HiChartPie}>
              Upgrade to Pro
            </SidebarItem>
            <SidebarItem href="#" icon={HiViewBoards}>
              Documentation
            </SidebarItem>
            <SidebarItem href="#" icon={BiBuoy}>
              Help
            </SidebarItem>
          </SidebarItemGroup>
        </SidebarItems>
        <button
              onClick={() => setOpen(false)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
      </Sidebar>
  
            
          </div>
       
      )}
 </div>
    </>
  )
}

export default Adminheader