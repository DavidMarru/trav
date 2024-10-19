import Img1 from '../../img/Default_Cambodia_Angkor_Wat_Sunrise_2.jpg';
import Img2 from '../../img/Default_JAPAN_Kansai_Region_ 1.jpg';
import Img3 from '../../img/Default_Kruger_National_Park_landscape_0.jpg';
import Img4 from '../../img/Default_brazil_inside_amazon_Rainforest_3.jpg';
import Img5 from '../../img/Leonardo_Kino_XL_Paris_Eiffel_Tower_3.jpg';
import Img6 from '../../img/Leonardo_Kino_XL_SYDNEY_HARBOUR_BRIDGE_AUSTRALIA_1.jpg'; 
import Img7 from '../../img/pexels-pixabay-86703.jpg'; 
import Img8 from '../../img/Leonardo_Kino_XL_Santorini_GREECE_1.jpg'; 
import Img9 from '../../img/Leonardo_Kino_XL_SEYCHELLES_Africa_3.jpg'; 
import Img10 from '../../img/Leonardo_Kino_XL_COLOSSEUM_ITALY_2.jpg'; 

const DestinationsData = [
  {
    id: 1,
    name: "ANGKOR WAT SUNRISE",
    country: "CAMBODIA",
    region: "Asia",
    lowestPrice: "$450pps",
    nights: "N/A",
    reviews: 120,
    images: [Img1],
    video: [],
    description: "Explore the stunning sunrise over Angkor Wat, one of the world's largest religious monuments in Cambodia. A must-see for cultural and history enthusiasts.",
    rentals: [
      {
        type: "Bicycle",
        description: "Rent a bicycle to explore the surrounding temples and countryside at your own pace. Available hourly or daily.",
        price: "$10 per day",
      },
    ]
  },
  {
    id: 2,
    name: "KRUGER NATIONAL PARK",
    country: "SOUTH AFRICA",
    region: "Africa",
    lowestPrice: "$500pps",
    nights: "N/A",
    reviews: 90,
    images: [Img3],
    description: "Experience the African wilderness at Kruger National Park, home to the Big Five and a variety of wildlife in South Africa. Perfect for a safari adventure.",
    rentals: [
      {
        type: "Jeep Safari",
        description: "Rent a 4x4 Jeep for a self-drive safari through the park or join a guided tour to spot wildlife.",
        price: "$200 per day",
      },
    ]
  },
  {
    id: 3,
    name: "AMAZON RAINFOREST",
    country: "BRAZIL",
    region: "South America",
    lowestPrice: "$400pps",
    nights: "N/A",
    reviews: 200,
    images: [Img4],
    description: "Journey deep into the Amazon Rainforest, the world's largest tropical rainforest, and discover the rich biodiversity of the Brazilian jungle.",
    rentals: [
      {
        type: "Boat Rental",
        description: "Rent a boat for a guided tour through the Amazon River and explore its tributaries and wildlife.",
        price: "$100 per day",
      },
    ]
  },
  {
    id: 4,
    name: "KANSAI REGION",
    country: "JAPAN",
    region: "Asia",
    lowestPrice: "$280pps",
    nights: "N/A",
    reviews: 200,
    images: [Img2],
    description: "Visit Japan's Kansai region, known for its cultural heritage, including Kyoto’s temples and Osaka's modern cityscape. A blend of tradition and modernity awaits.",
    rentals: [
      {
        type: "Traditional Ryokan Stay",
        description: "Stay in a traditional Japanese inn, a unique cultural experience in the Kansai region.",
        price: "$200 per night",
      }
    ]
  },
  {
    id: 5,
    name: "Eiffel Tower",
    country: "FRANCE",
    region: "Europe",
    lowestPrice: "$350pps",
    nights: "N/A",
    reviews: 250,
    images: [Img5],
    description: "Visit the iconic Eiffel Tower in Paris and enjoy breathtaking views of the city from its observation decks.",
    rentals: [
      {
        type: "Seine River Cruise",
        description: "Take a scenic boat cruise along the Seine River for a unique perspective of Paris.",
        price: "$40 per person",
      },
    ]
  },
  {
    id: 6,
    name: "SYDNEY HARBOUR BRIDGE",
    country: "AUSTRALIA",
    region: "AustraliaOceania",
    lowestPrice: "$300pps",
    nights: "N/A",
    reviews: 220,
    images: [Img6],
    description: "Climb the Sydney Harbour Bridge for stunning views of Sydney's skyline and the iconic Opera House.",
    rentals: [
      {
        type: "Surfboard Rental",
        description: "Rent a surfboard for a day at Bondi Beach.",
        price: "$30 per day",
      }
    ]
  },
  {
    id: 7,
    name: "GRAND CANYON",
    country: "USA",
    region: "North America",
    lowestPrice: "$500pps",
    nights: "N/A",
    reviews: 300,
    images: [Img7],
    description: "Explore the Grand Canyon, one of the Seven Natural Wonders of the World, known for its stunning landscapes and hiking trails.",
    rentals: [
      {
        type: "Helicopter Tour",
        description: "Take a helicopter tour for a breathtaking aerial view of the canyon.",
        price: "$300 per person",
      },
    ]
  },
  {
    id: 8,
    name: "Santorini",
    country: "GREECE",
    region: "Europe",
    lowestPrice: "$500pps",
    nights: "N/A",
    reviews: 300,
    images: [Img8], // Placeholder for Santorini images
    description: "Experience the stunning sunsets and unique architecture of Santorini, known for its whitewashed buildings and crystal-clear waters. A perfect destination for relaxation and romance.",
    rentals: [
      {
        type: "ATV Rental",
        description: "Explore the island on an ATV, allowing you to visit beaches, archaeological sites, and local villages at your own pace.",
        price: "$50 per day",
      },
    ]
  },
  {
    id: 9,
    name: "SEYCHELLES",
    country: "SEYCHELLES",
    region: "Africa",
    lowestPrice: "$600pps",
    nights: "N/A",
    reviews: 200,
    images: [Img9],
    description: "Relax on the stunning beaches of Seychelles, known for their crystal-clear waters and vibrant coral reefs.",
    rentals: [
      {
        type: "Snorkeling Gear",
        description: "Rent snorkeling gear to explore the rich marine life.",
        price: "$15 per day",
      },
    ]
  },
  {
    id: 10,
    name: "COLOSSEUM",
    country: "ITALY",
    region: "Europe",
    lowestPrice: "$320pps",
    nights: "N/A",
    reviews: 280,
    images: [Img10],
    description: "Visit the historic Colosseum in Rome, an iconic symbol of ancient Rome and its history.",
    rentals: [
      {
        type: "Guided Tour",
        description: "Join a guided tour for an in-depth experience of the Colosseum and surrounding areas.",
        price: "$50 per person",
      }
    ]
  }
];

export default DestinationsData;
