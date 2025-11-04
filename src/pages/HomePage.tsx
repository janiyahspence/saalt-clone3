import React from 'react';
import { Link } from 'react-router-dom';
import { ImageCarouselHero } from '../components/ImageCarouselHero';
import { PropertyCard } from '../components/PropertyCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { Button } from '../components/Button';
import { FacebookFeedWidget } from '../components/FacebookFeedWidget';
import { InstagramFeedWidget } from '../components/InstagramFeedWidget';
import { properties } from '../data/properties';
import { packages } from '../data/offers';
import {
  Award,
  Building2,
  Users,
  MapPin,
  UtensilsCrossed,
  Sparkles,
  Shield,
  Calendar,
  Phone,
  Briefcase,
  Church,
  Bell,
  Newspaper,
  Gift,
  TrendingUp,
  CheckCircle,
  Mail,
  Image,
  ArrowRight,
  Share2,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const allTestimonials = properties.flatMap(p => p.testimonials).slice(0, 6);

  const carouselImages = [
    '/saalt-patna.jpg',
    '/budha-saalt-bodhgaya_1.png',
    '/saalt-narayna-green.jpg',
    '/saalt-deoghar.png',
  ];

  const featuredGalleryImages = [
    { url: '/saalt-patliputra-properties.jpg', property: 'Patliputra Saalt', category: 'Property' },
    { url: '/buddha-saalt-roomtype_deluxe.jpg', property: 'Buddha Saalt', category: 'Rooms' },
    { url: '/narayana-greens-restaurnt.jpg', property: 'Narayana Greens', category: 'Dining' },
    { url: '/saalt-deoghar-premium-room.jpg', property: 'Saalt Deoghar', category: 'Rooms' },
    { url: '/narayana-weddin1.JPG', property: 'Narayana Greens', category: 'Events' },
    { url: '/budhar-saalt-bodhgaya-restaurent.jpg', property: 'Buddha Saalt', category: 'Dining' },
    { url: '/saalt-patliputra-deluxe-room.jpg', property: 'Patliputra Saalt', category: 'Rooms' },
    { url: '/narayana-greens-proeperties.avif', property: 'Narayana Greens', category: 'Property' },
  ];

  const stats = [
    { icon: Building2, value: '4', label: 'Premium Properties' },
    { icon: Award, value: '6+', label: 'Years of Excellence' },
    { icon: Users, value: '100K+', label: 'Happy Guests' },
    { icon: MapPin, value: '3', label: 'Cities Covered' },
  ];

  const whyChooseUs = [
    {
      icon: MapPin,
      title: 'Strategic Locations',
      description: 'Prime locations near major pilgrimage sites, business districts, and transportation hubs across Bihar and Jharkhand.',
    },
    {
      icon: Award,
      title: 'Heritage Since 2019',
      description: 'Over 6 years of trusted hospitality service with deep-rooted values and modern amenities.',
    },
    {
      icon: UtensilsCrossed,
      title: 'Exceptional Dining',
      description: 'Multi-cuisine restaurants featuring authentic Indian, Chinese, and regional specialties prepared by expert chefs.',
    },
    {
      icon: Calendar,
      title: 'Perfect Event Venues',
      description: 'Comprehensive wedding and conference facilities with capacity for up to 3,500 guests at Narayana Greens Resort.',
    },
    {
      icon: Sparkles,
      title: 'Premium Amenities',
      description: 'Swimming pools, spas, fitness centers, free WiFi, and modern conveniences for comfortable stays.',
    },
    {
      icon: Shield,
      title: 'Safety & Security',
      description: '24/7 front desk service, fire safety systems, and first aid facilities ensuring guest safety.',
    },
  ];

  return (
    <div className="min-h-screen">
      <ImageCarouselHero
        images={carouselImages}
        title="Experience Bihar's Finest Hospitality"
        subtitle="Modern Comfort meets Traditional Values - Creating Memorable Stays Since 2019"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <Button
            variant="primary"
            size="lg"
            onClick={() => window.open('https://wa.me/919709633313?text=Hello, I would like to make a booking', '_blank')}
          >
            Book Your Stay
          </Button>
          <Link to="/properties">
            <Button variant="outline" size="lg">
              Explore Properties
            </Button>
          </Link>
        </div>
      </ImageCarouselHero>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#1a472a] to-[#2d6e4b] rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="text-white" size={28} />
                </div>
                <p className="text-3xl font-bold text-[#1a472a] mb-1">{stat.value}</p>
                <p className="text-[#2c3e50] text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#f5f5f0] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a472a] mb-4">About Saalt Group</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a574] to-[#c89356] mx-auto mb-6"></div>
            <p className="text-lg text-[#2c3e50] max-w-3xl mx-auto leading-relaxed">
              Founded in 2019 by Mr. Avinash Kumar, Saalt Group of Hotels has been redefining hospitality standards across
              Bihar and Jharkhand for over 6 years. What started as a vision to provide world-class accommodations in
              the heart of India's spiritual and cultural centers has grown into a trusted name with four exceptional properties.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/about-saalt-1.png"
                alt="Saalt Hotels"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#1a472a] mb-4">Our Legacy</h3>
              <p className="text-[#2c3e50] leading-relaxed mb-6">
                From our flagship Patliputra Saalt Hotel with 45 rooms serving business travelers and event hosts in
                Patna, to our spiritual sanctuaries in Bodh Gaya and Deoghar catering to Buddhist and Hindu pilgrims
                from around the world, each property reflects our commitment to excellence.
              </p>
              <p className="text-[#2c3e50] leading-relaxed mb-6">
                Our crown jewel, Narayana Greens Resort, stands as Bihar's premier wedding and event destination,
                offering luxury amenities including swimming pool, spa, and magnificent 40,000 sq.ft gardens accommodating
                up to 3,500 guests.
              </p>
              <Link to="/about">
                <Button variant="secondary" size="md">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a472a] mb-4">Our Premium Properties</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a574] to-[#c89356] mx-auto mb-6"></div>
            <p className="text-lg text-[#2c3e50] max-w-3xl mx-auto">
              Discover our handpicked collection of hotels and resorts across Bihar and Jharkhand, each offering unique
              experiences tailored to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/properties">
              <Button variant="primary" size="lg">
                Compare All Properties
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#1a472a] to-[#2d6e4b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Saalt Hotels</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a574] to-[#c89356] mx-auto mb-6"></div>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Experience unmatched hospitality, strategic locations, and premium amenities that set us apart.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#d4a574] rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/80 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f5f5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a472a] mb-6">
                Bihar's Premier Wedding Destination
              </h2>
              <p className="text-lg text-[#2c3e50] leading-relaxed mb-6">
                Narayana Greens Resort offers the perfect canvas for your dream wedding with its expansive 40,000 sq.ft
                garden venue accommodating 3,500 guests, three elegant banquet halls, luxury accommodations, swimming pool,
                and fine dining restaurant. From intimate gatherings to grand celebrations, we bring your vision to life.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-[#2c3e50]">
                  <div className="w-2 h-2 bg-[#d4a574] rounded-full"></div>
                  <span>Capacity for 3,500 guests in outdoor garden venue</span>
                </li>
                <li className="flex items-center gap-3 text-[#2c3e50]">
                  <div className="w-2 h-2 bg-[#d4a574] rounded-full"></div>
                  <span>Three distinct banquet halls for various events</span>
                </li>
                <li className="flex items-center gap-3 text-[#2c3e50]">
                  <div className="w-2 h-2 bg-[#d4a574] rounded-full"></div>
                  <span>25 rooms exclusively for wedding guests</span>
                </li>
                <li className="flex items-center gap-3 text-[#2c3e50]">
                  <div className="w-2 h-2 bg-[#d4a574] rounded-full"></div>
                  <span>Professional event planning and catering services</span>
                </li>
              </ul>
              <Link to="/events">
                <Button variant="secondary" size="lg">
                  Explore Event Packages
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/narayana-weddin1.JPG"
                alt="Wedding venue"
                className="rounded-2xl shadow-lg"
              />
              <img
                src="/narayana-wedding2.jpg"
                alt="Banquet hall"
                className="rounded-2xl shadow-lg mt-8"
              />
              <img
                src="/narayana-wedding3.jpg"
                alt="Garden venue"
                className="rounded-2xl shadow-lg"
              />
              <img
                src="/narayana-wedding4.jpg"
                alt="Pool view"
                className="rounded-2xl shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a472a] mb-4">What Our Guests Say</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a574] to-[#c89356] mx-auto mb-6"></div>
            <p className="text-lg text-[#2c3e50] max-w-3xl mx-auto">
              Read authentic experiences from our valued guests who have stayed at our properties.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#f5f5f0] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Gift className="mx-auto text-[#d4a574] mb-4" size={48} />
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a472a] mb-4">Special Offers & Packages</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a574] to-[#c89356] mx-auto mb-6"></div>
            <p className="text-lg text-[#2c3e50] max-w-3xl mx-auto">
              Take advantage of our exclusive deals and seasonal packages designed to make your stay even more memorable
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {packages.slice(0, 3).map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                  />
                  {pkg.badge && (
                    <div className="absolute top-4 right-4 bg-[#d4a574] text-white px-4 py-2 rounded-full font-bold">
                      {pkg.badge}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#1a472a] mb-3">{pkg.title}</h3>
                  <p className="text-[#2c3e50] mb-4">{pkg.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#2c3e50]">{pkg.validUntil || pkg.duration}</span>
                    <Link to="/offers">
                      <Button variant="secondary" size="sm">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/offers">
              <Button variant="primary" size="lg">
                View All Offers
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a472a] mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a574] to-[#c89356] mx-auto mb-6"></div>
            <p className="text-lg text-[#2c3e50] max-w-3xl mx-auto">
              Comprehensive hospitality solutions tailored to meet diverse needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/guest-services" className="group">
              <div className="bg-gradient-to-br from-[#f5f5f0] to-white rounded-2xl p-8 text-center hover:shadow-xl transition-all">
                <div className="bg-gradient-to-br from-[#1a472a] to-[#2d6e4b] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Bell className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#1a472a] mb-3">Guest Services</h3>
                <p className="text-[#2c3e50] text-sm">24/7 concierge, room service, laundry, and more</p>
              </div>
            </Link>

            <Link to="/corporate-services" className="group">
              <div className="bg-gradient-to-br from-[#f5f5f0] to-white rounded-2xl p-8 text-center hover:shadow-xl transition-all">
                <div className="bg-gradient-to-br from-[#1a472a] to-[#2d6e4b] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Briefcase className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#1a472a] mb-3">Corporate Services</h3>
                <p className="text-[#2c3e50] text-sm">Business accommodations and conference facilities</p>
              </div>
            </Link>

            <Link to="/pilgrimage-tourism" className="group">
              <div className="bg-gradient-to-br from-[#f5f5f0] to-white rounded-2xl p-8 text-center hover:shadow-xl transition-all">
                <div className="bg-gradient-to-br from-[#1a472a] to-[#2d6e4b] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Church className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#1a472a] mb-3">Pilgrimage Tourism</h3>
                <p className="text-[#2c3e50] text-sm">Spiritual journey packages for pilgrims</p>
              </div>
            </Link>

            <Link to="/events" className="group">
              <div className="bg-gradient-to-br from-[#f5f5f0] to-white rounded-2xl p-8 text-center hover:shadow-xl transition-all">
                <div className="bg-gradient-to-br from-[#1a472a] to-[#2d6e4b] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Sparkles className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#1a472a] mb-3">Events & Weddings</h3>
                <p className="text-[#2c3e50] text-sm">Memorable celebrations and corporate events</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#f5f5f0] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <UtensilsCrossed className="mx-auto text-[#d4a574] mb-4" size={48} />
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a472a] mb-4">Our Restaurants</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a574] to-[#c89356] mx-auto mb-6"></div>
            <p className="text-lg text-[#2c3e50] max-w-3xl mx-auto leading-relaxed">
              Experience culinary excellence across all our properties. From 24/7 multi-cuisine dining to fine dining experiences,
              our expert chefs craft authentic dishes using premium ingredients and traditional cooking techniques.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#f5f5f0] to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="/saalt-patliputra-restaurent.jpg"
                  alt="Multi-Cuisine Restaurant"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#1a472a] text-white px-4 py-2 rounded-lg font-semibold">
                  Patliputra Saalt Hotel
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#1a472a] mb-3">Multi-Cuisine Restaurant</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#d4a574]/20 text-[#1a472a] rounded-full text-sm font-medium">Indian</span>
                  <span className="px-3 py-1 bg-[#d4a574]/20 text-[#1a472a] rounded-full text-sm font-medium">Chinese</span>
                  <span className="px-3 py-1 bg-[#d4a574]/20 text-[#1a472a] rounded-full text-sm font-medium">Fujian</span>
                </div>
                <p className="text-[#2c3e50] leading-relaxed mb-4">
                  Experience culinary excellence at our all-day dining restaurant, featuring authentic Indian delicacies,
                  aromatic Chinese specialties, and unique Fujian cuisine. Our skilled chefs prepare each dish with fresh ingredients.
                </p>
                <div className="flex items-center gap-2 text-[#d4a574] font-medium mb-4">
                  <Calendar size={18} />
                  <span>Open 24/7</span>
                </div>
                <Link to="/properties/patliputra-saalt">
                  <Button variant="secondary" size="sm">
                    View Property
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#f5f5f0] to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="/narayana-greens-restaurnt.jpg"
                  alt="Fine Dining Restaurant"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#1a472a] text-white px-4 py-2 rounded-lg font-semibold">
                  Narayana Greens Resort
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#1a472a] mb-3">Fine Dining Restaurant</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#d4a574]/20 text-[#1a472a] rounded-full text-sm font-medium">Multi-Cuisine</span>
                  <span className="px-3 py-1 bg-[#d4a574]/20 text-[#1a472a] rounded-full text-sm font-medium">Vegetarian</span>
                  <span className="px-3 py-1 bg-[#d4a574]/20 text-[#1a472a] rounded-full text-sm font-medium">Non-Veg</span>
                </div>
                <p className="text-[#2c3e50] leading-relaxed mb-4">
                  Experience culinary excellence where expert chefs craft exquisite dishes using premium ingredients.
                  From authentic Indian delicacies to international favorites, every meal is a gastronomic journey.
                </p>
                <div className="flex items-center gap-2 text-[#d4a574] font-medium mb-4">
                  <Calendar size={18} />
                  <span>Breakfast, Lunch & Dinner</span>
                </div>
                <Link to="/properties/narayana-greens">
                  <Button variant="secondary" size="sm">
                    View Property
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#f5f5f0] to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="/saalt-deoghar-restaurent.jpg"
                  alt="Indian Restaurant"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#1a472a] text-white px-4 py-2 rounded-lg font-semibold">
                  Saalt Deoghar
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#1a472a] mb-3">Indian Restaurant</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#d4a574]/20 text-[#1a472a] rounded-full text-sm font-medium">North Indian</span>
                  <span className="px-3 py-1 bg-[#d4a574]/20 text-[#1a472a] rounded-full text-sm font-medium">South Indian</span>
                  <span className="px-3 py-1 bg-[#d4a574]/20 text-[#1a472a] rounded-full text-sm font-medium">Local Specialties</span>
                </div>
                <p className="text-[#2c3e50] leading-relaxed mb-4">
                  Savor authentic Indian flavors featuring traditional North Indian curries, South Indian delicacies,
                  and local Jharkhandi specialties. Our chefs prepare sattvic meals suitable for pilgrims.
                </p>
                <div className="flex items-center gap-2 text-[#d4a574] font-medium mb-4">
                  <Calendar size={18} />
                  <span>7:00 AM - 10:30 PM</span>
                </div>
                <Link to="/properties/saalt-deoghar">
                  <Button variant="secondary" size="sm">
                    View Property
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#f5f5f0] to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="/budhar-saalt-bodhgaya-restaurent.jpg"
                  alt="Continental Breakfast"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#1a472a] text-white px-4 py-2 rounded-lg font-semibold">
                  Buddha Saalt Bodh Gaya
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#1a472a] mb-3">Continental Breakfast</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#d4a574]/20 text-[#1a472a] rounded-full text-sm font-medium">Continental</span>
                  <span className="px-3 py-1 bg-[#d4a574]/20 text-[#1a472a] rounded-full text-sm font-medium">Indian</span>
                </div>
                <p className="text-[#2c3e50] leading-relaxed mb-4">
                  Start your spiritual day with our wholesome continental breakfast featuring fresh fruits, cereals, toast,
                  and traditional Indian breakfast options. Perfect fuel for your pilgrimage journey.
                </p>
                <div className="flex items-center gap-2 text-[#d4a574] font-medium mb-4">
                  <Calendar size={18} />
                  <span>6:00 AM - 10:00 AM</span>
                </div>
                <Link to="/properties/buddha-saalt-bodh-gaya">
                  <Button variant="secondary" size="sm">
                    View Property
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-[#2c3e50] mb-6">
              For restaurant reservations or dining inquiries, contact us directly
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.open('https://wa.me/919709633313?text=Hello, I would like to make a restaurant reservation', '_blank')}
            >
              Reserve a Table on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#1a472a] to-[#2d6e4b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <TrendingUp className="mx-auto text-[#d4a574] mb-4" size={48} />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Awards & Recognition</h2>
            <div className="w-24 h-1 bg-[#d4a574] mx-auto mb-6"></div>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Celebrating excellence in hospitality with industry recognition
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl mb-4">
                <Award className="mx-auto text-[#d4a574] mb-3" size={48} />
                <h4 className="text-xl font-bold mb-2">Best Business Hotel</h4>
                <p className="text-white/80 text-sm">Bihar Tourism Awards 2024</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl mb-4">
                <Award className="mx-auto text-[#d4a574] mb-3" size={48} />
                <h4 className="text-xl font-bold mb-2">Top Wedding Venue</h4>
                <p className="text-white/80 text-sm">WeddingSutra Awards 2024</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl mb-4">
                <Award className="mx-auto text-[#d4a574] mb-3" size={48} />
                <h4 className="text-xl font-bold mb-2">Excellence Award</h4>
                <p className="text-white/80 text-sm">Indian Hotel Federation 2023</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl mb-4">
                <Award className="mx-auto text-[#d4a574] mb-3" size={48} />
                <h4 className="text-xl font-bold mb-2">Best Pilgrimage Hotel</h4>
                <p className="text-white/80 text-sm">Bihar Tourism Board 2023</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/press-media">
              <Button variant="secondary" size="lg">
                View All Awards
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Newspaper className="mx-auto text-[#d4a574] mb-4" size={48} />
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a472a] mb-4">In The News</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a574] to-[#c89356] mx-auto mb-6"></div>
            <p className="text-lg text-[#2c3e50] max-w-3xl mx-auto">
              Featured coverage and press mentions from leading publications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#f5f5f0] to-white rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="bg-[#1a472a] text-white px-4 py-2 rounded-lg inline-block mb-4 text-sm font-semibold">
                The Times of India
              </div>
              <h3 className="text-xl font-bold text-[#1a472a] mb-3">Bihar's Hospitality Sector Growth</h3>
              <p className="text-[#2c3e50] mb-4">Premium hotels like Saalt Group driving tourism development in the region.</p>
              <span className="text-sm text-[#d4a574]">February 2025</span>
            </div>

            <div className="bg-gradient-to-br from-[#f5f5f0] to-white rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="bg-[#1a472a] text-white px-4 py-2 rounded-lg inline-block mb-4 text-sm font-semibold">
                Hindustan Times
              </div>
              <h3 className="text-xl font-bold text-[#1a472a] mb-3">Redefining Luxury in Eastern India</h3>
              <p className="text-[#2c3e50] mb-4">Saalt Group sets new standards for hospitality excellence in Bihar.</p>
              <span className="text-sm text-[#d4a574]">December 2024</span>
            </div>

            <div className="bg-gradient-to-br from-[#f5f5f0] to-white rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="bg-[#1a472a] text-white px-4 py-2 rounded-lg inline-block mb-4 text-sm font-semibold">
                Travel + Leisure India
              </div>
              <h3 className="text-xl font-bold text-[#1a472a] mb-3">Top Wedding Destinations 2024</h3>
              <p className="text-[#2c3e50] mb-4">Narayana Greens Resort featured among India's premier wedding venues.</p>
              <span className="text-sm text-[#d4a574]">September 2024</span>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/press-media">
              <Button variant="primary" size="lg">
                Read More Press Coverage
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#f5f5f0] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <CheckCircle className="mx-auto text-[#d4a574] mb-4" size={48} />
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a472a] mb-4">Why Guests Love Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a574] to-[#c89356] mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl text-[#d4a574] mb-4">4.9/5</div>
              <h4 className="text-xl font-bold text-[#1a472a] mb-2">Guest Rating</h4>
              <p className="text-[#2c3e50]">Based on 5,000+ verified reviews</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl text-[#d4a574] mb-4">98%</div>
              <h4 className="text-xl font-bold text-[#1a472a] mb-2">Repeat Guests</h4>
              <p className="text-[#2c3e50]">Guests who book with us again</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl text-[#d4a574] mb-4">100%</div>
              <h4 className="text-xl font-bold text-[#1a472a] mb-2">Satisfaction</h4>
              <p className="text-[#2c3e50]">On event and wedding services</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Image className="mx-auto text-[#d4a574] mb-4" size={48} />
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a472a] mb-4">Visual Gallery</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a574] to-[#c89356] mx-auto mb-6"></div>
            <p className="text-lg text-[#2c3e50] max-w-3xl mx-auto">
              Experience the beauty and elegance of our properties through stunning visuals. From luxurious rooms to
              exquisite dining experiences and breathtaking venues.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredGalleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={image.url}
                  alt={image.property}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="font-bold text-lg mb-1">{image.property}</p>
                    <p className="text-sm text-white/90">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/gallery">
              <Button variant="primary" size="lg" icon={ArrowRight}>
                Explore Complete Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <MapPin className="mx-auto text-[#d4a574] mb-4" size={48} />
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a472a] mb-4">Our Locations</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a574] to-[#c89356] mx-auto mb-6"></div>
            <p className="text-lg text-[#2c3e50] max-w-3xl mx-auto">
              Find us across Bihar and Jharkhand. Each property is strategically located for easy access to major attractions and transportation hubs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {properties.map((property) => (
              <div key={property.id} className="bg-gradient-to-br from-[#f5f5f0] to-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64">
                  <iframe
                    src={property.location.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of ${property.name}`}
                    className="w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#1a472a] mb-2">{property.shortName}</h3>
                  <p className="text-sm text-[#d4a574] font-medium mb-4">{property.type}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2">
                      <MapPin className="text-[#d4a574] flex-shrink-0 mt-1" size={18} />
                      <p className="text-[#2c3e50] text-sm">
                        {property.address}, {property.city}, {property.state} {property.pincode}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="text-[#d4a574] flex-shrink-0" size={18} />
                      <a href={`tel:${property.phone}`} className="text-[#2c3e50] text-sm hover:text-[#1a472a] transition-colors">
                        {property.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => {
                        const url = `https://www.google.com/maps/dir/?api=1&destination=${property.location.latitude},${property.location.longitude}`;
                        window.open(url, '_blank');
                      }}
                      className="flex-1"
                    >
                      Get Directions
                    </Button>
                    <Link to={`/properties/${property.id}`} className="flex-1">
                      <Button variant="outline" size="sm" className="w-full">
                        View Property
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#f5f5f0] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Share2 className="mx-auto text-[#d4a574] mb-4" size={48} />
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a472a] mb-4">Connect With Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a574] to-[#c89356] mx-auto mb-6"></div>
            <p className="text-lg text-[#2c3e50] max-w-3xl mx-auto">
              Follow us on social media to stay updated with our latest property photos, guest experiences, special offers, and exciting events. Join our growing community of travelers and hospitality enthusiasts.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="p-6 bg-gradient-to-r from-[#1a472a] to-[#2d6e4b]">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-full">
                    <Mail size={24} />
                  </div>
                  Facebook Updates
                </h3>
                <p className="text-white/90 mt-2">Stay connected with our latest news and announcements</p>
              </div>
              <div className="p-4">
                <FacebookFeedWidget
                  pageUrl="https://www.facebook.com/saalthotels/"
                  width={500}
                  height={600}
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="p-6 bg-gradient-to-r from-[#1a472a] to-[#2d6e4b]">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-full">
                    <Image size={24} />
                  </div>
                  Instagram Gallery
                </h3>
                <p className="text-white/90 mt-2">Explore stunning visuals from our properties</p>
              </div>
              <div className="p-4">
                <InstagramFeedWidget
                  username="saalt.hotels"
                  profileUrl="https://www.instagram.com/saalt.hotels/"
                />
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-[#2c3e50] mb-6 text-lg">
              Be part of our story and share your experiences with #SaaltHotels
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.facebook.com/saalthotels/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="lg">
                  Follow on Facebook
                </Button>
              </a>
              <a
                href="https://www.instagram.com/saalt.hotels/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="lg">
                  Follow on Instagram
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#1a472a] to-[#2d6e4b] rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl">
            <Phone className="mx-auto mb-6 text-[#d4a574]" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Book Your Stay?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today to reserve your room or plan your special event at any of our premium properties
              across Bihar and Jharkhand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => window.open('https://wa.me/919709633313?text=Hello, I would like to make a booking', '_blank')}
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
        </div>
      </section>
    </div>
  );
};
