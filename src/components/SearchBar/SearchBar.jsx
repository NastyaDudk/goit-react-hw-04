import { MdSearch } from 'react-icons/md';
import css from './SearchBar.module.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (query.trim() === '') {
      toast.error('Please enter a search query!');
      return;
    }

    onSubmit(query);
    
  }

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchFormButton}>
          <MdSearch className={css.SearchFormButton} />
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>
        <input
          className={css.SearchFormInput}
          type="text"
          value={query}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
      
    </header>
  );
};

export default Searchbar;