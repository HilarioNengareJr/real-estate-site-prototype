import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import './NavCard.css';

const NavCard = () => {
  return (
    <div className='navCard w-75 m-auto bg-dark text-center rounded-pill p-2'>
      <Link className='p-1 text-white' title='Google Maps'>Map</Link>
      <span className='text-success'>|</span>
      <Link to='/picturefiles' className='p-1 text-white' title='Gallery'>Gallery</Link>
      <span className='text-success'>|</span>
      <Link className='p-1 text-white' title="Amenities">Overview</Link>
    </div>
  );
};

export default NavCard;
