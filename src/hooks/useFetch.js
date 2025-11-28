import { useState, useEffect } from 'react';

export const useFetch = (fetchFunction, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    let timeoutId = null;
    
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Add timeout for long requests
        timeoutId = setTimeout(() => {
          if (isMounted) {
            setLoading(false);
            setError('Время ожидания истекло. Проверьте подключение к интернету.');
          }
        }, 30000); // 30 seconds timeout
        
        const result = await fetchFunction();
        
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        
        if (isMounted) {
          setData(result);
          setLoading(false);
        }
      } catch (err) {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        if (isMounted) {
          setError(err.message || 'Произошла ошибка при загрузке данных');
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, dependencies);

  return { data, loading, error };
};

