import React from 'react';
import './edit-profile.style.scss';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
// import avatar from '../../../assets/images/avatar.jpg';
import ProfileSettings from './profileSettings/profileSettings.component';

function EditProfile() {
  return (
    <div className='editprofile container-fluid mt-5'>
      <div className='row'>
        <div className='editprofile__nav col-md-3'>
          <Nav vertical className=''>
            <NavItem>
              <NavLink to='#' tag={RRNavLink}>
                Account Settings
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to='#' tag={RRNavLink}>
                Change Password
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to='#' tag={RRNavLink}>
                Close Account
              </NavLink>
            </NavItem>

            {/* <Link>
            <NavItem>
              <NavLink>C</NavLink>
            </NavItem>
          </Link> */}
          </Nav>
        </div>
        <div className='editprofile__settings col-md-8'>
          <div className='col-12 profile-settings'>
            <ProfileSettings />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
