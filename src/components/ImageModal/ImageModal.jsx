import css from "./ImageModal.module.css";

import { useEffect } from 'react';

const ImageModal = ({ closeModal, isOpen, imageUrl }) => {
  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };


  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeModal]);

  return (
    <div
      className={isOpen ? css.Overlay : css.Hidden}
      onClick={handleOverlayClick}
    >
      <div className={css.Modal}>
        <img src={imageUrl} alt="Large" />
      </div>
    </div>
  );
};

export default ImageModal;