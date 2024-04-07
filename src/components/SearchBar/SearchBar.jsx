
import { GoSearch } from "react-icons/go";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit, searchQuery, setSearchQuery }) => {
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSubmit();
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
            onKeyDown={handleKeyPress}
            placeholder="Search images and photos"
          />
          <button type="submit" className={css.icon} onClick={handleSubmit}>
            <GoSearch />
          </button>
        </div>
      </form>
    </header>
  );
};


export default SearchBar;
