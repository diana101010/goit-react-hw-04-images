import React, { useState } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = image => {
    setSelectedImage(image);
    if (onImageClick) {
      onImageClick(image);
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
        <div>
          <p>Selected Image: {selectedImage.title}</p>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
