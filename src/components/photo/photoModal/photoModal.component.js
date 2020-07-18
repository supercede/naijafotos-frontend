import React from 'react';
import { Button } from 'reactstrap';
import { useParams } from 'react-router-dom';
import Interests from '../../profile/interest/interest.component';
import Comments from '../../comments/comments.component';
import { images } from '../photos';
import './photoModal.style.scss';

function PhotoModal(props) {
  console.log(props);
  
  // const { img } = props;
  const { id } = useParams();

  const getPhoto = (id) => images.find((img) => img._id === id);

  const currentImg = getPhoto(id);
  const { user } = currentImg;

  return (
    <div className='wrapper mx-auto'>
      <div className='wrapper-header'>
        <div className='details'>
          <a href='a' className='d-flex align-items-center'>
            <img className='rounded-circle' src={user.avatar} alt='' />
            <div className='details'>
              <p className='d-flex flex-column'>
                <span>{user.name}</span>
                <span>{user.userName || '@killua10'}</span>
              </p>
            </div>
          </a>
        </div>
        <div className='action'>
          <a href='a' className='action--btn'>
            <i className='fas fa-heart'></i>
          </a>
          <a href='a' className='action--btn'>
            <i className='fas fa-plus'></i>
          </a>
          <a href='a' className='action--btn'>
            <i className='fas fa-arrow-down'></i>
          </a>
        </div>
      </div>
      <div className='wrapper-body'>
        <figure className='wrapper-body__figure'>
          <img
            src={currentImg.imageURL}
            alt=''
            className='wrapper-body__figure--img'
          />
        </figure>
        <div className='meta'>
          <div className='data'>
            <p className='description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              voluptatem dolores iusto sequi omnis. Porro beatae temporibus vero
              harum distinctio?
            </p>
          </div>
          <div className='interact'>
            <Button outline className='col-12 mb-1 col-md-5'>
              <a href='a'>Share</a>
            </Button>
            <Button outline className='col-12 mb-1 col-md-5'>
              <a href='a'>Info</a>
            </Button>
          </div>
        </div>
        <div className='tags'>
          <div className='tags'>
            <h5>tags:</h5>
            <Interests />
          </div>
        </div>
        <hr></hr>
        <div className='comments mt-3'>
          <h2>Comments</h2>
          <Comments />
        </div>
      </div>
    </div>
  );
}

export default PhotoModal;
