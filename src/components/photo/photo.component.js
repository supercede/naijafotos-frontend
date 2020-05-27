import React from 'react';
import imgOne from '../../assets/images/img-one.jpg';
import imgTwo from '../../assets/images/img-two.jpg';
import imgThree from '../../assets/images/img-three.jpg';
import imgFour from '../../assets/images/img-four.jpg';
import imgFive from '../../assets/images/img-five.jpg';
import './photo.style.scss';

const images = [imgOne, imgTwo, imgThree, imgFour, imgFive];

function Photo() {
  const photoArr = [];
  for (let i = 1; i <= 25; i++) {
    photoArr.push(
      <figure className='img-brick' key={i}>
        <img src={images[i % 5]} alt='placeholder img' />
      </figure>
    );
  }
  return <div className='masonry mx-auto'>{photoArr}</div>;
}

export default Photo;
