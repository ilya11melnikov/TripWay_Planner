import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { getPopularPlaces } from '../../services/api';
import PlaceCard from '../../components/Cards/PlaceCard/PlaceCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import { motion } from 'framer-motion';
import styles from './Home.module.scss';

const Home = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { data: popularPlaces, loading, error } = useFetch(() => getPopularPlaces(12));

  const categories = [
    { id: 'all', name: 'Все', icon: '🌍' },
    { id: 'cities', name: 'Города', icon: '🏙️' },
    { id: 'hotels', name: 'Отели', icon: '🏨' },
    { id: 'places', name: 'Места', icon: '📍' }
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    navigate(`/search?category=${category}`);
  };

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.heroContent}
        >
          <h1 className={styles.heroTitle}>
            Планируйте свои идеальные путешествия
          </h1>
          <p className={styles.heroSubtitle}>
            Откройте для себя удивительные места по всему миру и создайте незабываемый маршрут
          </p>
        </motion.div>

        <div className={styles.searchWrapper}>
          <SearchBar />
        </div>

        <div className={styles.categories}>
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`${styles.categoryBtn} ${selectedCategory === category.id ? styles.active : ''}`}
              onClick={() => handleCategoryClick(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={styles.categoryIcon}>{category.icon}</span>
              <span className={styles.categoryName}>{category.name}</span>
            </motion.button>
          ))}
        </div>
      </section>

      <section className={styles.recommendations}>
        <h2 className={styles.sectionTitle}>Рекомендации для вас</h2>
        
        {loading ? (
          <div className={styles.loading}>
            <div className={styles.spinner}></div>
            Загрузка интересных мест...
          </div>
        ) : error ? (
          <div className={styles.empty}>
            <p>Ошибка: {error}</p>
            <p className={styles.emptyHint}>
              Проверьте консоль браузера для деталей или попробуйте обновить страницу
            </p>
          </div>
        ) : (
          <div className={styles.placesGrid}>
            {popularPlaces && popularPlaces.length > 0 ? (
              popularPlaces.map((place, index) => (
                <motion.div
                  key={place.xid || index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <PlaceCard place={place} />
                </motion.div>
              ))
            ) : (
              <div className={styles.empty}>
                <p>Места не найдены</p>
                <p className={styles.emptyHint}>
                  Попробуйте использовать поиск выше или обновить страницу
                </p>
                <p className={styles.emptyHint} style={{ fontSize: '0.85rem', marginTop: '10px' }}>
                  Откройте консоль браузера (F12) для диагностики
                </p>
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;

