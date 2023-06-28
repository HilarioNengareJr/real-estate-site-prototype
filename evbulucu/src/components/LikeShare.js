import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShare } from '@fortawesome/free-solid-svg-icons';

const LikeShare = () => {
  return (
    <div className='image-overlay d-flex justify-content-center mx-auto'>
      <div className="likeShare w-100 d-flex justify-content-start">
        <button className="share-icon border-0 p-3 rounded text-light">
          <FontAwesomeIcon icon={faShare} />
        </button>
      </div>
      <div className="likeShare w-100 d-flex justify-content-end">
        <button className="heart-icon text-light border-0 p-3 rounded">
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>
    </div>
  );
};

export default LikeShare;
