import React, { useState } from 'react';
import SearchBar from '../search/search.component';
import logo from '../../../assets/images/naijafotos-logo.png';
import avatar from '../../../assets/images/avatar.jpg';
import './navigation.styles.scss';
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavLink,
  NavItem,
  Button,
  NavbarToggler,
  Collapse,
} from 'reactstrap';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);
  return (
    <Navbar className='nav-wrapper' expand='sm'>
      <div className='container-fluid'>
        {/* <div className='logo-wrapper'> */}
        <NavbarBrand>
          <img src={logo} alt='logo' className='logo' />
        </NavbarBrand>
        {/* </div> */}
        <NavbarToggler onClick={toggleNav} />
        <Collapse navbar isOpen={isOpen}>
          <div className='search flex-grow-1 d-none d-md-block'>
            <SearchBar />
          </div>
          <Nav navbar className='ml-0 ml-md-3 mr-auto'>
            <NavItem>
              <NavLink href='#a'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#b'>Collections</NavLink>
            </NavItem>
          </Nav>
          <Nav className='profile' navbar>
            <NavItem>
              <Button outline className='mt-1 mt-sm-0'>
                Upload
              </Button>
            </NavItem>
            <NavItem>
              <Button className='btn-success mt-3 mt-sm-0'>Join</Button>
            </NavItem>

            {/* <div className='profile-image'> */}
            <img src={avatar} alt='' className='avatar rounded-circle' />
            {/* </div> */}
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
}

export default Navigation;
