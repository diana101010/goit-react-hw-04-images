import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ imageUrl, onClose }) => {
  return (
    <div className={styles.Overlay} onClick={onClose}>
      <div className={styles.Modal}>
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
};

export default Modal;
