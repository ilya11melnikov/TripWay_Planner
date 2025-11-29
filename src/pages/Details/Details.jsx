import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { getPlaceDetails } from '../../services/api';
import { useTrip } from '../../context/TripContext';
import { motion } from 'framer-motion';
import Toast from '../../components/Toast/Toast';
import styles from './Details.module.scss';

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToTrip, removeFromTrip, toggleFavorite, isFavorite, isInTrip, getMaxDay } = useTrip();
  const [selectedDay, setSelectedDay] = useState(1);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

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

  // Обновляем selectedDay при загрузке места
  useEffect(() => {
    if (place) {
      const existingDay = isInTrip(place.xid);
      if (existingDay) {
        setSelectedDay(existingDay);
      } else {
        const maxDay = getMaxDay();
        setSelectedDay(maxDay > 0 ? maxDay + 1 : 1);
      }
    }
  }, [place, isInTrip, getMaxDay]);

  const handleAddToTrip = () => {
    if (place) {
      const existingDay = isInTrip(place.xid);
      if (existingDay) {
        // Если место уже в плане, перемещаем в выбранный день
        if (existingDay !== selectedDay) {
          // Удаляем из старого дня и добавляем в новый
          removeFromTrip(place.xid, existingDay);
          addToTrip(place, selectedDay);
          setToastMessage(`Перемещено в день ${selectedDay}!`);
        } else {
          setToastMessage(`Место уже в плане на день ${selectedDay}!`);
        }
      } else {
        addToTrip(place, selectedDay);
        setToastMessage(`Добавлено в план путешествия на день ${selectedDay}!`);
      }
      setToastVisible(true);
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
  const tripDay = place ? isInTrip(place.xid) : null;
  
  // Генерируем список дней для select (до максимального + 5 дополнительных)
  const maxDay = getMaxDay();
  const availableDays = Array.from({ length: Math.max(10, maxDay + 5) }, (_, i) => i + 1);

  return (
    <div className={styles.details}>
      <Toast
        message={toastMessage}
        isVisible={toastVisible}
        onClose={() => setToastVisible(false)}
        type="success"
      />
      <button className={styles.backBtn} onClick={() => navigate(-1)} aria-label="Назад">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link to="/home">Главная</Link>
        <span> / </span>
        <Link to="/places">Места</Link>
        <span> / </span>
        <span>{place?.name || 'Загрузка...'}</span>
      </div>

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

          {place.point && (() => {
            // Получаем API ключ из переменных окружения
            const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || 'AIzaSyBeCD42Imf0ZnOvuzBh8EWwSsvJIciZDk0';
            
            // Обрабатываем разные форматы координат
            let lat, lon;
            if (place.point.lat !== undefined && place.point.lon !== undefined) {
              // Формат: {lat: 48.8584, lon: 2.2945}
              lat = place.point.lat;
              lon = place.point.lon;
            } else if (Array.isArray(place.point) && place.point.length >= 2) {
              // Формат: [lon, lat] (GeoJSON формат)
              lon = place.point[0];
              lat = place.point[1];
            } else {
              return null;
            }
            
            if (!lat || !lon || isNaN(lat) || isNaN(lon)) {
              console.warn('Invalid coordinates:', place.point);
              return null;
            }
            
            // Правильный формат URL для Google Maps Embed API
            // Формат: https://www.google.com/maps/embed/v1/place?key=API_KEY&q=lat,lon
            const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${lat},${lon}&zoom=15`;
            
            return (
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
                    src={mapUrl}
                    title="Карта расположения"
                  />
                </div>
              </div>
            );
          })()}

          <div className={styles.actions}>
            {tripDay ? (
              <div className={styles.inTripInfo}>
                <div className={styles.inTripBadge}>
                  <span className={styles.badgeIcon}>📅</span>
                  <span>Уже в плане на день {tripDay}</span>
                </div>
                <div className={styles.addToTrip}>
                  <label htmlFor="daySelect">Переместить в день:</label>
                  <select
                    id="daySelect"
                    value={selectedDay}
                    onChange={(e) => setSelectedDay(Number(e.target.value))}
                  >
                    {availableDays.map(day => (
                      <option key={day} value={day}>День {day}</option>
                    ))}
                  </select>
                  <button onClick={handleAddToTrip} className={styles.addBtn}>
                    🔄 Переместить
                  </button>
                </div>
              </div>
            ) : (
              <div className={styles.addToTrip}>
                <label htmlFor="daySelect">Добавить в план (День):</label>
                <select
                  id="daySelect"
                  value={selectedDay}
                  onChange={(e) => setSelectedDay(Number(e.target.value))}
                >
                  {availableDays.map(day => (
                    <option key={day} value={day}>День {day}</option>
                  ))}
                </select>
                <button onClick={handleAddToTrip} className={styles.addBtn}>
                  ➕ Добавить в план путешествия
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

