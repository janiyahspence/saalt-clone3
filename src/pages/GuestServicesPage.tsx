import React from 'react';
import { VideoHero } from '../components/VideoHero';
import {
  Bell, Shirt, Car, Utensils, Wifi, Dumbbell,
  Sparkles, Phone, Clock, Shield, Heart, MapPin,
  Coffee, ShoppingBag, Stethoscope, Key, MessageCircle
} from 'lucide-react';

export const GuestServicesPage: React.FC = () => {
  const handleServiceInquiry = (serviceName: string, serviceDetails: string) => {
    const message = `Hello! I'd like to inquire about ${serviceName}.

${serviceDetails}

Please provide more information and availability.`;
    window.open(`https://wa.me/919709633313?text=${encodeURIComponent(message)}`, '_blank');
  };

  const services = [
    {
      icon: Utensils,
      title: 'Room Service',
      description: '24/7 in-room dining with extensive menu featuring Indian, Chinese, and Continental cuisines.',
      features: ['24/7 Available', 'Express Service', 'Special Dietary Options', 'Breakfast in Bed'],
      hours: 'Available 24/7',
      buttonText: 'Order Room Service',
    },
    {
      icon: Bell,
      title: 'Concierge Services',
      description: 'Personal assistance for reservations, recommendations, and arrangements throughout your stay.',
      features: ['Travel Planning', 'Restaurant Reservations', 'Event Tickets', 'Local Recommendations'],
      hours: '24/7 Front Desk',
      buttonText: 'Request Concierge',
    },
    {
      icon: Shirt,
      title: 'Laundry & Dry Cleaning',
      description: 'Professional laundry, dry cleaning, and pressing services with same-day and express options.',
      features: ['Same-day Service', 'Express Service (4hrs)', 'Dry Cleaning', 'Iron & Press'],
      hours: '7:00 AM - 9:00 PM',
      buttonText: 'Book Laundry Service',
    },
    {
      icon: Car,
      title: 'Transportation Services',
      description: 'Airport transfers, city tours, and car rental services with professional drivers.',
      features: ['Airport Pickup/Drop', 'City Transfers', 'Car Rentals', 'Tour Packages'],
      hours: 'Advance Booking Required',
      buttonText: 'Book Transportation',
    },
    {
      icon: Wifi,
      title: 'High-Speed Internet',
      description: 'Complimentary WiFi throughout the property with high-speed connectivity in all areas.',
      features: ['Free WiFi', 'High Speed', 'All Areas Coverage', 'Business Support'],
      hours: 'Available 24/7',
      buttonText: 'Get WiFi Support',
    },
    {
      icon: Coffee,
      title: 'Dining & Restaurants',
      description: 'Multi-cuisine restaurants, coffee shops, and bar facilities with diverse menu options.',
      features: ['Multi-cuisine Restaurant', 'Coffee Shop', 'Bar (Select Properties)', 'Banquet Catering'],
      hours: '7:00 AM - 11:00 PM',
      buttonText: 'Make Reservation',
    },
    {
      icon: Dumbbell,
      title: 'Fitness Center',
      description: 'Well-equipped fitness facilities with modern equipment and swimming pool at select properties.',
      features: ['Gym Equipment', 'Swimming Pool', 'Yoga Space', 'Personal Training'],
      hours: '6:00 AM - 10:00 PM',
      buttonText: 'Inquire About Fitness',
    },
    {
      icon: Sparkles,
      title: 'Housekeeping',
      description: 'Daily housekeeping services ensuring clean, comfortable, and well-maintained rooms.',
      features: ['Daily Cleaning', 'Turndown Service', 'Extra Towels', 'Toiletries Replenishment'],
      hours: '8:00 AM - 6:00 PM',
      buttonText: 'Request Housekeeping',
    },
    {
      icon: MapPin,
      title: 'Travel Desk',
      description: 'Complete travel assistance including tour bookings, tickets, and local sightseeing arrangements.',
      features: ['Tour Packages', 'Ticket Booking', 'Local Guides', 'Sightseeing Plans'],
      hours: '9:00 AM - 7:00 PM',
      buttonText: 'Plan Your Trip',
    },
    {
      icon: ShoppingBag,
      title: 'Shopping Assistance',
      description: 'Help with local shopping, recommendations for markets, and arrangement of shopping tours.',
      features: ['Shopping Tours', 'Local Markets', 'Souvenir Shops', 'Delivery Services'],
      hours: 'On Request',
      buttonText: 'Request Shopping Help',
    },
    {
      icon: Stethoscope,
      title: 'Medical Assistance',
      description: 'First aid facilities and doctor-on-call services for medical emergencies.',
      features: ['First Aid', 'Doctor on Call', 'Pharmacy Info', 'Hospital Tie-ups'],
      hours: 'Emergency 24/7',
      buttonText: 'Get Medical Help',
    },
    {
      icon: Shield,
      title: 'Safety & Security',
      description: '24/7 security personnel, CCTV surveillance, and fire safety systems ensuring guest safety.',
      features: ['24/7 Security', 'CCTV Monitoring', 'Fire Safety', 'Safe Deposit'],
      hours: 'Available 24/7',
      buttonText: 'Contact Security',
    },
  ];

  const amenities = [
    {
      category: 'In-Room Amenities',
      icon: Key,
      items: [
        'Air Conditioning',
        'Flat-screen TV with Cable',
        'Tea/Coffee Maker',
        'Mini Refrigerator (Select Rooms)',
        'Work Desk & Chair',
        'Electronic Safe',
        'Attached Bathroom with Hot Water',
        'Complimentary Toiletries',
        'Hairdryer',
        'Iron & Ironing Board (On Request)',
        'Daily Newspaper',
        'Complimentary Bottled Water',
      ],
    },
    {
      category: 'Property Features',
      icon: MapPin,
      items: [
        'Free WiFi Throughout',
        'Multi-cuisine Restaurant',
        'Coffee Shop / Cafe',
        'Banquet & Conference Halls',
        'Swimming Pool (Select Properties)',
        'Fitness Center',
        'Garden & Outdoor Spaces',
        'Ample Parking Space',
        'Power Backup',
        'Wheelchair Accessible Areas',
        'Elevators',
        'Business Center',
      ],
    },
    {
      category: 'Additional Services',
      icon: Bell,
      items: [
        'Wake-up Call Service',
        'Luggage Storage',
        'Currency Exchange',
        'Postal Services',
        'Photocopying & Fax',
        'Meeting Room Booking',
        'Event Planning Support',
        'Baby Cot (On Request)',
        'Extra Bed/Rollaway',
        'Pet Policy (Inquiry)',
        'Smoking Areas',
        'Valet Parking (Select Properties)',
      ],
    },
  ];

  const specialServices = [
    {
      title: 'Celebrations & Special Occasions',
      description: 'Make your special moments memorable with our celebration packages',
      offerings: ['Birthday Decorations', 'Anniversary Packages', 'Cake & Flowers', 'Romantic Dinners'],
      icon: Heart,
    },
    {
      title: 'Business Services',
      description: 'Complete business support for corporate travelers',
      offerings: ['Meeting Rooms', 'AV Equipment', 'Secretarial Services', 'Printing & Scanning'],
      icon: Phone,
    },
    {
      title: 'Wedding & Events',
      description: 'Comprehensive event planning and execution services',
      offerings: ['Venue Setup', 'Catering Services', 'Decoration Support', 'Event Coordination'],
      icon: Sparkles,
    },
    {
      title: 'Extended Stay Support',
      description: 'Special amenities for long-term guests',
      offerings: ['Weekly Rates', 'Laundry Packages', 'Dedicated Support', 'Flexible Services'],
      icon: Clock,
    },
  ];

  return (
    <div className="min-h-screen">
      <VideoHero
        videoPlaceholder="/saalt-patliputra-properties.jpg"
        title="Guest Services & Amenities"
        subtitle="Comprehensive Services for Your Comfort and Convenience"
        height="h-[60vh]"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Bell className="mx-auto text-[#d4a574] mb-4" size={48} />
            <h2 className="text-4xl font-bold text-[#1a472a] mb-4">Complete Guest Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a574] to-[#c89356] mx-auto mb-6"></div>
            <p className="text-lg text-[#2c3e50] max-w-3xl mx-auto">
              From the moment you arrive until you check out, our comprehensive services ensure a comfortable and memorable stay
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-[#f5f5f0] to-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all flex flex-col">
                <div className="flex items-start gap-4 mb-4 flex-1">
                  <div className="bg-gradient-to-br from-[#1a472a] to-[#2d6e4b] p-3 rounded-full flex-shrink-0">
                    <service.icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#1a472a] mb-2">{service.title}</h3>
                    <p className="text-[#2c3e50] text-sm leading-relaxed mb-3">{service.description}</p>
                    <div className="bg-white rounded-lg p-3 mb-3">
                      <ul className="space-y-1.5">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-[#2c3e50] text-xs">
                            <div className="w-1.5 h-1.5 bg-[#d4a574] rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center gap-2 text-[#d4a574] text-sm font-semibold mb-4">
                      <Clock size={14} />
                      <span>{service.hours}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleServiceInquiry(service.title, `Service Hours: ${service.hours}\nFeatures: ${service.features.join(', ')}`)}
                  className="w-full bg-gradient-to-r from-[#25D366] to-[#20BA5A] hover:from-[#20BA5A] hover:to-[#1da851] text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  <MessageCircle size={18} />
                  {service.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#f5f5f0] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Sparkles className="mx-auto text-[#d4a574] mb-4" size={48} />
            <h2 className="text-4xl font-bold text-[#1a472a] mb-4">Property Amenities</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a574] to-[#c89356] mx-auto mb-6"></div>
            <p className="text-lg text-[#2c3e50] max-w-3xl mx-auto">
              Modern amenities and facilities designed for your comfort
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-to-br from-[#1a472a] to-[#2d6e4b] p-3 rounded-full">
                    <amenity.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a472a]">{amenity.category}</h3>
                </div>
                <ul className="space-y-3">
                  {amenity.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#2c3e50]">
                      <div className="w-2 h-2 bg-[#d4a574] rounded-full flex-shrink-0 mt-2"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Heart className="mx-auto text-[#d4a574] mb-4" size={48} />
            <h2 className="text-4xl font-bold text-[#1a472a] mb-4">Special Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a574] to-[#c89356] mx-auto mb-6"></div>
            <p className="text-lg text-[#2c3e50] max-w-3xl mx-auto">
              Tailored services for special occasions and unique requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {specialServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-[#f5f5f0] to-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-gradient-to-br from-[#1a472a] to-[#2d6e4b] p-4 rounded-full">
                    <service.icon className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#1a472a] mb-2">{service.title}</h3>
                    <p className="text-[#2c3e50] leading-relaxed mb-4">{service.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {service.offerings.map((offering, i) => (
                        <div key={i} className="flex items-center gap-2 text-[#2c3e50] text-sm">
                          <div className="w-1.5 h-1.5 bg-[#d4a574] rounded-full"></div>
                          {offering}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#1a472a] to-[#2d6e4b] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Phone className="mx-auto mb-6 text-[#d4a574]" size={48} />
          <h2 className="text-4xl font-bold mb-4">Need Assistance?</h2>
          <p className="text-xl text-white/90 mb-8">
            Our guest services team is available 24/7 to assist you with any request or query
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-left">
                <p className="font-semibold mb-2">24/7 Front Desk</p>
                <p className="text-white/80">+91 9709633313</p>
                <p className="text-white/80">+91 7909046993</p>
              </div>
              <div className="text-left">
                <p className="font-semibold mb-2">Guest Services</p>
                <p className="text-white/80">info@saalthotels.com</p>
                <p className="text-white/80">WhatsApp: +91 9709633313</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919709633313"
              className="inline-flex items-center gap-2 bg-[#d4a574] hover:bg-[#c89356] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              <Phone size={20} />
              Call Us
            </a>
            <a
              href="https://wa.me/919709633313"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-[#1a472a] px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              <Phone size={20} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#f5f5f0] to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-[#1a472a] mb-6 text-center">Service Guidelines</h3>
            <div className="space-y-4 text-[#2c3e50]">
              <p className="leading-relaxed">
                <strong>Advance Booking:</strong> Some services like airport transfers, special celebrations, and spa treatments require advance booking. We recommend booking 24-48 hours in advance.
              </p>
              <p className="leading-relaxed">
                <strong>Service Charges:</strong> While many services are complimentary, certain premium services may have additional charges. Please check with our front desk for current pricing.
              </p>
              <p className="leading-relaxed">
                <strong>Operating Hours:</strong> Service hours may vary by property and season. Contact the front desk for specific timings at your property.
              </p>
              <p className="leading-relaxed">
                <strong>Special Requests:</strong> We strive to accommodate all special requests. Please inform us at the time of booking or check-in for best arrangements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
