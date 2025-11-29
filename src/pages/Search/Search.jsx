import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { searchPlaces } from '../../services/api';
import PlaceCard from '../../components/Cards/PlaceCard/PlaceCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import { motion } from 'framer-motion';
import styles from './Search.module.scss';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const category = searchParams.get('category') || '';
  
  const [searchQuery, setSearchQuery] = useState(query);
  const [filters, setFilters] = useState({
    country: '',
    sortBy: 'popularity'
  });

  const { data: places, loading, error } = useFetch(
    () => {
      if (!query && !category) return Promise.resolve([]);
      return searchPlaces(query || category, '', 20);
    },
    [query, category]
  );

  const handleSearch = (newQuery) => {
    setSearchQuery(newQuery);
    setSearchParams({ q: newQuery });
  };

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  const filteredPlaces = places ? places.filter(place => {
    if (filters.country && place.address?.country !== filters.country) {
      return false;
    }
    return true;
  }).sort((a, b) => {
    if (filters.sortBy === 'popularity') {
      return (b.rate || 0) - (a.rate || 0);
    }
    return 0;
  }) : [];

  const countries = [...new Set(places?.map(p => p.address?.country).filter(Boolean) || [])];

  return (
    <div className={styles.search}>
      <div className={styles.searchHeader}>
        <h1 className={styles.title}>Поиск мест</h1>
        <SearchBar onSearch={handleSearch} placeholder="Поиск городов, отелей, мест..." />
      </div>

      {query && (
        <div className={styles.filters}>
          <div className={styles.filterGroup}>
            <label htmlFor="country">Страна:</label>
            <select
              id="country"
              value={filters.country}
              onChange={(e) => handleFilterChange('country', e.target.value)}
            >
              <option value="">Все страны</option>
              {countries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>

          <div className={styles.filterGroup}>
            <label htmlFor="sortBy">Сортировка:</label>
            <select
              id="sortBy"
              value={filters.sortBy}
              onChange={(e) => handleFilterChange('sortBy', e.target.value)}
            >
              <option value="popularity">По популярности</option>
              <option value="name">По названию</option>
            </select>
          </div>
        </div>
      )}

      <div className={styles.results}>
        {loading ? (
          <div className={styles.loading}>
            <div className={styles.spinner}></div>
            Поиск мест...
          </div>
        ) : error ? (
          <div className={styles.error}>
            <p>Ошибка: {error}</p>
            <p className={styles.errorHint}>
              Попробуйте еще раз или проверьте подключение к интернету
            </p>
          </div>
        ) : filteredPlaces.length > 0 ? (
          <>
            <p className={styles.resultsCount}>
              Найдено мест: {filteredPlaces.length}
            </p>
            <div className={styles.placesGrid}>
              {filteredPlaces.map((place, index) => (
                <motion.div
                  key={place.xid || index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <PlaceCard place={place} />
                </motion.div>
              ))}
            </div>
          </>
        ) : query ? (
          <div className={styles.empty}>
            <p>Ничего не найдено по запросу "{query}"</p>
            <p className={styles.emptyHint}>
              Попробуйте другой запрос или используйте английские названия
            </p>
          </div>
        ) : (
          <div className={styles.empty}>
            <p>Введите запрос для поиска</p>
            <p className={styles.emptyHint}>
              Например: "Paris", "Eiffel Tower", "London"
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;

