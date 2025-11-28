// OpenTripMap API Service - Оптимизированная версия
// Рекомендации используют mock данные, API только для поиска
import { mockPlaces, searchMockPlaces, getPopularMockPlaces, getMockPlaceById } from '../data/mockPlaces';

// Используем прокси для обхода CORS в development
const API_BASE = process.env.NODE_ENV === 'production' 
  ? 'https://api.opentripmap.io/0.1/en'
  : '/api/opentrip/0.1/en';

// API Key
const API_KEY = process.env.REACT_APP_OPENTRIP_API_KEY || '5ae2e3f221c38a28845f05b6a0285b280bb5d98af2da24c985fef84b';

// Кэш для избежания повторных запросов
const cache = new Map();
const CACHE_TTL = 10 * 60 * 1000; // 10 минут кэш

// Helper для кэширования
const getCached = (key) => {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.data;
  }
  return null;
};

const setCached = (key, data) => {
  cache.set(key, { data, timestamp: Date.now() });
};

// Helper to check if response is valid JSON
const parseJSON = async (response) => {
  const text = await response.text();
  try {
    return JSON.parse(text);
  } catch (e) {
    console.error('Invalid JSON response:', text.substring(0, 200));
    throw new Error(`Invalid JSON response: ${text.substring(0, 100)}`);
  }
};

// Helper function to get place details by xid
export const getPlaceDetails = async (xid) => {
  // Проверяем кэш
  const cacheKey = `place_${xid}`;
  const cached = getCached(cacheKey);
  if (cached) {
    return cached;
  }

  // Проверяем mock данные
  const mockPlace = getMockPlaceById(xid);
  if (mockPlace) {
    return mockPlace;
  }

  try {
    const url = `${API_BASE}/places/xid/${xid}?apikey=${API_KEY}`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });
    
    if (!response.ok) {
      console.error('Place details API error:', response.status);
      return mockPlace || mockPlaces[0];
    }
    
    const data = await parseJSON(response);
    
    // Get images for the place
    let images = [];
    try {
      const imagesUrl = `${API_BASE}/places/xid/${xid}/images?apikey=${API_KEY}`;
      const imagesResponse = await fetch(imagesUrl, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });
      if (imagesResponse.ok) {
        const imagesData = await parseJSON(imagesResponse);
        images = imagesData.images || [];
      }
    } catch (e) {
      // Игнорируем ошибки изображений
    }
    
    const result = {
      ...data,
      images: images,
      preview: images[0]?.source?.source || data.preview?.source || ''
    };
    
    // Сохраняем в кэш
    setCached(cacheKey, result);
    
    return result;
  } catch (error) {
    console.error('Error getting place details:', error.message);
    return mockPlace || mockPlaces[0];
  }
};

