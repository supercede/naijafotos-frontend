import React from 'react';
import { NavLink, NavItem } from 'reactstrap';
import { tags } from './dummyTags';
import './tag.style.scss';

function Tags() {
  return (
    <div className='subhead mt-sm-0'>
      <div className='content subhead__item'>
        <NavItem className='subhead__item--nav'>
          <NavLink href='#a'>All</NavLink>
        </NavItem>
        <NavItem className='subhead__item--nav following'>
          <NavLink href='#a'>Following</NavLink>
        </NavItem>
      </div>
      <div className='margin'></div>
      <div className='tags-wrapper subhead__item'>
        <div className='tags subhead__item'>
          {tags.map((tag, i) => (
            <NavItem key={i} className='subhead__item--nav tag'>
              <NavLink href='#a'>{tag}</NavLink>
            </NavItem>
          ))}
        </div>
      </div>
      {/* </Nav> */}
    </div>
  );
}

export default Tags;
