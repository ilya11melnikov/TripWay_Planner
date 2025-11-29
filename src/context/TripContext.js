import React, { createContext, useContext, useState, useEffect } from 'react';

const TripContext = createContext();

export const useTrip = () => {
  const context = useContext(TripContext);
  if (!context) {
    throw new Error('useTrip must be used within TripProvider');
  }
  return context;
};

export const TripProvider = ({ children }) => {
  const [tripPlan, setTripPlan] = useState(() => {
    const saved = localStorage.getItem('tripPlan');
    return saved ? JSON.parse(saved) : {};
  });

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('tripPlan', JSON.stringify(tripPlan));
  }, [tripPlan]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToTrip = (item, day) => {
    setTripPlan(prev => {
      const newPlan = { ...prev };
      if (!newPlan[day]) {
        newPlan[day] = [];
      }
      if (!newPlan[day].find(i => i.xid === item.xid)) {
        newPlan[day] = [...newPlan[day], item];
      }
      return newPlan;
    });
  };

  const removeFromTrip = (itemId, day) => {
    setTripPlan(prev => {
      const newPlan = { ...prev };
      if (newPlan[day]) {
        newPlan[day] = newPlan[day].filter(item => item.xid !== itemId);
        if (newPlan[day].length === 0) {
          delete newPlan[day];
        }
      }
      return newPlan;
    });
  };

  const moveItem = (itemId, fromDay, toDay, index) => {
    setTripPlan(prev => {
      const newPlan = { ...prev };
      const item = newPlan[fromDay]?.find(i => i.xid === itemId);
      if (item) {
        newPlan[fromDay] = newPlan[fromDay].filter(i => i.xid !== itemId);
        if (newPlan[fromDay].length === 0) {
          delete newPlan[fromDay];
        }
        if (!newPlan[toDay]) {
          newPlan[toDay] = [];
        }
        newPlan[toDay].splice(index, 0, item);
      }
      return newPlan;
    });
  };

  const toggleFavorite = (item) => {
    setFavorites(prev => {
      const exists = prev.find(f => f.xid === item.xid);
      if (exists) {
        return prev.filter(f => f.xid !== item.xid);
      } else {
        return [...prev, item];
      }
    });
  };

  const isFavorite = (xid) => {
    return favorites.some(f => f.xid === xid);
  };

  const isInTrip = (xid) => {
    for (const day in tripPlan) {
      if (tripPlan[day].some(item => item.xid === xid)) {
        return Number(day);
      }
    }
    return null;
  };

  const clearTripPlan = () => {
    setTripPlan({});
  };

  const getMaxDay = () => {
    const days = Object.keys(tripPlan).map(Number);
    return days.length > 0 ? Math.max(...days) : 0;
  };

  const addNewDay = () => {
    const maxDay = getMaxDay();
    const newDay = maxDay + 1;
    setTripPlan(prev => ({
      ...prev,
      [newDay]: []
    }));
    return newDay;
  };

  return (
    <TripContext.Provider value={{
      tripPlan,
      favorites,
      addToTrip,
      removeFromTrip,
      moveItem,
      toggleFavorite,
      isFavorite,
      isInTrip,
      clearTripPlan,
      getMaxDay,
      addNewDay,
      setTripPlan
    }}>
      {children}
    </TripContext.Provider>
  );
};

