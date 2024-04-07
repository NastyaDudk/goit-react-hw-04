
import { GoSearch } from "react-icons/go";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit, searchQuery, setSearchQuery }) => {
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = () => {
    if (!searchQuery) {
      toast.error("The field must be filled in!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
   
      onSubmit(searchQuery);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
     <header className={css.header}>
      <form onSubmit={handleSubmit}>
    <div className={css.input_container}>
      <input
        type="text"
        value={searchQuery}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
        placeholder="Search images and photos..."
      />
      <button className={css.icon} type="button" onClick={handleSubmit}>
        <GoSearch />
      </button >
      <ToastContainer />
        </div>
      </form>
      </header>
  );
};

export default SearchBar;