import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map((image, index) => (
        <ImageGalleryItem key={image.id + index} image={image} openModal={openModal} />
      ))}
    </ul>
  );
};

export default ImageGallery;