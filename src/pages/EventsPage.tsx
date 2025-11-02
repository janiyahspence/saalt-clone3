import React, { useState } from 'react';
import { VideoHero } from '../components/VideoHero';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { Users, Building2, Sparkles, UtensilsCrossed, Camera, Music } from 'lucide-react';

export const EventsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guests: '',
    property: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Event Inquiry:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Event Type: ${formData.eventType}
Event Date: ${formData.eventDate}
Expected Guests: ${formData.guests}
Preferred Property: ${formData.property}
Additional Details: ${formData.message}`;

    window.open(`https://wa.me/919709633313?text=${encodeURIComponent(message)}`, '_blank');
  };

  const eventTypes = [
    {
      icon: Sparkles,
      title: 'Weddings',
      description: 'Create magical moments at our luxury venues with capacity for up to 3,500 guests. From intimate ceremonies to grand celebrations.',
      features: ['Outdoor Garden Venues', 'Elegant Banquet Halls', 'Guest Accommodations', 'Professional Catering', 'Event Planning Team'],
      image: '/narayana-wedding4.jpg',
    },
    {
      icon: Building2,
      title: 'Corporate Events',
      description: 'Host successful business meetings, conferences, and seminars in our state-of-the-art facilities with modern amenities.',
      features: ['Conference Halls', 'AV Equipment', 'High-Speed WiFi', 'Business Catering', 'Accommodation Packages'],
      image: '/saalt-patliputra-properties.jpg',
    },
    {
      icon: Users,
      title: 'Social Gatherings',
      description: 'Celebrate birthdays, anniversaries, reunions, and special occasions in our versatile event spaces.',
      features: ['Flexible Spaces', 'Custom Decorations', 'Entertainment Options', 'Diverse Menu Options', 'Photography Services'],
      image: '/narayana-wedding2.jpg',
    },
  ];

  return (
    <div className="min-h-screen">
      <VideoHero
        videoPlaceholder="/narayana-greens-proeperties.avif"
        title="Events & Weddings"
        subtitle="Create Unforgettable Memories at Bihar's Premier Event Venues"
        height="h-[70vh]"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a472a] mb-4">Our Event Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a574] to-[#c89356] mx-auto mb-6"></div>
            <p className="text-lg text-[#2c3e50] max-w-3xl mx-auto">
              From intimate gatherings to grand celebrations, we provide exceptional venues and services
            </p>
          </div>

          <div className="space-y-12">
            {eventTypes.map((event, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#1a472a] to-[#2d6e4b] rounded-full mb-4">
                    <event.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-3xl font-bold text-[#1a472a] mb-4">{event.title}</h3>
                  <p className="text-lg text-[#2c3e50] leading-relaxed mb-6">{event.description}</p>
                  <ul className="space-y-2 mb-6">
                    {event.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-[#2c3e50]">
                        <div className="w-2 h-2 bg-[#d4a574] rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => {
                      const message = `Hi, I would like to enquire about ${event.title} services at Saalt Hotels. Please provide more information.`;
                      window.open(`https://wa.me/919709633313?text=${encodeURIComponent(message)}`, '_blank');
                    }}
                  >
                    Enquire Now
                  </Button>
                </div>
                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <img
                    src={event.image}
                    alt={event.title}
                    className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#1a472a] to-[#2d6e4b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Narayana Greens Resort</h2>
              <p className="text-xl text-white/90 mb-6">Bihar's Premier Wedding Destination</p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Users className="text-[#d4a574]" size={24} />
                  <span className="text-lg">Capacity for 3,500 guests</span>
                </div>
                <div className="flex items-center gap-3">
                  <Building2 className="text-[#d4a574]" size={24} />
                  <span className="text-lg">40,000 sq.ft garden venue</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="text-[#d4a574]" size={24} />
                  <span className="text-lg">Three elegant banquet halls</span>
                </div>
                <div className="flex items-center gap-3">
                  <UtensilsCrossed className="text-[#d4a574]" size={24} />
                  <span className="text-lg">Expert catering services</span>
                </div>
              </div>
              <Link to="/properties/narayana-greens">
                <Button variant="secondary" size="lg">
                  Explore Narayana Greens
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/narayana-wedding3.jpg"
                alt="Wedding setup"
                className="rounded-2xl shadow-xl"
              />
              <img
                src="/narayana-wedding2.jpg"
                alt="Banquet hall"
                className="rounded-2xl shadow-xl mt-8"
              />
              <img
                src="/narayana-wedding4.jpg"
                alt="Pool area"
                className="rounded-2xl shadow-xl"
              />
              <img
                src="/narayana-weddin1.JPG"
                alt="Resort view"
                className="rounded-2xl shadow-xl mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f5f5f0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1a472a] mb-4">Plan Your Event</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a574] to-[#c89356] mx-auto mb-6"></div>
            <p className="text-lg text-[#2c3e50]">
              Fill out the form below and our events team will contact you shortly
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#2c3e50] mb-2">Name *</label>
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
                  <label className="block text-sm font-medium text-[#2c3e50] mb-2">Event Type *</label>
                  <select
                    required
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a472a] focus:border-transparent"
                  >
                    <option value="">Select Event Type</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Corporate Event">Corporate Event</option>
                    <option value="Social Gathering">Social Gathering</option>
                    <option value="Conference">Conference</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2c3e50] mb-2">Event Date</label>
                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a472a] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#2c3e50] mb-2">Expected Guests *</label>
                  <input
                    type="number"
                    required
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    placeholder="Number of guests"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a472a] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2c3e50] mb-2">Preferred Property</label>
                  <select
                    value={formData.property}
                    onChange={(e) => setFormData({ ...formData, property: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a472a] focus:border-transparent"
                  >
                    <option value="">Any Property</option>
                    <option value="Narayana Greens Resort">Narayana Greens Resort</option>
                    <option value="Patliputra Saalt Hotel">Patliputra Saalt Hotel</option>
                    <option value="Deoghar Saalt Hotel">Deoghar Saalt Hotel</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2c3e50] mb-2">Additional Details</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a472a] focus:border-transparent"
                  placeholder="Tell us more about your event requirements..."
                ></textarea>
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full">
                Submit Event Inquiry
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
