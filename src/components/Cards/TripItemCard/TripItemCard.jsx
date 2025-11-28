import React from 'react';
import { useDrag } from 'react-dnd';
import { useTrip } from '../../../context/TripContext';
import { Link } from 'react-router-dom';
import styles from './TripItemCard.module.scss';

const TripItemCard = ({ item, day, index }) => {
  const { removeFromTrip } = useTrip();

  const [{ isDragging }, drag] = useDrag({
    type: 'TRIP_ITEM',
    item: { xid: item.xid, day, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const getImageUrl = () => {
    if (item.preview?.source) return item.preview.source;
    if (item.images && item.images[0]?.source?.source) return item.images[0].source.source;
    return 'https://via.placeholder.com/200x150?text=No+Image';
  };

  const handleRemove = (e) => {
    e.preventDefault();
    e.stopPropagation();
    removeFromTrip(item.xid, day);
  };

  return (
    <div
      ref={drag}
      className={`${styles.card} ${isDragging ? styles.dragging : ''}`}
    >
      <Link to={`/item/${item.xid}`} className={styles.link}>
        <div className={styles.imageWrapper}>
          <img 
            src={getImageUrl()} 
            alt={item.name}
            className={styles.image}
          />
          <button
            className={styles.removeBtn}
            onClick={handleRemove}
            aria-label="Remove from trip"
          >
            ✕
          </button>
        </div>
        <div className={styles.content}>
          <h4 className={styles.title}>{item.name}</h4>
          {item.address && (
            <p className={styles.address}>
              {item.address.city || item.address.state || ''}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default TripItemCard;

