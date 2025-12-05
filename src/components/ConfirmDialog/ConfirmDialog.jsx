import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ConfirmDialog.module.scss';

const ConfirmDialog = ({ 
  isVisible, 
  title = 'Подтвердите действие', 
  message, 
  confirmText = 'OK', 
  cancelText = 'Отмена',
  onConfirm, 
  onCancel,
  type = 'warning'
}) => {
  useEffect(() => {
    if (isVisible) {
      // Сохраняем текущую позицию прокрутки
      const scrollY = window.scrollY;
      
      // Блокируем прокрутку фона (для всех устройств)
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      
      // Также блокируем на html для надежности
      document.documentElement.style.overflow = 'hidden';
      
      // Закрытие по Escape
      const handleEscape = (e) => {
        if (e.key === 'Escape') {
          onCancel();
        }
      };
      
      document.addEventListener('keydown', handleEscape);
      
      return () => {
        // Восстанавливаем прокрутку
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.documentElement.style.overflow = '';
        
        // Восстанавливаем позицию прокрутки
        window.scrollTo(0, scrollY);
        
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, [isVisible, onCancel]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={styles.overlay}
            onClick={onCancel}
          />
          
          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className={styles.dialog}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.header}>
              <div className={`${styles.icon} ${styles[type]}`}>
                {type === 'warning' ? '⚠️' : type === 'danger' ? '🗑️' : '❓'}
              </div>
              <h2 className={styles.title}>{title}</h2>
            </div>
            
            <div className={styles.content}>
              <p className={styles.message}>{message}</p>
            </div>
            
            <div className={styles.actions}>
              <button
                onClick={onCancel}
                className={styles.cancelBtn}
              >
                {cancelText}
              </button>
              <button
                onClick={onConfirm}
                className={`${styles.confirmBtn} ${styles[type]}`}
              >
                {confirmText}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ConfirmDialog;

