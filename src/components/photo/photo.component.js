import React from 'react';
import imgOne from '../../assets/images/img-one.jpg';
import imgTwo from '../../assets/images/img-two.jpg';
import imgThree from '../../assets/images/img-three.jpg';
import imgFour from '../../assets/images/img-four.jpg';
import imgFive from '../../assets/images/img-five.jpg';
import './photo.style.scss';

const images = [imgOne, imgTwo, imgThree, imgFour, imgFive];

function Photo({ count = 25 }) {
  const photoArr = [];
  for (let i = 1; i <= count; i++) {
    photoArr.push(
      <div className='img' key={i}>
        <figure className='img-brick'>
          <img src={images[i % 5]} alt='placeholder img' />
          <div className='img__btns'>
            <div className='up'>
              <div className='left'>
                <a href='a' className='img__btns--btn'>
                  <i className='fas fa-trash-alt'></i>
                </a>
              </div>
              <div className='right'>
                <a href='a' className='img__btns--btn'>
                  <i className='fas fa-plus'></i>
                </a>
                <a href='a' className='img__btns--btn'>
                  <i className='fas fa-arrow-down'></i>
                </a>
              </div>
            </div>
            <div className='down'>
              <div className='left'>
                <a href='a' className='img__btns--btn name'>
                  <span className='title'>Killua Zoldyck</span>
                </a>
              </div>
              <div className='right'>
                <a href='a' className='img__btns--btn'>
                  <i className='fas fa-heart'></i>
                </a>
                <a href='a' className='img__btns--btn'>
                  <i className='far fa-comment'></i>
                </a>
              </div>
            </div>
          </div>
        </figure>
      </div>
    );
  }
  return <div className='masonry mx-auto'>{photoArr}</div>;
}

export default Photo;
