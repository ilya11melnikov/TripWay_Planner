import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Toast.module.scss';

const Toast = ({ message, isVisible, onClose, type = 'success' }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Автоматически исчезает через 3 секунды

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className={`${styles.toast} ${styles[type]}`}
        >
          <div className={styles.icon}>
            {type === 'success' ? '✓' : '✕'}
          </div>
          <div className={styles.message}>{message}</div>
          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Закрыть"
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;

