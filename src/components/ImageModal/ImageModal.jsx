import { useEffect } from 'react';
import Modal from 'react-modal';
import css from "./ImageModal.module.css";


Modal.setAppElement("#root");


const ImageModal = ({ closeModal, isOpen, imageUrl }) => {
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
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      overlayClassName={css.Overlay}
      className={css.Modal}
    >
      <img src={imageUrl} alt="Large" />
    </Modal>
  );
};

export default ImageModal;