// import React from 'react';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import logoImage from '../images/logo.png';
const Header = () => {
    return (
        <Navbar fluid rounded>
          <Navbar.Brand href="https://flowbite-react.com">
            <img src={logoImage}  className="mr-3 h-6 sm:h-9" alt="" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">University of Chittagong</span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">name@flowbite.com</span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link href="#">
              Home
            </Navbar.Link>
            <Navbar.Link href="/login" active>Login/Register</Navbar.Link>
            <Navbar.Link href="/instructions">Insturctions</Navbar.Link>
            <Navbar.Link href="/notices">Notices</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      );
}

export default Header;