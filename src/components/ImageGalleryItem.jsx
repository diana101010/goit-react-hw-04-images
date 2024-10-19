import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = image => {
    if (selectedImage === image) {
      setSelectedImage(null);
    } else {
      setSelectedImage(image);
      if (onImageClick) {
        onImageClick(image);
      }
    }
  };

  return (
    <>
      <ul className={styles.ImageGallery}>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            image={image}
            onImageClick={() => handleImageClick(image)}
            className={`${styles.ImageGalleryItem} ${
              styles[`Item-${image.id}`]
            }`}
          />
        ))}
      </ul>
      {selectedImage && (
        <div className={styles.SelectedImageContainer}>
          <h2>{selectedImage.title}</h2>
          <img
            src={selectedImage.url}
            alt={selectedImage.title}
            className={styles.SelectedImage}
          />
          <button onClick={() => setSelectedImage(null)}>Close</button>
        </div>
      )}
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  onImageClick: PropTypes.func,
};

export default ImageGallery;
