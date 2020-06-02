import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Header from './components/header/header.component';
import Homepage from './pages/Homepage/homepage.component';
import Authpage from './pages/Authpage/authpage.component';
import ProfilePage from './pages/Profilepage/profilepage.component';
import EditProfilePage from './pages/EditProfilepage/editProfile.componentpage';
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/signup' component={() => <Authpage focus='sign-up' />} />
        <Route path='/signin' component={() => <Authpage focus='sign-in' />} />
        <Route path='/profile' component={() => <ProfilePage />} />
        <Route path='/editprofile' component={() => <EditProfilePage />} />
        <Route path='/' component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
