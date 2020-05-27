import React, { useState } from 'react';
import Navigation from '../../components/header/navigation/navigation.component';
import SignIn from '../../components/signInUp/signIn/signin.component';
import SignUp from '../../components/signInUp/signUp/signup.component';
import './authpage.style.scss';

function Authpage({ focus = 'sign-in' }) {
  const [active, setActive] = useState(focus);

  return (
    <>
      <Navigation />
      <div className='auth-wrapper mx-auto'>
        <div className='auth-nav'>
          <div
            className={`signin-field field ${
              active === 'sign-in' ? 'active' : ''
            }`}
            onClick={() => setActive('sign-in')}
          >
            <p className='context'>SIGN IN</p>
          </div>
          <div
            className={`signup-field field ${
              active === 'sign-up' ? 'active' : ''
            }`}
            onClick={() => setActive('sign-up')}
          >
            <p className='context'>SIGN UP</p>
          </div>
        </div>
        {active === 'sign-in' ? (
          <div className={`sign-in ${active === 'sign-up' ? 'd-none' : ''}`}>
            <SignIn />
          </div>
        ) : (
          <div className={`sign-up ${active === 'sign-in' ? 'd-none' : ''}`}>
            <SignUp />
          </div>
        )}
      </div>
    </>
  );
}

export default Authpage;
