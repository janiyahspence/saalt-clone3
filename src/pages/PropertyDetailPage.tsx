import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { properties } from '../data/properties';
import { VideoHero } from '../components/VideoHero';
import { TestimonialCard } from '../components/TestimonialCard';
import { PropertyGallery } from '../components/PropertyGallery';
import { LocationWidget } from '../components/LocationWidget';
import { Button } from '../components/Button';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Star,
  Bed,
  Users,
  ChevronRight,
  Navigation,
  Plane,
  Train,
} from 'lucide-react';
import * as Icons from 'lucide-react';

export const PropertyDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const property = properties.find((p) => p.id === id);
  const [selectedRoom, setSelectedRoom] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    roomType: '',
    message: '',
  });

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#1a472a] mb-4">Property Not Found</h2>
          <Link to="/properties">
            <Button variant="primary">View All Properties</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello! I'd like to inquire about ${property.name}

*Booking Details:*
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Check-in: ${formData.checkIn}
Check-out: ${formData.checkOut}
Guests: ${formData.guests}
Room Type: ${formData.roomType || 'Any Available'}
Message: ${formData.message || 'N/A'}`;

    window.open(`https://wa.me/919709633313?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      <VideoHero
        videoPlaceholder={property.heroImage}
        title={property.name}
        subtitle={`${property.city}, ${property.state} | ${property.type}`}
        height="h-[70vh]"
      >
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {property.highlights.map((highlight, index) => (
            <span
              key={index}
              className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium"
            >
              {highlight}
            </span>
          ))}
        </div>
      </VideoHero>

      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex items-center gap-3">
              <div className="bg-[#f5f5f0] p-3 rounded-full">
                <Star className="text-[#d4a574]" size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-[#1a472a]">{property.rating}</p>
                <p className="text-sm text-gray-500">Guest Rating</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#f5f5f0] p-3 rounded-full">
                <Bed className="text-[#d4a574]" size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-[#1a472a]">{property.totalRooms}</p>
                <p className="text-sm text-gray-500">Total Rooms</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#f5f5f0] p-3 rounded-full">
                <Clock className="text-[#d4a574]" size={24} />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1a472a]">{property.checkIn}</p>
                <p className="text-sm text-gray-500">Check-in</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#f5f5f0] p-3 rounded-full">
                <MapPin className="text-[#d4a574]" size={24} />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1a472a]">{property.city}</p>
                <p className="text-sm text-gray-500">{property.state}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#f5f5f0] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-[#1a472a] mb-6">About {property.shortName}</h2>
              <p className="text-[#2c3e50] leading-relaxed mb-8 text-lg">{property.description}</p>

              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-center gap-3 mb-2">
                    <Plane className="text-[#d4a574]" size={24} />
                    <h3 className="font-semibold text-[#1a472a]">From Airport</h3>
                  </div>
                  <p className="text-[#2c3e50]">{property.distanceFromAirport}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-center gap-3 mb-2">
                    <Train className="text-[#d4a574]" size={24} />
                    <h3 className="font-semibold text-[#1a472a]">From Railway Station</h3>
                  </div>
                  <p className="text-[#2c3e50]">{property.distanceFromStation}</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-[#1a472a] mb-6">Room Types & Pricing</h3>
              <div className="space-y-6 mb-12">
                {property.rooms.map((room, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                      selectedRoom === index ? 'ring-2 ring-[#1a472a]' : ''
                    }`}
                  >
                    <div className="grid md:grid-cols-3 gap-6 p-6">
                      <div className="md:col-span-1">
                        <img
                          src={room.images[0]}
                          alt={room.name}
                          className="w-full h-48 object-cover rounded-xl"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="text-xl font-bold text-[#1a472a] mb-1">{room.name}</h4>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                              <span className="flex items-center gap-1">
                                <Bed size={16} />
                                {room.bedType}
                              </span>
                              <span className="flex items-center gap-1">
                                <Users size={16} />
                                Up to {room.capacity} guests
                              </span>
                              {room.size && <span>{room.size}</span>}
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-[#1a472a]">{room.price}</p>
                            <p className="text-sm text-gray-500">per night</p>
                          </div>
                        </div>
                        <p className="text-[#2c3e50] mb-4 leading-relaxed">{room.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {room.amenities.map((amenity, i) => (
                            <span
                              key={i}
                              className="text-xs bg-[#f5f5f0] text-[#1a472a] px-3 py-1 rounded-full"
                            >
                              {amenity}
                            </span>
                          ))}
                        </div>
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() => {
                            const message = `Hello Saalt Hotels, I want to book the ${room.name} room in ${property.name}. How can I proceed?`;
                            window.open(`https://wa.me/${property.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
                          }}
                        >
                          Book This Room
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-[#1a472a] mb-6">Amenities & Facilities</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                {property.amenities.map((amenity, index) => {
                  const IconComponent = (Icons as any)[amenity.icon];
                  return (
                    <div key={index} className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-3">
                        {IconComponent && <IconComponent className="text-[#d4a574] flex-shrink-0" size={24} />}
                        <div>
                          <h4 className="font-semibold text-[#1a472a] mb-1">{amenity.name}</h4>
                          <p className="text-sm text-gray-600">{amenity.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {property.dining.length > 0 && (
                <>
                  <h3 className="text-2xl font-bold text-[#1a472a] mb-6">Dining Options</h3>
                  <div className="space-y-6 mb-12">
                    {property.dining.map((dining, index) => (
                      <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                        <div className="grid md:grid-cols-2 gap-6">
                          <img
                            src={dining.image}
                            alt={dining.name}
                            className="w-full h-64 object-cover"
                          />
                          <div className="p-6">
                            <h4 className="text-xl font-bold text-[#1a472a] mb-2">{dining.name}</h4>
                            <p className="text-[#d4a574] font-medium mb-2">{dining.cuisine}</p>
                            <p className="text-sm text-gray-600 mb-4">{dining.timing}</p>
                            <p className="text-[#2c3e50] leading-relaxed">{dining.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              <h3 className="text-2xl font-bold text-[#1a472a] mb-6">Location & How to Reach</h3>
              <div className="mb-12">
                <LocationWidget property={property} showStreetView={true} />
              </div>

              <h3 className="text-2xl font-bold text-[#1a472a] mb-6">Nearby Attractions</h3>
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {property.nearbyAttractions.map((attraction, index) => (
                  <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <img
                      src={attraction.image}
                      alt={attraction.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-[#1a472a]">{attraction.name}</h4>
                        <span className="text-sm text-[#d4a574] font-medium whitespace-nowrap ml-2">
                          {attraction.distance}
                        </span>
                      </div>
                      <p className="text-sm text-[#2c3e50]">{attraction.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-[#1a472a] mb-6">Guest Reviews</h3>
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {property.testimonials.map((testimonial, index) => (
                  <TestimonialCard key={index} testimonial={testimonial} />
                ))}
              </div>

              <h3 className="text-2xl font-bold text-[#1a472a] mb-6">Photo Gallery</h3>
              <PropertyGallery property={property} />
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div id="booking-form" className="bg-white rounded-2xl shadow-xl p-8 mb-6">
                  <h3 className="text-2xl font-bold text-[#1a472a] mb-6">Book Your Stay</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-[#2c3e50] mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a472a] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#2c3e50] mb-1">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a472a] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#2c3e50] mb-1">Phone *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a472a] focus:border-transparent"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#2c3e50] mb-1">Check-in *</label>
                        <input
                          type="date"
                          required
                          value={formData.checkIn}
                          onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a472a] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#2c3e50] mb-1">Check-out *</label>
                        <input
                          type="date"
                          required
                          value={formData.checkOut}
                          onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a472a] focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#2c3e50] mb-1">Guests *</label>
                      <select
                        required
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a472a] focus:border-transparent"
                      >
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#2c3e50] mb-1">Room Type</label>
                      <select
                        value={formData.roomType}
                        onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a472a] focus:border-transparent"
                      >
                        <option value="">Any Available</option>
                        {property.rooms.map((room) => (
                          <option key={room.name} value={room.name}>
                            {room.name} - {room.price}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#2c3e50] mb-1">Special Requests</label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a472a] focus:border-transparent"
                        placeholder="Any special requirements?"
                      ></textarea>
                    </div>
                    <Button type="submit" variant="primary" size="lg" className="w-full">
                      Send Booking Request
                    </Button>
                  </form>
                </div>

                <div className="bg-gradient-to-br from-[#1a472a] to-[#2d6e4b] rounded-2xl p-6 text-white">
                  <h4 className="text-lg font-bold mb-4">Contact Property</h4>
                  <div className="space-y-3">
                    <a href={`tel:${property.phone}`} className="flex items-center gap-3 hover:text-[#d4a574] transition-colors">
                      <Phone size={18} />
                      <span className="text-sm">{property.phone}</span>
                    </a>
                    <a href={`mailto:${property.email}`} className="flex items-center gap-3 hover:text-[#d4a574] transition-colors">
                      <Mail size={18} />
                      <span className="text-sm">{property.email}</span>
                    </a>
                    <div className="flex items-start gap-3">
                      <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{property.address}, {property.state} {property.pincode}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
