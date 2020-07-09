import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
// import Header from './components/header/header.component';
import { useDispatch, useSelector } from 'react-redux';
import Homepage from './pages/Homepage/homepage.component';
import Authpage from './pages/Authpage/authpage.component';
import ProfilePage from './pages/Profilepage/profilepage.component';
import EditProfilePage from './pages/EditProfilepage/editProfile.componentpage';
import ImageUploadPage from './pages/ImageUpload/imageUpload.component';
import { history } from './redux/_helpers';
import { alertActions } from './redux/_actions';
import PhotoPage from './pages/Photopage/photopage.component';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }, []);
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
