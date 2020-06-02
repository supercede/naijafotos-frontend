import React from 'react';
import avatar from '../../assets/images/avatar.jpg';
import Interests from './interest/interest.component';
import { Button } from 'reactstrap';
import Content from './content/content.collection';
import { Link } from 'react-router-dom';
import './profile.style.scss';

function Profile() {
  return (
    <div className='profile'>
      <div className='profile__details'>
        <div className='profile__details--img'>
          <img
            src={avatar}
            alt='avatar'
            className='img rounded-circle avatar'
          />
        </div>
        <div className='profile__details--bio'>
          <h2>Killua Zoldyck</h2>
          <p className='about'>
            Killua Zoldyck is the third child of Silva and Kikyo Zoldyck and the
            heir of the Zoldyck Family, until he runs away from home.
          </p>
          <p className='text-muted'>Interests</p>
          <Interests />
          <Link to='/editprofile'>
            <Button outline className='btn-outline-success mt-3'>
              Edit Profile
            </Button>
          </Link>
        </div>
      </div>
      <div>
        <Content />
      </div>
    </div>
  );
}

export default Profile;
