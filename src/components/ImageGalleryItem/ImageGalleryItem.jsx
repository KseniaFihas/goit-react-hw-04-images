import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  onImageClick,
}) => (
  <li className={css.galleryItem}>
    <img
      src={webformatURL}
      alt=""
      onClick={() => onImageClick(largeImageURL)}
      className={css.ImageGalleryItem}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  onImageClick: PropTypes.func,
};

export default ImageGalleryItem;
