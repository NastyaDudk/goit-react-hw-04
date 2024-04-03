import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, openModal }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={image.webformatURL}
        alt={image.tags}
        className={styles.ImageGalleryItemImage}
        onClick={() => openModal(image.largeImageURL)}
      />
    </li>
  );
};

export default ImageGalleryItem ;