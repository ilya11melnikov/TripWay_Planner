import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Details from './pages/Details/Details';
import TripPlan from './pages/TripPlan/TripPlan';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/item/:id" element={<Details />} />
          <Route path="/trip" element={<TripPlan />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

