import './PictureFiles.css';
import { Gallery } from 'react-grid-gallery';
import { accommodationImages } from './Images';

const PictureFiles = () => {
  const images = accommodationImages.map((image, index) => ({
    ...image,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: `Image ${index + 1}`, 
  }));

  return (
    <div className="container-fluid">
      <div className='w-100'>
        <Gallery images={images} />
      </div>
    </div>
  );
};

export default PictureFiles;
