import React, { useEffect, useState } from 'react';
import Searchbar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';
import styles from './App.module.css';
import getImages from './components/ServiceApi/ServiceApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [query, setQuery] = useState('');
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    if (!query) return;
    const searchImages = async () => {
      setLoading(true);

      try {
        const response = await getImages(query, page);
        if (response.hits.length === 0) {
          throw new Error('No images found, try again ✊');
        }
        setImages(prevImages => [...prevImages, ...response.hits]);
        setShowBtn(page < Math.ceil(response.totalHits / 12));
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    searchImages();
  }, [query, page]);

  const handleSearch = newQuery => {
    setImages([]);
    setPage(1);
    setQuery(newQuery);
  };

  const loadMoreImages = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = imageUrl => {
    setModalOpen(true);
    setSelectedImage(imageUrl);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage('');
    document.body.style.overflow = '';
  };

  const handleOverlayClick = () => {
    closeModal();
  };

  return (
    <div className={styles.App}>
      <ToastContainer />
      <Searchbar onSubmit={handleSearch} />
      <ImageGallery images={images} openModal={openModal} />
      {loading && <Loader />}
      {showBtn && <Button onLoadMore={loadMoreImages} hasMore={!loading} />}
      <Modal
        isOpen={modalOpen}
        closeModal={closeModal}
        imageUrl={selectedImage}
        onOverlayClick={handleOverlayClick}
      />

    </div>
  );
}

export default App;