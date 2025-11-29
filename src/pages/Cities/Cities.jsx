import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockPlaces } from '../../data/mockPlaces';
import PlaceCard from '../../components/Cards/PlaceCard/PlaceCard';
import { motion } from 'framer-motion';
import styles from './Cities.module.scss';

const Cities = () => {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState(null);
  const placesSectionRef = useRef(null);

  // Получаем все уникальные города с количеством мест
  const cities = useMemo(() => {
    const cityMap = new Map();
    
    mockPlaces.forEach(place => {
      const cityName = place.address?.city;
      if (cityName) {
        if (cityMap.has(cityName)) {
          cityMap.set(cityName, cityMap.get(cityName) + 1);
        } else {
          cityMap.set(cityName, 1);
        }
      }
    });

    return Array.from(cityMap.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => a.name.localeCompare(b.name, 'ru'));
  }, []);

  // Фильтруем места по выбранному городу
  const filteredPlaces = useMemo(() => {
    if (!selectedCity) return [];
    return mockPlaces.filter(place => place.address?.city === selectedCity);
  }, [selectedCity]);

  const handleCityClick = (cityName) => {
    const isOpening = selectedCity !== cityName;
    setSelectedCity(selectedCity === cityName ? null : cityName);
    
    // Прокручиваем к местам только если открываем новый город
    if (isOpening) {
      // Небольшая задержка, чтобы секция успела отрендериться
      setTimeout(() => {
        if (placesSectionRef.current) {
          const element = placesSectionRef.current;
          const headerOffset = 100; // Высота хедера + отступ
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  // Функция для правильного склонения
  const getPlacesWord = (count) => {
    if (count === 1) return 'место';
    if (count >= 2 && count <= 4) return 'места';
    return 'мест';
  };

  return (
    <div className={styles.cities}>
      <button className={styles.backBtn} onClick={() => navigate(-1)} aria-label="Назад">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div className={styles.header}>
        <h1 className={styles.title}>Города</h1>
        <p className={styles.count}>Всего городов: {cities.length}</p>
      </div>

      <div className={styles.content}>
        <div className={styles.citiesGrid}>
          {cities.map((city, index) => (
            <motion.button
              key={city.name}
              className={`${styles.cityCard} ${selectedCity === city.name ? styles.active : ''}`}
              onClick={() => handleCityClick(city.name)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={styles.cityIcon}>🏙️</div>
              <div className={styles.cityName}>{city.name}</div>
              <div className={styles.cityCount}>{city.count} {getPlacesWord(city.count)}</div>
            </motion.button>
          ))}
        </div>

        {selectedCity && (
          <motion.div
            ref={placesSectionRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.placesSection}
          >
            <div className={styles.placesHeader}>
              <h2 className={styles.placesTitle}>
                Места в городе {selectedCity}
              </h2>
              <button
                className={styles.closeBtn}
                onClick={() => setSelectedCity(null)}
              >
                ✕
              </button>
            </div>
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
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Cities;

