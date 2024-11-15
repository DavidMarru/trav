import Img1 from "../../img/Default_Cambodia_Angkor_Wat_Sunrise_2.jpg";
import Img2 from "../../img/Default_JAPAN_Kansai_Region_ 1.jpg";
import Img3 from "../../img/Default_Kruger_National_Park_landscape_0.jpg";
import Img4 from "../../img/Default_brazil_inside_amazon_Rainforest_3.jpg";
import Img5 from "../../img/Leonardo_Kino_XL_Paris_Eiffel_Tower_3.jpg";
import Img6 from "../../img/Leonardo_Kino_XL_SYDNEY_HARBOUR_BRIDGE_AUSTRALIA_1.jpg";
import Img7 from '../../img/Kruger-imgs/Leonardo_Kino_XL_KRUGER_NATIONAL_PARK_landscap_2.jpg';
import Img8 from '../../img/Kruger-imgs/Default_Kruger_National_Park_landscape_2.jpg';
import Img9 from '../../img/Kruger-imgs/Default_Kruger_National_Park_landscape_3.jpg';
import Img10 from '../../img/Destination/ANGKOR WAT SUNRISE/pexels-kelly-1179532-19063459.jpg';
import Img11 from '../../img/Destination/ANGKOR WAT SUNRISE/pexels-sergk1-15890765.jpg';
import Img12 from '../../img/Destination/ANGKOR WAT SUNRISE/pexels-tiago-cardoso-1263068-2495575.jpg';
import Img13 from '../../img/Destination/AMAZON RAINFOREST/pexels-quang-nguyen-vinh-222549-2161449.jpg';
import Img14 from '../../img/Destination/AMAZON RAINFOREST/pexels-renan-772481.jpg';
import Img15 from '../../img/Destination/AMAZON RAINFOREST/pexels-tomfisk-2739666.jpg';
import Img16 from '../../img/Destination/KANSAI REGION/pexels-kirsten-ann-632003183-17476401.jpg';
import Img17 from '../../img/Destination/KANSAI REGION/pexels-sami-aksu-48867324-13010468.jpg';
import Img18 from '../../img/Destination/KANSAI REGION/pexels-satoshi-8780836.jpg';
import Img19 from '../../img/Destination/EIFFEL TOWER/pexels-cottonbro-9811641.jpg';
import Img20 from '../../img/Destination/EIFFEL TOWER/pexels-imad-djaout-404400464-14995906.jpg';
import Img21 from '../../img/Destination/EIFFEL TOWER/pexels-imagestudio-1488315.jpg';
import Img22 from '../../img/Destination/SYDNEY HARBOUR BRIDGE/pexels-belle-co-99483-799960.jpg';
import Img23 from '../../img/Destination/SYDNEY HARBOUR BRIDGE/pexels-horace-young-1063288334-20540478.jpg';
import Img24 from '../../img/Destination/SYDNEY HARBOUR BRIDGE/pexels-pixelcop-1619854.jpg';


import Todo1 from "../../img/ThingsToDo/Walk Among Giants.jpg";
import Todo2 from "../../img/ThingsToDo/jeep.jpg";
import Todo3 from "../../img/ThingsToDo/Beach Day at Bond.jpg";
import Todo4 from "../../img/ThingsToDo/Nara Park bike.jpg";
import Todo5 from "../../img/ThingsToDo/Night Lights Tour.jpg";
import Todo6 from "../../img/ThingsToDo/Temple Tour.jpg";
import Todo7 from "../../img/ThingsToDo/Teaditional Ryokan.jpg";
import Todo8 from "../../img/ThingsToDo/Bridge Climb.jpg";
import Todo9 from "../../img/ThingsToDo/Big Five Safari.jpg";
import Todo10 from "../../img/ThingsToDo/Explore Montmartre2.jpg";
import Todo11 from "../../img/ThingsToDo/Wildlife Photography.jpg";
import Todo13 from "../../img/ThingsToDo/Photography Session.jpg";
import Todo14 from "../../img/ThingsToDo/Bird Watching.jpg";
import Rentals1 from "../../img/HolidayRentals/CAMBODIA Tuk-tuk.jpg";
import Rentals2 from "../../img/HolidayRentals/RAINFOREST_boat.jpg";
import Rentals3 from "../../img/HolidayRentals/jeep.jpg";
import Rentals4 from "../../img/HolidayRentals/France_eScooter.jpg";
import Rentals5 from "../../img/HolidayRentals/Bicycle in KANSAI REGION.jpg";
import Rentals6 from "../../img/HolidayRentals/Harbour_Kayak.jpg";

