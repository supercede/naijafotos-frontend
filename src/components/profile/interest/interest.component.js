import React from 'react';
import { Link } from 'react-router-dom';
import './interest.style.scss';

const dummyInterests = ['love', 'friends', 'grass'];

const Interests = ({ interests = dummyInterests }) => (
  <div className='interests'>
    {interests.map((interest, i) => (
      <div className='interest' key={i}>
        <Link to='#'>{interest}</Link>
      </div>
    ))}
  </div>
);

export default Interests;
