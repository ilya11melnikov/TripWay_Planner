import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTrip } from '../../context/TripContext';
import PlaceCard from '../../components/Cards/PlaceCard/PlaceCard';
import { motion } from 'framer-motion';
import styles from './Favorites.module.scss';

const Favorites = () => {
  const navigate = useNavigate();
  const { favorites } = useTrip();

  return (
    <div className={styles.favorites}>
      <button className={styles.backBtn} onClick={() => navigate(-1)} aria-label="Назад">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div className={styles.header}>
        <h1 className={styles.title}>Избранное</h1>
        {favorites.length > 0 && (
          <p className={styles.count}>Найдено мест: {favorites.length}</p>
        )}
      </div>

      <div className={styles.content}>
        {favorites.length > 0 ? (
          <div className={styles.placesGrid}>
            {favorites.map((place, index) => (
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
        ) : (
          <div className={styles.empty}>
            <div className={styles.emptyIcon}>❤️</div>
            <p className={styles.emptyText}>У вас пока нет избранных мест</p>
            <p className={styles.emptyHint}>
              Добавляйте места в избранное, нажимая на иконку сердца на карточках мест
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;

