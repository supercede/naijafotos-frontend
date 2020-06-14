import React from 'react';
import PhotoModal from '../../components/photo/photoModal/photoModal.component';
import Navigation from '../../components/header/navigation/navigation.component';

function PhotoPage(props) {
  return (
    <>
      <Navigation />
      <PhotoModal props={props} />
    </>
  );
}

export default PhotoPage;
