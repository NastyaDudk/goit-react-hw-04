import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={css.gallery}>
      {images.map((item) => {
        return (
          <li className={css.item} key={item.id}>
            <ImageCard item={item} onClick={onClick} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
