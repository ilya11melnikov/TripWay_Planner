import React from 'react';
import { Link } from 'react-router-dom';
import { useTrip } from '../../../context/TripContext';
import { motion } from 'framer-motion';
import styles from './PlaceCard.module.scss';

const PlaceCard = ({ place, showCategory = false }) => {
  const { toggleFavorite, isFavorite } = useTrip();
  const favorite = isFavorite(place.xid);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(place);
  };

  const getImageUrl = () => {
    if (place.preview?.source) return place.preview.source;
    if (place.images && place.images[0]?.source?.source) return place.images[0].source.source;
    return 'https://via.placeholder.com/400x300?text=No+Image';
  };

  const getRating = () => {
    if (place.rate) return place.rate;
    if (place.rating) return place.rating;
    return Math.random() * 2 + 3; // Random rating 3-5 if not available
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={styles.card}
    >
      <Link to={`/item/${place.xid}`} className={styles.link}>
        <div className={styles.imageWrapper}>
          <img 
            src={getImageUrl()} 
            alt={place.name || 'Place'}
            className={styles.image}
            loading="lazy"
          />
          <button
            className={`${styles.favoriteBtn} ${favorite ? styles.active : ''}`}
            onClick={handleFavoriteClick}
            aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            {favorite ? '❤️' : '🤍'}
          </button>
          {place.wikipedia_extracts && (
            <span className={styles.category}>
              {place.kinds?.split(',')[0]?.replace(/_/g, ' ') || 'Place'}
            </span>
          )}
        </div>
        
        <div className={styles.content}>
          <h3 className={styles.title}>{place.name || 'Unknown Place'}</h3>
          {place.address && (
            <p className={styles.address}>
              📍 {place.address.city || place.address.state || place.address.country || 'Unknown'}
            </p>
          )}
          {place.wikipedia_extracts?.text && (
            <p className={styles.description}>
              {place.wikipedia_extracts.text.substring(0, 100)}...
            </p>
          )}
          <div className={styles.footer}>
            <div className={styles.rating}>
              ⭐ {getRating().toFixed(1)}
            </div>
            <span className={styles.more}>Подробнее →</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PlaceCard;

