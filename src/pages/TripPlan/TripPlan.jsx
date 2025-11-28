import React from 'react';
import { useTrip } from '../../context/TripContext';
import TripDayBlock from '../../components/Cards/TripDayBlock/TripDayBlock';
import { motion } from 'framer-motion';
import styles from './TripPlan.module.scss';

const TripPlan = () => {
  const { tripPlan } = useTrip();
  
  const days = Object.keys(tripPlan).sort((a, b) => Number(a) - Number(b));
  const totalItems = Object.values(tripPlan).reduce((sum, day) => sum + day.length, 0);

  if (totalItems === 0) {
    return (
      <div className={styles.tripPlan}>
        <div className={styles.empty}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.emptyContent}
          >
            <h2>Ваш план путешествия пуст</h2>
            <p>Начните добавлять места в свой маршрут!</p>
            <p className={styles.hint}>
              💡 Найдите интересные места на странице поиска и добавьте их в план
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.tripPlan}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={styles.header}
      >
        <h1 className={styles.title}>Мой план путешествия</h1>
        <p className={styles.subtitle}>
          Всего мест: {totalItems} | Дней: {days.length}
        </p>
      </motion.div>

      <div className={styles.daysContainer}>
        {days.map((day) => (
          <motion.div
            key={day}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <TripDayBlock day={day} items={tripPlan[day]} />
          </motion.div>
        ))}
      </div>

      <div className={styles.help}>
        <h3>Как использовать:</h3>
        <ul>
          <li>🖱️ Перетащите карточки между днями для изменения порядка</li>
          <li>✕ Нажмите на крестик для удаления места из плана</li>
          <li>➕ Добавляйте новые места со страницы деталей объекта</li>
        </ul>
      </div>
    </div>
  );
};

export default TripPlan;

