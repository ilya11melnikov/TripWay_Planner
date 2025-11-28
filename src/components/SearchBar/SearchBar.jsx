import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SearchBar.module.scss';

const SearchBar = ({ onSearch, placeholder = "Поиск городов, отелей, мест..." }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      if (onSearch) {
        onSearch(query);
      } else {
        navigate(`/search?q=${encodeURIComponent(query)}`);
      }
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <form className={styles.searchBar} onSubmit={handleSubmit}>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          className={styles.input}
          placeholder={placeholder}
          value={query}
          onChange={handleChange}
        />
        <button type="submit" className={styles.button} aria-label="Search">
          🔍
        </button>
      </div>
    </form>
  );
};

export default SearchBar;

