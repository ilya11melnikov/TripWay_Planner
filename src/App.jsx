import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Details from './pages/Details/Details';
import TripPlan from './pages/TripPlan/TripPlan';
import Favorites from './pages/Favorites/Favorites';
import Places from './pages/Places/Places';
import Cities from './pages/Cities/Cities';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <ScrollToTop />
      <Header />
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/item/:id" element={<Details />} />
          <Route path="/trip" element={<TripPlan />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/places" element={<Places />} />
          <Route path="/cities" element={<Cities />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

