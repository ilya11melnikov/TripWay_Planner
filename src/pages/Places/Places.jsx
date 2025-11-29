import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockPlaces } from '../../data/mockPlaces';
import PlaceCard from '../../components/Cards/PlaceCard/PlaceCard';
import { motion } from 'framer-motion';
import styles from './Places.module.scss';

const Places = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState('name');

  const sortedPlaces = [...mockPlaces].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name, 'ru');
    } else if (sortBy === 'rating') {
      return (b.rate || 0) - (a.rate || 0);
    }
    return 0;
  });

  return (
    <div className={styles.places}>
      <button className={styles.backBtn} onClick={() => navigate(-1)} aria-label="Назад">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div className={styles.header}>
        <h1 className={styles.title}>Все места</h1>
        <p className={styles.count}>Всего мест: {mockPlaces.length}</p>
      </div>

      <div className={styles.filters}>
        <div className={styles.filterGroup}>
          <label htmlFor="sortBy">Сортировка:</label>
          <select
            id="sortBy"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="name">По названию</option>
            <option value="rating">По рейтингу</option>
          </select>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.placesGrid}>
          {sortedPlaces.map((place, index) => (
            <motion.div
              key={place.xid || index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
            >
              <PlaceCard place={place} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Places;

