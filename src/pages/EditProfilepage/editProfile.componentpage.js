import React from 'react';
import Navigation from '../../components/header/navigation/navigation.component';
import './editprofilepage.style.scss';
import EditProfile from '../../components/profile/edit-profile/edit-profile.component';

function EditProfilePage({ action = 'account-settings' }) {
  return (
    <>
      <Navigation />
      <EditProfile action={action} />
    </>
  );
}

export default EditProfilePage;
