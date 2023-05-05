import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ images, onImageClick }) => (
  <ul className={css.ImageGallery}>
    {images.map((image, index) => (
      <ImageGalleryItem onClick={onImageClick} images={image} key={index} />
    ))}   
      </ul>
  );


ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.number.isRequired,
  })
  ),
  onImageClick: PropTypes.func.isRequired,
};