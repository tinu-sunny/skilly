import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {


    
    

  return (
  <>
   <Navbar fluid rounded className="shadow-lg">
      <NavbarBrand href="#">
        <img src="https://image.similarpng.com/file/similarpng/very-thumbnail/2021/05/Logo-design-illustration-on-transparent-background-PNG.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Skilly</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button className="cursor-pointer sm:p-4  p-1 text-sm">Get started</Button>
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