import React from 'react';
import './socialBtns.style.scss';
import { Button } from 'reactstrap';

function SocialButtons({ action }) {
  return (
    <div className='social-btns'>
      <Button outline className='google-btn social-btn'>
        <span className='logo google-logo'>
          <i className='fa fa-google text-danger'></i>
        </span>
        <span className='logo-text'> {`${action}`} with Google</span>
      </Button>
      <Button outline className='facebook-btn social-btn'>
        <span className='logo facebook-logo'>
          <i className='fab fa-facebook-square text-info'></i>
        </span>
        <span className='logo-text'> {`${action}`} with Facebook</span>
      </Button>
    </div>
  );
}

export default SocialButtons;
