import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useTrip } from '../../context/TripContext';
import styles from './Header.module.scss';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { tripPlan } = useTrip();
  const location = useLocation();
  
  const tripItemsCount = Object.values(tripPlan).reduce((sum, day) => sum + day.length, 0);

  return (
    <header className={styles.header}>
      {/* Desktop: однострочный хедер */}
      <div className={styles.desktopContainer}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoIcon}>✈️</span>
          <span className={styles.logoText}>TripWay Planner</span>
        </Link>

        <nav className={styles.nav}>
          <Link 
            to="/" 
            className={`${styles.navLink} ${(location.pathname === '/' || location.pathname === '/home') ? styles.active : ''}`}
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
            className={`${styles.navLink} ${styles.tripLink} ${location.pathname === '/trip' ? styles.active : ''}`}
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

      {/* Mobile: двухрядный хедер */}
      <div className={styles.mobileTopRow}>
        <div className={styles.container}>
          <Link to="/" className={styles.logo}>
            <span className={styles.logoIcon}>✈️</span>
            <span className={styles.logoText}>TripWay Planner</span>
          </Link>

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
      </div>

      <div className={styles.mobileBottomRow}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <Link 
              to="/" 
              className={`${styles.navLink} ${(location.pathname === '/' || location.pathname === '/home') ? styles.active : ''}`}
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
              className={`${styles.navLink} ${styles.tripLink} ${location.pathname === '/trip' ? styles.active : ''}`}
            >
              Мой маршрут
              {tripItemsCount > 0 && (
                <span className={styles.badge}>{tripItemsCount}</span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

