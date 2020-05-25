import React from 'react';
import './search.styles.scss';
import { Input } from 'reactstrap';

function SearchBar() {
  return (
    <div className='search-bar search'>
      <Input
        className='search'
        type='search'
        placeholder='Search photos and collections'
      />
    </div>
  );
}

export default SearchBar;
