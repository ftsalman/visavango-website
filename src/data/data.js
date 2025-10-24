import { head, img } from "framer-motion/client";

export const COUNTRIES_DATA = [
  {
    id: "1",
    flag: "https://flagcdn.com/w80/ca.png",
    country: "Canada",
    img: "https://cdn.prod.website-files.com/6777c6ca4cd4fd1a5c59b3bf/677fb6688fe8cea59e4ef083_malaysia-image.avif",
    details: [
      {
        head: "Canada: Land of Nature",
        desc: "Canada offers vast landscapes, multicultural cities, and outdoor adventures from coast to coast.",
      },
    ],
    whyChoose: [
      {
        head: "Nature & Wildlife",
        desc: "Explore national parks, lakes, mountains, and wildlife.",
      },
      {
        head: "Cultural Diversity",
        desc: "Experience multicultural cities like Toronto and Vancouver.",
      },
      {
        head: "Outdoor Activities",
        desc: "Skiing, hiking, and kayaking opportunities abound.",
      },
    ],
    topAttractions: [
      {
        head: "Niagara Falls",
        desc: "Iconic waterfall on the US-Canada border.",
      },
      {
        head: "Banff National Park",
        desc: "Spectacular mountains and lakes in Alberta.",
      },
      { head: "CN Tower", desc: "Famous observation tower in Toronto." },
    ],
    travelTips: [
      {
        head: "Best time to visit",
        desc: "June to September for summer activities.",
      },
      { head: "Currency", desc: "Canadian Dollar (CAD)." },
      {
        head: "Transport",
        desc: "Use VIA Rail or domestic flights for long distances.",
      },
    ],
  },

  {
    id: "10",
    flag: "https://flagcdn.com/w80/nl.png",
    country: "Netherlands",
    img: "https://i.pinimg.com/1200x/c4/3c/34/c43c345e3516ef257031da7e56c3d711.jpg",
    details: [
      {
        head: "Netherlands: Land of Windmills",
        desc: "Famous for canals, tulips, and bicycles, the Netherlands offers modern cities and charming countryside.",
      },
    ],
    whyChoose: [
      {
        head: "Picturesque Canals",
        desc: "Amsterdam’s canals are world-famous.",
      },
      {
        head: "Tulip Fields",
        desc: "Visit during spring for colorful flower displays.",
      },
      {
        head: "Cycling Culture",
        desc: "Explore cities and villages on bikes.",
      },
    ],
    topAttractions: [
      { head: "Keukenhof Gardens", desc: "World’s largest flower garden." },
      { head: "Anne Frank House", desc: "Historic museum in Amsterdam." },
      { head: "Kinderdijk", desc: "UNESCO-listed windmill site." },
    ],
    travelTips: [
      { head: "Best time to visit", desc: "April to June for tulip season." },
      { head: "Currency", desc: "Euro (EUR)." },
      { head: "Transport", desc: "Excellent train and bike network." },
    ],
  },

  {
    id: "3",
    flag: "https://flagcdn.com/w80/ch.png",
    country: "Switzerland",
    img: "https://i.pinimg.com/1200x/a2/f0/02/a2f00245db27e12856c1aeafa025970f.jpg",
    details: [
      {
        head: "Switzerland: Alps and Lakes",
        desc: "Switzerland is famous for its stunning alpine scenery, chocolates, watches, and lakes.",
      },
    ],
    whyChoose: [
      {
        head: "Alpine Adventures",
        desc: "Hiking, skiing, and mountaineering in the Alps.",
      },
      { head: "Luxury & Comfort", desc: "World-class resorts and cities." },
      {
        head: "Cultural Heritage",
        desc: "Historic towns, museums, and Swiss traditions.",
      },
    ],
    topAttractions: [
      { head: "Matterhorn", desc: "Iconic mountain and skiing destination." },
      {
        head: "Lake Geneva",
        desc: "Beautiful lakeside city and surrounding scenery.",
      },
      { head: "Lucerne", desc: "Charming medieval town with famous bridges." },
    ],
    travelTips: [
      {
        head: "Best time to visit",
        desc: "June to September for hiking; December to March for skiing.",
      },
      { head: "Currency", desc: "Swiss Franc (CHF)." },
      {
        head: "Transport",
        desc: "Efficient trains and buses connect cities and mountains.",
      },
    ],
  },
  {
    id: "9",
    flag: "https://flagcdn.com/w80/hu.png",
    country: "Hungary",
    img: "https://i.pinimg.com/1200x/80/2c/95/802c953a0ab48480496cad8bc6edb3d7.jpg",
    details: [
      {
        head: "Hungary: Heart of Central Europe",
        desc: "Hungary is known for thermal baths, architecture, and rich history centered in Budapest.",
      },
    ],
    whyChoose: [
      {
        head: "Thermal Baths",
        desc: "Budapest offers world-famous hot springs.",
      },
      {
        head: "Architecture",
        desc: "Stunning mix of Gothic and Baroque buildings.",
      },
      {
        head: "Food & Wine",
        desc: "Traditional cuisine and famous Tokaji wines.",
      },
    ],
    topAttractions: [
      { head: "Parliament Building", desc: "Majestic landmark on the Danube." },
      { head: "Buda Castle", desc: "Historic palace with panoramic views." },
      { head: "Széchenyi Baths", desc: "Largest thermal bath in Europe." },
    ],
    travelTips: [
      {
        head: "Best time to visit",
        desc: "April to October for pleasant weather.",
      },
      { head: "Currency", desc: "Hungarian Forint (HUF)." },
      {
        head: "Transport",
        desc: "Efficient metro and tram system in Budapest.",
      },
    ],
  },

  {
    id: "5",
    flag: "https://flagcdn.com/w80/ae.png",
    country: "Dubai (UAE)",
    img: "https://i.pinimg.com/736x/f6/94/5d/f6945d66cbc6b08800ad3e638dac99bc.jpg",
    details: [
      {
        head: "Dubai: City of Innovation",
        desc: "Dubai is a dazzling metropolis known for luxury, modern architecture, and desert adventures.",
      },
    ],
    whyChoose: [
      {
        head: "Luxury Lifestyle",
        desc: "World-class shopping, dining, and resorts.",
      },
      {
        head: "Futuristic Architecture",
        desc: "Home to Burj Khalifa and Palm Jumeirah.",
      },
      {
        head: "Adventure",
        desc: "Desert safaris, skydiving, and dune bashing.",
      },
    ],
    topAttractions: [
      { head: "Burj Khalifa", desc: "Tallest building in the world." },
      {
        head: "Dubai Mall",
        desc: "Massive shopping and entertainment complex.",
      },
      {
        head: "Desert Safari",
        desc: "Thrilling adventure through golden dunes.",
      },
    ],
    travelTips: [
      {
        head: "Best time to visit",
        desc: "November to March for pleasant weather.",
      },
      { head: "Currency", desc: "UAE Dirham (AED)." },
      { head: "Transport", desc: "Use metro, taxis, or ride-hailing apps." },
    ],
  },
  {
    id: "6",
    flag: "https://flagcdn.com/w80/bg.png",
    country: "Bulgaria",
    img: "https://i.pinimg.com/1200x/59/e0/8f/59e08fa98338b66b30080924bfb78a89.jpg",
    details: [
      {
        head: "Bulgaria: Hidden Gem of Europe",
        desc: "Bulgaria offers beautiful mountains, beaches, and rich cultural heritage at affordable prices.",
      },
    ],
    whyChoose: [
      {
        head: "Budget Friendly",
        desc: "One of Europe’s most affordable destinations.",
      },
      {
        head: "Nature & Mountains",
        desc: "The Balkans and Rhodope Mountains offer stunning scenery.",
      },
      {
        head: "Historic Towns",
        desc: "Ancient cities like Plovdiv and Veliko Tarnovo.",
      },
    ],
    topAttractions: [
      { head: "Rila Monastery", desc: "UNESCO-listed Orthodox monastery." },
      { head: "Sunny Beach", desc: "Popular Black Sea resort." },
      {
        head: "Seven Rila Lakes",
        desc: "Spectacular glacial lakes in the mountains.",
      },
    ],
    travelTips: [
      {
        head: "Best time to visit",
        desc: "May to September for warm weather.",
      },
      { head: "Currency", desc: "Bulgarian Lev (BGN)." },
      {
        head: "Transport",
        desc: "Buses and trains connect major cities affordably.",
      },
    ],
  },
  {
    id: "7",
    flag: "https://flagcdn.com/w80/eg.png",
    country: "Egypt",
    img: "https://i.pinimg.com/1200x/ec/9b/74/ec9b7448b0383c5589bc8c25bc2bf265.jpg",
    details: [
      {
        head: "Egypt: Cradle of Civilization",
        desc: "Egypt is home to ancient wonders, rich history, and the magnificent Nile River.",
      },
    ],
    whyChoose: [
      {
        head: "Ancient Monuments",
        desc: "Visit pyramids, temples, and tombs.",
      },
      {
        head: "River Nile Cruises",
        desc: "Relax on scenic journeys through ancient landscapes.",
      },
      {
        head: "Desert Adventures",
        desc: "Explore the Sahara and Red Sea dunes.",
      },
    ],
    topAttractions: [
      {
        head: "Pyramids of Giza",
        desc: "One of the Seven Wonders of the Ancient World.",
      },
      {
        head: "Luxor Temple",
        desc: "Ancient temple complex on the east bank of the Nile.",
      },
      { head: "Red Sea", desc: "World-class diving and coral reefs." },
    ],
    travelTips: [
      {
        head: "Best time to visit",
        desc: "October to April for mild weather.",
      },
      { head: "Currency", desc: "Egyptian Pound (EGP)." },
      {
        head: "Transport",
        desc: "Use domestic flights or trains for long distances.",
      },
    ],
  },
  {
    id: "8",
    flag: "https://flagcdn.com/w80/gr.png",
    country: "Greece",
    img: "https://i.pinimg.com/1200x/b3/93/81/b3938122aaad4a58428d6fb1b6b6647d.jpg",
    details: [
      {
        head: "Greece: Land of Gods",
        desc: "Greece is known for its islands, ancient ruins, and Mediterranean charm.",
      },
    ],
    whyChoose: [
      {
        head: "Islands & Beaches",
        desc: "Santorini, Mykonos, and Crete await.",
      },
      { head: "Ancient History", desc: "Explore ruins of Athens and Delphi." },
      {
        head: "Cuisine & Culture",
        desc: "Enjoy Greek food, music, and hospitality.",
      },
    ],
    topAttractions: [
      {
        head: "Santorini",
        desc: "Iconic island with whitewashed houses and blue domes.",
      },
      { head: "Acropolis", desc: "Historic monument overlooking Athens." },
      { head: "Mykonos", desc: "Vibrant nightlife and stunning beaches." },
    ],
    travelTips: [
      {
        head: "Best time to visit",
        desc: "April to October for island hopping.",
      },
      { head: "Currency", desc: "Euro (EUR)." },
      {
        head: "Transport",
        desc: "Ferries and domestic flights connect islands.",
      },
    ],
  },

  {
    id: "4",
    flag: "https://flagcdn.com/w80/th.png",
    country: "Thailand",
    img: "https://i.pinimg.com/736x/5a/89/2c/5a892c1bc878ff33140e9b2b75327494.jpg",
    details: [
      {
        head: "Thailand: Land of Smiles",
        desc: "Thailand is known for its beaches, temples, cuisine, and vibrant culture.",
      },
    ],
    whyChoose: [
      {
        head: "Tropical Beaches",
        desc: "Phuket, Krabi, and Koh Samui offer paradise islands.",
      },
      {
        head: "Rich Culture",
        desc: "Experience temples, festivals, and Thai traditions.",
      },
      {
        head: "Affordable Travel",
        desc: "Great value for accommodation and food.",
      },
    ],
    topAttractions: [
      {
        head: "Grand Palace",
        desc: "Iconic Bangkok landmark and temple complex.",
      },
      {
        head: "Phi Phi Islands",
        desc: "Famous tropical islands for diving and snorkeling.",
      },
      {
        head: "Chiang Mai Temples",
        desc: "Historic temples in Northern Thailand.",
      },
    ],
    travelTips: [
      {
        head: "Best time to visit",
        desc: "November to February for cooler weather.",
      },
      { head: "Currency", desc: "Thai Baht (THB)." },
      { head: "Transport", desc: "Use Grab, tuk-tuks, or buses in cities." },
    ],
  },

  {
    id: "2",
    flag: "https://flagcdn.com/w80/de.png",
    country: "Germany",
    img: "https://cdn.prod.website-files.com/6777c6ca4cd4fd1a5c59b3bf/677fb70961576beed5d8076f_spain-image.avif",
    details: [
      {
        head: "Germany: Heart of Europe",
        desc: "Germany is rich in history, culture, and natural beauty. Explore castles, scenic landscapes, and vibrant cities.",
      },
    ],
    whyChoose: [
      {
        head: "History & Culture",
        desc: "Museums, architecture, and festivals.",
      },
      {
        head: "Scenic Beauty",
        desc: "Black Forest, Rhine Valley, and Bavarian landscapes.",
      },
      {
        head: "Food & Beer",
        desc: "Experience authentic German cuisine and beer culture.",
      },
    ],
    topAttractions: [
      { head: "Berlin Wall", desc: "Historic symbol of division and unity." },
      { head: "Neuschwanstein Castle", desc: "Fairytale castle in Bavaria." },
      {
        head: "Oktoberfest",
        desc: "World’s largest beer festival held in Munich.",
      },
    ],
    travelTips: [
      {
        head: "Best time to visit",
        desc: "May to September for pleasant weather.",
      },
      { head: "Currency", desc: "Euro (EUR)." },
      {
        head: "Transport",
        desc: "Use Deutsche Bahn trains for intercity travel.",
      },
    ],
  },
];

