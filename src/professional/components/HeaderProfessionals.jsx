import { Avatar, Dropdown, DropdownDivider, DropdownHeader, DropdownItem, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

function headerProfessionals() {
  return (
    <>
    <Navbar className=' shadow-xl rounded-2xl'>

        <NavbarBrand>
            <img src="https://image.similarpng.com/file/similarpng/very-thumbnail/2021/05/Logo-design-illustration-on-transparent-background-PNG.png" className="mr-3 h-6 sm:h-9" alt="log" />
            <span>Skilly</span>
        </NavbarBrand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <DropdownHeader>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </DropdownHeader>
        <Link to='/professional-profile'>  <DropdownItem>Dashboard</DropdownItem></Link>
         
          <DropdownDivider />
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
      </div>

    </Navbar>
    </>
  )
}

export default headerProfessionals