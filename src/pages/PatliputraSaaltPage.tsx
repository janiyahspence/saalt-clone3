import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { VideoHero } from '../components/VideoHero';
import { Button } from '../components/Button';
import { TestimonialCard } from '../components/TestimonialCard';
import { PropertyGallery } from '../components/PropertyGallery';
import { properties } from '../data/properties';
import {
  MapPin, Phone, Mail, Star, Bed, Users, Check, Calendar, Clock,
  Wifi, ParkingCircle, UtensilsCrossed, Dumbbell, Sparkles, Shield,
  Plane, Train, Navigation, Building2, PartyPopper, Trees, ChevronRight
} from 'lucide-react';

export const PatliputraSaaltPage: React.FC = () => {
  const property = properties.find(p => p.id === 'patliputra-saalt')!;
  const [activeTab, setActiveTab] = useState('overview');

  const floorPlans = [
    { floor: 'Ground Floor', rooms: '55 Rooms', facilities: 'Reception, Restaurant, Conference Hall' },
    { floor: 'First Floor', rooms: '54 Rooms', facilities: 'Business Center, Meeting Room' },
    { floor: 'Second Floor', rooms: '54 Rooms', facilities: 'Banquet Hall, Rooftop Access' },
    { floor: 'Third Floor', rooms: '55 Rooms', facilities: 'Gym, Spa, Rooftop Lawn' }
  ];

  const safetyProtocols = [
    'Temperature checks at entry',
    'Sanitization of all touchpoints',
    'Contactless check-in/check-out',
    'Regular room deep cleaning',
    'Staff with PPE kits',
    'Social distancing in common areas',
    'HEPA filters in HVAC system',
    'Hand sanitizer stations'
  ];

  const accessibilityFeatures = [
    'Wheelchair accessible entrances',
    'Ramps and elevators',
    'Ground floor rooms available',
    'Accessible washrooms',
    'Service animals allowed',
    'Visual alarm systems',
    'Braille signage',
    'Staff trained in accessibility'
  ];

  const localExperiences = [
    {
      title: 'Heritage Walk Tour',
      description: 'Guided walking tour covering Patna Museum, Golghar, and Gandhi Maidan',
      duration: '4 hours',
      image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=600'
    },
    {
      title: 'Ganges River Cruise',
      description: 'Evening boat ride on the holy Ganges with traditional snacks',
      duration: '2 hours',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600'
    },
    {
      title: 'Bihar Museum Experience',
      description: 'Private guided tour of Bihar\'s premier museum with art collection',
      duration: '3 hours',
      image: 'https://images.unsplash.com/photo-1566127992631-137a642a90f4?w=600'
    },
    {
      title: 'Local Food Tour',
      description: 'Taste authentic Bihari cuisine at famous local eateries',
      duration: '3 hours',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600'
    }
  ];

  const transportationServices = [
    { service: 'Airport Pickup', rate: '₹600-800', note: '8.3 km - Patna Airport' },
    { service: 'Railway Station Transfer', rate: '₹400-500', note: '5.9 km - Patna Junction' },
    { service: 'City Sightseeing (Half Day)', rate: '₹1,500', note: '4-5 hours with driver' },
    { service: 'City Sightseeing (Full Day)', rate: '₹2,500', note: '8-10 hours with driver' },
    { service: 'Car Rental (Self Drive)', rate: 'From ₹2,000/day', note: 'Valid license required' },
    { service: 'Luxury Car with Chauffeur', rate: 'From ₹3,500/day', note: 'Premium vehicles' }
  ];

  const seasonalHighlights = {
    'Winter (Oct-Mar)': {
      description: 'Pleasant weather perfect for sightseeing and outdoor events',
      temp: '10-25°C',
      highlights: ['Best time for weddings', 'Chhath Puja celebrations', 'Outdoor events', 'Heritage tours']
    },
    'Summer (Apr-Jun)': {
      description: 'Hot weather with indoor events and air-conditioned comfort',
      temp: '30-42°C',
      highlights: ['Summer packages', 'Indoor conferences', 'Pool at sister property', 'Early morning tours']
    },
    'Monsoon (Jul-Sep)': {
      description: 'Rainy season with lush greenery and indoor activities',
      temp: '25-35°C',
      highlights: ['Monsoon offers', 'Indoor events', 'Cultural programs', 'Spa packages']
    }
  };

  return (
    <div className="min-h-screen">
      <VideoHero
        videoPlaceholder={property.heroImage}
        title={property.name}
        subtitle={`Patna's Premier Business Hotel | 45 Rooms | Since 2019`}
        height="h-[70vh]"
      >
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Button
            variant="primary"
            size="lg"
            onClick={() => window.open(`https://wa.me/919709633313?text=Hi, I want to book at ${property.name}`, '_blank')}
          >
            Book Now
          </Button>
          <Link to="/properties/patliputra-saalt">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#1a472a]">
              Detailed View
            </Button>
          </Link>
        </div>
      </VideoHero>

      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <Bed className="text-[#d4a574]" size={32} />
              <div>
                <p className="text-2xl font-bold text-[#1a472a]">{property.totalRooms}</p>
                <p className="text-sm text-gray-600">Spacious Rooms</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Star className="text-yellow-500 fill-yellow-500" size={32} />
              <div>
                <p className="text-2xl font-bold text-[#1a472a]">{property.rating}/5</p>
                <p className="text-sm text-gray-600">Guest Rating</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Building2 className="text-[#d4a574]" size={32} />
              <div>
                <p className="text-2xl font-bold text-[#1a472a]">Largest</p>
                <p className="text-sm text-gray-600">In Our Group</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-[#d4a574]" size={32} />
              <div>
                <p className="text-2xl font-bold text-[#1a472a]">Patliputra</p>
                <p className="text-sm text-gray-600">Prime Location</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-[#f5f5f0] sticky top-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {['overview', 'rooms', 'dining', 'events', 'gallery', 'location'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full font-medium capitalize transition-all ${
                  activeTab === tab
                    ? 'bg-[#1a472a] text-white shadow-lg'
                    : 'bg-white text-[#2c3e50] hover:bg-gray-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeTab === 'overview' && (
        <>
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-3xl font-bold text-[#1a472a] mb-6">About Patliputra Saalt Hotel</h2>
                  <p className="text-lg text-[#2c3e50] leading-relaxed mb-6">{property.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-[#f5f5f0] p-4 rounded-xl">
                      <Plane className="text-[#d4a574] mb-2" size={24} />
                      <p className="font-semibold text-[#1a472a]">Airport</p>
                      <p className="text-sm text-[#2c3e50]">{property.distanceFromAirport}</p>
                    </div>
                    <div className="bg-[#f5f5f0] p-4 rounded-xl">
                      <Train className="text-[#d4a574] mb-2" size={24} />
                      <p className="font-semibold text-[#1a472a]">Railway Station</p>
                      <p className="text-sm text-[#2c3e50]">{property.distanceFromStation}</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {property.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Property ${idx + 1}`}
                      className={`rounded-xl shadow-lg ${idx % 2 === 1 ? 'mt-8' : ''}`}
                    />
                  ))}
                </div>
              </div>

              <div className="mb-16">
                <h3 className="text-2xl font-bold text-[#1a472a] mb-8 text-center">Property Floor Plans</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {floorPlans.map((floor, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-[#f5f5f0] to-white p-6 rounded-xl shadow-md">
                      <h4 className="font-bold text-[#1a472a] mb-2">{floor.floor}</h4>
                      <p className="text-lg font-semibold text-[#2d6e4b] mb-2">{floor.rooms}</p>
                      <p className="text-sm text-[#2c3e50]">{floor.facilities}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#1a472a] mb-8 text-center">Key Amenities</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {property.amenities.map((amenity, idx) => (
                    <div key={idx} className="bg-white border-2 border-[#f5f5f0] p-6 rounded-xl text-center hover:border-[#d4a574] transition-colors">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-[#daeee0] rounded-full mb-3">
                        <Check className="text-[#1a472a]" size={24} />
                      </div>
                      <h4 className="font-semibold text-[#1a472a] text-sm mb-1">{amenity.name}</h4>
                      <p className="text-xs text-[#2c3e50]">{amenity.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-gradient-to-br from-[#f5f5f0] to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-2xl font-bold text-[#1a472a] mb-8 text-center">Safety & Hygiene Protocols</h3>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {safetyProtocols.map((protocol, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Shield className="text-[#2d6e4b] flex-shrink-0 mt-1" size={20} />
                      <span className="text-[#2c3e50]">{protocol}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-2xl font-bold text-[#1a472a] mb-8 text-center">Accessibility Features</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {accessibilityFeatures.map((feature, idx) => (
                  <div key={idx} className="bg-[#f5f5f0] p-6 rounded-xl">
                    <Check className="text-[#2d6e4b] mb-2" size={24} />
                    <p className="text-[#2c3e50]">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {activeTab === 'rooms' && (
        <section className="py-20 bg-gradient-to-br from-[#f5f5f0] to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1a472a] mb-12 text-center">Our Rooms & Suites</h2>
            <div className="space-y-8">
              {property.rooms.map((room, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="grid md:grid-cols-2 gap-6">
                    <img src={room.images[0]} alt={room.name} className="w-full h-80 object-cover" />
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-[#1a472a] mb-2">{room.name}</h3>
                      <p className="text-[#2c3e50] mb-4">{room.description}</p>
                      <div className="flex items-center gap-6 mb-4 text-sm text-[#2c3e50]">
                        <span className="flex items-center gap-2">
                          <Bed size={18} />
                          {room.bedType}
                        </span>
                        <span className="flex items-center gap-2">
                          <Users size={18} />
                          Up to {room.capacity}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {room.amenities.map((amenity, i) => (
                          <span key={i} className="bg-[#daeee0] text-[#1a472a] px-3 py-1 rounded-full text-xs">
                            {amenity}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-3xl font-bold text-[#1a472a]">{room.price}</p>
                          <p className="text-sm text-gray-600">per night</p>
                        </div>
                        <Button variant="primary" size="md" onClick={() => {
                          const message = `Hello Saalt Hotels, I want to book the ${room.name} room in ${property.name}. How can I proceed?`;
                          window.open(`https://wa.me/${property.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
                        }}>
                          Book This Room
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === 'dining' && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1a472a] mb-12 text-center">Dining Experience</h2>
            {property.dining.map((dining, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#f5f5f0] to-white rounded-2xl overflow-hidden shadow-xl mb-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <img src={dining.image} alt={dining.name} className="w-full h-96 object-cover" />
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#1a472a] mb-2">{dining.name}</h3>
                    <p className="text-[#d4a574] font-medium mb-2">{dining.cuisine}</p>
                    <div className="flex items-center gap-2 text-sm text-[#2c3e50] mb-4">
                      <Clock size={18} />
                      <span>{dining.timing}</span>
                    </div>
                    <p className="text-[#2c3e50] leading-relaxed mb-6">{dining.description}</p>
                    <div className="bg-white p-6 rounded-xl">
                      <h4 className="font-bold text-[#1a472a] mb-3">Signature Dishes</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-[#2c3e50]">
                          <ChevronRight size={16} className="text-[#d4a574]" />
                          Litti Chokha (Traditional Bihari)
                        </li>
                        <li className="flex items-center gap-2 text-[#2c3e50]">
                          <ChevronRight size={16} className="text-[#d4a574]" />
                          Szechuan Noodles & Manchurian
                        </li>
                        <li className="flex items-center gap-2 text-[#2c3e50]">
                          <ChevronRight size={16} className="text-[#d4a574]" />
                          Tandoori Delights & Curries
                        </li>
                        <li className="flex items-center gap-2 text-[#2c3e50]">
                          <ChevronRight size={16} className="text-[#d4a574]" />
                          Continental Breakfast Spread
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {activeTab === 'events' && (
        <section className="py-20 bg-gradient-to-br from-[#f5f5f0] to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1a472a] mb-12 text-center">Event Facilities</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <PartyPopper className="mx-auto mb-4 text-[#d4a574]" size={48} />
                <h3 className="text-xl font-bold text-[#1a472a] mb-2">Banquet Halls</h3>
                <p className="text-[#2c3e50]">Grand halls for weddings and celebrations up to 500 guests</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <Building2 className="mx-auto mb-4 text-[#d4a574]" size={48} />
                <h3 className="text-xl font-bold text-[#1a472a] mb-2">Conference Halls</h3>
                <p className="text-[#2c3e50]">2 fully equipped meeting rooms with AV equipment</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <Trees className="mx-auto mb-4 text-[#d4a574]" size={48} />
                <h3 className="text-xl font-bold text-[#1a472a] mb-2">Rooftop Lawn</h3>
                <p className="text-[#2c3e50]">Outdoor event space with stunning city views</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-[#1a472a] mb-6">Event Packages</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-2 border-[#daeee0] rounded-xl p-6">
                  <h4 className="font-bold text-[#1a472a] mb-4">Wedding Package</h4>
                  <ul className="space-y-2 text-[#2c3e50]">
                    <li className="flex items-start gap-2">
                      <Check className="text-[#2d6e4b] flex-shrink-0 mt-1" size={16} />
                      Banquet hall decoration
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-[#2d6e4b] flex-shrink-0 mt-1" size={16} />
                      Multi-cuisine catering
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-[#2d6e4b] flex-shrink-0 mt-1" size={16} />
                      Guest room blocks
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-[#2d6e4b] flex-shrink-0 mt-1" size={16} />
                      Event coordination
                    </li>
                  </ul>
                </div>
                <div className="border-2 border-[#daeee0] rounded-xl p-6">
                  <h4 className="font-bold text-[#1a472a] mb-4">Corporate Package</h4>
                  <ul className="space-y-2 text-[#2c3e50]">
                    <li className="flex items-start gap-2">
                      <Check className="text-[#2d6e4b] flex-shrink-0 mt-1" size={16} />
                      Conference room setup
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-[#2d6e4b] flex-shrink-0 mt-1" size={16} />
                      AV equipment included
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-[#2d6e4b] flex-shrink-0 mt-1" size={16} />
                      Coffee & lunch breaks
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-[#2d6e4b] flex-shrink-0 mt-1" size={16} />
                      High-speed WiFi
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'gallery' && (
        <section className="py-20 bg-gradient-to-br from-[#f5f5f0] to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1a472a] mb-4 text-center">Photo Gallery</h2>
            <p className="text-center text-[#2c3e50] mb-12 max-w-2xl mx-auto">
              Explore our facilities, rooms, dining options, and nearby attractions through our comprehensive photo gallery
            </p>
            <PropertyGallery property={property} />
          </div>
        </section>
      )}

      {activeTab === 'location' && (
        <>
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-[#1a472a] mb-12 text-center">Location & Transportation</h2>
              <div className="grid lg:grid-cols-2 gap-12 mb-12">
                <div>
                  <h3 className="text-xl font-bold text-[#1a472a] mb-4">Our Address</h3>
                  <div className="bg-[#f5f5f0] p-6 rounded-xl mb-6">
                    <p className="text-[#2c3e50] mb-2">{property.address}</p>
                    <p className="text-[#2c3e50] mb-2">{property.city}, {property.state} - {property.pincode}</p>
                    <div className="flex items-center gap-2 mt-4">
                      <Phone size={18} className="text-[#d4a574]" />
                      <a href={`tel:${property.phone}`} className="text-[#1a472a] font-medium">{property.phone}</a>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Mail size={18} className="text-[#d4a574]" />
                      <a href={`mailto:${property.email}`} className="text-[#1a472a] font-medium">{property.email}</a>
                    </div>
                  </div>
                  <Button variant="primary" size="lg" icon={Navigation} className="w-full">
                    Get Directions on Google Maps
                  </Button>
                </div>
                <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
                  <p className="text-gray-500">Map Embed Area</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-[#1a472a] mb-8 text-center">Transportation Services</h3>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-[#1a472a] text-white">
                    <tr>
                      <th className="text-left py-4 px-6">Service</th>
                      <th className="text-left py-4 px-6">Rate</th>
                      <th className="text-left py-4 px-6">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transportationServices.map((service, idx) => (
                      <tr key={idx} className="border-b border-gray-100">
                        <td className="py-4 px-6 font-medium text-[#1a472a]">{service.service}</td>
                        <td className="py-4 px-6 text-[#2c3e50]">{service.rate}</td>
                        <td className="py-4 px-6 text-sm text-[#2c3e50]">{service.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="py-20 bg-gradient-to-br from-[#f5f5f0] to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-2xl font-bold text-[#1a472a] mb-8 text-center">Local Experiences</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {localExperiences.map((exp, idx) => (
                  <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <img src={exp.image} alt={exp.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <h4 className="font-bold text-[#1a472a] mb-2">{exp.title}</h4>
                      <p className="text-sm text-[#2c3e50] mb-3">{exp.description}</p>
                      <div className="flex items-center gap-2 text-sm text-[#d4a574]">
                        <Clock size={16} />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-2xl font-bold text-[#1a472a] mb-8 text-center">Nearby Attractions</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {property.nearbyAttractions.map((attraction, idx) => (
                  <div key={idx} className="bg-white border-2 border-[#f5f5f0] rounded-xl overflow-hidden hover:border-[#d4a574] transition-colors">
                    <img src={attraction.image} alt={attraction.name} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-[#1a472a]">{attraction.name}</h4>
                        <span className="text-sm text-[#d4a574] font-medium">{attraction.distance}</span>
                      </div>
                      <p className="text-sm text-[#2c3e50]">{attraction.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 bg-[#f5f5f0]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-2xl font-bold text-[#1a472a] mb-8 text-center">Best Time to Visit</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(seasonalHighlights).map(([season, info], idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 shadow-lg">
                    <h4 className="text-xl font-bold text-[#1a472a] mb-2">{season}</h4>
                    <p className="text-sm text-[#d4a574] font-medium mb-3">Temperature: {info.temp}</p>
                    <p className="text-[#2c3e50] mb-4">{info.description}</p>
                    <ul className="space-y-2">
                      {info.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-[#2c3e50]">
                          <Check className="text-[#2d6e4b]" size={16} />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-[#1a472a] mb-8 text-center">Guest Reviews</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {property.testimonials.map((testimonial, idx) => (
              <TestimonialCard key={idx} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#1a472a] to-[#2d6e4b] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Patna's Finest?</h2>
          <p className="text-lg text-white/90 mb-8">
            Book your stay at Patliputra Saalt Hotel and enjoy world-class hospitality in the heart of Bihar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => window.open('https://wa.me/919709633313?text=I want to book at Patliputra Saalt Hotel', '_blank')}
            >
              Book on WhatsApp
            </Button>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#1a472a]">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
