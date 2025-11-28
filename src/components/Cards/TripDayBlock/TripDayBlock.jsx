import React from 'react';
import { useDrop } from 'react-dnd';
import { useTrip } from '../../../context/TripContext';
import TripItemCard from '../TripItemCard/TripItemCard';
import styles from './TripDayBlock.module.scss';

const TripDayBlock = ({ day, items }) => {
  const { moveItem, addToTrip } = useTrip();

  const [{ isOver }, drop] = useDrop({
    accept: 'TRIP_ITEM',
    drop: (draggedItem) => {
      if (draggedItem.day !== day) {
        moveItem(draggedItem.xid, draggedItem.day, day, items.length);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div 
      ref={drop}
      className={`${styles.dayBlock} ${isOver ? styles.isOver : ''}`}
    >
      <h3 className={styles.dayTitle}>День {day}</h3>
      <div className={styles.items}>
        {items.length > 0 ? (
          items.map((item, index) => (
            <TripItemCard
              key={item.xid || index}
              item={item}
              day={day}
              index={index}
            />
          ))
        ) : (
          <div className={styles.empty}>
            <p>Перетащите сюда места для этого дня</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TripDayBlock;

