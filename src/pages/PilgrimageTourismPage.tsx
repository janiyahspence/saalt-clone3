import React, { useState } from 'react';
import { VideoHero } from '../components/VideoHero';
import { Button } from '../components/Button';
import { Church, MapPin, Users, Calendar, Utensils, Car, BookOpen, Heart, Gift, Sun, Clock, Phone } from 'lucide-react';

export const PilgrimageTourismPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    groupSize: '',
    travelDates: '',
    requirements: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Pilgrimage Tourism Inquiry:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Destination: ${formData.destination}
Group Size: ${formData.groupSize}
Travel Dates: ${formData.travelDates}
Special Requirements: ${formData.requirements}`;

    window.open(`https://wa.me/919709633313?text=${encodeURIComponent(message)}`, '_blank');
  };

  const destinations = [
    {
      icon: Church,
      name: 'Bodh Gaya Buddhist Circuit',
      description: 'Experience the sacred site where Lord Buddha attained enlightenment. Stay at our Buddha Saalt Hotel just 2 km from Mahabodhi Temple.',
      highlights: ['Mahabodhi Temple Complex', 'Great Buddha Statue', 'Bodhi Tree', 'Buddhist Monasteries', 'Meditation Centers'],
      property: 'Buddha Saalt Hotel',
      distance: '2 km from Mahabodhi Temple',
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800',
    },
    {
      icon: Church,
      name: 'Deoghar Jyotirlinga',
      description: 'Visit one of the twelve Jyotirlingas, the sacred Baidyanath Temple. Our Deoghar Saalt Hotel offers comfort just 4 km from the temple.',
      highlights: ['Baidyanath Jyotirlinga', 'Nandan Pahar', 'Tapovan Caves', 'Satsang Ashram', 'Basukinath Temple'],
      property: 'Deoghar Saalt Hotel',
      distance: '4 km from Baidyanath Temple',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800',
    },
    {
      icon: MapPin,
      name: 'Patna Buddhist & Hindu Sites',
      description: 'Explore the ancient city of Patliputra with its rich spiritual heritage. Perfect base for pilgrimage circuits in Bihar.',
      highlights: ['Mahavir Mandir', 'Pathar Ki Masjid', 'Golghar', 'Takht Sri Patna Sahib', 'Kumhrar Excavation'],
      property: 'Patliputra Saalt Hotel',
      distance: 'Central Patna location',
      image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800',
    },
  ];

  const services = [
    {
      icon: Calendar,
      title: 'Pilgrimage Packages',
      description: 'Comprehensive packages including accommodation, meals, transportation, and guided temple visits tailored for spiritual journeys.',
    },
    {
      icon: Car,
      title: 'Temple Transportation',
      description: 'Comfortable AC vehicles for temple visits with experienced drivers familiar with pilgrimage routes and timings.',
    },
    {
      icon: BookOpen,
      title: 'Guided Tours',
      description: 'Knowledgeable guides who share historical and spiritual significance of sacred sites in multiple languages.',
    },
    {
      icon: Utensils,
      title: 'Sattvic Meals',
      description: 'Pure vegetarian and Jain food options prepared following religious dietary guidelines and traditions.',
    },
    {
      icon: Users,
      title: 'Group Accommodations',
      description: 'Special arrangements for pilgrim groups, families, and religious organizations with group rates and amenities.',
    },
    {
      icon: Gift,
      title: 'Special Darshan Arrangements',
      description: 'Assistance in booking special pujas, darshan slots, and religious ceremonies at major temples.',
    },
    {
      icon: Sun,
      title: 'Festival Packages',
      description: 'Exclusive packages during major religious festivals like Maha Shivaratri, Buddha Purnima, and Shravan Month.',
    },
    {
      icon: Heart,
      title: 'Spiritual Amenities',
      description: 'Prayer rooms, early morning temple visit arrangements, and peaceful environment conducive to spiritual practice.',
    },
  ];

  const packages = [
    {
      name: 'Bodh Gaya Buddhist Circuit',
      duration: '3 Days / 2 Nights',
      places: 'Bodh Gaya, Rajgir, Nalanda, Gaya',
      includes: ['Accommodation at Buddha Saalt', 'All Meals', 'AC Transportation', 'Guide Services', 'Temple Visits'],
      starting: '₹8,999 per person',
    },
    {
      name: 'Deoghar Jyotirlinga Yatra',
      duration: '2 Days / 1 Night',
      places: 'Baidyanath Temple, Basukinath, Nandan Pahar',
      includes: ['Accommodation at Deoghar Saalt', 'Breakfast & Dinner', 'Local Transport', 'Darshan Assistance'],
      starting: '₹4,999 per person',
    },
    {
      name: 'Bihar Buddhist Circuit',
      duration: '5 Days / 4 Nights',
      places: 'Patna, Bodh Gaya, Rajgir, Nalanda, Vaishali',
      includes: ['Multi-property Stay', 'All Meals', 'AC Coach', 'Expert Guide', 'Entrance Fees'],
      starting: '₹16,999 per person',
    },
  ];

  const testimonials = [
    {
      name: 'Rev. Thich Nhat Hanh Group',
      location: 'Vietnam',
      feedback: 'Perfect location for our Buddhist pilgrimage. Buddha Saalt Hotel staff was very respectful of our practices and dietary needs.',
    },
    {
      name: 'Rajesh Sharma Family',
      location: 'Delhi',
      feedback: 'Excellent arrangements for our Deoghar yatra. The hotel was clean, food was pure vegetarian, and staff helped with darshan timings.',
    },
    {
      name: 'International Buddhist Society',
      location: 'Japan',
      feedback: 'We bring groups every year. Saalt Hotels understands pilgrims\' needs perfectly. Highly recommend for Buddhist circuit tours.',
    },
  ];

  return (
    <div className="min-h-screen">
      <VideoHero
        videoPlaceholder="/buddha-saalt-properties.webp"
        title="Pilgrimage Tourism"
        subtitle="Sacred Journeys with Comfort and Devotion"
        height="h-[60vh]"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Church className="mx-auto text-[#d4a574] mb-4" size={48} />
            <h2 className="text-4xl font-bold text-[#1a472a] mb-4">Sacred Pilgrimage Destinations</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a574] to-[#c89356] mx-auto mb-6"></div>
            <p className="text-lg text-[#2c3e50] max-w-3xl mx-auto">
              Our hotels are strategically located near major pilgrimage sites, offering comfort and convenience for your spiritual journey
            </p>
          </div>

          <div className="space-y-12">
            {destinations.map((destination, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#1a472a] to-[#2d6e4b] rounded-full mb-4">
                    <destination.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-3xl font-bold text-[#1a472a] mb-4">{destination.name}</h3>
                  <p className="text-lg text-[#2c3e50] leading-relaxed mb-4">{destination.description}</p>
                  <div className="bg-[#f5f5f0] rounded-xl p-4 mb-4">
                    <p className="font-semibold text-[#1a472a] mb-2">Stay at: {destination.property}</p>
                    <p className="text-[#2c3e50] flex items-center gap-2">
                      <MapPin size={16} className="text-[#d4a574]" />
                      {destination.distance}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a472a] mb-3">Major Attractions:</h4>
                    <ul className="space-y-2">
                      {destination.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center gap-2 text-[#2c3e50]">
                          <div className="w-2 h-2 bg-[#d4a574] rounded-full"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="rounded-2xl shadow-2xl w-full h-[450px] object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#f5f5f0] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a472a] mb-4">Pilgrimage Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a574] to-[#c89356] mx-auto mb-6"></div>
            <p className="text-lg text-[#2c3e50] max-w-3xl mx-auto">
              Comprehensive services designed specifically for pilgrims and spiritual travelers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow flex flex-col">
                <div className="bg-gradient-to-br from-[#1a472a] to-[#2d6e4b] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <service.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#1a472a] mb-2">{service.title}</h3>
                <p className="text-[#2c3e50] text-sm leading-relaxed mb-4 flex-1">{service.description}</p>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    const message = `Hi, I would like to enquire about ${service.title} for pilgrimage tourism. Please provide more details.`;
                    window.open(`https://wa.me/919709633313?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                  className="w-full"
                >
                  Enquire Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Gift className="mx-auto text-[#d4a574] mb-4" size={48} />
            <h2 className="text-4xl font-bold text-[#1a472a] mb-4">Pilgrimage Packages</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a574] to-[#c89356] mx-auto mb-6"></div>
            <p className="text-lg text-[#2c3e50] max-w-3xl mx-auto">
              Carefully curated packages for a hassle-free spiritual journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-gradient-to-br from-[#f5f5f0] to-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="bg-[#d4a574] text-white px-4 py-2 rounded-lg inline-block mb-4 font-semibold">
                  {pkg.duration}
                </div>
                <h3 className="text-2xl font-bold text-[#1a472a] mb-3">{pkg.name}</h3>
                <p className="text-[#2c3e50] mb-4 font-medium">{pkg.places}</p>
                <div className="mb-6">
                  <h4 className="font-semibold text-[#1a472a] mb-2">Package Includes:</h4>
                  <ul className="space-y-2">
                    {pkg.includes.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-[#2c3e50] text-sm">
                        <div className="w-1.5 h-1.5 bg-[#d4a574] rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-gray-200 pt-4 mb-6">
                  <p className="text-2xl font-bold text-[#1a472a]">{pkg.starting}</p>
                  <p className="text-sm text-[#2c3e50]">*Prices subject to availability</p>
                </div>
                <Button
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={() => {
                    const message = `Hi, I would like to enquire about the ${pkg.name} package (${pkg.duration}). Please provide more details.`;
                    window.open(`https://wa.me/919709633313?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                >
                  Enquire Now
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-[#2c3e50] mb-4">
              * Packages can be customized based on your group size, travel dates, and preferences
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#1a472a] to-[#2d6e4b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Pilgrims Choose Saalt Hotels</h2>
            <div className="w-24 h-1 bg-[#d4a574] mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Clock className="mx-auto mb-3 text-[#d4a574]" size={32} />
                <h4 className="font-bold mb-2">Early Check-in</h4>
                <p className="text-white/80 text-sm">Flexible timings for early morning temple visits</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Utensils className="mx-auto mb-3 text-[#d4a574]" size={32} />
                <h4 className="font-bold mb-2">Pure Food</h4>
                <p className="text-white/80 text-sm">Sattvic vegetarian meals following traditions</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <MapPin className="mx-auto mb-3 text-[#d4a574]" size={32} />
                <h4 className="font-bold mb-2">Prime Location</h4>
                <p className="text-white/80 text-sm">Close proximity to major temples and sites</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Heart className="mx-auto mb-3 text-[#d4a574]" size={32} />
                <h4 className="font-bold mb-2">Respectful Service</h4>
                <p className="text-white/80 text-sm">Staff trained in cultural and religious sensitivity</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-[#d4a574] mb-3 text-3xl">"</div>
                <p className="text-white/90 mb-4 leading-relaxed">{testimonial.feedback}</p>
                <div className="border-t border-white/20 pt-4">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-white/70">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Phone className="mx-auto text-[#d4a574] mb-4" size={48} />
            <h2 className="text-4xl font-bold text-[#1a472a] mb-4">Plan Your Pilgrimage</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a574] to-[#c89356] mx-auto mb-6"></div>
            <p className="text-lg text-[#2c3e50]">
              Share your pilgrimage details and we'll create a customized itinerary for you
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#f5f5f0] to-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#2c3e50] mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a472a] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2c3e50] mb-2">Phone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a472a] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2c3e50] mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a472a] focus:border-transparent"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#2c3e50] mb-2">Pilgrimage Destination *</label>
                  <select
                    required
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a472a] focus:border-transparent"
                  >
                    <option value="">Select Destination</option>
                    <option value="Bodh Gaya">Bodh Gaya Buddhist Circuit</option>
                    <option value="Deoghar">Deoghar Jyotirlinga</option>
                    <option value="Bihar Circuit">Complete Bihar Circuit</option>
                    <option value="Custom">Custom Itinerary</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2c3e50] mb-2">Group Size</label>
                  <input
                    type="number"
                    value={formData.groupSize}
                    onChange={(e) => setFormData({ ...formData, groupSize: e.target.value })}
                    placeholder="Number of pilgrims"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a472a] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2c3e50] mb-2">Preferred Travel Dates</label>
                <input
                  type="text"
                  value={formData.travelDates}
                  onChange={(e) => setFormData({ ...formData, travelDates: e.target.value })}
                  placeholder="e.g., April 10-13, 2025"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a472a] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2c3e50] mb-2">Special Requirements</label>
                <textarea
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a472a] focus:border-transparent"
                  placeholder="Dietary preferences, mobility assistance, language requirements, etc."
                ></textarea>
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full">
                Submit Inquiry
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
