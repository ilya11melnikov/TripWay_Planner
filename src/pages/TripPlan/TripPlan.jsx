import React, { useState } from 'react';
import { useTrip } from '../../context/TripContext';
import TripDayBlock from '../../components/Cards/TripDayBlock/TripDayBlock';
import { motion } from 'framer-motion';
import Toast from '../../components/Toast/Toast';
import ConfirmDialog from '../../components/ConfirmDialog/ConfirmDialog';
import styles from './TripPlan.module.scss';

const TripPlan = () => {
  const { tripPlan, clearTripPlan, addNewDay } = useTrip();
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [confirmDialogVisible, setConfirmDialogVisible] = useState(false);
  
  const days = Object.keys(tripPlan).sort((a, b) => Number(a) - Number(b));
  const totalItems = Object.values(tripPlan).reduce((sum, day) => sum + day.length, 0);

  const handleClearPlan = () => {
    setConfirmDialogVisible(true);
  };

  const handleConfirmClear = () => {
    clearTripPlan();
    setToastMessage('План путешествия очищен');
    setToastVisible(true);
    setConfirmDialogVisible(false);
  };

  const handleCancelClear = () => {
    setConfirmDialogVisible(false);
  };

  const handleAddDay = () => {
    const newDay = addNewDay();
    setToastMessage(`Добавлен день ${newDay}`);
    setToastVisible(true);
  };

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
      <Toast
        message={toastMessage}
        isVisible={toastVisible}
        onClose={() => setToastVisible(false)}
        type="success"
      />
      <ConfirmDialog
        isVisible={confirmDialogVisible}
        title="Очистить план путешествия?"
        message="Вы уверены, что хотите очистить весь план путешествия? Это действие нельзя отменить."
        confirmText="Очистить"
        cancelText="Отмена"
        onConfirm={handleConfirmClear}
        onCancel={handleCancelClear}
        type="danger"
      />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={styles.header}
      >
        <div className={styles.headerTop}>
          <div>
            <h1 className={styles.title}>Мой план путешествия</h1>
            <p className={styles.subtitle}>
              Всего мест: {totalItems} | Дней: {days.length}
            </p>
          </div>
          <div className={styles.headerActions}>
            <button onClick={handleAddDay} className={styles.addDayBtn}>
              ➕ Добавить день
            </button>
            {totalItems > 0 && (
              <button onClick={handleClearPlan} className={styles.clearBtn}>
                🗑️ Очистить план
              </button>
            )}
          </div>
        </div>
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

