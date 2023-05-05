import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ image, onClick }) => (
     <li className={css.galleryItem} id={image.id} onClick={onClick}>
          <img
            className={css.ImageGalleryItem}
            src={image.webformatURL}
      alt={image.tags}
      name={image.largeImageURL}
          />
        </li>
  
  );

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};