// Поиск мест - использует реальный API с двумя методами (geoname + autosuggest)
export const searchPlaces = async (query, category = '', limit = 20) => {
  try {
    if (!query || query.trim().length === 0) {
      return [];
    }

    const searchTerm = query.trim();

    // Проверяем кэш
    const cacheKey = `search_${searchTerm}_${limit}`;
    const cached = getCached(cacheKey);
    if (cached) {
      console.log('Using cached search results');
      return cached;
    }

    let places = [];
    
    // Метод 1: Попробуем geoname для поиска координат города
    try {
      const geonameUrl = `${API_BASE}/places/geoname?name=${encodeURIComponent(searchTerm)}&apikey=${API_KEY}`;
      const geonameResponse = await fetch(geonameUrl, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });
      
      if (geonameResponse.ok) {
        const geonameData = await parseJSON(geonameResponse);
        if (geonameData && geonameData.lat && geonameData.lon) {
          // Нашли город, ищем nearby places
          const nearbyUrl = `${API_BASE}/places/radius?radius=10000&lon=${geonameData.lon}&lat=${geonameData.lat}&limit=${limit}&apikey=${API_KEY}`;
          const nearbyResponse = await fetch(nearbyUrl, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
            },
          });
          
          if (nearbyResponse.ok) {
            const nearbyData = await parseJSON(nearbyResponse);
            if (nearbyData && nearbyData.features && nearbyData.features.length > 0) {
              places = nearbyData.features
                .filter(f => f.properties && f.properties.xid && (f.properties.rate || 0) >= 2)
                .sort((a, b) => (b.properties.rate || 0) - (a.properties.rate || 0))
                .slice(0, limit);
            }
          }
        }
      }
    } catch (e) {
      console.log('Geoname search failed, trying autosuggest...');
    }
    
    // Метод 2: Если не нашли через geoname, пробуем autosuggest
    if (places.length === 0) {
      try {
        const autosuggestUrl = `${API_BASE}/places/autosuggest?name=${encodeURIComponent(searchTerm)}&radius=100000&lon=0&lat=0&rate=2&limit=${limit}&apikey=${API_KEY}`;
        
        const autosuggestResponse = await fetch(autosuggestUrl, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          },
        });
        
        if (!autosuggestResponse.ok) {
          // При любой ошибке (500, 429, etc) тихо переключаемся на mock данные
          const mockResults = searchMockPlaces(searchTerm).slice(0, limit);
          setCached(cacheKey, mockResults);
          return mockResults;
        }
        
        const autosuggestData = await parseJSON(autosuggestResponse);
        
        if (autosuggestData && autosuggestData.features && autosuggestData.features.length > 0) {
          places = autosuggestData.features
            .filter(f => f.properties && f.properties.xid && (f.properties.rate || 0) >= 2)
            .sort((a, b) => (b.properties.rate || 0) - (a.properties.rate || 0))
            .slice(0, limit);
        }
      } catch (e) {
        // Тихая обработка ошибок - просто используем mock
        const mockResults = searchMockPlaces(searchTerm).slice(0, limit);
        setCached(cacheKey, mockResults);
        return mockResults;
      }
    }
    
    // Если ничего не нашли, используем mock (тихо, без ошибок)
    if (places.length === 0) {
      const mockResults = searchMockPlaces(searchTerm).slice(0, limit);
      setCached(cacheKey, mockResults);
      return mockResults;
    }

    // Преобразуем features в места
    const formattedPlaces = places.map(feature => {
      const props = feature.properties;
      const coords = feature.geometry?.coordinates || [];
      
      return {
        xid: props.xid,
        name: props.name || 'Unknown Place',
        address: {
          city: props.district || props.city || '',
          country: props.country || '',
          state: props.state || ''
        },
        wikipedia_extracts: {
          text: props.wikipedia || props.wikidata || `Интересное место: ${props.name}`
        },
        rate: props.rate || 0,
        kinds: props.kinds || '',
        point: {
          lat: coords[1] || 0,
          lon: coords[0] || 0
        },
        preview: {
          source: props.preview?.source || ''
        },
        images: []
      };
    });
    
    // Загружаем детали только для топ-3 результатов (чтобы не превысить лимит)
    for (let i = 0; i < Math.min(3, formattedPlaces.length); i++) {
      try {
        const details = await getPlaceDetails(formattedPlaces[i].xid);
        if (details && details.name) {
          formattedPlaces[i] = {
            ...formattedPlaces[i],
            ...details,
            name: details.name,
            images: details.images || formattedPlaces[i].images,
            preview: details.preview || formattedPlaces[i].preview,
            wikipedia_extracts: details.wikipedia_extracts || formattedPlaces[i].wikipedia_extracts
          };
        }
      } catch (e) {
        console.error('Error fetching details:', e.message);
      }
      // Задержка между запросами деталей
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    // Кэшируем результат
    if (formattedPlaces.length > 0) {
      setCached(cacheKey, formattedPlaces);
    }
    
    return formattedPlaces;
  } catch (error) {
    // При любой ошибке тихо используем mock данные
    const mockResults = searchMockPlaces(query).slice(0, limit);
    setCached(`search_${query.trim()}_${limit}`, mockResults);
    return mockResults;
  }
};

// Get nearby places by coordinates (используется редко)
export const getNearbyPlaces = async (lat, lon, radius = 5000, limit = 20) => {
  // Проверяем кэш
  const cacheKey = `nearby_${lat}_${lon}_${radius}_${limit}`;
  const cached = getCached(cacheKey);
  if (cached) {
    return cached;
  }

  try {
    const url = `${API_BASE}/places/radius?radius=${radius}&lon=${lon}&lat=${lat}&limit=${Math.min(limit * 2, 50)}&apikey=${API_KEY}`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });
    
    if (!response.ok) {
      console.error('Nearby places API error:', response.status);
      return [];
    }
    
    const data = await parseJSON(response);
    
    if (!data || !data.features || data.features.length === 0) {
      return [];
    }
    
    const places = data.features
      .filter(f => f.properties && f.properties.xid && (f.properties.rate || 0) >= 2)
      .sort((a, b) => (b.properties.rate || 0) - (a.properties.rate || 0))
      .slice(0, limit)
      .map(feature => {
        const props = feature.properties;
        const coords = feature.geometry?.coordinates || [];
        
        return {
          xid: props.xid,
          name: props.name || 'Unknown Place',
          address: {
            city: props.district || props.city || '',
            country: props.country || '',
            state: props.state || ''
          },
          rate: props.rate || 0,
          kinds: props.kinds || '',
          point: {
            lat: coords[1] || 0,
            lon: coords[0] || 0
          },
          preview: {
            source: props.preview?.source || ''
          },
          images: []
        };
      });

    // Кэшируем результат
    if (places.length > 0) {
      setCached(cacheKey, places);
    }
    
    return places;
  } catch (error) {
    console.error('Error fetching nearby places:', error.message);
    return [];
  }
};

// Популярные места - ВСЕГДА использует mock данные (быстро и надежно)
export const getPopularPlaces = async (limit = 12) => {
  console.log('Loading popular places from mock data (instant load)');
  
  // Проверяем кэш
  const cacheKey = `popular_${limit}`;
  const cached = getCached(cacheKey);
  if (cached) {
    return cached;
  }
  
  // ВСЕГДА используем mock данные для рекомендаций
  // Это гарантирует мгновенную загрузку главной страницы
  const mockResults = getPopularMockPlaces(limit);
  
  // Кэшируем результат
  setCached(cacheKey, mockResults);
  
  return mockResults;
};
