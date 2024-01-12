
const apartments = [
  {
    id: 1,
    name: 'Cozy apartment in the center',
    address: '143 Tole bi Street',
    price: 300000,
    description: "For rent a beautiful newly renovated, business class apartment in an eco-friendly area",
    rooms: '1',
    image: "/images/apartment1.jpg",
    advantages: [
      'Close to public transportation',
      'Gym and pool access',
      'Pet-friendly',
    ],

    floor: "9 from 10",
    area: "70m^2",
    kitchen: "studio",
    furnished: true,
    images: [
      "/images/apartment1.jpg",
      "/images/apartment2.jpg",
      "/images/apartment1-1.jpg",
    ],

    author: "Malcev Dmitriy",
    number: "87076667788"
  },
  {
    id: 2,
    name: 'Spacious two-bedroom apartment',
    address: '116 seifullina street',
    price: 450000,
    rooms: '2',
    image: '/images/apartment2.jpg',
    description: "The apartment is located in the heart of the city, convenient access to shopping, dining, and entertainment options. ",
    advantages: [
      'It features a modern design', 
      'A spacious balcony', 
      'A fully equipped kitchen'
    ],

    floor: "9 from 10",
    area: "70m^2",
    kitchen: true,
    furnished: true,
    images: [
      "/images/apartment2.jpg",
      "/images/apartment3.jpg",
      "/images/apartment1.jpg",
      "/images/apartment2-2.jpg",
    ],

    author: "Anna Li",
    number: "87011221212"
  },
  {
    id: 3,
    name: 'Great one-bedroom apartment',
    address: '116 seifullina street',
    price: 350000,
    rooms: '1',
    image: '/images/apartment3.jpg',
    description: "Ideal for families, this apartment offers multiple bedrooms, a spacious living area, and a fully equipped kitchen.The apartment is located in the heart of the city, convenient access to shopping, dining, and entertainment options. ",
    advantages: [
      'It is located in a family-friendly neighborhood ', 
      'Nearby parks and school', 
      "children's play area and a communal garden"
    ],

    floor: "4 from 6",
    area: "60m^2",
    kitchen: true,
    furnished: true,
    images: [
      "/images/apartment3.jpg",
      "/images/apartment3-1.jpg",
      "/images/apartment2-2.jpg",
    ],

    author: "Dina",
    number: "87011222434"
  },
  {
    id: 4,
    name: 'Cozy three-bedroom apartment',
    address: '116 seifullina street',
    price: 450000,
    rooms: '3',
    image: '/images/apartment4.jpg',
    description: "Ideal for families, this apartment offers multiple bedrooms, a spacious living area, and a fully equipped kitchen.The apartment is located in the heart of the city, convenient access to shopping, dining, and entertainment options. ",
    advantages: [
      'It is located in a family-friendly neighborhood ', 
      'Nearby parks and school', 
      "children's play area and a communal garden"
    ],

    floor: " from 10",
    area: "150m^2",
    kitchen: true,
    furnished: true,
    images: [
      "/images/apartment3.jpg",
      "/images/apartment7.jpg",
      "/images/apartment1.jpg",
      "/images/apartment2-2.jpg",
    ],

    author: "Alina",
    number: "87087776655"
  },
  {
    id: 5,
    name: 'Charming two-bedroom apartment',
    address: '111 saina street',
    price: 500000,
    image: '/images/apartment5.jpg',
    rooms: '2',
    description: "This charming apartment is perfect for those seeking a cozy living space. The apartment is located in a quiet neighborhood with easy access to local shops and restaurants. ",
    advantages: [
      'a comfortable bedroom', 
      'a cozy living room', 
      'a well-appointed kitchen'
    ],

    floor: "5 from 10",
    area: "120m^2",
    kitchen: false,
    furnished: true,
    images: [
      "/images/apartment5.jpg",
      "/images/apartment1.jpg",
      "/images/apartment2-2.jpg",
    ],

    author: "Alina",
    number: "87087776655"
  },
  {
    id: 6,
    name: 'Modern three-bedroom apartment',
    address: '116 seifullina street',
    price: 490000,
    image: '/images/apartment6.jpg',
    rooms: '3',
    description: "This executive suite is perfect for professionals seeking a luxurious and convenient living space. It offers a spacious bedroom, a private office, and a stylish living area. ",
    advantages: [
      'include a business center', 
      'conference rooms', 
      '24-hour security'
    ],

    floor: "5 from 10",
    area: "160m^2",
    kitchen: false,
    furnished: true,
    images: [
      "/images/apartment6.jpg",
      "/images/apartment5.jpg",
      "/images/apartment1-1.jpg",
      "/images/apartment4.jpg",
    ],

    author: "Amina",
    number: "87087776699"
  },
  {
    id: 7,
    name: 'Bright two-bedroom apartment',
    address: 'astana, saraishyk 1',
    price: 400000,
    image: '/images/apartment7.jpg',
    rooms: '2',
    description: "Escape the hustle and bustle of the city in this peaceful apartment. It is nestled in a serene neighborhood surrounded by greenery.  It's the perfect place to unwind and relax.",
    advantages: [
     'offers a tranquil living space', 
     'a private patio', 
     'access to communal gardens'
    ],

    floor: "7 from 7",
    area: "90m^2",
    kitchen: false,
    furnished: true,
    images: [
      "/images/apartment7.jpg",
      "/images/apartment1.jpg",
      "/images/apartment1-1.jpg",
      "/images/apartment7-1.jpg",
    ],

    author: "Ali",
    number: "87011112233"
  },
  {
    id: 8,
    name: 'Stylish apartment',
    address: 'almaty, tole bi 2',
    price: 550000,
    image: '/images/apartment8.jpg',
    rooms: '3',
    description: "This stylish studio apartment features a modern design with an open-concept layout.It offers a fully equipped kitchen, a spacious living area, and a comfortable sleeping area. ",
    advantages: [
      'prime location with easy access to shopping centers',
      'restaurants', 
      'public transportation'
    ],

    floor: "4 from 7",
    area: "140m^2",
    kitchen: true,
    furnished: true,
    images: [
      "/images/apartment8.jpg",
      "/images/apartment7.jpg",
      "/images/apartment2-2.jpg",
      "/images/apartment3.jpg",
    ],

    author: "Amir",
    number: "87053335533"
  },
  {
    id: 9,
    name: 'Minimalist two-bedroom apartment',
    address: 'almaty, al-farabi 100',
    price: 500000,
    image: '/images/apartment9.jpg',
    rooms: '2',
    description: " This minimalist studio apartment offers a sleek and contemporary living space. With its clean lines and minimalist design, it provides a clutter-free environment that promotes simplicity and tranquility.",
    advantages: [
      'prime location with easy access to shopping centers',
      'restaurants', 
      'public transportation'
    ],

    floor: "6 from 7",
    area: "90m^2",
    kitchen: true,
    furnished: false,
    images: [
      "/images/apartment9.jpg",
      "/images/apartment11.jpg",
      "/images/apartment1-1.jpg",
      "/images/apartment9-1.jpg",
    ],

    author: "Adil",
    number: "87011112244"
  },
  {
    id: 10,
    name: 'Luxuary three-bedroom apartment',
    address: 'almaty, al-farabi 99',
    price: 770000,
    image: '/images/apartment10.jpg',
    rooms: '3',
    description: "Experience luxury living in this stunning penthouse suite. It boasts panoramic views of the city, high-end finishes, and top-of-the-line appliances.",
    advantages: [
      'includes multiple bedrooms', 
      'a gourmet kitchen, a private terrace', 
      'access to exclusive amenities such as a concierge service and a rooftop lounge'
    ],

    floor: "8 from 8",
    area: "150m^2",
    kitchen: true,
    furnished: true,
    images: [
      "/images/apartment10.jpg",
      "/images/apartment5.jpg",
      "/images/apartment1-1.jpg",
      "/images/apartment4.jpg",
    ],

    author: "Aru",
    number: "87077170707"
  },
  {
    id: 11,
    name: 'Minimalist one-bedroom apartment',
    address: 'almaty, al-farabi 88',
    price: 400000,
    image: '/images/apartment11.jpg',
    rooms: '1',
    description: " This minimalist studio apartment offers a sleek and contemporary living space. Designed with students in mind, this apartment offers affordable living in a convenient location near universities and colleges",
    advantages: [
      'it features study areas',
      'communal spaces',
      'a vibrant community'
    ],

    floor: "4 from 6",
    area: "60m^2",
    kitchen: true,
    furnished: true,
    images: [
      "/images/apartment11.jpg",
      "/images/apartment2.jpg",
      "/images/apartment1-1.jpg",
    ],

    author: "Tomi",
    number: "87011010202"
  },
  {
    id: 12,
    name: 'Comfy one-bedroom apartment',
    address: 'almaty, al-farabi 77',
    price: 440000,
    image: '/images/apartment12.jpg',
    rooms: '1',
    description: "This trendy apartment showcases a stylish design with contemporary furnishings. It features an open-concept layout, high ceilings, and floor-to-ceiling windows. ",
    advantages: [
      'the building amenities include a rooftop pool',
      'a lounge area', 
      'a fitness center'

    ],

    floor: "6 from 6",
    area: "80m^2",
    kitchen: true,
    furnished: true,
    images: [
      "/images/apartment12.jpg",
      "/images/apartment1-1.jpg",
      "/images/apartment12-1.jpg",
      "/images/apartment12-1.jpg",
    ],

    author: "Olga",
    number: "87011011010"
  }
];

export function fetchApartments() {
  return Promise.resolve(apartments);
}

export function fetchApartmentById(id) {
  const apartment = apartments.find((apartment) => apartment.id === id);
  return Promise.resolve(apartment);
}
