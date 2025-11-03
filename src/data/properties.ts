export interface Property {
  id: string;
  name: string;
  shortName: string;
  type: string;
  city: string;
  state: string;
  address: string;
  pincode: string;
  phone: string;
  email: string;
  whatsappNumber: string;
  rating: number;
  totalRooms: number;
  priceRange: string;
  description: string;
  highlights: string[];
  distanceFromAirport: string;
  distanceFromStation: string;
  checkIn: string;
  checkOut: string;
  heroImage: string;
  images: string[];
  mapEmbedUrl: string;
  rooms: RoomType[];
  amenities: Amenity[];
  dining: DiningOption[];
  nearbyAttractions: Attraction[];
  testimonials: Testimonial[];
}

export interface RoomType {
  name: string;
  description: string;
  size?: string;
  bedType: string;
  capacity: number;
  price: string;
  amenities: string[];
  images: string[];
}

export interface Amenity {
  name: string;
  icon: string;
  description: string;
}

export interface DiningOption {
  name: string;
  cuisine: string;
  timing: string;
  description: string;
  image: string;
}

export interface Attraction {
  name: string;
  distance: string;
  description: string;
  image: string;
}

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
}

export const properties: Property[] = [
  {
    id: 'patliputra-saalt',
    name: 'Patliputra Saalt Hotel',
    shortName: 'Patliputra Saalt',
    type: 'Business Hotel',
    city: 'Patna',
    state: 'Bihar',
    address: 'Patliputra Police Station Lane, near Durga Mandir, Patliputra Colony, Patna',
    pincode: '800013',
    phone: '+91 9709633313',
    email: 'info@saalthotels.com',
    whatsappNumber: '+917280056909',
    rating: 4.9,
    totalRooms: 45,
    priceRange: '₹2,999 - ₹3,999',
    description: 'The flagship property of Saalt Group, Patliputra Saalt Hotel stands as the largest and most versatile accommodation in Patna. With 45 elegantly appointed rooms, this premier business hotel caters to corporate travelers, wedding celebrations, and leisure guests. Located in the prestigious Patliputra Colony, the hotel offers seamless connectivity to the city\'s business districts, historical landmarks, and transportation hubs. Our extensive banquet facilities, modern conference halls, and rooftop lawn make us the preferred choice for grand celebrations and corporate events.',
    highlights: [
      '45 Spacious Rooms',
      'Largest Property in Group',
      'Prime Patliputra Location',
      'Extensive Event Facilities',
      'Multi-cuisine Restaurant',
      'Business Conference Halls',
    ],
    distanceFromAirport: '8.3 km (10 min drive) - Patna Airport',
    distanceFromStation: '5.9 km - Patna Railway Station',
    checkIn: '12:00 PM',
    checkOut: '11:00 AM',
    heroImage: '/saalt-patliputra-properties.jpg',
    images: [
      '/saalt-patliputra-properties.jpg',
    ],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.2686844!2d85.1437!3d25.5941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM1JzM4LjgiTiA4NcKwMDgnMzcuMyJF!5e0!3m2!1sen!2sin!4v1234567890',
    rooms: [
      {
        name: 'Standard Room',
        description: 'Comfortable and well-appointed room with modern amenities, perfect for solo travelers and couples seeking quality accommodation.',
        bedType: 'Queen Bed',
        capacity: 2,
        price: '₹2,999',
        amenities: ['Free WiFi', 'AC', 'LCD TV', 'Room Service', 'Daily Housekeeping', 'Work Desk'],
        images: ['/saalt-patliputra-standard-room.jpg'],
      },
      {
        name: 'Deluxe Room',
        description: 'Spacious room with enhanced comfort and premium furnishings, ideal for business travelers and extended stays.',
        bedType: 'King Bed',
        capacity: 2,
        price: '₹3,499',
        amenities: ['Free WiFi', 'AC', 'LCD TV', 'Mini Fridge', 'Coffee Maker', 'Premium Bedding', 'Seating Area'],
        images: ['/saalt-patliputra-deluxe-room.jpg'],
      },
      {
        name: 'Premium Room',
        description: 'Luxuriously designed room featuring superior comfort and elegant interiors with contemporary aesthetics.',
        bedType: 'Super King Bed',
        capacity: 3,
        price: '₹3,999',
        amenities: ['Free WiFi', 'AC', 'Smart TV', 'Mini Bar', 'Coffee Maker', 'Luxury Bedding', 'Large Seating Area', 'City View'],
        images: ['/saalt-patliputra-premium-room.avif'],
      },
    ],
    amenities: [
      { name: 'Free WiFi', icon: 'Wifi', description: 'High-speed internet 50+ Mbps throughout the property' },
      { name: 'Free Parking', icon: 'ParkingCircle', description: 'Ample secure parking for guests' },
      { name: 'Restaurant', icon: 'UtensilsCrossed', description: '24/7 multi-cuisine dining' },
      { name: 'Gym', icon: 'Dumbbell', description: 'Modern fitness center' },
      { name: 'Spa', icon: 'Sparkles', description: 'Relaxation and wellness services' },
      { name: 'Conference Halls', icon: 'Presentation', description: '2 fully equipped meeting rooms' },
      { name: 'Banquet Facilities', icon: 'PartyPopper', description: 'Grand halls for weddings and events' },
      { name: 'Rooftop Lawn', icon: 'Trees', description: 'Outdoor event space with city views' },
      { name: 'Room Service', icon: 'ConciergeBell', description: '24/7 in-room dining' },
      { name: 'Laundry', icon: 'Shirt', description: 'Same-day laundry service' },
    ],
    dining: [
      {
        name: 'Multi-Cuisine Restaurant',
        cuisine: 'Indian, Chinese, Fujian',
        timing: 'Open 24/7',
        description: 'Experience culinary excellence at our all-day dining restaurant, featuring authentic Indian delicacies, aromatic Chinese specialties, and unique Fujian cuisine. Our skilled chefs prepare each dish with fresh ingredients and traditional techniques.',
        image: '/saalt-patliputra-restaurent.jpg',
      },
    ],
    nearbyAttractions: [
      {
        name: 'Bihar Museum',
        distance: '3.2 km',
        description: 'State-of-the-art museum showcasing Bihar\'s rich history and cultural heritage with interactive exhibits and artifacts.',
        image: '/bihar-museum.webp',
      },
      {
        name: 'Patna Museum',
        distance: '2.7 km',
        description: 'One of India\'s oldest museums housing rare collections including the famous Didarganj Yakshi sculpture.',
        image: '/patna-museaum.webp',
      },
      {
        name: 'Golghar',
        distance: '3.7 km',
        description: 'Iconic granary built in 1786 offering panoramic views of the city and the Ganges River.',
        image: '/gol-ghar.jpeg',
      },
      {
        name: 'Gandhi Maidan',
        distance: '4.3 km',
        description: 'Historic ground and urban park, the heart of Patna city with significant cultural and political importance.',
        image: '/Gandhi Maidan.avif',
      },
      {
        name: 'ISKCON Temple',
        distance: '4.2 km',
        description: 'Beautiful temple complex dedicated to Lord Krishna with serene atmosphere and spiritual programs.',
        image: '/Iskon-temple.jpg',
      },
    ],
    testimonials: [
      {
        name: 'Aarav Sharma',
        location: 'Gaya, Bihar',
        rating: 5,
        comment: 'Excellent hotel for business stays in Patna. The conference facilities are top-notch and the staff is extremely professional. Highly recommended!',
        date: '2023-09-15',
      },
      {
        name: 'Prisha Iyer',
        location: 'Mumbai',
        rating: 5,
        comment: 'We hosted our wedding reception at Patliputra Saalt and it was absolutely perfect. The rooftop lawn was beautiful and the catering was excellent.',
        date: '2021-08-22',
      },
      {
        name: 'Atharv Saini',
        location: 'Muzaffarpur, Bihar',
        rating: 5,
        comment: 'Great location in Patliputra Colony. Rooms are spacious and clean. The restaurant serves delicious food. Value for money!',
        date: '2025-01-28',
      },
    ],
  },
  {
    id: 'buddha-saalt',
    name: 'Buddha Saalt Hotel',
    shortName: 'Buddha Saalt',
    type: 'Pilgrimage Hotel',
    city: 'Bodh Gaya',
    state: 'Bihar',
    address: 'Domuhan-Bodhgaya Road, Baiju Bigha, Bodh Gaya, Gaya District',
    pincode: '824231',
    phone: '+91 7909046993',
    email: 'info@saalthotels.com',
    whatsappNumber: '+919709633313',
    rating: 4.9,
    totalRooms: 35,
    priceRange: '₹1,500 - ₹2,500',
    description: 'Located in the spiritual heart of Buddhism, Buddha Saalt Hotel offers comfortable and clean accommodations for pilgrims and spiritual seekers visiting the sacred Mahabodhi Temple. Our hotel provides a peaceful sanctuary just minutes from where Lord Buddha attained enlightenment. With modern amenities blended with spiritual ambiance, we cater to Buddhist pilgrims from around the world, particularly from Thailand, Japan, Korea, and Myanmar. Our convenient location allows easy access to all major Buddhist temples and monasteries in Bodh Gaya.',
    highlights: [
      'Near Mahabodhi UNESCO Site',
      'Walking Distance to Bodhi Tree',
      'Clean & Comfortable Rooms',
      'Budget-Friendly Pilgrimage Stay',
      'International Pilgrim Friendly',
      'Spiritual Atmosphere',
    ],
    distanceFromAirport: '10.3 km - Gaya Airport',
    distanceFromStation: '15.3 km - Gaya Junction Railway Station',
    checkIn: '12:00 PM',
    checkOut: '11:00 AM',
    heroImage: '/buddha-saalt-properties.webp',
    images: [
      '/buddha-saalt-properties.webp',
      '/saalt-buddha-properties.jpg',
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200',
    ],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.0!2d84.9918!3d24.6952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQxJzQyLjciTiA4NMKwNTknMzAuNSJF!5e0!3m2!1sen!2sin!4v1234567890',
    rooms: [
      {
        name: 'Standard Room',
        description: 'Simple and clean accommodation perfect for pilgrims, featuring essential amenities for a comfortable spiritual journey.',
        bedType: 'Double Bed',
        capacity: 2,
        price: '₹1,999',
        amenities: ['Free WiFi', 'AC', 'LCD TV', 'Daily Housekeeping', 'Room Service'],
        images: ['/buddha-saalt-roomtype_standard_1.jpg'],
      },
      {
        name: 'Deluxe Room',
        description: 'Enhanced comfort with modern fittings and serene decor, ideal for longer pilgrimage stays.',
        bedType: 'Double Bed',
        capacity: 2,
        price: '₹2,499',
        amenities: ['Free WiFi', 'AC', 'Cable TV', 'Rainfall Shower', 'Premium Bedding', 'Work Desk'],
        images: ['/buddha-saalt-roomtype_deluxe.jpg'],
      },
      {
        name: 'Premium Room',
        description: 'Spacious room with enhanced amenities and peaceful ambiance for a rejuvenating spiritual experience.',
        bedType: 'Queen Bed',
        capacity: 2,
        price: '₹2,999',
        amenities: ['Free WiFi', 'AC', '28-inch LCD TV', 'Rainfall Shower', 'Premium Bedding', 'Mini Fridge', 'Seating Area'],
        images: ['/buddha-saalt-roomtype_premium.jpg'],
      },
    ],
    amenities: [
      { name: 'Free WiFi', icon: 'Wifi', description: 'Complimentary high-speed internet access' },
      { name: 'Front Desk 24/7', icon: 'Clock', description: 'Round-the-clock assistance' },
      { name: 'Room Service', icon: 'ConciergeBell', description: 'In-room dining available' },
      { name: 'Free Parking', icon: 'ParkingCircle', description: 'Secure parking facility' },
      { name: 'Luggage Storage', icon: 'Luggage', description: 'Safe storage for belongings' },
      { name: 'Travel Desk', icon: 'MapPin', description: 'Temple tour arrangements' },
      { name: 'Laundry', icon: 'Shirt', description: 'Laundry services available' },
      { name: 'Meditation Area', icon: 'Sparkles', description: 'Quiet space for meditation' },
    ],
    dining: [
      {
        name: 'Continental Breakfast',
        cuisine: 'Continental, Indian',
        timing: '6:00 AM - 10:00 AM',
        description: 'Start your spiritual day with our wholesome continental breakfast featuring fresh fruits, cereals, toast, and traditional Indian breakfast options.',
        image: '/Continental Breakfast-buddha-saalt-restuarant.jpg',
      },
    ],
    nearbyAttractions: [
      {
        name: 'Mahabodhi Temple',
        distance: '2.2 km',
        description: 'UNESCO World Heritage Site marking the spot where Buddha attained enlightenment. The most sacred Buddhist pilgrimage destination in the world.',
        image: '/Mahabodhi Temple.jpeg',
      },
      {
        name: 'Bodhi Tree',
        distance: '2.2 km',
        description: 'The sacred fig tree under which Gautama Buddha meditated and attained enlightenment over 2,500 years ago.',
        image: '/bodhi-tree.webp',
      },
      {
        name: 'Wat Thai Buddhagaya',
        distance: '1.5 km',
        description: 'Beautiful Thai Buddhist temple featuring traditional Thai architecture and serene meditation halls.',
        image: '/Wat Thai Buddhagaya.jpg',
      },
      {
        name: 'Great Buddha Statue',
        distance: '2.5 km',
        description: 'Impressive 80-foot statue of Lord Buddha inaugurated by the Dalai Lama, a symbol of peace and enlightenment.',
        image: '/great-buddha-statue.jpg',
      },
      {
        name: 'Archaeological Museum',
        distance: '1.1 km',
        description: 'Museum housing ancient Buddhist artifacts, sculptures, and relics discovered in and around Bodh Gaya.',
        image: '/archeological-museum-bodhgaya.jpg',
      },
    ],
    testimonials: [
      {
        name: 'Vihaan Chauhan',
        location: 'Bhagalpur, Bihar',
        rating: 5,
        comment: 'Perfect location for visiting Mahabodhi Temple. Clean rooms and helpful staff who understand Buddhist pilgrims. Highly recommended for Japanese visitors.',
        date: '2022-09-10',
      },
      {
        name: 'Saanvi Verma',
        location: 'Bangalore',
        rating: 5,
        comment: 'Good value hotel close to all temples. Staff is very friendly and helped us arrange temple tours. Will stay again on next visit.',
        date: '2020-08-18',
      },
      {
        name: 'Aarohi Deshmukh',
        location: 'Darbhanga, Bihar',
        rating: 5,
        comment: 'Wonderful peaceful stay during my spiritual journey. The proximity to Mahabodhi Temple made early morning visits easy. Thank you!',
        date: '2024-09-25',
      },
    ],
  },
  {
    id: 'deoghar-saalt',
    name: 'Deoghar Saalt Hotel',
    shortName: 'Deoghar Saalt',
    type: 'Pilgrimage Hotel',
    city: 'Jasidih, Deoghar',
    state: 'Jharkhand',
    address: 'Plot No-8, Opposite S.B.I ATM, Near Jasidih Railway Station, Jasidih Station Road',
    pincode: '814142',
    phone: '+91 7909046993',
    email: 'info@saalthotels.com',
    whatsappNumber: '+919709633313',
    rating: 5.0,
    totalRooms: 45,
    priceRange: '₹1,499 - ₹2,499',
    description: 'Strategically located directly opposite Jasidih Railway Station, Deoghar Saalt Hotel is the most convenient choice for pilgrims visiting the sacred Baba Baidyanath Jyotirlinga Temple, one of the twelve Jyotirlingas in India. Our hotel combines modern comfort with traditional hospitality, offering a perfect base for your spiritual journey in Deoghar. With our banquet hall and marriage lawn facilities, we also cater to wedding celebrations and social events. The hotel\'s prime location makes it ideal for train travelers and devotees seeking easy access to the temple complex.',
    highlights: [
      'Opposite Jasidih Railway Station',
      'Near Baidyanath Jyotirlinga',
      '6 km to Sacred Temple',
      'Wedding & Event Facilities',
      'Modern Amenities',
      'Convenient for Train Travelers',
    ],
    distanceFromAirport: '12-22.5 km - Deoghar Airport',
    distanceFromStation: 'Adjacent - Jasidih Railway Station',
    checkIn: '12:00 PM',
    checkOut: '11:00 AM',
    heroImage: '/Deoghar Saalt.avif',
    images: [
      '/Deoghar Saalt.avif',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200',
      'https://images.unsplash.com/photo-1596436889106-be35e843f974?w=1200',
    ],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.8!2d86.6886!3d24.4827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDI4JzU3LjciTiA4NsKwNDEnMTkuMCJF!5e0!3m2!1sen!2sin!4v1234567890',
    rooms: [
      {
        name: 'Standard Room',
        description: 'Comfortable 9 sq.m room with modern amenities, perfect for pilgrims and solo travelers.',
        size: '9 sq.m',
        bedType: 'Double or Twin Beds',
        capacity: 2,
        price: '₹1,499',
        amenities: ['Free WiFi', 'AC', 'TV', 'Daily Housekeeping', 'Room Service'],
        images: ['/saalt-deoghar-standard-room.jpg'],
      },
      {
        name: 'Deluxe Room',
        description: 'Spacious room with separate work area, ideal for extended stays and business travelers.',
        bedType: 'King Bed',
        capacity: 2,
        price: '₹1,999',
        amenities: ['Free WiFi', 'AC', 'LCD TV', 'Work Area', 'Mini Fridge', 'Premium Bedding', 'Seating Area'],
        images: ['/saalt-deoghar-deluxe-room_1.jpg'],
      },
      {
        name: 'Premium Room',
        description: 'Interconnected rooms perfect for families visiting the temple together, offering space and privacy.',
        bedType: 'Two Double Beds',
        capacity: 4,
        price: '₹2,499',
        amenities: ['Free WiFi', 'AC', 'Two TVs', 'Interconnected Rooms', 'Family Bathroom', 'Extra Space'],
        images: ['/saalt-deoghar-premium-room.jpg'],
      },
    ],
    amenities: [
      { name: 'Free WiFi', icon: 'Wifi', description: 'High-speed internet throughout' },
      { name: 'Front Desk 24/7', icon: 'Clock', description: 'Always available assistance' },
      { name: 'Restaurant', icon: 'UtensilsCrossed', description: 'On-site Indian dining' },
      { name: 'Room Service', icon: 'ConciergeBell', description: '24-hour in-room dining' },
      { name: 'Free Parking', icon: 'ParkingCircle', description: 'Ample parking space' },
      { name: 'Banquet Hall', icon: 'PartyPopper', description: 'Event and wedding venue' },
      { name: 'Marriage Lawn', icon: 'Trees', description: 'Outdoor celebration space' },
      { name: 'First Aid', icon: 'Heart', description: 'Medical assistance available' },
      { name: 'Luggage Storage', icon: 'Luggage', description: 'Safe storage facility' },
      { name: 'Fire Safety', icon: 'Shield', description: 'Complete fire safety systems' },
    ],
    dining: [
      {
        name: 'Indian Restaurant',
        cuisine: 'North Indian, South Indian, Local Specialties',
        timing: 'Breakfast 7:00 AM - 10:30 AM, Lunch 12:00 PM - 3:00 PM, Dinner 7:00 PM - 10:30 PM',
        description: 'Savor authentic Indian flavors at our on-site restaurant featuring traditional North Indian curries, South Indian delicacies, and local Jharkhandi specialties. Our chefs prepare sattvic meals suitable for pilgrims.',
        image: '/saalt-deoghar-restaurent.jpg',
      },
    ],
    nearbyAttractions: [
      {
        name: 'Baba Baidyanath Temple',
        distance: '6 km',
        description: 'One of the twelve sacred Jyotirlingas, this ancient temple is dedicated to Lord Shiva and attracts millions of devotees during the holy month of Shravan.',
        image: '/Baba-Baidyanath-Temple-Rituals.jpg',
      },
      {
        name: 'Naulakha Mandir',
        distance: '5 km',
        description: 'Beautiful temple dedicated to Radha Krishna, built at a cost of nine lakhs (hence the name), featuring stunning architecture.',
        image: '/naulakha-mandir-deoghar.jpeg',
      },
      {
        name: 'Ramakrishna Mission',
        distance: '3.2 mi',
        description: 'Spiritual center offering meditation, yoga, and educational activities in serene surroundings.',
        image: '/ramakrishna-mission-vidyapith.png',
      },
      {
        name: 'Nandan Pahar',
        distance: '3.4 mi',
        description: 'Picturesque hill station with amusement park, temples, and panoramic views of Deoghar city.',
        image: '/Nandan Pahar-deoghar.jpg',
      },
      {
        name: 'Tapovan Hills',
        distance: '8 km',
        description: 'Sacred hills where sages meditated, offering natural caves, temples, and spiritual tranquility.',
        image: '/Tapovan Hills.jpg',
      },
    ],
    testimonials: [
      {
        name: 'Kairav Reddy',
        location: 'Purnia, Bihar',
        rating: 5,
        comment: 'Perfect location right in front of the railway station. Made our Baidyanath Temple visit very convenient. Clean rooms and good service.',
        date: '2019-09-05',
      },
      {
        name: 'Mishka Nair',
        location: 'Delhi',
        rating: 5,
        comment: 'Stayed here during our family pilgrimage. The family suite was spacious and comfortable. Restaurant food was delicious and pure vegetarian options available.',
        date: '2022-08-12',
      },
      {
        name: 'Rajan Bhasin',
        location: 'Chapra, Bihar',
        rating: 5,
        comment: 'Hosted our daughter\'s wedding at the marriage lawn. Beautiful venue and excellent arrangements by the hotel team. Highly satisfied!',
        date: '2023-07-28',
      },
    ],
  },
  {
    id: 'narayana-greens',
    name: 'Narayana Greens Resort',
    shortName: 'Narayana Greens',
    type: 'Luxury Wedding Resort',
    city: 'Bodh Gaya',
    state: 'Bihar',
    address: 'Gaya-Dobhi Road (NH-32), Kolhaura, Bodh Gaya',
    pincode: '823001',
    phone: '+91 7909046993',
    email: 'info@saalthotels.com',
    whatsappNumber: '+917909046993',
    rating: 5.0,
    totalRooms: 59,
    priceRange: '₹2,999 - ₹4,499',
    description: 'Narayana Greens Resort stands as the crown jewel of Saalt Group, offering unparalleled luxury in the spiritual landscape of Bodh Gaya. This premier 4-5 star resort is the ultimate destination wedding venue in Bihar, featuring a magnificent 40,000 sq.ft garden that can accommodate up to 3,500 guests. With 59 elegantly designed rooms, including 25 specially reserved for wedding guests, an outdoor swimming pool, spa, fine dining restaurant, and three distinct banquet halls, Narayana Greens seamlessly blends modern luxury with spiritual serenity. Located on NH-32 with easy highway access, yet close to the sacred Mahabodhi Temple, our resort caters to discerning travelers seeking premium accommodations, couples planning dream weddings, corporate events, and spiritual tourism with luxury comfort.',
    highlights: [
      '40,000 sq.ft Garden for 3,500 Guests',
      'Luxury Wedding Destination',
      'Outdoor Swimming Pool & Spa',
      'Fine Dining Restaurant',
      '3 Banquet Halls',
      '59 Premium Rooms',
    ],
    distanceFromAirport: '10.3 km - Gaya Airport',
    distanceFromStation: '16.3 km - Gaya Junction Railway Station',
    checkIn: '11:00 AM - 12:00 PM',
    checkOut: '12:00 PM',
    heroImage: '/narayana-greens-proeperties.avif',
    images: [
      '/narayana-greens-proeperties.avif',
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200',
      'https://images.unsplash.com/photo-1519167758481-83f29da8c459?w=1200',
    ],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.5!2d84.9900!3d24.7000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzAwLjAiTiA4NMKwNTknMjQuMCJF!5e0!3m2!1sen!2sin!4v1234567890',
    rooms: [
      {
        name: 'Executive Single Room AC',
        description: 'Comfortable air-conditioned room with modern amenities, perfect for solo travelers.',
        size: '349 sq.ft',
        bedType: 'Single Bed',
        capacity: 1,
        price: '₹2,999',
        amenities: ['Free WiFi', 'AC', 'TV', 'Work Desk', 'Premium Bedding', 'Attached Bathroom', 'Daily Housekeeping'],
        images: ['https://images.unsplash.com/photo-1631049035182-249067d7618e?w=800'],
      },
      {
        name: 'Deluxe Single Room AC',
        description: 'Spacious air-conditioned room with enhanced amenities and elegant furnishings for discerning solo guests.',
        size: '349 sq.ft',
        bedType: 'Single Bed',
        capacity: 1,
        price: '₹3,499',
        amenities: ['Free WiFi', 'AC', 'Smart TV', 'Mini Bar', 'Work Area', 'Premium Bedding', 'Rainfall Shower', 'Luxury Toiletries'],
        images: ['https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800'],
      },
      {
        name: 'Executive Double Room AC',
        description: 'Comfortable air-conditioned room with double occupancy, ideal for couples and leisure travelers.',
        size: '349 sq.ft',
        bedType: 'Double Bed',
        capacity: 2,
        price: '₹3,999',
        amenities: ['Free WiFi', 'AC', 'TV', 'Garden View', 'Premium Bedding', 'Attached Bathroom', 'Room Service'],
        images: ['https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800'],
      },
      {
        name: 'Deluxe Double Room AC',
        description: 'Luxurious air-conditioned room with premium furnishings and modern amenities, perfect for couples seeking comfort.',
        size: '349 sq.ft',
        bedType: 'Double Bed',
        capacity: 2,
        price: '₹4,499',
        amenities: ['Free WiFi', 'AC', 'Smart TV', 'Mini Bar', 'Pool View', 'Premium Bedding', 'Rainfall Shower', 'Luxury Toiletries', 'Balcony'],
        images: ['https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800'],
      },
    ],
    amenities: [
      { name: 'Swimming Pool', icon: 'Waves', description: 'Outdoor pool with lounging area' },
      { name: 'Spa & Wellness', icon: 'Sparkles', description: 'Full-service spa and wellness center' },
      { name: 'Fine Dining', icon: 'UtensilsCrossed', description: 'Restaurant with expert chefs' },
      { name: 'Free WiFi', icon: 'Wifi', description: 'High-speed internet throughout' },
      { name: 'Free Parking', icon: 'ParkingCircle', description: 'Expansive parking facility' },
      { name: 'Fitness Center', icon: 'Dumbbell', description: 'Modern gym equipment' },
      { name: 'Banquet Halls', icon: 'PartyPopper', description: '3 halls for events' },
      { name: 'Conference Facilities', icon: 'Presentation', description: 'Professional meeting spaces' },
      { name: 'Concierge', icon: 'Bell', description: 'Personalized guest services' },
      { name: 'Laundry', icon: 'Shirt', description: 'Professional laundry service' },
      { name: 'Chef Service', icon: 'ChefHat', description: 'Expert culinary team' },
      { name: 'Gardens & Lawns', icon: 'Trees', description: '40,000 sq.ft landscaped grounds' },
    ],
    dining: [
      {
        name: 'Fine Dining Restaurant',
        cuisine: 'Multi-cuisine - Vegetarian & Non-Vegetarian',
        timing: 'Breakfast 6:00 AM - 10:00 AM, Lunch 12:30 PM - 3:30 PM, Dinner 7:00 PM - 11:00 PM',
        description: 'Experience culinary excellence at our fine dining restaurant where expert chefs craft exquisite dishes using premium ingredients. From authentic Indian delicacies to international favorites, every meal is a gastronomic journey. Continental breakfast available from 6:00 AM to 8:00 AM.',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
      },
    ],
    nearbyAttractions: [
      {
        name: 'Mahabodhi Temple',
        distance: '9-11 km (9 min drive)',
        description: 'UNESCO World Heritage Site and the most sacred place in Buddhism where Buddha attained enlightenment.',
        image: '/Mahabodhi Temple.jpeg',
      },
      {
        name: 'Wat Thai Buddhagaya',
        distance: '8.6 km',
        description: 'Stunning Thai Buddhist temple featuring traditional architecture and peaceful meditation areas.',
        image: '/Wat Thai Buddhagaya.jpg',
      },
      {
        name: 'Tergar Monastery',
        distance: '8.9 km',
        description: 'Beautiful Tibetan Buddhist monastery offering meditation courses and spiritual teachings.',
        image: '/Tergar Monastery.webp',
      },
      {
        name: 'Great Buddha Statue',
        distance: '10 km',
        description: 'Magnificent 80-foot Buddha statue, a symbol of peace inaugurated by the Dalai Lama.',
        image: '/The Great Buddha Statue.webp',
      },
      {
        name: 'Indosan Nipponji Temple',
        distance: '9 km',
        description: 'Japanese temple featuring beautiful architecture and serene gardens for meditation.',
        image: '/The Great Buddha Statue.jpg',
      },
    ],
    testimonials: [
      {
        name: 'Ishan Joshi & Ira Sathyan',
        location: 'Arrah, Bihar',
        rating: 5,
        comment: 'Our dream wedding became reality at Narayana Greens! The 40,000 sq.ft garden was breathtaking, the staff was incredibly professional, and our 800 guests were thoroughly impressed. Best resort in Bihar!',
        date: '2020-02-14',
      },
      {
        name: 'Avik Malhotra',
        location: 'Pune',
        rating: 5,
        comment: 'Exceptional luxury resort. The pool, spa, and fine dining exceeded all expectations. Perfect for a relaxing getaway while visiting Bodh Gaya temples.',
        date: '2024-09-20',
      },
      {
        name: 'Riya Jindal',
        location: 'Begusarai, Bihar',
        rating: 5,
        comment: 'Hosted our company\'s annual conference at Narayana Greens. The banquet facilities are world-class, and the team handled everything flawlessly. Highly recommended for corporate events!',
        date: '2021-08-15',
      },
    ],
  },
];
