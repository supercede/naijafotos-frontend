import React from 'react';
import './photo.style.scss';
import { Link } from 'react-router-dom';
import { images } from './photos';

function Photo() {
  const photos = images.map((photo, i) => {
    return (
      <div key={i}>
        <div className='img'>
          <figure className='img-brick'>
            <Link
              to={{
                pathname: `/photo/${photo._id}`,
                state: {
                  isModal: true,
                },
              }}
            >
              <img src={photo.imageURL} alt='placeholder img' />
            </Link>
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
                    <span className='title'>{photo.user.name}</span>
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

  return <div className='masonry mx-auto'>{photos}</div>;
}

export default Photo;