const DestinationsData = [
  {
    id: 1,
    name: "ANGKOR WAT SUNRISE",
    country: "CAMBODIA",
    region: "Asia",
    lowestPrice: "$450pps",
    nights: "5",
    reviewCount: 120,
    images: [Img1],
    images2: [Img10] ,
    images3: [Img11],
    images4: [Img12],
    description: "Experience the magical sunrise over the ancient temples of Angkor Wat, a UNESCO World Heritage Site and one of the world's most remarkable architectural marvels. Surrounded by lush forests and intricate bas-reliefs, Angkor Wat’s grandeur is best seen in the soft glow of dawn as the sun rises over its iconic silhouette. Join us for a journey into Cambodia's rich spiritual history, where stories of gods and kings come to life amid towering spires and serene landscapes.",
    Rentalimage: [Rentals1],
    rentals: [
      {
        option: 1,
        title: "Tuk-tuk",
        description: "Take a tuk-tuk tour to navigate Angkor Wat with ease, guided by locals who share the temple's secrets and legends.",
        price: "$15 per hour",
      },
    ],
    ThingsToDo: [
      {
        option: 1,
        surjectionstital: "HIKING",
        title: "Temple Tour",
        details: "Dive into history with a guided tour of Angkor Wat's majestic temples. Discover the intricate carvings, learn about the powerful Khmer Empire, and explore each sacred temple, surrounded by beautiful jungle. The guides provide fascinating insights into the architecture, cultural significance, and the spiritual meaning of the monuments that have stood for centuries.",
        image: Todo6,
      },
      {
        option: 2,
        surjectionstital: "EXPLORING",
        title: "Photography Session",
        details: "Capture the mystical beauty of Angkor Wat at sunrise, with soft golden light illuminating the ancient stonework. This session is perfect for photographers of all levels who want to frame the majesty of the temples, dense jungle, and unique light and shadow interplay. Your guide will help you find the best angles and moments for memorable shots.",
        image: Todo13,
      },
    ],
    reviews: [
      {
        name: "John Doe",
        comment: "A truly breathtaking experience. The sunrise over Angkor Wat is unforgettable!",
        stars: 5
      },
      {
        name: "Jane Smith",
        comment: "I loved the historical tour. The guide was incredibly knowledgeable.",
        stars: 4
      },
      {
        name: "Alice Brown",
        comment: "The temples are stunning, but the crowds could be overwhelming at times.",
        stars: 3
      }
    ]
  },
  {
    id: 2,
    name: "KRUGER NATIONAL PARK",
    country: "SOUTH AFRICA",
    region: "Africa",
    lowestPrice: "$500pps",
    nights: "5",
    reviewCount: 90,
    images: [Img3],
    images2: [Img7] ,
    images3: [Img8],
    images4: [Img9],
    description: "Step into the heart of Africa’s wilderness at Kruger National Park, a world-renowned safari destination. Home to the majestic Big Five—lion, leopard, rhinoceros, elephant, and Cape buffalo—the park offers a close encounter with some of the continent’s most iconic wildlife. With expansive savannahs, riverine forests, and diverse ecosystems, Kruger promises an unforgettable adventure that brings you face-to-face with nature’s grandeur.",
    Rentalimage: [Rentals3],
    rentals: [
      {
        option: 1,
        title: "Jeep Safari Rentals",
        description: "Rent a 4x4 Jeep for a rugged, self-driven exploration or join a guided tour for expert wildlife spotting.",
        price: "$200 per day",
      },
    ],
    ThingsToDo: [
      {
        option: 1,
        surjectionstital: "EXPLORING",
        title: "Big Five Safari",
        details: "Embark on a guided safari to spot Africa's Big Five in their natural habitat. Watch lions prowling, elephants roaming, and leopards blending into their surroundings. Knowledgeable guides will take you through diverse ecosystems and provide expert insights into the habits and habitats of each of these incredible animals.",
        image: Todo9,
      },
      {
        option: 2,
        surjectionstital: "HIKING",
        title: "Bird Watching",
        details: "Enjoy a peaceful bird-watching excursion in Kruger's renowned bird habitats. Spot rare species like the Saddle-billed Stork and Martial Eagle, among hundreds of colorful birds. This guided experience allows bird enthusiasts to catch unique sightings while learning about bird behavior and migration patterns in one of the world's richest avian environments.",
        image: Todo14,
      }
    ],
    reviews: [
      {
        name: "Tom Harris",
        comment: "The Big Five safari was incredible! We saw lions, elephants, and more!",
        stars: 5
      },
      {
        name: "Maya Patel",
        comment: "The bird watching tour was serene and very rewarding. I saw some rare species.",
        stars: 4
      },
      {
        name: "Chris Lee",
        comment: "The experience was amazing, but the jeep ride was a bit bumpy for my liking.",
        stars: 3
      }
    ]
  },
  {
    id: 3,
    name: "AMAZON RAINFOREST",
    country: "BRAZIL",
    region: "South America",
    lowestPrice: "$400pps",
    nights: "5",
    reviewCount: 200,
    images: [Img4],
    images2: [Img13] ,
    images3: [Img14],
    images4: [Img15],
    description: "Discover the wonders of the Amazon Rainforest, where nature’s diversity flourishes in vibrant color and sound. As the world’s largest tropical rainforest, the Amazon is home to countless species of wildlife, lush plant life, and hidden rivers. Journey deep into this green paradise to experience its unique ecosystems, indigenous cultures, and breathtaking scenery that make it a truly one-of-a-kind adventure.",
    Rentalimage: [Rentals2],
    rentals: [
      {
        option: 1,
        title: "Boat Rentals",
        description: "Navigate the mighty Amazon River and explore remote areas with a guided boat rental that brings you up close to the jungle’s mysteries.",
        price: "$100 per day",
      },
    ],
    ThingsToDo: [
      {
        option: 1,
        surjectionstital: "EXPLORING",
        title: "Walk Among Giants",
        details: "Explore the dense, towering forests of the Amazon with a local guide. Marvel at giant trees, exotic plants, and vibrant ecosystems as you trek through hidden trails, learning about medicinal plants and indigenous uses for the flora and fauna. It’s an immersive experience that brings you face-to-face with the rainforest's remarkable biodiversity.",
        image: Todo1,
      },
      {
        option: 2,
        surjectionstital: "EXPLORING",
        title: "Wildlife Photography",
        details: "Capture stunning images of the Amazon's exotic wildlife, from jaguars and sloths to colorful macaws and tiny poison dart frogs. With a photography-focused guide, you'll visit prime locations for spotting animals and learn techniques to photograph them in challenging light conditions. This is an ideal experience for both amateur and seasoned wildlife photographers.",
        image: Todo11,
      }
    ],
    reviews: [
      {
        name: "David Ball",
        comment: "Stunning plant life and unique animals. This is a true nature lover's paradise.",
        stars: 5
      },
      {
        name: "Lucy Green",
        comment: "The boat tour was amazing. I learned so much about the rainforest's ecosystem.",
        stars: 4
      },
      {
        name: "Oliver Brown",
        comment: "I expected more wildlife sightings, but the experience was still very immersive.",
        stars: 3
      }
    ]
  },
  {
    id: 4,
    name: "KANSAI REGION",
    country: "JAPAN",
    region: "Asia",
    lowestPrice: "$280pps",
    nights: "5",
    reviewCount: 200,
    images: [Img2],
    images2: [Img16] ,
    images3: [Img17],
    images4: [Img18],
    description: "Dive into the rich cultural heritage of Japan’s Kansai region, famous for Kyoto’s traditional temples, Nara’s ancient shrines, and Osaka’s modern urban landscape. The Kansai region is a fusion of history and modernity, where every street and corner reveals centuries-old traditions and scenic landscapes. Explore this captivating destination where Japan’s timeless beauty shines through serene gardens, historic castles, and unique cultural experiences.",
    Rentalimage: [Rentals5],
    rentals: [
      {
        option: 1,
        title: "Bicycle Rentals",
        description: "Cycle through the charming streets of Kyoto and Nara, discovering the essence of Japanese heritage at your own pace.",
        price: "$15 per day",
      },
    ],
    ThingsToDo: [
      {
        option: 1,
        surjectionstital: "RELAXING",
        title: "Tea Ceremony Experience",
        details: "Immerse yourself in the serenity of a traditional Japanese tea ceremony. Learn the art of tea preparation and the graceful movements that are part of this centuries-old ritual. It’s a cultural experience that invites you to slow down and appreciate the beauty of simplicity and mindfulness in a uniquely Japanese setting.",
        image: Todo4,
      },
      {
        option: 2,
        surjectionstital: "EXPLORING",
        title: "Visit Nara Park",
        details: "Visit the beautiful Nara Park, where gentle deer roam freely and seem to bow for treats. Explore the ancient temples and shrines nestled in this peaceful setting, and enjoy a unique experience that combines nature, wildlife, and historic beauty in one of Japan's oldest parks.",
        image: Todo7,
      }
    ],
    reviews: [
      {
        name: "James Yamada",
        comment: "The tea ceremony was a peaceful and meditative experience. Highly recommend!",
        stars: 5
      },
      {
        name: "Anna Sato",
        comment: "Nara Park is amazing. The deer are so friendly, and the temples are beautiful.",
        stars: 4
      },
      {
        name: "Henry Tanaka",
        comment: "Kyoto’s streets are lovely, but I felt like there were too many tourists in some areas.",
        stars: 3
      }
    ],
  },
  {
    id: 5,
    name: "EIFFEL TOWER",
    country: "FRANCE",
    region: "Europe",
    lowestPrice: "$350pps",
    nights: "5",
    reviewCount: 250,
    images: [Img5],
    images2: [Img19] ,
    images3: [Img20],
    images4: [Img21],
    description: "Embrace the romance of Paris with a visit to the Eiffel Tower, an enduring symbol of French elegance and architectural brilliance. Ascend to its observation decks for panoramic views of the City of Lights, from the winding Seine River to the grand boulevards. The Eiffel Tower is a must-see that offers visitors a chance to appreciate Parisian beauty from new heights.",
    Rentalimage: [Rentals4],
    rentals: [
      {
        option: 1,
        title: "Scooter Rentals",
        description: "Discover Paris with ease on a scooter, zipping past iconic landmarks and hidden gems alike.",
        price: "$25 per day",
      },
    ],
    ThingsToDo: [
      {
        option: 1,
        surjectionstital: "EXPLORING",
        title: "Explore Montmartre",
        details: "Stroll through the winding streets of Montmartre, known for its bohemian spirit, artist studios, and the famous Sacré-Cœur Basilica. Discover the charm of this historic district, where artists like Picasso once painted, and enjoy breathtaking views of Paris from the hilltop.",
        image: Todo10,
      },
      {
        option: 2,
        surjectionstital: "RELAXING",
        title: "Night Lights Tour",
        details: "Experience the magic of Paris at night with a guided tour of its illuminated landmarks. From the Eiffel Tower's sparkling lights to the Seine River’s romantic glow, this tour reveals why Paris is known as the City of Lights. It’s an enchanting journey through the heart of Parisian romance and elegance.",
        image: Todo5,
      }
    ],
    reviews: [
      {
        name: "Eve Dupont",
        comment: "The Eiffel Tower is a must-see. The view from the top is simply stunning!",
        stars: 5
      },
      {
        name: "Lucien Bernard",
        comment: "Montmartre is a charming neighborhood, with lots of history and fantastic views.",
        stars: 4
      },
      {
        name: "Charlotte Rousseau",
        comment: "I had an unforgettable night lights tour. Paris truly lives up to its nickname as 'The City of Lights'.",
        stars: 5
      }
    ]
  },
  {
    id: 6,
    name: "SYDNEY HARBOUR BRIDGE",
    country: "AUSTRALIA",
    region: "Australia",
    lowestPrice: "$300pps",
    nights: "5",
    reviewCount: 180,
    images: [Img6],
    images2: [Img22] ,
    images3: [Img23],
    images4: [Img24],
    description: "Climb to new heights on the Sydney Harbour Bridge and witness unforgettable panoramic views of the Sydney Opera House and sparkling harbour. This iconic Australian landmark promises a thrilling experience as you ascend to the summit and take in one of the world’s most breathtaking urban landscapes.",
    Rentalimage: [Rentals6],
    rentals: [
      {
        option: 1,
        title: "Harbour Kayak Rentals",
        description: "Paddle through the stunning Sydney Harbour and get a unique perspective of the Opera House and Harbour Bridge.",
        price: "$30 per hour",
      },
    ],
    ThingsToDo: [
      {
        option: 1,
        surjectionstital: "ADVENTURE",
        title: "Bridge Climb",
        details: "Embark on an unforgettable adventure as you climb the Sydney Harbour Bridge, with a guide leading you through safety and sightseeing. Reach the summit for a 360-degree view of the Sydney skyline, harbour, and beyond—an exhilarating experience that combines thrill with stunning scenery.",
        image: Todo8,
      },
      {
        option: 2,
        surjectionstital: "RELAXING",
        title: "Beach Day at Bondi",
        details: "Spend a day at Bondi Beach, relaxing on its golden sands and soaking in the vibrant surf culture. Watch surfers catching waves, enjoy a seaside stroll, or indulge in local treats. Bondi is the perfect spot to unwind and experience Australia’s beach lifestyle.",
        image: Todo3,
      }
    ],
    reviews: [
      {
        name: "Eve Dupont",
        comment: "The Eiffel Tower is a must-see. The view from the top is simply stunning!",
        stars: 5
      },
      {
        name: "Lucien Bernard",
        comment: "Montmartre is a charming neighborhood, with lots of history and fantastic views.",
        stars: 5
      },
      {
        name: "Charlotte Rousseau",
        comment: "I had an unforgettable night lights tour. Paris truly lives up to its nickname as 'The City of Lights'.",
        stars: 5
      }
    ]
  }
];


export default DestinationsData;
