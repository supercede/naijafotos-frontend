import React from 'react';
import Navigation from './navigation/navigation.component';
import Tags from './tags/tag.component';
import './header.style.scss';

function Header() {
  return (
    <div className='header'>
      <Navigation />
      <div className='tags-div'>
        <Tags />
      </div>
    </div>
  );
}

export default Header;
