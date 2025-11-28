import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3 className={styles.title}>TripWay Planner</h3>
            <p className={styles.description}>
              Онлайн-платформа для планирования идеальных путешествий
            </p>
          </div>
          
          <div className={styles.section}>
            <h4 className={styles.subtitle}>Быстрые ссылки</h4>
            <ul className={styles.links}>
              <li><a href="/home">Главная</a></li>
              <li><a href="/search">Поиск</a></li>
              <li><a href="/trip">Мой маршрут</a></li>
            </ul>
          </div>
          
          <div className={styles.section}>
            <h4 className={styles.subtitle}>О проекте</h4>
            <p className={styles.text}>
              Использует OpenTripMap API для поиска мест и направлений
            </p>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} TripWay Planner. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

