import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar.jsx';

import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';
import styles from '../components/App.module.css';

const API_KEY = '44928862-d2f2bbe0bebe323e8b9f048e4';

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const fetchImages = async (searchQuery, page) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&page=${page}&per_page=12`
      );
      if (response.data.hits.length === 0) {
        alert('No images found for your query.');
      }
      setImages(prevImages => [...prevImages, ...response.data.hits]);
    } catch (error) {
      console.error('Error fetching images:', error);
      alert('Failed to fetch images. Please try again later.'); // Error handling
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = searchQuery => {
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
    fetchImages(searchQuery, 1);
  };

  useEffect(() => {
    if (query) {
      fetchImages(query, page);
    }
  }, [page, query]);

  const loadMoreImages = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleImageClick = largeImageURL => {
    setModalImage(largeImageURL);
  };

  const closeModal = e => {
    if (e.target === e.currentTarget) {
      setModalImage(null);
    }
  };

  const handleKeyDown = e => {
    if (e.key === 'Escape') {
      setModalImage(null);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.App}>
      <Searchbar onSubmit={handleSearch} />
      {loading && <p>Loading images...</p>}
      <ImageGallery
        images={images}
        className={styles.img}
        onImageClick={handleImageClick}
      />
      {images.length > 0 && !loading && <Button onClick={loadMoreImages} />}
      {modalImage && <Modal imageUrl={modalImage} onClose={closeModal} />}
    </div>
  );
};

export default App;
