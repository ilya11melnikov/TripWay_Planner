// Mock data для fallback когда API недоступен или превышен лимит
export const mockPlaces = [
  {
    "xid": "paris_eiffel",
    "name": "Эйфелева башня",
    "address": {
      "city": "Paris",
      "country": "France",
      "state": "Île-de-France"
    },
    "wikipedia_extracts": {
      "text": "Эйфелева башня — металлическая башня в центре Парижа, самая узнаваемая его архитектурная достопримечательность. Названа в честь главного конструктора Гюстава Эйфеля. Построена в 1889 году и первоначально задумывалась как временное сооружение."
    },
    "rate": 4.8,
    "kinds": "towers,architecture,monuments,interesting_places",
    "point": {
      "lat": 48.8584,
      "lon": 2.2945
    },
    "preview": {
      "source": "https://cdn.pixabay.com/photo/2024/11/30/15/55/eiffel-tower-9235220_1280.jpg"
    },
    "images": [
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2024/11/30/15/55/eiffel-tower-9235220_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2021/06/22/16/39/arch-6356637_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2021/08/04/14/16/tower-6521842_1280.jpg"
        }
      }
    ]
  },
  {
    "xid": "london_bigben",
    "name": "Биг Бен",
    "address": {
      "city": "London",
      "country": "United Kingdom",
      "state": "England"
    },
    "wikipedia_extracts": {
      "text": "Биг-Бен — часовая башня в Лондоне, часть архитектурного комплекса Вестминстерского дворца. Официальное название — башня Елизаветы. Один из символов Лондона и Великобритании."
    },
    "rate": 4.7,
    "kinds": "towers,architecture,monuments,interesting_places",
    "point": {
      "lat": 51.4994,
      "lon": -0.1245
    },
    "preview": {
      "source": "https://cdn.pixabay.com/photo/2015/08/23/16/20/westminster-902972_1280.jpg"
    },
    "images": [
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2015/08/23/16/20/westminster-902972_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2015/08/23/16/20/big-ben-902973_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2012/11/11/14/49/london-65722_1280.jpg"
        }
      }
    ]
  },
  {
    "xid": "newyork_statue",
    "name": "Статуя Свободы",
    "address": {
      "city": "New York",
      "country": "United States",
      "state": "New York"
    },
    "wikipedia_extracts": {
      "text": "Статуя Свободы — колоссальная скульптура в стиле неоклассицизма, расположенная на острове Свободы в гавани Нью-Йорка. Подарок французского народа США в 1886 году."
    },
    "rate": 4.9,
    "kinds": "monuments,statues,interesting_places",
    "point": {
      "lat": 40.6892,
      "lon": -74.0445
    },
    "preview": {
      "source": "https://cdn.pixabay.com/photo/2021/10/23/10/54/statue-of-liberty-6734696_1280.jpg"
    },
    "images": [
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2021/10/23/10/54/statue-of-liberty-6734696_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2021/09/21/21/23/statue-of-liberty-6644930_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2016/11/19/12/42/statue-of-liberty-1839082_1280.jpg"
        }
      }
    ]
  },
  {
    "xid": "rome_colosseum",
    "name": "Колизей",
    "address": {
      "city": "Rome",
      "country": "Italy",
      "state": "Lazio"
    },
    "wikipedia_extracts": {
      "text": "Колизей — амфитеатр в Риме, одно из самых известных сооружений древности. Символ величия Древнего Рима. Построен в I веке н.э. и мог вмещать до 50 000 зрителей."
    },
    "rate": 4.8,
    "kinds": "amphitheatres,historic,architecture,interesting_places",
    "point": {
      "lat": 41.8902,
      "lon": 12.4922
    },
    "preview": {
      "source": "https://cdn.pixabay.com/photo/2025/03/31/21/30/italy-9505450_1280.jpg"
    },
    "images": [
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2025/03/31/21/30/italy-9505450_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2013/08/17/18/35/rome-173469_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2025/03/31/21/30/italy-9505446_1280.jpg"
        }
      }
    ]
  },
  {
    "xid": "tokyo_tower",
    "name": "Токийская башня",
    "address": {
      "city": "Tokyo",
      "country": "Japan",
      "state": "Tokyo"
    },
    "wikipedia_extracts": {
      "text": "Токийская башня — телевизионная башня в парке Сиба, Минато, Токио. Является вторым по высоте строением в Японии. Построена в 1958 году и является символом послевоенного восстановления Японии."
    },
    "rate": 4.6,
    "kinds": "towers,architecture,interesting_places",
    "point": {
      "lat": 35.6586,
      "lon": 139.7454
    },
    "preview": {
      "source": "https://cdn.pixabay.com/photo/2020/10/18/13/45/tokyo-tower-5664836_1280.jpg"
    },
    "images": [
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2020/10/18/13/45/tokyo-tower-5664836_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2019/12/08/05/51/japan-4680483_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2016/05/20/04/29/blue-sky-1404546_1280.jpg"
        }
      }
    ]
  },
  {
    "xid": "barcelona_sagrada",
    "name": "Саграда Фамилия",
    "address": {
      "city": "Barcelona",
      "country": "Spain",
      "state": "Catalonia"
    },
    "wikipedia_extracts": {
      "text": "Искупительный храм Святого Семейства — знаменитая церковь в Барселоне, спроектированная архитектором Антонио Гауди. Строительство началось в 1882 году и продолжается по сей день."
    },
    "rate": 4.9,
    "kinds": "churches,architecture,religion,cultural,interesting_places",
    "point": {
      "lat": 41.4036,
      "lon": 2.1744
    },
    "preview": {
      "source": "https://cdn.pixabay.com/photo/2014/11/30/20/46/sagrada-familia-552084_1280.jpg"
    },
    "images": [
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2014/11/30/20/46/sagrada-familia-552084_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2014/05/11/04/09/rooftops-341570_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2023/04/13/12/24/sagrada-familia-7922456_1280.jpg"
        }
      }
    ]
  },
  {
    "xid": "dubai_burj",
    "name": "Бурдж-Халифа",
    "address": {
      "city": "Dubai",
      "country": "United Arab Emirates",
      "state": "Dubai"
    },
    "wikipedia_extracts": {
      "text": "Бурдж-Халифа — сверхвысотный небоскрёб высотой 828 метров в Дубае, самое высокое сооружение в мире. Открыт в 2010 году и является символом современного Дубая."
    },
    "rate": 4.8,
    "kinds": "skyscrapers,architecture,interesting_places",
    "point": {
      "lat": 25.1972,
      "lon": 55.2744
    },
    "preview": {
      "source": "https://cdn.pixabay.com/photo/2013/06/09/19/49/burj-khalifa-123850_1280.jpg"
    },
    "images": [
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2013/06/09/19/49/burj-khalifa-123850_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2017/03/17/14/08/dubai-2151681_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2019/03/09/13/35/dubai-4044174_1280.jpg"
        }
      }
    ]
  },
  {
    "xid": "amsterdam_canals",
    "name": "Каналы Амстердама",
    "address": {
      "city": "Amsterdam",
      "country": "Netherlands",
      "state": "North Holland"
    },
    "wikipedia_extracts": {
      "text": "Каналы Амстердама — система искусственных каналов, образующая концентрические полукруги вокруг исторического центра города. Построены в XVII веке и включены в список Всемирного наследия ЮНЕСКО."
    },
    "rate": 4.7,
    "kinds": "canals,water,interesting_places",
    "point": {
      "lat": 52.3676,
      "lon": 4.9041
    },
    "preview": {
      "source": "https://cdn.pixabay.com/photo/2021/11/08/11/33/amsterdam-centraal-station-6778948_1280.jpg"
    },
    "images": [
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2021/11/08/11/33/amsterdam-centraal-station-6778948_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2014/05/25/19/24/water-353911_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2019/08/30/12/46/amsterdam-4441273_1280.jpg"
        }
      }
    ]
  },
  {
    "xid": "berlin_brandenburg",
    "name": "Бранденбургские ворота",
    "address": {
      "city": "Berlin",
      "country": "Germany",
      "state": "Berlin"
    },
    "wikipedia_extracts": {
      "text": "Бранденбургские ворота — архитектурный памятник в центре Берлина, символ воссоединения Германии. Построены в 1791 году в стиле классицизма."
    },
    "rate": 4.6,
    "kinds": "architecture,historic,monuments,interesting_places",
    "point": {
      "lat": 52.5163,
      "lon": 13.3777
    },
    "preview": {
      "source": "https://cdn.pixabay.com/photo/2013/03/06/15/30/brandenburg-gate-90946_1280.jpg"
    },
    "images": [
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2013/03/06/15/30/brandenburg-gate-90946_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2018/11/13/18/04/berlin-3813607_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2014/02/26/18/31/brandenburg-gate-275437_1280.jpg"
        }
      }
    ]
  },
  {
    "xid": "sydney_opera",
    "name": "Сиднейский оперный театр",
    "address": {
      "city": "Sydney",
      "country": "Australia",
      "state": "New South Wales"
    },
    "wikipedia_extracts": {
      "text": "Сиднейский оперный театр — одно из наиболее известных и легко узнаваемых зданий мира, символ Сиднея и одна из главных достопримечательностей Австралии. Открыт в 1973 году."
    },
    "rate": 4.9,
    "kinds": "theatres,architecture,cultural,interesting_places",
    "point": {
      "lat": -33.8568,
      "lon": 151.2153
    },
    "preview": {
      "source": "https://cdn.pixabay.com/photo/2021/05/12/10/55/sydney-opera-house-6247993_1280.jpg"
    },
    "images": [
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2021/05/12/10/55/sydney-opera-house-6247993_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2017/08/22/11/27/sydney-2668619_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2015/10/16/23/07/sydney-harbor-991981_1280.jpg"
        }
      }
    ]
  },
  {
    "xid": "prague_castle",
    "name": "Пражский Град",
    "address": {
      "city": "Prague",
      "country": "Czech Republic",
      "state": "Prague"
    },
    "wikipedia_extracts": {
      "text": "Пражский Град — крепость в Праге, резиденция президента Чехии. Крупнейший замковый комплекс в мире. Основан в IX веке и является символом чешской государственности."
    },
    "rate": 4.7,
    "kinds": "castles,historic,architecture,interesting_places",
    "point": {
      "lat": 50.09,
      "lon": 14.4
    },
    "preview": {
      "source": "https://cdn.pixabay.com/photo/2017/04/26/10/39/prague-castle-2262297_1280.jpg"
    },
    "images": [
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2017/04/26/10/39/prague-castle-2262297_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2015/08/05/12/38/prague-castle-876467_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2017/10/16/21/36/prague-2858582_1280.jpg"
        }
      }
    ]
  },
  {
    "xid": "istanbul_hagia",
    "name": "Собор Святой Софии",
    "address": {
      "city": "Istanbul",
      "country": "Turkey",
      "state": "Istanbul"
    },
    "wikipedia_extracts": {
      "text": "Собор Святой Софии — бывший патриарший православный собор, впоследствии — мечеть, ныне — музей в Стамбуле. Построен в VI веке и является выдающимся памятником византийского зодчества."
    },
    "rate": 4.8,
    "kinds": "mosques,churches,historic,architecture,religion,interesting_places",
    "point": {
      "lat": 41.0086,
      "lon": 28.9802
    },
    "preview": {
      "source": "https://cdn.pixabay.com/photo/2015/05/20/18/16/istanbul-775926_1280.jpg"
    },
    "images": [
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2015/05/20/18/16/istanbul-775926_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2016/12/26/18/48/hagia-sophia-1932558_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2020/03/14/13/38/hagia-sophia-mosque-4930646_1280.jpg"
        }
      }
    ]
  },
  {
    "xid": "paris_louvre",
    "name": "Лувр",
    "address": {
      "city": "Paris",
      "country": "France",
      "state": "Île-de-France"
    },
    "wikipedia_extracts": {
      "text": "Лувр — один из крупнейших и самый популярный художественный музей мира. Расположен в центре Парижа, на правом берегу Сены. Коллекция музея содержит более 380 000 экспонатов."
    },
    "rate": 4.9,
    "kinds": "museums,art,cultural,interesting_places",
    "point": {
      "lat": 48.8606,
      "lon": 2.3376
    },
    "preview": {
      "source": "https://cdn.pixabay.com/photo/2020/11/22/19/19/louvre-5767708_1280.jpg"
    },
    "images": [
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2020/11/22/19/19/louvre-5767708_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2022/04/27/07/44/paris-7159870_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2017/08/15/11/29/paris-2643590_1280.jpg"
        }
      }
    ]
  },
  {
    "xid": "paris_notre_dame",
    "name": "Собор Парижской Богоматери",
    "address": {
      "city": "Paris",
      "country": "France",
      "state": "Île-de-France"
    },
    "wikipedia_extracts": {
      "text": "Собор Парижской Богоматери — католический храм в центре Парижа, один из символов французской столицы. Построен в готическом стиле, является одним из самых известных памятников архитектуры в мире."
    },
    "rate": 4.8,
    "kinds": "churches,architecture,religion,historic,interesting_places",
    "point": {
      "lat": 48.853,
      "lon": 2.3499
    },
    "preview": {
      "source": "https://cdn.pixabay.com/photo/2014/02/22/18/27/paris-272198_1280.jpg"
    },
    "images": [
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2014/02/22/18/27/paris-272198_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2018/09/20/07/40/image-3690164_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2016/02/02/10/04/paris-1175023_1280.jpg"
        }
      }
    ]
  },
  {
    "xid": "paris_arc_triomphe",
    "name": "Триумфальная арка",
    "address": {
      "city": "Paris",
      "country": "France",
      "state": "Île-de-France"
    },
    "wikipedia_extracts": {
      "text": "Триумфальная арка — монумент в центре площади Шарля де Голля, возведённый в 1806—1836 годах по распоряжению Наполеона в ознаменование побед его Великой армии."
    },
    "rate": 4.7,
    "kinds": "monuments,architecture,historic,interesting_places",
    "point": {
      "lat": 48.8738,
      "lon": 2.295
    },
    "preview": {
      "source": "https://cdn.pixabay.com/photo/2019/03/15/10/32/paris-4056742_1280.jpg"
    },
    "images": [
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2019/03/15/10/32/paris-4056742_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2022/11/27/11/26/arch-7619519_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2014/11/05/13/48/arc-de-triomphe-517899_1280.jpg"
        }
      }
    ]
  },
  {
    "xid": "paris_versailles",
    "name": "Версальский дворец",
    "address": {
      "city": "Versailles",
      "country": "France",
      "state": "Île-de-France"
    },
    "wikipedia_extracts": {
      "text": "Версальский дворец — бывшая резиденция французских королей в городе Версаль, ныне являющаяся пригородом Парижа. Дворец и парк Версаля являются одним из самых посещаемых туристических объектов во Франции."
    },
    "rate": 4.9,
    "kinds": "palaces,historic,architecture,interesting_places",
    "point": {
      "lat": 48.8049,
      "lon": 2.1204
    },
    "preview": {
      "source": "https://cdn.pixabay.com/photo/2021/06/22/16/52/palace-of-versailles-6356712_1280.jpg"
    },
    "images": [
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2021/06/22/16/52/palace-of-versailles-6356712_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2024/09/19/07/46/versailles-9057981_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2014/10/19/01/08/versailles-493918_1280.jpg"
        }
      }
    ]
  },
  {
    "xid": "london_tower",
    "name": "Тауэр",
    "address": {
      "city": "London",
      "country": "United Kingdom",
      "state": "England"
    },
    "wikipedia_extracts": {
      "text": "Лондонский Тауэр — крепость, стоящая на северном берегу Темзы, исторический центр Лондона. Одно из старейших сооружений Англии и один из главных символов Великобритании."
    },
    "rate": 4.8,
    "kinds": "castles,historic,architecture,interesting_places",
    "point": {
      "lat": 51.5081,
      "lon": -0.0759
    },
    "preview": {
      "source": "https://cdn.pixabay.com/photo/2020/01/09/03/38/bridge-4751769_1280.jpg"
    },
    "images": [
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2020/01/09/03/38/bridge-4751769_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2019/08/09/21/52/london-4395917_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2013/05/15/09/05/bridge-111326_1280.jpg"
        }
      }
    ]
  },
  {
    "xid": "london_british_museum",
    "name": "Британский музей",
    "address": {
      "city": "London",
      "country": "United Kingdom",
      "state": "England"
    },
    "wikipedia_extracts": {
      "text": "Британский музей — главный историко-археологический музей Британской империи и один из крупнейших музеев в мире. Основан в 1753 году, содержит более 8 миллионов экспонатов."
    },
    "rate": 4.8,
    "kinds": "museums,historic,cultural,interesting_places",
    "point": {
      "lat": 51.5194,
      "lon": -0.127
    },
    "preview": {
      "source": "https://cdn.pixabay.com/photo/2021/08/20/18/33/british-museum-6561029_1280.jpg"
    },
    "images": [
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2021/08/20/18/33/british-museum-6561029_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2014/09/23/23/25/museum-458321_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2013/08/15/14/15/london-172794_1280.jpg"
        }
      }
    ]
  },
  {
    "xid": "london_london_eye",
    "name": "Лондонский глаз",
    "address": {
      "city": "London",
      "country": "United Kingdom",
      "state": "England"
    },
    "wikipedia_extracts": {
      "text": "Лондонский глаз — одно из крупнейших колёс обозрения в мире, высотой 135 метров. Расположено в лондонском районе Ламбет на южном берегу Темзы. Открыто в 2000 году."
    },
    "rate": 4.6,
    "kinds": "attractions,architecture,interesting_places",
    "point": {
      "lat": 51.5033,
      "lon": -0.1195
    },
    "preview": {
      "source": "https://cdn.pixabay.com/photo/2020/03/21/00/04/london-4952330_1280.jpg"
    },
    "images": [
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2020/03/21/00/04/london-4952330_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2014/05/22/16/06/london-eye-351203_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2021/10/25/11/52/london-eye-6740605_1280.jpg"
        }
      }
    ]
  },
  {
    "xid": "london_westminster",
    "name": "Вестминстерское аббатство",
    "address": {
      "city": "London",
      "country": "United Kingdom",
      "state": "England"
    },
    "wikipedia_extracts": {
      "text": "Вестминстерское аббатство — готическая церковь в Вестминстере, традиционное место коронации и захоронения монархов Великобритании. Один из важнейших религиозных центров страны."
    },
    "rate": 4.7,
    "kinds": "churches,historic,architecture,religion,interesting_places",
    "point": {
      "lat": 51.4994,
      "lon": -0.1274
    },
    "preview": {
      "source": "https://cdn.pixabay.com/photo/2018/03/29/22/05/westminster-abbey-3273830_1280.jpg"
    },
    "images": [
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2018/03/29/22/05/westminster-abbey-3273830_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2021/11/28/11/04/church-6829924_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2016/01/06/09/46/cathedral-1123793_1280.jpg"
        }
      }
    ]
  },
  {
    "xid": "newyork_central_park",
    "name": "Центральный парк",
    "address": {
      "city": "New York",
      "country": "United States",
      "state": "New York"
    },
    "wikipedia_extracts": {
      "text": "Центральный парк — городской парк в центре Манхэттена в Нью-Йорке. Парк является одним из самых известных в мире и самым посещаемым городским парком в США. Площадь парка составляет 3,41 км²."
    },
    "rate": 4.8,
    "kinds": "parks,nature,interesting_places",
    "point": {
      "lat": 40.7829,
      "lon": -73.9654
    },
    "preview": {
      "source": "https://cdn.pixabay.com/photo/2019/07/21/07/12/new-york-4352072_1280.jpg"
    },
    "images": [
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2019/07/21/07/12/new-york-4352072_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2020/05/11/19/56/sahalie-5160010_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2020/07/30/21/51/central-5451364_1280.jpg"
        }
      }
    ]
  },
  {
    "xid": "newyork_empire_state",
    "name": "Эмпайр-стейт-билдинг",
    "address": {
      "city": "New York",
      "country": "United States",
      "state": "New York"
    },
    "wikipedia_extracts": {
      "text": "Эмпайр-стейт-билдинг — 102-этажный небоскрёб, расположенный в Нью-Йорке на острове Манхэттен. С 1931 по 1970 год являлся самым высоким зданием мира. Один из символов Нью-Йорка."
    },
    "rate": 4.7,
    "kinds": "skyscrapers,architecture,interesting_places",
    "point": {
      "lat": 40.7484,
      "lon": -73.9857
    },
    "preview": {
      "source": "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg"
    },
    "images": [
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2020/06/16/01/40/buildings-5303864_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2020/04/03/16/02/new-york-4999382_1280.jpg"
        }
      }
    ]
  },
  {
    "xid": "newyork_times_square",
    "name": "Таймс-сквер",
    "address": {
      "city": "New York",
      "country": "United States",
      "state": "New York"
    },
    "wikipedia_extracts": {
      "text": "Таймс-сквер — площадь в центральной части Манхэттена в городе Нью-Йорк. Одна из самых посещаемых достопримечательностей мира, ежегодно привлекающая около 50 миллионов посетителей."
    },
    "rate": 4.6,
    "kinds": "squares,urban,interesting_places",
    "point": {
      "lat": 40.758,
      "lon": -73.9855
    },
    "preview": {
      "source": "https://cdn.pixabay.com/photo/2020/06/08/20/58/nyc-5276112_1280.jpg"
    },
    "images": [
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2020/06/08/20/58/nyc-5276112_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2017/08/20/11/21/times-square-2661386_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2014/07/25/11/48/times-square-401652_1280.jpg"
        }
      }
    ]
  },
  {
    "xid": "newyork_brooklyn_bridge",
    "name": "Бруклинский мост",
    "address": {
      "city": "New York",
      "country": "United States",
      "state": "New York"
    },
    "wikipedia_extracts": {
      "text": "Бруклинский мост — один из старейших висячих мостов в США, соединяющий Манхэттен и Бруклин через пролив Ист-Ривер. Длина моста составляет 1825 метров. Открыт в 1883 году."
    },
    "rate": 4.7,
    "kinds": "bridges,architecture,interesting_places",
    "point": {
      "lat": 40.7061,
      "lon": -73.9969
    },
    "preview": {
      "source": "https://cdn.pixabay.com/photo/2020/04/04/20/43/new-york-5003804_1280.jpg"
    },
    "images": [
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2020/04/04/20/43/new-york-5003804_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2013/04/16/14/22/brooklyn-bridge-105079_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2022/12/28/16/27/bridge-7683318_1280.jpg"
        }
      }
    ]
  },
  {
    "xid": "rome_vatican",
    "name": "Ватикан",
    "address": {
      "city": "Rome",
      "country": "Vatican City",
      "state": "Vatican City"
    },
    "wikipedia_extracts": {
      "text": "Ватикан — карликовое государство-анклав внутри территории Рима. Самое маленькое официально признанное государство в мире. Резиденция высших органов власти Римско-католической церкви."
    },
    "rate": 4.9,
    "kinds": "churches,historic,religion,interesting_places",
    "point": {
      "lat": 41.9029,
      "lon": 12.4534
    },
    "preview": {
      "source": "https://cdn.pixabay.com/photo/2019/10/06/08/57/tiber-river-4529605_1280.jpg"
    },
    "images": [
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2019/10/06/08/57/tiber-river-4529605_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2015/05/26/12/16/vatican-784592_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2017/06/01/16/11/rome-2363830_1280.jpg"
        }
      }
    ]
  },
  {
    "xid": "rome_trevi",
    "name": "Фонтан Треви",
    "address": {
      "city": "Rome",
      "country": "Italy",
      "state": "Lazio"
    },
    "wikipedia_extracts": {
      "text": "Фонтан Треви — самый крупный фонтан Рима, высотой 25,9 м и шириной 19,8 м. Построен в 1732—1762 годах в стиле барокко. Один из самых знаменитых фонтанов мира."
    },
    "rate": 4.7,
    "kinds": "fountains,architecture,interesting_places",
    "point": {
      "lat": 41.9009,
      "lon": 12.4833
    },
    "preview": {
      "source": "https://cdn.pixabay.com/photo/2013/04/15/20/29/italy-104754_1280.jpg"
    },
    "images": [
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2013/04/15/20/29/italy-104754_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2016/02/21/13/29/rome-1213549_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2012/03/01/00/33/trevi-19688_1280.jpg"
        }
      }
    ]
  },
  {
    "xid": "rome_pantheon",
    "name": "Пантеон",
    "address": {
      "city": "Rome",
      "country": "Italy",
      "state": "Lazio"
    },
    "wikipedia_extracts": {
      "text": "Пантеон — древнеримский храм, построенный в 126 году н.э. при императоре Адриане. Один из наиболее хорошо сохранившихся памятников древнеримской архитектуры."
    },
    "rate": 4.8,
    "kinds": "temples,historic,architecture,interesting_places",
    "point": {
      "lat": 41.8986,
      "lon": 12.4769
    },
    "preview": {
      "source": "https://cdn.pixabay.com/photo/2024/09/27/20/10/pantheon-paris-9079834_1280.jpg"
    },
    "images": [
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2024/09/27/20/10/pantheon-paris-9079834_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2020/01/16/17/21/pantheon-4771206_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2020/04/06/09/36/rome-5008958_1280.jpg"
        }
      }
    ]
  },
  {
    "xid": "tokyo_shibuya",
    "name": "Перекрёсток Сибуя",
    "address": {
      "city": "Tokyo",
      "country": "Japan",
      "state": "Tokyo"
    },
    "wikipedia_extracts": {
      "text": "Перекрёсток Сибуя — один из самых оживлённых пешеходных перекрёстков в мире, расположенный в районе Сибуя в Токио. Символ современного Токио и японской поп-культуры."
    },
    "rate": 4.5,
    "kinds": "urban,squares,interesting_places",
    "point": {
      "lat": 35.6598,
      "lon": 139.7006
    },
    "preview": {
      "source": "https://cdn.pixabay.com/photo/2018/12/16/09/28/crowd-3878164_1280.jpg"
    },
    "images": [
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2018/12/16/09/28/crowd-3878164_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2015/03/09/18/21/city-666094_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2024/10/02/07/23/city-9090021_1280.jpg"
        }
      }
    ]
  },
  {
    "xid": "tokyo_skytree",
    "name": "Токийское небесное дерево",
    "address": {
      "city": "Tokyo",
      "country": "Japan",
      "state": "Tokyo"
    },
    "wikipedia_extracts": {
      "text": "Токийское небесное дерево — телевизионная башня в районе Сумида, самое высокое сооружение в Японии и вторая по высоте телебашня в мире. Высота составляет 634 метра."
    },
    "rate": 4.7,
    "kinds": "towers,architecture,interesting_places",
    "point": {
      "lat": 35.7101,
      "lon": 139.8107
    },
    "preview": {
      "source": "https://cdn.pixabay.com/photo/2018/11/20/16/30/tokyo-sky-tree-3827717_1280.jpg"
    },
    "images": [
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2018/11/20/16/30/tokyo-sky-tree-3827717_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2020/03/19/12/12/tokyo-sky-tree-4947314_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2020/03/19/12/01/tokyo-sky-tree-4947259_1280.jpg"
        }
      }
    ]
  },
  {
    "xid": "tokyo_imperial_palace",
    "name": "Императорский дворец",
    "address": {
      "city": "Tokyo",
      "country": "Japan",
      "state": "Tokyo"
    },
    "wikipedia_extracts": {
      "text": "Императорский дворец — главная резиденция императора Японии, расположенная в специальном районе Тиёда в центре Токио. Дворец окружён рвами и парками."
    },
    "rate": 4.6,
    "kinds": "palaces,historic,architecture,interesting_places",
    "point": {
      "lat": 35.6852,
      "lon": 139.7528
    },
    "preview": {
      "source": "https://cdn.pixabay.com/photo/2022/06/19/21/47/japan-7272729_1280.jpg"
    },
    "images": [
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2022/06/19/21/47/japan-7272729_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2023/07/22/10/41/pagoda-8143136_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2020/11/06/20/46/palace-5718893_1280.jpg"
        }
      }
    ]
  },
  {
    "xid": "barcelona_park_guell",
    "name": "Парк Гуэль",
    "address": {
      "city": "Barcelona",
      "country": "Spain",
      "state": "Catalonia"
    },
    "wikipedia_extracts": {
      "text": "Парк Гуэль — парк в верхней части Барселоны, созданный Антонио Гауди в 1900—1914 годах. Объект Всемирного наследия ЮНЕСКО. Один из самых известных парков мира."
    },
    "rate": 4.8,
    "kinds": "parks,architecture,interesting_places",
    "point": {
      "lat": 41.4145,
      "lon": 2.1527
    },
    "preview": {
      "source": "https://cdn.pixabay.com/photo/2014/04/26/10/02/parc-guell-332390_1280.jpg"
    },
    "images": [
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2014/04/26/10/02/parc-guell-332390_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2017/05/23/17/04/barcelona-2337816_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2021/09/17/19/14/park-6633501_1280.jpg"
        }
      }
    ]
  },
  {
    "xid": "barcelona_camp_nou",
    "name": "Камп Ноу",
    "address": {
      "city": "Barcelona",
      "country": "Spain",
      "state": "Catalonia"
    },
    "wikipedia_extracts": {
      "text": "Камп Ноу — футбольный стадион в Барселоне, домашняя арена ФК «Барселона». Самый большой стадион в Европе, вмещает 99 354 зрителя. Открыт в 1957 году."
    },
    "rate": 4.7,
    "kinds": "stadiums,sports,interesting_places",
    "point": {
      "lat": 41.3809,
      "lon": 2.1228
    },
    "preview": {
      "source": "https://cdn.pixabay.com/photo/2014/05/14/16/37/football-stadium-344211_1280.jpg"
    },
    "images": [
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2014/05/14/16/37/football-stadium-344211_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2014/09/27/10/52/estadio-463349_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2012/10/25/23/47/football-stadium-62891_1280.jpg"
        }
      }
    ]
  },
  {
    "xid": "paris_ritz_hotel",
    "name": "Отель Ритц Париж",
    "address": {
      "city": "Paris",
      "country": "France",
      "state": "Île-de-France"
    },
    "wikipedia_extracts": {
      "text": "Отель Ритц Париж — один из самых знаменитых отелей мира, расположенный на площади Вандом. Основан в 1898 году. Символ роскоши и элегантности."
    },
    "rate": 4.9,
    "kinds": "hotels,accommodations,interesting_places",
    "point": {
      "lat": 48.8686,
      "lon": 2.3297
    },
    "preview": {
      "source": "https://cdn.pixabay.com/photo/2016/11/17/19/26/spain-1832474_1280.jpg"
    },
    "images": [
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2016/11/17/19/26/spain-1832474_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2014/07/21/19/20/lobby-398845_1280.jpg"
        }
      },
      {
        "source": {
          "source": "https://cdn.pixabay.com/photo/2018/03/12/22/02/architecture-3221065_1280.jpg"
        }
      }
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
