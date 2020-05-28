import React from 'react';
import Navigation from '../../components/header/navigation/navigation.component';
import Profile from '../../components/profile/profile.component';
import './profilepage.style.scss';

function ProfilePage() {
  return (
    <>
      <Navigation />
      <Profile />
    </>
  );
}

export default ProfilePage;
