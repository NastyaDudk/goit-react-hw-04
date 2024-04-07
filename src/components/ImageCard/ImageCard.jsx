import css from "../ImageGallery/ImageGallery.module.css";

const ImageCard = ({ item, onClick }) => {
  const {
    alt_description,
    urls: { small },
  } = item;
  return (
    <div className={css.img_box}>
      <img
        className={css.img}
        src={small}
        alt={alt_description}
        onClick={() => onClick(item)}
      />
    </div>
  );
};

export default ImageCard;
