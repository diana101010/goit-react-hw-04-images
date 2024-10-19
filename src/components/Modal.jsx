import React, { useEffect, useRef } from 'react';
import styles from './Modal.module.css';

const Modal = ({ imageUrl, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className={styles.Overlay} onClick={onClose}>
      <div
        className={styles.Modal}
        ref={modalRef}
        onClick={e => e.stopPropagation()}
      >
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
};

export default Modal;
