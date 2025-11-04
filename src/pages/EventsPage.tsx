import React, { useState } from 'react';
import { VideoHero } from '../components/VideoHero';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { VideoThumbnail } from '../components/VideoThumbnail';
import { Users, Building2, Sparkles, UtensilsCrossed, Camera, Music, MapPin, Phone, MessageCircle, Heart, Award, Briefcase, PartyPopper, ChefHat, Wine, Star } from 'lucide-react';

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

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#1a472a] mb-4">Bihar Banquets</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a574] to-[#c89356] mx-auto mb-6"></div>
            <p className="text-2xl text-[#d4a574] font-semibold mb-8">Patna's Most Elegant Celebration Venue</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-[#2c3e50] leading-relaxed mb-6">
                Welcome to <span className="font-semibold text-[#1a472a]">Bihar Banquets</span>, where Patna's most elegant celebrations come to life. We are dedicated to transforming your special occasions—from grand weddings to professional corporate events—into lasting, beautiful memories. As the city's premier banquet hall, we provide a truly charming and luxurious setting for every milestone.
              </p>
              <p className="text-lg text-[#2c3e50] leading-relaxed mb-6">
                Our beautifully designed, spacious venues offer an unmatched ambiance, creating a grand experience for you and your guests. We proudly host a wide range of events, including dream weddings, receptions, Haldi-Mehndi ceremonies, anniversaries, and corporate meetings.
              </p>
              <p className="text-lg text-[#2c3e50] leading-relaxed mb-6">
                Our commitment is to provide <span className="font-semibold text-[#1a472a]">impeccable, seamless service</span>. We believe in handling every single detail with care, from elegant decor to our state-of-the-art facilities, allowing you to fully immerse yourself in your celebration. This promise is anchored by our exquisite in-house catering, which features everything from specialty live counters for Chaat and South Indian cuisine to diverse non-vegetarian main courses.
              </p>
              <p className="text-lg text-[#2c3e50] leading-relaxed">
                Choose Bihar Banquets for exceptional hospitality and an event that will be remembered for years to come.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3]">
                <VideoThumbnail
                  videoSrc="/bihar-banquest-shadi copy.mp4"
                  alt="Bihar Banquets Main Hall Video"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-[#1a472a] text-center mb-12">Event Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#f5f5f0] to-[#e8e8dd] rounded-xl shadow-lg overflow-hidden flex items-center justify-center">
                <div className="text-center p-4">
                  <Sparkles className="text-[#d4a574] mx-auto mb-2" size={40} />
                  <p className="text-[#1a472a] font-medium text-sm">Wedding Setup</p>
                </div>
              </div>
              <div className="aspect-[4/3] bg-gradient-to-br from-[#f5f5f0] to-[#e8e8dd] rounded-xl shadow-lg overflow-hidden flex items-center justify-center">
                <div className="text-center p-4">
                  <Heart className="text-[#d4a574] mx-auto mb-2" size={40} />
                  <p className="text-[#1a472a] font-medium text-sm">Haldi-Mehndi</p>
                </div>
              </div>
              <div className="aspect-[4/3] bg-gradient-to-br from-[#f5f5f0] to-[#e8e8dd] rounded-xl shadow-lg overflow-hidden flex items-center justify-center">
                <div className="text-center p-4">
                  <Briefcase className="text-[#d4a574] mx-auto mb-2" size={40} />
                  <p className="text-[#1a472a] font-medium text-sm">Corporate Events</p>
                </div>
              </div>
              <div className="aspect-[4/3] bg-gradient-to-br from-[#f5f5f0] to-[#e8e8dd] rounded-xl shadow-lg overflow-hidden flex items-center justify-center">
                <div className="text-center p-4">
                  <ChefHat className="text-[#d4a574] mx-auto mb-2" size={40} />
                  <p className="text-[#1a472a] font-medium text-sm">Live Counters</p>
                </div>
              </div>
              <div className="aspect-[4/3] bg-gradient-to-br from-[#f5f5f0] to-[#e8e8dd] rounded-xl shadow-lg overflow-hidden flex items-center justify-center">
                <div className="text-center p-4">
                  <Users className="text-[#d4a574] mx-auto mb-2" size={40} />
                  <p className="text-[#1a472a] font-medium text-sm">Reception Area</p>
                </div>
              </div>
              <div className="aspect-[4/3] bg-gradient-to-br from-[#f5f5f0] to-[#e8e8dd] rounded-xl shadow-lg overflow-hidden flex items-center justify-center">
                <div className="text-center p-4">
                  <Camera className="text-[#d4a574] mx-auto mb-2" size={40} />
                  <p className="text-[#1a472a] font-medium text-sm">Exterior View</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-[#1a472a] text-center mb-4">Event Types We Host</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a574] to-[#c89356] mx-auto mb-12"></div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#f5f5f0] rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#1a472a] to-[#2d6e4b] rounded-full mb-4">
                  <Sparkles className="text-white" size={28} />
                </div>
                <h4 className="text-xl font-bold text-[#1a472a] mb-3">Grand Weddings</h4>
                <p className="text-[#2c3e50] mb-4">Dream weddings and receptions with capacity for large gatherings, elegant decor, and personalized planning.</p>
                <ul className="space-y-2 text-sm text-[#2c3e50]">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#d4a574] rounded-full"></div>
                    Large guest capacity
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#d4a574] rounded-full"></div>
                    Elegant stage setup
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#d4a574] rounded-full"></div>
                    Professional coordination
                  </li>
                </ul>
              </div>

              <div className="bg-[#f5f5f0] rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#1a472a] to-[#2d6e4b] rounded-full mb-4">
                  <Heart className="text-white" size={28} />
                </div>
                <h4 className="text-xl font-bold text-[#1a472a] mb-3">Haldi-Mehndi Ceremonies</h4>
                <p className="text-[#2c3e50] mb-4">Vibrant, colorful celebrations with traditional setups and authentic ambiance for pre-wedding rituals.</p>
                <ul className="space-y-2 text-sm text-[#2c3e50]">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#d4a574] rounded-full"></div>
                    Traditional decor options
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#d4a574] rounded-full"></div>
                    Cultural entertainment
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#d4a574] rounded-full"></div>
                    Festive atmosphere
                  </li>
                </ul>
              </div>

              <div className="bg-[#f5f5f0] rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#1a472a] to-[#2d6e4b] rounded-full mb-4">
                  <PartyPopper className="text-white" size={28} />
                </div>
                <h4 className="text-xl font-bold text-[#1a472a] mb-3">Anniversaries & Milestones</h4>
                <p className="text-[#2c3e50] mb-4">Celebrate life's special moments with intimate or grand gatherings in our versatile spaces.</p>
                <ul className="space-y-2 text-sm text-[#2c3e50]">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#d4a574] rounded-full"></div>
                    Flexible space options
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#d4a574] rounded-full"></div>
                    Custom decorations
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#d4a574] rounded-full"></div>
                    Personalized service
                  </li>
                </ul>
              </div>

              <div className="bg-[#f5f5f0] rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#1a472a] to-[#2d6e4b] rounded-full mb-4">
                  <Briefcase className="text-white" size={28} />
                </div>
                <h4 className="text-xl font-bold text-[#1a472a] mb-3">Corporate Meetings</h4>
                <p className="text-[#2c3e50] mb-4">Professional environment with modern AV equipment for successful business events and conferences.</p>
                <ul className="space-y-2 text-sm text-[#2c3e50]">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#d4a574] rounded-full"></div>
                    Modern presentation tools
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#d4a574] rounded-full"></div>
                    High-speed connectivity
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#d4a574] rounded-full"></div>
                    Business catering
                  </li>
                </ul>
              </div>

              <div className="bg-[#f5f5f0] rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#1a472a] to-[#2d6e4b] rounded-full mb-4">
                  <Users className="text-white" size={28} />
                </div>
                <h4 className="text-xl font-bold text-[#1a472a] mb-3">Social Gatherings</h4>
                <p className="text-[#2c3e50] mb-4">Birthday parties, reunions, and celebrations with customizable setups for memorable experiences.</p>
                <ul className="space-y-2 text-sm text-[#2c3e50]">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#d4a574] rounded-full"></div>
                    Theme-based decor
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#d4a574] rounded-full"></div>
                    Entertainment options
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#d4a574] rounded-full"></div>
                    Photo opportunities
                  </li>
                </ul>
              </div>

              <div className="bg-[#f5f5f0] rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#1a472a] to-[#2d6e4b] rounded-full mb-4">
                  <Award className="text-white" size={28} />
                </div>
                <h4 className="text-xl font-bold text-[#1a472a] mb-3">Special Occasions</h4>
                <p className="text-[#2c3e50] mb-4">Engagements, religious ceremonies, and other milestone events with attention to cultural needs.</p>
                <ul className="space-y-2 text-sm text-[#2c3e50]">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#d4a574] rounded-full"></div>
                    Respectful planning
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#d4a574] rounded-full"></div>
                    Cultural sensitivity
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#d4a574] rounded-full"></div>
                    Flexible arrangements
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16 bg-gradient-to-br from-[#1a472a] to-[#2d6e4b] rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold text-center mb-4">Exquisite In-House Catering</h3>
            <div className="w-24 h-1 bg-[#d4a574] mx-auto mb-8"></div>
            <p className="text-lg text-white/90 text-center max-w-3xl mx-auto mb-12">
              Our culinary excellence sets us apart. From live specialty counters to diverse main courses, we create unforgettable dining experiences for your guests.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#d4a574] rounded-full mb-4">
                  <ChefHat className="text-white" size={24} />
                </div>
                <h4 className="text-xl font-bold mb-3">Live Chaat Counter</h4>
                <p className="text-white/80 mb-4">Interactive chaat preparation with authentic North Indian flavors and fresh ingredients.</p>
                <ul className="space-y-2 text-sm text-white/70">
                  <li className="flex items-center gap-2">
                    <Star className="text-[#d4a574]" size={14} />
                    Golgappa & Dahi Puri
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="text-[#d4a574]" size={14} />
                    Papdi Chaat & Samosa
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="text-[#d4a574]" size={14} />
                    Fresh toppings
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#d4a574] rounded-full mb-4">
                  <UtensilsCrossed className="text-white" size={24} />
                </div>
                <h4 className="text-xl font-bold mb-3">South Indian Counter</h4>
                <p className="text-white/80 mb-4">Authentic South Indian delicacies prepared fresh with traditional recipes and techniques.</p>
                <ul className="space-y-2 text-sm text-white/70">
                  <li className="flex items-center gap-2">
                    <Star className="text-[#d4a574]" size={14} />
                    Dosa & Idli varieties
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="text-[#d4a574]" size={14} />
                    Vada & Uttapam
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="text-[#d4a574]" size={14} />
                    Authentic chutneys
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#d4a574] rounded-full mb-4">
                  <Wine className="text-white" size={24} />
                </div>
                <h4 className="text-xl font-bold mb-3">Non-Vegetarian Delights</h4>
                <p className="text-white/80 mb-4">Diverse non-vegetarian main courses with rich flavors and premium ingredients.</p>
                <ul className="space-y-2 text-sm text-white/70">
                  <li className="flex items-center gap-2">
                    <Star className="text-[#d4a574]" size={14} />
                    Chicken & Mutton curries
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="text-[#d4a574]" size={14} />
                    Tandoori specialties
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="text-[#d4a574]" size={14} />
                    Biryani & kebabs
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-white/90 italic">
                Custom menus available for dietary requirements including vegetarian, Jain, and special preferences
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-[#1a472a] text-center mb-4">Premium Facilities & Amenities</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a574] to-[#c89356] mx-auto mb-12"></div>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#f5f5f0] to-[#e8e8dd] rounded-full mb-4">
                  <Building2 className="text-[#1a472a]" size={32} />
                </div>
                <h5 className="font-semibold text-[#1a472a] mb-2">Spacious Venues</h5>
                <p className="text-sm text-[#2c3e50]">Beautifully designed halls with elegant interiors</p>
              </div>
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#f5f5f0] to-[#e8e8dd] rounded-full mb-4">
                  <Sparkles className="text-[#1a472a]" size={32} />
                </div>
                <h5 className="font-semibold text-[#1a472a] mb-2">Premium Decor</h5>
                <p className="text-sm text-[#2c3e50]">Elegant decorations tailored to your theme</p>
              </div>
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#f5f5f0] to-[#e8e8dd] rounded-full mb-4">
                  <Camera className="text-[#1a472a]" size={32} />
                </div>
                <h5 className="font-semibold text-[#1a472a] mb-2">AV Equipment</h5>
                <p className="text-sm text-[#2c3e50]">State-of-the-art sound and lighting systems</p>
              </div>
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#f5f5f0] to-[#e8e8dd] rounded-full mb-4">
                  <Users className="text-[#1a472a]" size={32} />
                </div>
                <h5 className="font-semibold text-[#1a472a] mb-2">Event Planning</h5>
                <p className="text-sm text-[#2c3e50]">Professional coordination for seamless execution</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#f5f5f0] to-[#e8e8dd] rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold text-[#1a472a] mb-6">Location & Contact</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[#1a472a] rounded-full flex-shrink-0">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1a472a] mb-1">Address</h4>
                      <p className="text-[#2c3e50]">
                        Bihar Banquets<br />
                        Opposite Durga Mata Mandir<br />
                        Patliputra, Patna, Bihar 800001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[#1a472a] rounded-full flex-shrink-0">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1a472a] mb-2">Contact Numbers</h4>
                      <p className="text-[#2c3e50] mb-2">
                        Bihar Banquets: <a href="tel:9031672580" className="font-semibold text-[#1a472a] hover:text-[#2d6e4b]">9031672580</a>
                      </p>
                      <p className="text-[#2c3e50]">
                        Saalt Hotels: <a href="tel:9709633313" className="font-semibold text-[#1a472a] hover:text-[#2d6e4b]">9709633313</a>
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 space-y-3">
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full"
                      onClick={() => {
                        const message = `Hi! I would like to enquire about hosting an event at Bihar Banquets, Patliputra. Please provide more details about availability and packages.`;
                        window.open(`https://wa.me/919031672580?text=${encodeURIComponent(message)}`, '_blank');
                      }}
                    >
                      <MessageCircle size={20} />
                      WhatsApp - Bihar Banquets
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full"
                      onClick={() => {
                        const message = `Hi! I would like to enquire about hosting an event at Bihar Banquets, Patliputra. Please provide more details.`;
                        window.open(`https://wa.me/919709633313?text=${encodeURIComponent(message)}`, '_blank');
                      }}
                    >
                      <MessageCircle size={20} />
                      WhatsApp - Saalt Hotels
                    </Button>
                    <Button
                      variant="secondary"
                      size="lg"
                      className="w-full"
                      onClick={() => window.open('tel:9031672580')}
                    >
                      <Phone size={20} />
                      Call Bihar Banquets
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#1a472a] mb-6">Find Us</h3>
                <div className="aspect-[4/3] bg-gradient-to-br from-[#e8e8dd] to-[#d4d4c9] rounded-xl shadow-lg overflow-hidden flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="text-[#d4a574] mx-auto mb-4" size={64} />
                    <p className="text-[#1a472a] font-semibold text-xl mb-2">Google Maps</p>
                    <p className="text-[#2c3e50] text-sm">Map Placeholder</p>
                    <p className="text-[#2c3e50] text-xs mt-4">Opposite Durga Mata Mandir, Patliputra</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white/50 rounded-lg">
                  <p className="text-sm text-[#2c3e50] text-center">
                    <span className="font-semibold text-[#1a472a]">Convenient Location:</span> Easily accessible from all major areas of Patna
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-[#2c3e50] mb-6">
              Ready to plan your unforgettable event at Bihar Banquets?
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                const formSection = document.querySelector('form');
                if (formSection) {
                  formSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  const propertySelect = document.querySelector('select[value=""]') as HTMLSelectElement;
                  if (propertySelect) {
                    setTimeout(() => {
                      const event = new Event('change', { bubbles: true });
                      propertySelect.dispatchEvent(event);
                    }, 500);
                  }
                }
              }}
            >
              Fill Event Inquiry Form Below
            </Button>
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
                    <option value="Bihar Banquets">Bihar Banquets</option>
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
