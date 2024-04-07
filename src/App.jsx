import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { fetchPhotos } from "./ServiceApi/Unplash";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [total_pages, setTotal_Pages] = useState(0);
  const [activeImg, setActiveImg] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const searchQueryRef = useRef();

  const handleFetch = async (newPage, query) => {
    try {
      if (!query.trim()) {
        setImages([]);

        toast.error("Search input must be filled!", {
          position: "top-right",
        });
        return;
      }

      setIsLoading(true);
      setError(false);

      const { total, results, total_pages } = await fetchPhotos(query, newPage);
      if (!results.length) {
        toast.error(`Nothing was found for ${query}`, {
          position: "top-right",
        });
        setImages([]);
        return;
      }
      newPage > 1 ? setImages([...images, ...results]) : setImages(results);

      setTotal(total);
      setTotal_Pages(total_pages);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async () => {
    if (page > 1) setPage(1);
    handleFetch(1, searchQuery);
    setSearchQuery("");
    searchQueryRef.current = searchQuery;
  };

  const loadMoreHandle = async () => {
    setPage(page + 1);
    handleFetch(page + 1, searchQueryRef.current);
  };

  const onImageClick = (item) => {
    setActiveImg(item);
    setModalOpen(true);
  };

  return (
    <>
      <Toaster />

      <SearchBar
        onSubmit={onSubmit}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      {error ? (
        <ErrorMessage message={"Oops, something went wrong"} />
      ) : (
        <ImageGallery images={images} onClick={onImageClick} />
      )}

      {isLoading && <Loader />}
      {Boolean(total) &&
        !error &&
        Boolean(images.length) &&
        page < total_pages && <LoadMoreBtn loadMoreHandle={loadMoreHandle} />}

      <ImageModal
        closeModal={() => setModalOpen(false)} 
          isOpen={modalOpen} 
          imageUrl={activeImg?.urls?.regular || ""}
          alt={activeImg?.alt_description || ""}
          likes={activeImg?.likes || 0}
      />
    </>
  );
}

export default App;