import React, { useState } from 'react';
import './edit-profile.style.scss';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import ProfileSettings from './profileSettings/profileSettings.component';
import ChangePassword from './profileSettings/changePassword/changePassword.component';
import CloseAccount from './profileSettings/closeAccount/closeAccount.component';

function EditProfile({ action }) {
  const [active, setActive] = useState(action);

  return (
    <div className='edit-profile container-fluid mt-3'>
      <div className='row'>
        <div className='editprofile__nav col-md-3 mb-5 text-center'>
          <Nav vertical className=''>
            <NavItem
              className={`${active === 'account-settings' ? 'active' : ''}`}
              onClick={() => setActive('account-settings')}
            >
              <NavLink to='/edit-profile' tag={RRNavLink}>
                Account Settings
              </NavLink>
            </NavItem>

            <NavItem
              className={`${active === 'change-password' ? 'active' : ''}`}
              onClick={() => setActive('change-password')}
            >
              <NavLink to='/change-password' tag={RRNavLink}>
                Change Password
              </NavLink>
            </NavItem>

            <NavItem
              className={`${active === 'close-account' ? 'active' : ''}`}
              onClick={() => setActive('close-account')}
            >
              <NavLink to='/close-account' tag={RRNavLink}>
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
            {active === 'account-settings' && <ProfileSettings />}
            {active === 'change-password' && <ChangePassword />}
            {active === 'close-account' && <CloseAccount />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
