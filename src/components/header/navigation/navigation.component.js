import React, { useState } from 'react';
import { Link, NavLink as RRNavLink } from 'react-router-dom';
import SearchBar from '../search/search.component';
import logo from '../../../assets/images/naijafotos-logo.png';
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
import { connect } from 'react-redux';
import { userActions } from '../../../redux/_actions';

const style = {
  backgroundColor: '#555555',
  borderColor: '#555555',
};

function NavigationBar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => setIsOpen(!isOpen);

  const { user, loggedIn } = props;
  const isAuthenticated = user && loggedIn;

  const userProfile = (big = false) => (
    <NavItem>
      <NavLink to='/profile' tag={RRNavLink}>
        <div className={`profile-image ${big ? 'big-scr' : ''}`}>
          <img
            src='https://i.ibb.co/c1BWHxq/default-img8219.jpg'
            alt='avatar'
            className='avatar rounded-circle'
          />
        </div>
      </NavLink>
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
            {!isAuthenticated ? (
              <>
                <NavItem>
                  <Link to='/signup'>
                    <Button className='btn-success mt-1 '>Join</Button>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to='/signin'>
                    <Button className='btn-success mt-1' style={style}>
                      Login
                    </Button>
                  </Link>
                </NavItem>
              </>
            ) : (
              <>
                <NavItem>
                  <Link to='/upload'>
                    <Button outline className='mt-1'>
                      Upload
                    </Button>
                  </Link>
                </NavItem>
                <NavItem>
                  <Button
                    className='btn-success mt-1 '
                    style={style}
                    onClick={() => props.logout()}
                  >
                    Logout
                  </Button>
                </NavItem>
                {userProfile(true)}
              </>
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

const actionCreator = {
  logout: userActions.logout,
};

const Navigation = connect(mapState, actionCreator)(NavigationBar);

export default Navigation;
