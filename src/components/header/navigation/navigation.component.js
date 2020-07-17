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
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap';
import { connect } from 'react-redux';
import { userActions } from '../../../redux/_actions';

function NavigationBar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);
  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  const { user, loggedIn } = props;
  const isAuthenticated = user && loggedIn;

  const userProfile = (big = false) => (
    <NavItem>
      <Dropdown isOpen={dropdownOpen} toggle={toggleDropDown}>
        <DropdownToggle>
          <div className={`profile-image ${big ? 'big-scr' : ''}`}>
            <img
              src='https://i.ibb.co/c1BWHxq/default-img8219.jpg'
              alt='avatar'
              className='avatar rounded-circle'
            />
          </div>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
            <Link to='/profile'> Profile</Link>
          </DropdownItem>
          <DropdownItem>Logout</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </NavItem>
  );

  return (
    <Navbar light className='nav-wrapper' expand='sm'>
      <div className='container-fluid'>
        <NavbarBrand to='/' tag={RRNavLink}>
          <img src={logo} alt='logo' className='logo' />
        </NavbarBrand>
        {/* </div> */}
        <div className='stuff'>
          <NavbarToggler onClick={toggleNav} className='nav-toggle'>
            <span className='navbar-toggler-icon'></span>
          </NavbarToggler>
          <Nav className='profile'>{isAuthenticated ? userProfile() : ''}</Nav>
        </div>

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
              <Link to='/upload'>
                <Button outline className='mt-1 mt-sm-0'>
                  Upload
                </Button>
              </Link>
            </NavItem>
            {!isAuthenticated ? (
              <NavItem>
                <Link to='/signup'>
                  <Button className='btn-success mt-3 mt-sm-0'>Join</Button>
                </Link>
              </NavItem>
            ) : (
              userProfile(true)
              // <NavItem>
              //   <div className='profile-image big-scr'>
              //     <img
              //       src='https://i.ibb.co/c1BWHxq/default-img8219.jpg'
              //       alt='avatar'
              //       className='avatar rounded-circle'
              //     />
              //   </div>
              // </NavItem>
              // userProfile
            )}
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
}

const mapState = (state) => {
  const { authReducer } = state;
  return authReducer;
};

const Navigation = connect(mapState)(NavigationBar);

export default Navigation;
