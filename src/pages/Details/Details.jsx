import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { getPlaceDetails } from '../../services/api';
import { useTrip } from '../../context/TripContext';
import { motion } from 'framer-motion';
import styles from './Details.module.scss';

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToTrip, toggleFavorite, isFavorite } = useTrip();
  const [selectedDay, setSelectedDay] = useState(1);

  const { data: place, loading, error } = useFetch(
    () => getPlaceDetails(id),
    [id]
  );

  useEffect(() => {
    if (place && window.Fancybox) {
      window.Fancybox.bind('[data-fancybox="gallery"]', {
        Thumbs: {
          autoStart: true,
        },
      });

      return () => {
        window.Fancybox.unbind('[data-fancybox="gallery"]');
      };
    }
  }, [place]);

  const handleAddToTrip = () => {
    if (place) {
      addToTrip(place, selectedDay);
      alert(`Добавлено в план путешествия на день ${selectedDay}!`);
    }
  };

  const getImageUrl = (index = 0) => {
    if (place?.images && place.images[index]?.source?.source) {
      return place.images[index].source.source;
    }
    if (place?.preview?.source) {
      return place.preview.source;
    }
    return 'https://via.placeholder.com/800x600?text=No+Image';
  };

  const getImages = () => {
    if (place?.images && place.images.length > 0) {
      return place.images.map(img => img.source?.source).filter(Boolean);
    }
    if (place?.preview?.source) {
      return [place.preview.source];
    }
    return [];
  };

  if (loading) {
    return (
      <div className={styles.details}>
        <div className={styles.loading}>Загрузка...</div>
      </div>
    );
  }

  if (error || !place) {
    return (
      <div className={styles.details}>
        <div className={styles.error}>
          <p>Ошибка загрузки данных</p>
          <button onClick={() => navigate('/home')}>Вернуться на главную</button>
        </div>
      </div>
    );
  }

  const images = getImages();
  const favorite = isFavorite(place.xid);

  return (
    <div className={styles.details}>
      <button className={styles.backBtn} onClick={() => navigate(-1)}>
        ← Назад
      </button>

      <div className={styles.content}>
        <div className={styles.mainImage}>
          <img 
            src={getImageUrl(0)} 
            alt={place.name}
            className={styles.heroImage}
          />
          <button
            className={`${styles.favoriteBtn} ${favorite ? styles.active : ''}`}
            onClick={() => toggleFavorite(place)}
          >
            {favorite ? '❤️' : '🤍'}
          </button>
        </div>

        <div className={styles.info}>
          <h1 className={styles.title}>{place.name}</h1>
          
          {place.address && (
            <div className={styles.address}>
              📍 {[
                place.address.city,
                place.address.state,
                place.address.country
              ].filter(Boolean).join(', ')}
            </div>
          )}

          {place.rate && (
            <div className={styles.rating}>
              ⭐ {place.rate} / 5.0
            </div>
          )}

          {place.wikipedia_extracts?.text && (
            <div className={styles.description}>
              <h2>Описание</h2>
              <p>{place.wikipedia_extracts.text}</p>
            </div>
          )}

          {place.kinds && (
            <div className={styles.categories}>
              <h3>Категории</h3>
              <div className={styles.tags}>
                {place.kinds.split(',').slice(0, 5).map((kind, index) => (
                  <span key={index} className={styles.tag}>
                    {kind.replace(/_/g, ' ')}
                  </span>
                ))}
              </div>
            </div>
          )}

          {images.length > 0 && (
            <div className={styles.gallery}>
              <h3>Галерея</h3>
              <div className={styles.galleryGrid}>
                {images.slice(0, 6).map((img, index) => (
                  <a
                    key={index}
                    href={img}
                    data-fancybox="gallery"
                    data-src={img}
                  >
                    <img src={img} alt={`${place.name} ${index + 1}`} />
                  </a>
                ))}
              </div>
            </div>
          )}

          {place.point && (
            <div className={styles.mapSection}>
              <h3>Расположение на карте</h3>
              <div className={styles.mapContainer}>
                <iframe
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY || 'AIzaSyBFw0Qbyq9zTFTd-tUY6dE_M0vGzNL5KZY'}&q=${place.point.lat},${place.point.lon}&zoom=15`}
                />
              </div>
            </div>
          )}

          <div className={styles.actions}>
            <div className={styles.addToTrip}>
              <label htmlFor="daySelect">Добавить в план (День):</label>
              <select
                id="daySelect"
                value={selectedDay}
                onChange={(e) => setSelectedDay(Number(e.target.value))}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(day => (
                  <option key={day} value={day}>День {day}</option>
                ))}
              </select>
              <button onClick={handleAddToTrip} className={styles.addBtn}>
                ➕ Добавить в план путешествия
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

