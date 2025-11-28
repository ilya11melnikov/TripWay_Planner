// Mock data для fallback когда API недоступен или превышен лимит
export const mockPlaces = [
  {
    xid: 'paris_eiffel',
    name: 'Эйфелева башня',
    address: {
      city: 'Paris',
      country: 'France',
      state: 'Île-de-France'
    },
    wikipedia_extracts: {
      text: 'Эйфелева башня — металлическая башня в центре Парижа, самая узнаваемая его архитектурная достопримечательность. Названа в честь главного конструктора Гюстава Эйфеля. Построена в 1889 году и первоначально задумывалась как временное сооружение.'
    },
    rate: 4.8,
    kinds: 'towers,architecture,monuments,interesting_places',
    point: {
      lat: 48.8584,
      lon: 2.2945
    },
    preview: {
      source: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800'
    },
    images: [
      { source: { source: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800' } },
      { source: { source: 'https://images.unsplash.com/photo-1549144511-f099e773c147?w=800' } }
    ]
  },
  {
    xid: 'london_bigben',
    name: 'Биг Бен',
    address: {
      city: 'London',
      country: 'United Kingdom',
      state: 'England'
    },
    wikipedia_extracts: {
      text: 'Биг-Бен — часовая башня в Лондоне, часть архитектурного комплекса Вестминстерского дворца. Официальное название — башня Елизаветы. Один из символов Лондона и Великобритании.'
    },
    rate: 4.7,
    kinds: 'towers,architecture,monuments,interesting_places',
    point: {
      lat: 51.4994,
      lon: -0.1245
    },
    preview: {
      source: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=800'
    },
    images: [
      { source: { source: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=800' } },
      { source: { source: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800' } }
    ]
  },
  {
    xid: 'newyork_statue',
    name: 'Статуя Свободы',
    address: {
      city: 'New York',
      country: 'United States',
      state: 'New York'
    },
    wikipedia_extracts: {
      text: 'Статуя Свободы — колоссальная скульптура в стиле неоклассицизма, расположенная на острове Свободы в гавани Нью-Йорка. Подарок французского народа США в 1886 году.'
    },
    rate: 4.9,
    kinds: 'monuments,statues,interesting_places',
    point: {
      lat: 40.6892,
      lon: -74.0445
    },
    preview: {
      source: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73baa?w=800'
    },
    images: [
      { source: { source: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73baa?w=800' } },
      { source: { source: 'https://images.unsplash.com/photo-1589519160732-57fc498494f8?w=800' } }
    ]
  },
  {
    xid: 'rome_colosseum',
    name: 'Колизей',
    address: {
      city: 'Rome',
      country: 'Italy',
      state: 'Lazio'
    },
    wikipedia_extracts: {
      text: 'Колизей — амфитеатр в Риме, одно из самых известных сооружений древности. Символ величия Древнего Рима. Построен в I веке н.э. и мог вмещать до 50 000 зрителей.'
    },
    rate: 4.8,
    kinds: 'amphitheatres,historic,architecture,interesting_places',
    point: {
      lat: 41.8902,
      lon: 12.4922
    },
    preview: {
      source: 'https://images.unsplash.com/photo-1529260830199-42c24126f198?w=800'
    },
    images: [
      { source: { source: 'https://images.unsplash.com/photo-1529260830199-42c24126f198?w=800' } },
      { source: { source: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800' } }
    ]
  },
  {
    xid: 'tokyo_tower',
    name: 'Токийская башня',
    address: {
      city: 'Tokyo',
      country: 'Japan',
      state: 'Tokyo'
    },
    wikipedia_extracts: {
      text: 'Токийская башня — телевизионная башня в парке Сиба, Минато, Токио. Является вторым по высоте строением в Японии. Построена в 1958 году и является символом послевоенного восстановления Японии.'
    },
    rate: 4.6,
    kinds: 'towers,architecture,interesting_places',
    point: {
      lat: 35.6586,
      lon: 139.7454
    },
    preview: {
      source: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800'
    },
    images: [
      { source: { source: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800' } },
      { source: { source: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=800' } }
    ]
  },
  {
    xid: 'barcelona_sagrada',
    name: 'Саграда Фамилия',
    address: {
      city: 'Barcelona',
      country: 'Spain',
      state: 'Catalonia'
    },
    wikipedia_extracts: {
      text: 'Искупительный храм Святого Семейства — знаменитая церковь в Барселоне, спроектированная архитектором Антонио Гауди. Строительство началось в 1882 году и продолжается по сей день.'
    },
    rate: 4.9,
    kinds: 'churches,architecture,religion,cultural,interesting_places',
    point: {
      lat: 41.4036,
      lon: 2.1744
    },
    preview: {
      source: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800'
    },
    images: [
      { source: { source: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800' } },
      { source: { source: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800' } }
    ]
  },
  {
    xid: 'dubai_burj',
    name: 'Бурдж-Халифа',
    address: {
      city: 'Dubai',
      country: 'United Arab Emirates',
      state: 'Dubai'
    },
    wikipedia_extracts: {
      text: 'Бурдж-Халифа — сверхвысотный небоскрёб высотой 828 метров в Дубае, самое высокое сооружение в мире. Открыт в 2010 году и является символом современного Дубая.'
    },
    rate: 4.8,
    kinds: 'skyscrapers,architecture,interesting_places',
    point: {
      lat: 25.1972,
      lon: 55.2744
    },
    preview: {
      source: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800'
    },
    images: [
      { source: { source: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800' } }
    ]
  },
  {
    xid: 'amsterdam_canals',
    name: 'Каналы Амстердама',
    address: {
      city: 'Amsterdam',
      country: 'Netherlands',
      state: 'North Holland'
    },
    wikipedia_extracts: {
      text: 'Каналы Амстердама — система искусственных каналов, образующая концентрические полукруги вокруг исторического центра города. Построены в XVII веке и включены в список Всемирного наследия ЮНЕСКО.'
    },
    rate: 4.7,
    kinds: 'canals,water,interesting_places',
    point: {
      lat: 52.3676,
      lon: 4.9041
    },
    preview: {
      source: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800'
    },
    images: [
      { source: { source: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800' } }
    ]
  },
  {
    xid: 'berlin_brandenburg',
    name: 'Бранденбургские ворота',
    address: {
      city: 'Berlin',
      country: 'Germany',
      state: 'Berlin'
    },
    wikipedia_extracts: {
      text: 'Бранденбургские ворота — архитектурный памятник в центре Берлина, символ воссоединения Германии. Построены в 1791 году в стиле классицизма.'
    },
    rate: 4.6,
    kinds: 'architecture,historic,monuments,interesting_places',
    point: {
      lat: 52.5163,
      lon: 13.3777
    },
    preview: {
      source: 'https://images.unsplash.com/photo-1587330979470-3585ac3d4d42?w=800'
    },
    images: [
      { source: { source: 'https://images.unsplash.com/photo-1587330979470-3585ac3d4d42?w=800' } }
    ]
  },
  {
    xid: 'sydney_opera',
    name: 'Сиднейский оперный театр',
    address: {
      city: 'Sydney',
      country: 'Australia',
      state: 'New South Wales'
    },
    wikipedia_extracts: {
      text: 'Сиднейский оперный театр — одно из наиболее известных и легко узнаваемых зданий мира, символ Сиднея и одна из главных достопримечательностей Австралии. Открыт в 1973 году.'
    },
    rate: 4.9,
    kinds: 'theatres,architecture,cultural,interesting_places',
    point: {
      lat: -33.8568,
      lon: 151.2153
    },
    preview: {
      source: 'https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?w=800'
    },
    images: [
      { source: { source: 'https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?w=800' } }
    ]
  },
  {
    xid: 'prague_castle',
    name: 'Пражский Град',
    address: {
      city: 'Prague',
      country: 'Czech Republic',
      state: 'Prague'
    },
    wikipedia_extracts: {
      text: 'Пражский Град — крепость в Праге, резиденция президента Чехии. Крупнейший замковый комплекс в мире. Основан в IX веке и является символом чешской государственности.'
    },
    rate: 4.7,
    kinds: 'castles,historic,architecture,interesting_places',
    point: {
      lat: 50.0900,
      lon: 14.4000
    },
    preview: {
      source: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73baa?w=800'
    },
    images: [
      { source: { source: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73baa?w=800' } }
    ]
  },
  {
    xid: 'istanbul_hagia',
    name: 'Собор Святой Софии',
    address: {
      city: 'Istanbul',
      country: 'Turkey',
      state: 'Istanbul'
    },
    wikipedia_extracts: {
      text: 'Собор Святой Софии — бывший патриарший православный собор, впоследствии — мечеть, ныне — музей в Стамбуле. Построен в VI веке и является выдающимся памятником византийского зодчества.'
    },
    rate: 4.8,
    kinds: 'mosques,churches,historic,architecture,religion,interesting_places',
    point: {
      lat: 41.0086,
      lon: 28.9802
    },
    preview: {
      source: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800'
    },
    images: [
      { source: { source: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800' } }
    ]
  }
];

// Поиск по mock данным
export const searchMockPlaces = (query) => {
  if (!query || query.trim().length === 0) {
    return [];
  }

  const searchTerm = query.toLowerCase().trim();
  
  return mockPlaces.filter(place => {
    const nameMatch = place.name.toLowerCase().includes(searchTerm);
    const cityMatch = place.address.city.toLowerCase().includes(searchTerm);
    const countryMatch = place.address.country.toLowerCase().includes(searchTerm);
    const descriptionMatch = place.wikipedia_extracts?.text?.toLowerCase().includes(searchTerm);
    
    return nameMatch || cityMatch || countryMatch || descriptionMatch;
  });
};

// Получить популярные места (случайные)
export const getPopularMockPlaces = (limit = 12) => {
  const shuffled = [...mockPlaces].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, limit);
};

// Получить место по ID
export const getMockPlaceById = (xid) => {
  return mockPlaces.find(place => place.xid === xid) || null;
};