export const VISA_DATA = [
  {
    id: "1",
    label: "Business Visa",
    img: "https://cdn.prod.website-files.com/6777c6ca4cd4fd1a5c59b3bf/677fbf7da0d8bfb349ccaba3_visa-01.avif",
    desc: "Expand your business opportunities across borders with our expert guidance. Whether you're attending a conference, negotiating deals, or exploring global markets, we provide tailored solutions to help you secure your business visa seamlessly.",
    details: [
      {
        head: "Business Visa Overview",
        desc: "Expand your business opportunities across borders with our expert guidance. Whether you're attending a conference, negotiating deals, or exploring global markets, we provide tailored solutions to help you secure your business visa seamlessly.",
      },
    ],
    whyChoose: [
      {
        head: "Why Choose Our Business Visa Service",
        img: "https://cdn.prod.website-files.com/6777c6ca4cd4fd1a5c59b3bf/677f9c802af50e8c99918c1c_visa-detail-image-01.avif",
        points: [
          "Expert guidance from experienced consultants",
          "High success rate with personalized strategy",
          "Comprehensive document and interview support",
          "Fast and transparent processing",
          "Dedicated post-approval assistance",
          "Client-first consultation approach",
        ],
      },
    ],
  },

  {
    id: "2",
    label: "Student Visa",
    img: "https://cdn.prod.website-files.com/6777c6ca4cd4fd1a5c59b3bf/677fbf8606252d1756f9b0e8_visa-02.avif",
    desc: "Unlock your academic potential with our tailored student visa assistance. We help you navigate global study opportunities with confidence and ease.",
    details: [
      {
        head: "Our Proven Approach to Student Visa Success",
        desc: "We prioritize your aspirations and simplify the student visa application process for maximum approval success.",
      },
      {
        head: "Initial Consultation and Eligibility Check",
        desc: "We assess your academic goals and recommend the best visa pathways for studying abroad.",
      },
      {
        head: "Document Preparation and Application Review",
        desc: "Our team ensures that your admission letters, financial proofs, and other required documents are accurate and complete.",
      },
      {
        head: "Submission and Ongoing Support",
        desc: "We handle submission to immigration authorities, keeping you informed and supported until your visa is approved.",
      },
    ],
    whyChoose: [
      {
        head: "Why Choose Our Student Visa Service",
        img: "https://cdn.prod.website-files.com/6777c6ca4cd4fd1a5c59b3bf/677f9d811b44597d0610545b_visa-detail-image-02.avif",
        points: [
          "Certified education counselors",
          "High student visa approval rate",
          "End-to-end documentation support",
          "Pre-departure guidance and mentoring",
          "Direct university partnerships",
          "Affordable, transparent pricing",
        ],
      },
    ],
  },

  {
    id: "3",
    label: "Tourist Visa",
    img: "https://cdn.prod.website-files.com/6777c6ca4cd4fd1a5c59b3bf/677fbf8e30ed5bf7c908ce31_visa-03.avif",
    desc: "Explore the world without stress. Our expert tourist visa consultants help you prepare and apply for short-term travel visas to your dream destinations.",
    details: [
      {
        head: "Tourist Visa Overview",
        desc: "We make leisure travel hassle-free with accurate documentation, quick submission, and expert review of your travel requirements.",
      },
      {
        head: "Documentation Assistance",
        desc: "We assist with itinerary planning, proof of funds, travel insurance, and hotel booking documentation.",
      },
    ],
    whyChoose: [
      {
        head: "Why Choose Our Tourist Visa Service",
        img: "https://cdn.prod.website-files.com/6777c6ca4cd4fd1a5c59b3bf/677f9e016901569efdcd8237_visa-detail-image-03.avif",
        points: [
          "Quick turnaround times",
          "Multi-country visa support",
          "Expert review of all documents",
          "Real-time tracking and updates",
          "Support for solo, group, and family travelers",
          "Trusted by thousands of happy tourists",
        ],
      },
    ],
  },

  {
    id: "4",
    label: "Family Reunion Visa",
    img: "https://cdn.prod.website-files.com/6777c6ca4cd4fd1a5c59b3bf/677fbf9af8f858a8388b63a4_visa-04.avif",
    desc: "Reunite with your loved ones abroad through our comprehensive family reunion visa support services. We handle all paperwork and embassy coordination for you.",
    details: [
      {
        head: "Family Reunion Visa Overview",
        desc: "Whether you’re joining your spouse, children, or parents abroad, we guide you through every step of the process for a stress-free experience.",
      },
    ],
    whyChoose: [
      {
        head: "Why Choose Our Family Reunion Visa Service",
        img: "https://cdn.prod.website-files.com/6777c6ca4cd4fd1a5c59b3bf/677f9e4fcfdddb8b225fb564_visa-detail-image-04.avif",
        points: [
          "Specialized support for family-based immigration",
          "Expert translation and document legalization",
          "Accurate relationship verification guidance",
          "Priority appointment booking assistance",
          "End-to-end follow-up with embassies",
          "Empathetic and personalized service",
        ],
      },
    ],
  },

  {
    id: "5",
    label: "Work Visa",
    img: "https://cdn.prod.website-files.com/6777c6ca4cd4fd1a5c59b3bf/677fbfa3db80d62e63539da9_visa-05.avif",
    desc: "Take your career global with our professional work visa services. From employer sponsorships to skilled migration pathways, we guide you end to end.",
    details: [
      {
        head: "Work Visa Overview",
        desc: "We help professionals and skilled workers secure employment-based visas for leading global destinations.",
      },
    ],
    whyChoose: [
      {
        head: "Why Choose Our Work Visa Service",
        img: "https://cdn.prod.website-files.com/6777c6ca4cd4fd1a5c59b3bf/677f9f07772712c478142837_visa-detail-image-05.avif",
        points: [
          "Tailored guidance for each occupation",
          "Strong employer and recruiter network",
          "Proven record in skilled migration programs",
          "Detailed job verification and compliance check",
          "Seamless documentation and submission",
          "Transparent process from start to finish",
        ],
      },
    ],
  },

  {
    id: "6",
    label: "Visit Visa",
    img: "https://cdn.prod.website-files.com/6777c6ca4cd4fd1a5c59b3bf/677fbfb1529803f77a01f6b4_visa-06.avif",
    desc: "Travel abroad to meet friends, attend events, or explore short-term opportunities with our expert visit visa support.",
    details: [
      {
        head: "Visit Visa Overview",
        desc: "Perfect for short trips, conferences, or family visits. We streamline your visit visa process from documentation to embassy submission.",
      },
    ],
    whyChoose: [
      {
        head: "Why Choose Our Visit Visa Service",
        img: "https://cdn.prod.website-files.com/6777c6ca4cd4fd1a5c59b3bf/677fa25af275efd8c2e8b5fe_visa-detail-image-06.avif",
        points: [
          "Quick and efficient application support",
          "Flexible documentation review",
          "Special assistance for invitation letters",
          "Dedicated travel and itinerary planning",
          "Visa tracking and follow-up services",
          "Customer-first consultation model",
        ],
      },
    ],
  },
];

