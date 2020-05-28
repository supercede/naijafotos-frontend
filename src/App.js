import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Header from './components/header/header.component';
import Homepage from './pages/Homepage/homepage.component';
import Authpage from './pages/Authpage/authpage.component';
import './App.css';
import ProfilePage from './pages/Profilepage/profilepage.component';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/signup' component={() => <Authpage focus='sign-up' />} />
        <Route path='/signin' component={() => <Authpage focus='sign-in' />} />
        <Route path='/profile' component={ProfilePage} />
        <Route path='/' component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
