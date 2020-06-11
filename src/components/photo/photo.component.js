import React, { useState } from 'react';
import imgOne from '../../assets/images/img-one.jpg';
import imgTwo from '../../assets/images/img-two.jpg';
import imgThree from '../../assets/images/img-three.jpg';
import imgFour from '../../assets/images/img-four.jpg';
import imgFive from '../../assets/images/img-five.jpg';
import imgSix from '../../assets/images/img-six.jpg';
import imgSeven from '../../assets/images/img-seven.jpg';
import PhotoModal from './photoModal/photoModal.component';
import './photo.style.scss';

const images = [
  imgOne,
  imgTwo,
  imgSeven,
  imgThree,
  imgFour,
  imgFive,
  imgThree,
  imgSix,
  imgFive,
  imgOne,
  imgSeven,
  imgFour,
  imgThree,
  imgOne,
  imgTwo,
  imgSix,
];

function Photo({ count = 25 }) {
  const [modal, setModal] = useState(false);
  const [currentPicture, setCurrentPicture] = useState('');

  const toggle = () => setModal(!modal);
  const setPicture = (img) => setCurrentPicture(img);

  const photos = images.map((photo, i) => {
    return (
      <div key={i}>
        <div
          className='img'
          onClick={() => {
            toggle();
            setPicture(photo);
          }}
        >
          <figure className='img-brick'>
            <img src={photo} alt='placeholder img' />
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
      </div>
    );
  });

  return (
    <>
      <div className='masonry mx-auto'>{photos}</div>
      <PhotoModal
        modal={modal}
        className={''}
        toggle={toggle}
        img={currentPicture}
      />
    </>
  );
}

export default Photo;
