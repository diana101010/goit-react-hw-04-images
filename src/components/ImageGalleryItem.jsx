import React from 'react';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, onImageClick }) => {
  return (
    <li
      className={styles.ImageGalleryItem}
      onClick={() => onImageClick(image.largeImageURL)}
    >
      <img src={image.webformatURL} alt={image.tags} />
    </li>
  );
};

export default ImageGalleryItem;
