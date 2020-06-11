import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import avatar from '../../../assets/images/avatar.jpg';
import './photoModal.style.scss';
import Interests from '../../profile/interest/interest.component';

function PhotoModal({ modal, toggle, className, img }) {
  return (
    <Modal isOpen={modal} className='modal-xl' toggle={toggle}>
      <ModalHeader toggle={toggle}>
        <div className='details'>
          <a href='a' className='d-flex align-items-center'>
            <img className='rounded-circle' src={avatar} alt='' />
            <div className='details'>
              <p className='d-flex flex-column'>
                <span>Killua Zoldyck</span>
                <span>@killua10</span>
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
      </ModalHeader>
      <ModalBody>
        <figure className='modal-body__figure'>
          <img src={img} alt='' className='modal-body__figure--img' />
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
            <Button outline>
              <a href='a'>Share</a>
            </Button>
            <Button outline>
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
      </ModalBody>
      <ModalFooter>
        <div className='comments'>
          <h2>Comments</h2>
        </div>
      </ModalFooter>
    </Modal>
  );
}

export default PhotoModal;
