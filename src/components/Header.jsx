import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { useState } from "react";
import {  NavLink } from "react-router-dom";
import Auth from "./Auth";

function Header() {
 const [open, setOpen] = useState(false);

    
    

  return (
  <>
   <Navbar fluid rounded className="shadow-lg dark:bg-black dark:text-slate-500">
      <NavbarBrand href="#">
        <img src="https://image.similarpng.com/file/similarpng/very-thumbnail/2021/05/Logo-design-illustration-on-transparent-background-PNG.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold ">Skilly</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        {/* <Button className="cursor-pointer sm:p-4  p-1 text-sm">Get started</Button> */}
        <Auth />
        <NavbarToggle />
      </div>
      <NavbarCollapse>
     <NavLink 
  to="/" className={({ isActive }) =>
    isActive ? "text-blue-500 font-bold" : ""}>
  Home
</NavLink>

<NavLink 
  to="/about" className={({ isActive }) =>
  isActive ? "text-blue-500 font-bold" : ""}>
  About
</NavLink>

<NavLink 
  to="/services" className={({ isActive }) =>
isActive ? "text-blue-500 font-bold" : ""}>
  Services
</NavLink>

<NavLink 
  to="/contact"className={({ isActive }) =>
    isActive ? "text-blue-500 font-bold" : ""}>
  Contact
</NavLink>

      </NavbarCollapse>
    </Navbar>
  </>
  )
}

export default Header