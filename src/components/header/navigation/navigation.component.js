import React, { useState } from 'react';
import { Link, NavLink as RRNavLink } from 'react-router-dom';
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
    <Navbar light className='nav-wrapper' expand='sm'>
      <div className='container-fluid'>
        <NavbarBrand to='/' tag={RRNavLink}>
          <img src={logo} alt='logo' className='logo' />
        </NavbarBrand>
        {/* </div> */}
        <NavbarToggler onClick={toggleNav} className='nav-toggle'>
          <span className='navbar-toggler-icon'></span>
        </NavbarToggler>
        <Collapse navbar isOpen={isOpen} className='mb-3'>
          <div className='search flex-grow-1 d-none d-md-block'>
            <SearchBar />
          </div>
          <Nav navbar className='ml-0 ml-md-3 mr-auto'>
            <NavItem>
              <NavLink to='/' tag={RRNavLink}>
                Home
              </NavLink>
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
              <Link to='/signup'>
                <Button className='btn-success mt-3 mt-sm-0'>Join</Button>
              </Link>
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
