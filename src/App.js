import React, { Component } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
// import Header from './components/header/header.component';
import { connect } from 'react-redux';
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

class App extends Component {
  // const alert = useSelector((state) => state.alert);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   history.listen((location, action) => {
  //     // clear alert on location change
  //     dispatch(alertActions.clear());
  //   });
  // }, []);
  constructor(props) {
    super(props);

    history.listen((location, action) => {
      this.props.clearAlerts();
    });
  }

  render() {
    return (
      <div>
        <Router history={history}>
          <Switch>
            <Route
              path='/signup'
              component={() => <Authpage focus='sign-up' />}
            />
            <Route
              path='/signin'
              component={() => <Authpage focus='sign-in' />}
            />
            <Route path='/upload' component={() => <ImageUploadPage />} />
            <Route path='/profile' component={() => <ProfilePage />} />
            <Route
              path='/photo/:id'
              render={(props) => <PhotoPage {...props} />}
            />
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
        </Router>
      </div>
    );
  }
}

const mapState = (state) => {
  const { alert } = state;
  return { alert };
};

const actionCreators = {
  clearAlerts: alertActions.clear,
};

const connectedApp = connect(mapState, actionCreators)(App);

export { connectedApp as App };

// export default App;
