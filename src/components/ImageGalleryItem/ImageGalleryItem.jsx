import {
  ImageGalleryListItem,
  ImageGalleryItemImg,
} from './ImageGalleryListItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  onImageClick,
}) => {
  return (
    <ImageGalleryListItem>
      <ImageGalleryItemImg
        onClick={() => onImageClick(largeImageURL)}
        src={webformatURL}
        alt=""
      />
    </ImageGalleryListItem>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onImageClick: PropTypes.func,
};
