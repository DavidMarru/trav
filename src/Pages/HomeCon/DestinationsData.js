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
    description: "Explore the stunning sunrise over Angkor Wat, one of the world's largest religious monuments in Cambodia.",
    rentals: [
      {
        option:1,
        type: "Bicycle",
        description: "Rent a bicycle to explore the surrounding temples and countryside at your own pace.",
        price: "$10 per day",
      },
    ],
    ThingsToDo: [
      {
        option:1,
        surjectionsType: "HIKING",
        title: "Temple Tour",
        details: "Discover the ancient temples with a guided tour, learning about the history, art, and architecture of Angkor Wat."
      },
      {
        option:2,
        surjectionsType: "EXPLORING",
        title: "Photography Session",
        details: "Capture the breathtaking sunrise over Angkor Wat, ideal for both amateur and professional photographers."
      }
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
    description: "Experience the African wilderness at Kruger National Park, home to the Big Five and a variety of wildlife.",
    rentals: [
      {
        option:1,
        type: "Jeep Safari",
        description: "Rent a 4x4 Jeep for a self-drive safari through the park or join a guided tour to spot wildlife.",
        price: "$200 per day",
      },
    ],
    ThingsToDo: [
      {
        option:1,
        surjectionsType: "EXPLORING",
        title: "Big Five Safari",
        details: "Spot the Big Five—lions, leopards, rhinoceroses, elephants, and Cape buffalos—during guided safaris."
      },
      {
        option:2,
        surjectionsType: "HIKING",
        title: "Bird Watching",
        details: "Observe rare and exotic bird species in one of Africa's richest bird-watching spots."
      }
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
    description: "Journey deep into the Amazon Rainforest, the world's largest tropical rainforest, and discover rich biodiversity.",
    rentals: [
      {
        option:1,
        type: "Boat Rental",
        description: "Rent a boat for a guided tour through the Amazon River and explore its tributaries and wildlife.",
        price: "$100 per day",
      },
    ],
    ThingsToDo: [
      {
        option:1,
        surjectionsType: "EXPLORING",
        title: "Walk Among Giants",
        details: "Explore dense jungle and stunning plant life, with guided tours revealing ecosystems and indigenous cultures."
      },
      {
        option:2,
        surjectionsType: "EXPLORING",
        title: "Wildlife Photography",
        details: "Capture photos of exotic animals in their natural habitat, from jaguars to colorful macaws."
      }
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
    description: "Visit Japan's Kansai region, known for its cultural heritage, including Kyoto’s temples and Osaka's cityscape.",
    rentals: [
      {
        option:1,
        type: "Traditional Ryokan Stay",
        description: "Stay in a traditional Japanese inn, a unique cultural experience in the Kansai region.",
        price: "$200 per night",
      }
    ],
    ThingsToDo: [
      {
        option:1,
        surjectionsType: "RELAXING",
        title: "Tea Ceremony Experience",
        details: "Participate in a traditional tea ceremony, embracing Japanese customs and etiquette."
      },
      {
        option:2,
        surjectionsType: "EXPLORING",
        title: "Visit Nara Park",
        details: "Meet friendly deer in Nara Park and explore ancient temples in the area."
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
        option:1,
        type: "Seine River Cruise",
        description: "Take a scenic boat cruise along the Seine River for a unique perspective of Paris.",
        price: "$40 per person",
      },
    ],
    ThingsToDo: [
      {
        option:1,
        surjectionsType: "HONEY MOON",
        title: "Night Lights Tour",
        details: "Experience the Eiffel Tower illuminated at night, with breathtaking views of Paris by night."
      },
      {
        option:2,
        surjectionsType: "ALL DAY PARTYING",
        title: "Explore Montmartre",
        details: "Visit the artistic Montmartre neighborhood, filled with charming cafes and historical sites."
      }
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
        option:1,
        type: "Surfboard Rental",
        description: "Rent a surfboard for a day at Bondi Beach.",
        price: "$30 per day",
      }
    ],
    ThingsToDo: [
      {
        option:1,
        surjectionsType: "EXPLORING",
        title: "Bridge Climb",
        details: "Climb to the top of the Sydney Harbour Bridge for panoramic views of Sydney's skyline and harbor."
      },
      {
        option:2,
        surjectionsType: "RELAXING",
        title: "Beach Day at Bondi",
        details: "Spend a day relaxing at Bondi Beach or take a surfing lesson to catch some waves."
      }
    ]
  },
  // Additional destinations can be similarly updated...
];

export default DestinationsData;
