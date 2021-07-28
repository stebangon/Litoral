import React from 'react';

const SelectedImage = ({ photo }) => {
  return (
    <div>
      <div className={'not-selected'}>
        <img alt={photo.title} {...photo} />
        <style>{`.not-selected:hover{backface-visibility: hidden; transform: scale(1.15, 1.15); opacity: 1;}`}</style>
      </div>
    </div>
  );
};

export default SelectedImage;