// src/data/data.js
export const IMMIGRATION_SERVICES = [
  {
    id: "1",
    img: "https://cdn.prod.website-files.com/6777c6ca4cd4fd1a5c59b3bf/677e7240e3e34d7fa6783b18_service-01.avif",
    header: "Visa Application Assistance",
    desc: "Expert guidance through every step of your visa application process.",
    overview: [
      "Navigating the visa application process can be overwhelming, but our team is here to simplify it for you. We provide expert assistance, ensuring your visa application is complete, accurate, and meets all the necessary requirements for approval.",
    ],
    details: [
      {
        head: "How we help you with Visa Applications",
        points: [
          "Eligibility Assessment: We evaluate your qualifications and recommend the best visa options for your goals.",
          "Document Preparation: We help gather and organize all necessary documents to ensure a smooth application process.",
          "Application Submission: Our team ensures your application is submitted on time and to the correct authorities.",
          "Ongoing Support: We provide follow-up support to address any issues or requests from the immigration authorities.",
        ],
        imgs: [
          "https://cdn.prod.website-files.com/6777c6ca4cd4fd1a5c59b3bf/677e779641e55f3cc01180c6_service-more-image-01.avif",
          "https://cdn.prod.website-files.com/6777c6ca4cd4fd1a5c59b3bf/677e77960ee9e3bc86ec73c9_service-more-image-02.avif",
        ],
        whyChoose: null,
      },
      {
        head: "Why we’re the right choice for you",
        points: [
          "We have a high success rate in visa approvals, thanks to our experience and meticulous attention to detail.",
          "Our team stays updated on the latest immigration policies and requirements, ensuring a hassle-free process.",
          "We offer a personalized approach, ensuring your application is tailored to your specific situation.",
        ],
        imgs: [],
        whyChoose: null,
      },
    ],
  },

  {
    id: "2",
    img: "https://cdn.prod.website-files.com/6777c6ca4cd4fd1a5c59b3bf/677e724aed0c2bd50318aff5_service-02.avif",
    header: "Permanent Residency Solutions",
    desc: "Helping you secure long-term residency in your desired country.",
    overview: [
      "Our expert team is here to guide you through the complexities of obtaining permanent residency.",
      "With years of experience and a deep understanding of immigration laws, we provide tailored advice to help you settle in your desired country.",
      "Permanent residency offers a pathway to long-term stability, allowing you to live, work, and enjoy benefits without the limitations of temporary visas.",
    ],
    details: [
      {
        head: "How we help with Permanent Residency",
        points: [
          "Eligibility Assessment: Determine the best residency pathways based on your background and goals.",
          "Document Preparation: Compile necessary documents, including financials, employment, and personal records.",
          "Application Submission: Ensure your application is submitted correctly and within deadlines.",
          "Follow-up Support: Address requests and updates from immigration authorities throughout the process.",
        ],
        imgs: [
          "https://cdn.prod.website-files.com/6777c6ca4cd4fd1a5c59b3bf/677e77aa0ee9e3bc86ec8a1a_service-more-image-03.avif",
          "https://cdn.prod.website-files.com/6777c6ca4cd4fd1a5c59b3bf/677e77a973f842bb02d00d66_service-more-image-04.avif",
        ],
        whyChoose: {
          head: "Why we’re the right choice for you",
          points: [
            "We offer customized guidance based on your unique situation, ensuring the best approach for your application.",
            "Our team brings extensive experience in navigating complex immigration processes, helping you avoid common pitfalls.",
            "We have successfully helped thousands of clients obtain permanent residency with our structured and effective process.",
          ],
        },
      },
    ],
  },

  {
    id: "3",
    img: "https://cdn.prod.website-files.com/6777c6ca4cd4fd1a5c59b3bf/677e72530d4acb3027e0ab80_service-03.avif",
    header: "Citizenship Applications",
    desc: "Navigate the complexities of citizenship with personalized support.",
    overview: [
      "Obtaining citizenship is a critical and complex process that requires careful preparation.",
      "We provide comprehensive guidance to ensure your citizenship application meets all requirements.",
    ],
    details: [
      {
        head: "How we help with Citizenship Applications",
        points: [
          "Eligibility Assessment: Check your qualifications and recommend the best pathway to citizenship.",
          "Document Preparation: Assist in gathering all legal and personal documents needed.",
          "Application Submission: Submit your application to the proper authorities accurately and on time.",
          "Ongoing Support: Follow-up and help with any queries or additional documentation requested.",
        ],
        imgs: [
          "https://cdn.prod.website-files.com/6777c6ca4cd4fd1a5c59b3bf/677e77c3ae5f24122d037a6e_service-more-image-05.avif",
          "https://cdn.prod.website-files.com/6777c6ca4cd4fd1a5c59b3bf/677e77c35713dc0ccce8dc50_service-more-image-06.avif",
        ],
        whyChoose: {
          head: "Why we’re the right choice for you",
          points: [
            "Our experience in managing complex citizenship applications ensures a smooth and timely process.",
            "We have helped many clients successfully acquire citizenship, guiding them through every step.",
            "Our team stays updated on the latest citizenship laws and requirements to offer the best guidance.",
          ],
        },
      },
      {
        head: "Why choose us",
        points: [
          "Experienced team with a strong record of successful citizenship applications.",
          "Up-to-date knowledge of citizenship requirements and legal policies.",
          "Personalized assistance tailored to your individual circumstances.",
        ],
        imgs: [
          "https://cdn.prod.website-files.com/6777c6ca4cd4fd1a5c59b3bf/677e77c3ae5f24122d037a6e_service-more-image-05.avif",
          "https://cdn.prod.website-files.com/6777c6ca4cd4fd1a5c59b3bf/677e77c35713dc0ccce8dc50_service-more-image-06.avif",
        ],
        whyChoose: {
          head: "Why we’re the right choice for you",
          points: [
            "Our experience in managing complex citizenship applications ensures a smooth and timely process.",
            "We have helped many clients successfully acquire citizenship, guiding them through every step.",
            "Our team stays updated on the latest citizenship laws and requirements to offer the best guidance.",
          ],
        },
      },
    ],
  },

  {
    id: "4",
    img: "https://cdn.prod.website-files.com/6777c6ca4cd4fd1a5c59b3bf/678deff44e0e29a79d57d73b_immigration-04.jpg",
    header: "Relocation and Settlement Support",
    desc: "Comprehensive support for individuals seeking employment abroad.",
    overview: [
      "Securing a work permit or employment visa can be challenging, but our team simplifies the process for you.",
      "We assist with eligibility, documentation, and communication with employers or sponsors.",
    ],
    details: [
      {
        head: "How we help with Work Permits",
        points: [
          "Job Offer Guidance: We help you identify qualified job opportunities that support visa sponsorship.",
          "Employer Coordination: We liaise with your employer to ensure accurate and complete paperwork.",
          "Visa Documentation: Full support in preparing and submitting all necessary employment-related forms.",
          "Post-Approval Support: Assistance with travel documentation, renewals, and dependents.",
        ],
        imgs: [
          "https://cdn.prod.website-files.com/6777c6ca4cd4fd1a5c59b3bf/678df000fc8663b474a8c716_immigration-more-image-07.jpg",
          "https://cdn.prod.website-files.com/6777c6ca4cd4fd1a5c59b3bf/678df0015124a9e8bb12f8f7_immigration-more-image-08.jpg",
        ],
        whyChoose: {
          head: "Why we’re the right choice for you",
          points: [
            "We have extensive experience in relocation and settlement, ensuring no detail is overlooked.",
            "Our tailored support focuses on your unique needs, making the process stress-free.",
            "With a proven track record of helping families and individuals adapt successfully, you can rely on us for a smooth start in your new home.",
          ],
        },
      },
      {
        head: "Why choose us",
        points: [
          "Trusted by hundreds of professionals for fast and reliable visa approvals.",
          "Up-to-date with global labor and immigration policies.",
          "We offer end-to-end support from job search to work permit issuance.",
        ],
        imgs: [],
        whyChoose: null,
      },
    ],
  },
];
