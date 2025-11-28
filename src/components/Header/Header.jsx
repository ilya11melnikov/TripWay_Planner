import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useTrip } from '../../context/TripContext';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Header.module.scss';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { tripPlan, favorites } = useTrip();
  const location = useLocation();
  
  const tripItemsCount = Object.values(tripPlan).reduce((sum, day) => sum + day.length, 0);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/home" className={styles.logo}>
          <span className={styles.logoIcon}>✈️</span>
          <span className={styles.logoText}>TripWay Planner</span>
        </Link>

        <nav className={styles.nav}>
          <Link 
            to="/home" 
            className={`${styles.navLink} ${location.pathname === '/home' ? styles.active : ''}`}
          >
            Главная
          </Link>
          <Link 
            to="/search" 
            className={`${styles.navLink} ${location.pathname === '/search' ? styles.active : ''}`}
          >
            Поиск
          </Link>
          <Link 
            to="/trip" 
            className={`${styles.navLink} ${location.pathname === '/trip' ? styles.active : ''}`}
          >
            Мой маршрут
            {tripItemsCount > 0 && (
              <span className={styles.badge}>{tripItemsCount}</span>
            )}
          </Link>
        </nav>

        <div className={styles.actions}>
          <button 
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
      
    </header>
  );
};

export default Header;

