import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Header from './components/header/header.component';
import Homepage from './pages/Homepage/homepage.component';
import Authpage from './pages/Authpage/authpage.component';
import ProfilePage from './pages/Profilepage/profilepage.component';
import EditProfilePage from './pages/EditProfilepage/editProfile.componentpage';
import ImageUploadPage from './pages/ImageUpload/imageUpload.component';
import PhotoModal from './components/photo/photoModal/photoModal.component';
import './App.css';
import PhotoPage from './pages/Photopage/photopage.component';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/signup' component={() => <Authpage focus='sign-up' />} />
        <Route path='/signin' component={() => <Authpage focus='sign-in' />} />
        <Route path='/upload' component={() => <ImageUploadPage />} />
        <Route path='/profile' component={() => <ProfilePage />} />
        <Route path='/photo/:id' render={(props) => <PhotoPage {...props} />} />
        <Route path='/edit-profile' component={() => <EditProfilePage />} />
        <Route
          path='/change-password'
          component={() => <EditProfilePage action='change-password' />}
        />
        <Route
          path='/close-account'
          component={() => <EditProfilePage action='close-account' />}
        />
        <Route path='/' component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
