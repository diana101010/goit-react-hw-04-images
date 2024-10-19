import React, { useEffect } from 'react';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, onImageClick }) => {
  useEffect(() => {
    console.log('Image object changed:', image);
  }, [image]);

  const handleClick = () => {
    onImageClick(image.largeImageURL);
  };

  return (
    <li className={styles.ImageGalleryItem} onClick={handleClick}>
      <img src={image.webformatURL} alt={image.tags} />
    </li>
  );
};

export default ImageGalleryItem;
