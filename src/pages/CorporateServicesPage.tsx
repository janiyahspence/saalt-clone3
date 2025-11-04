import React, { useState } from 'react';
import { VideoHero } from '../components/VideoHero';
import { Button } from '../components/Button';
import { Briefcase, Building2, Users, Wifi, Coffee, Presentation, Car, FileText, Clock, Shield, Utensils, Award, MessageCircle } from 'lucide-react';

export const CorporateServicesPage: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    serviceType: '',
    participants: '',
    dates: '',
    requirements: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Corporate Services Inquiry:

Company: ${formData.companyName}
Contact Person: ${formData.contactPerson}
Email: ${formData.email}
Phone: ${formData.phone}
Service Type: ${formData.serviceType}
Participants: ${formData.participants}
Dates: ${formData.dates}
Requirements: ${formData.requirements}`;

    window.open(`https://wa.me/919709633313?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleServiceInquiry = (serviceName: string, serviceDetails: string) => {
    const message = `Hello! I'd like to inquire about ${serviceName} for corporate needs.

${serviceDetails}

Please provide pricing, availability, and package details.`;
    window.open(`https://wa.me/919709633313?text=${encodeURIComponent(message)}`, '_blank');
  };

  const services = [
    {
      icon: Building2,
      title: 'Business Accommodations',
      description: 'Executive rooms and suites designed for business travelers with work desks, ergonomic chairs, and high-speed internet.',
      features: ['Executive Rooms', 'Work-Ready Spaces', 'Express Check-in', '24/7 Business Center'],
      buttonText: 'Book Accommodation',
    },
    {
      icon: Presentation,
      title: 'Conference & Meeting Facilities',
      description: 'State-of-the-art conference halls and meeting rooms equipped with modern AV technology and professional support.',
      features: ['Multiple Meeting Rooms', 'AV Equipment', 'Projectors & Screens', 'Video Conferencing'],
      buttonText: 'Request Conference Quote',
    },
    {
      icon: Users,
      title: 'Corporate Events & Seminars',
      description: 'Comprehensive event management for corporate gatherings, training sessions, product launches, and team meetings.',
      features: ['Event Planning', 'Custom Setup', 'Registration Desks', 'Technical Support'],
      buttonText: 'Plan Event',
    },
    {
      icon: Utensils,
      title: 'Business Catering',
      description: 'Professional catering services for corporate events with customizable menus and dietary accommodation.',
      features: ['Coffee Breaks', 'Working Lunches', 'Buffet Options', 'Custom Menus'],
      buttonText: 'Request Catering',
    },
    {
      icon: Clock,
      title: 'Long-Term Corporate Stays',
      description: 'Special rates and amenities for extended business stays with flexible terms and personalized service.',
      features: ['Monthly Rates', 'Laundry Service', 'Housekeeping', 'Dedicated Support'],
      buttonText: 'Get Long-term Rates',
    },
    {
      icon: Car,
      title: 'Transportation Services',
      description: 'Airport transfers, local transportation, and chauffeur services for business travelers and corporate groups.',
      features: ['Airport Pickup', 'City Transfers', 'Hourly Rentals', 'Group Transport'],
      buttonText: 'Book Transport',
    },
    {
      icon: Shield,
      title: 'Corporate Packages',
      description: 'Customized packages for businesses with preferred rates, flexible cancellation, and dedicated account management.',
      features: ['Volume Discounts', 'Flexible Booking', 'Priority Service', 'Account Manager'],
      buttonText: 'Inquire About Packages',
    },
    {
      icon: Award,
      title: 'Team Building Activities',
      description: 'Organized team building programs and recreational activities to enhance team bonding and morale.',
      features: ['Outdoor Activities', 'Indoor Games', 'Custom Programs', 'Professional Facilitation'],
      buttonText: 'Plan Team Activity',
    },
  ];

  const properties = [
    {
      name: 'Patliputra Saalt Hotel, Patna',
      rooms: '45 Rooms',
      facilities: ['5 Conference Halls (50-500 capacity)', 'Business Center', 'Executive Lounge', 'Multi-cuisine Restaurant'],
      ideal: 'Ideal for conferences, seminars, and business meetings in Patna',
    },
    {
      name: 'Narayana Greens Resort, Patna',
      rooms: '25 Rooms',
      facilities: ['3 Banquet Halls', '40,000 sq.ft Garden', 'Board Rooms', 'Fine Dining Restaurant'],
      ideal: 'Perfect for corporate retreats, off-sites, and large-scale events',
    },
    {
      name: 'Buddha Saalt Hotel, Bodh Gaya',
      rooms: '45 Rooms',
      facilities: ['2 Meeting Rooms', 'Business Services', 'Restaurant', 'Tour Arrangements'],
      ideal: 'Suitable for small business groups and spiritual corporate retreats',
    },
  ];

  const testimonials = [
    {
      company: 'TCS India',
      person: 'Rajesh Kumar, HR Manager',
      feedback: 'Excellent venue for our annual training session. The conference facilities and staff support were outstanding.',
    },
    {
      company: 'HDFC Bank',
      person: 'Priya Singh, Regional Manager',
      feedback: 'We regularly book rooms for our visiting executives. The business amenities and service quality are consistently excellent.',
    },
    {
      company: 'Infosys',
      person: 'Amit Sharma, Team Lead',
      feedback: 'Perfect location for our team off-site. The facilities and team building activities exceeded expectations.',
    },
  ];

  return (
    <div className="min-h-screen">
      <VideoHero
        videoPlaceholder="/saalt-patliputra-properties.jpg"
        title="Corporate Services"
        subtitle="Professional Solutions for Your Business Needs"
        height="h-[60vh]"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Briefcase className="mx-auto text-[#d4a574] mb-4" size={48} />
            <h2 className="text-4xl font-bold text-[#1a472a] mb-4">Comprehensive Corporate Solutions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a574] to-[#c89356] mx-auto mb-6"></div>
            <p className="text-lg text-[#2c3e50] max-w-3xl mx-auto">
              From business accommodations to conference facilities, we provide everything your organization needs for successful corporate events and stays
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-[#f5f5f0] to-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all flex flex-col">
                <div className="bg-gradient-to-br from-[#1a472a] to-[#2d6e4b] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <service.icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-[#1a472a] mb-3">{service.title}</h3>
                <p className="text-[#2c3e50] leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-[#2c3e50]">
                      <div className="w-2 h-2 bg-[#d4a574] rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleServiceInquiry(service.title, `Features: ${service.features.join(', ')}`)}
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
            <Building2 className="mx-auto text-[#d4a574] mb-4" size={48} />
            <h2 className="text-4xl font-bold text-[#1a472a] mb-4">Our Corporate-Friendly Properties</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a574] to-[#c89356] mx-auto mb-6"></div>
          </div>

          <div className="space-y-8">
            {properties.map((property, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#1a472a] mb-2">{property.name}</h3>
                    <p className="text-[#d4a574] font-semibold mb-4">{property.rooms}</p>
                    <p className="text-[#2c3e50] text-sm italic">{property.ideal}</p>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="font-semibold text-[#1a472a] mb-3">Key Facilities:</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {property.facilities.map((facility, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#d4a574] rounded-full"></div>
                          <span className="text-[#2c3e50]">{facility}</span>
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

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#1a472a] mb-6">Why Choose Saalt for Corporate Services?</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#f5f5f0] p-3 rounded-full flex-shrink-0">
                    <Wifi className="text-[#d4a574]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a472a] mb-2">Modern Infrastructure</h4>
                    <p className="text-[#2c3e50]">High-speed WiFi, modern AV equipment, and tech-enabled meeting spaces</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#f5f5f0] p-3 rounded-full flex-shrink-0">
                    <Users className="text-[#d4a574]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a472a] mb-2">Professional Staff</h4>
                    <p className="text-[#2c3e50]">Dedicated event coordinators and trained hospitality professionals</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#f5f5f0] p-3 rounded-full flex-shrink-0">
                    <Clock className="text-[#d4a574]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a472a] mb-2">Flexible Packages</h4>
                    <p className="text-[#2c3e50]">Customizable solutions tailored to your specific business requirements</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#f5f5f0] p-3 rounded-full flex-shrink-0">
                    <Award className="text-[#d4a574]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a472a] mb-2">6 Years Experience</h4>
                    <p className="text-[#2c3e50]">Proven track record in hosting successful corporate events</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600"
                alt="Conference room"
                className="rounded-2xl shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600"
                alt="Business meeting"
                className="rounded-2xl shadow-lg mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=600"
                alt="Business lunch"
                className="rounded-2xl shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600"
                alt="Team meeting"
                className="rounded-2xl shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#f5f5f0] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1a472a] mb-4">What Our Corporate Clients Say</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a574] to-[#c89356] mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <div className="text-[#d4a574] mb-4 text-4xl">"</div>
                <p className="text-[#2c3e50] leading-relaxed mb-6">{testimonial.feedback}</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-[#1a472a]">{testimonial.person}</p>
                  <p className="text-sm text-[#2c3e50]">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <FileText className="mx-auto text-[#d4a574] mb-4" size={48} />
            <h2 className="text-4xl font-bold text-[#1a472a] mb-4">Request Corporate Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a574] to-[#c89356] mx-auto mb-6"></div>
            <p className="text-lg text-[#2c3e50]">
              Fill out the form below and our corporate services team will contact you shortly
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#f5f5f0] to-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#2c3e50] mb-2">Company Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a472a] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2c3e50] mb-2">Contact Person *</label>
                  <input
                    type="text"
                    required
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a472a] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
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

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#2c3e50] mb-2">Service Type *</label>
                  <select
                    required
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a472a] focus:border-transparent"
                  >
                    <option value="">Select Service</option>
                    <option value="Accommodation">Business Accommodation</option>
                    <option value="Conference">Conference/Meeting</option>
                    <option value="Event">Corporate Event</option>
                    <option value="Long-term">Long-term Stay</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2c3e50] mb-2">Number of Participants</label>
                  <input
                    type="number"
                    value={formData.participants}
                    onChange={(e) => setFormData({ ...formData, participants: e.target.value })}
                    placeholder="Expected attendees"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a472a] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2c3e50] mb-2">Preferred Dates</label>
                <input
                  type="text"
                  value={formData.dates}
                  onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                  placeholder="e.g., March 15-17, 2025"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a472a] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2c3e50] mb-2">Requirements & Details</label>
                <textarea
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a472a] focus:border-transparent"
                  placeholder="Please describe your requirements..."
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
