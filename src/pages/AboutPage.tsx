import React from 'react';
import { VideoHero } from '../components/VideoHero';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { Award, Users, Building2, Heart, Target, Eye } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const milestones = [
    { year: '2019', event: 'Founded by Mr. Avinash Kumar in Patna, Bihar' },
    { year: '2021', event: 'Opened Buddha Saalt Hotel in Bodh Gaya' },
    { year: '2022', event: 'Launched Deoghar Saalt Hotel in Jasidih' },
    { year: '2023', event: 'Inaugurated Narayana Greens Resort, our luxury flagship' },
    { year: '2025', event: 'Serving 100,000+ satisfied guests annually' },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Guest-Centric Service',
      description: 'Every decision we make prioritizes guest comfort, satisfaction, and memorable experiences.',
    },
    {
      icon: Award,
      title: 'Excellence in Hospitality',
      description: 'We maintain the highest standards across all our properties, ensuring consistent quality.',
    },
    {
      icon: Users,
      title: 'Traditional Values',
      description: 'We blend modern amenities with traditional Indian hospitality and cultural respect.',
    },
    {
      icon: Target,
      title: 'Integrity & Trust',
      description: 'Building lasting relationships through transparency, honesty, and reliable service.',
    },
  ];

  return (
    <div className="min-h-screen">
      <VideoHero
        videoPlaceholder="/about-saalt-1.png"
        title="About Saalt Group of Hotels"
        subtitle="6 Years of Excellence in Hospitality | Founded 2019"
        height="h-[60vh]"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#1a472a] mb-6">Our Story</h2>
              <p className="text-lg text-[#2c3e50] leading-relaxed mb-6">
                In 2019, Mr. Avinash Kumar envisioned creating a hospitality brand that would redefine accommodation
                standards across Bihar and Jharkhand. Starting with a single property in Patna, his dream was to offer
                modern comfort while preserving the warmth of traditional Indian hospitality.
              </p>
              <p className="text-lg text-[#2c3e50] leading-relaxed mb-6">
                Over the past 6 years, Saalt Group has grown from that humble beginning into a trusted name with four
                distinctive properties. From serving business travelers in Patna to welcoming Buddhist pilgrims in Bodh
                Gaya, Hindu devotees in Deoghar, and hosting dream weddings at Narayana Greens Resort, we've remained
                committed to our founding principles.
              </p>
              <p className="text-lg text-[#2c3e50] leading-relaxed mb-8">
                Today, we're proud to have served over 100,000 guests, hosted thousands of successful events, and
                become an integral part of Bihar and Jharkhand's hospitality landscape. Our success is built on the
                trust of our guests and the dedication of our team members.
              </p>
              <Link to="/properties">
                <Button variant="primary" size="lg">
                  Explore Our Properties
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/saalt-patliputra-properties.jpg"
                alt="Patliputra Saalt Hotel"
                className="rounded-2xl shadow-lg"
              />
              <img
                src="/saalt-narayna-green.jpg"
                alt="Narayana Greens Resort"
                className="rounded-2xl shadow-lg mt-8"
              />
              <img
                src="/saalt-buddha-properties.jpg"
                alt="Buddha Saalt Bodh Gaya"
                className="rounded-2xl shadow-lg"
              />
              <img
                src="/saalt-deoghar.png"
                alt="Saalt Deoghar"
                className="rounded-2xl shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#f5f5f0] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/avinasha-saalt2.jpg"
                alt="Abhishek Kumar - Founder of Saalt Hotels"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-[#1a472a] mb-6">Meet Our Founder, Abhishek Kumar</h2>
              <p className="text-lg text-[#2c3e50] leading-relaxed mb-6">
                The vision for Saalt Hotel Group is built on a foundation of world-class expertise and a deep love for
                the culture of Bihar and Jharkhand. Our founder, <span className="font-semibold text-[#1a472a]">Abhishek Kumar</span>, is a native of Bihar who honed his
                craft for over a decade in executive leadership.
              </p>
              <p className="text-lg text-[#2c3e50] leading-relaxed mb-6">
                After serving as a General Manager for globally renowned brands like <span className="font-semibold">The Lalit</span> and{' '}
                <span className="font-semibold">Radisson Hotel Group</span>, Abhishek returned to his roots with a singular mission: to bring a new
                standard of hospitality to the region.
              </p>
              <p className="text-lg text-[#2c3e50] leading-relaxed mb-6">
                He believes in <span className="italic">"operational excellence"</span> and a <span className="italic">"commitment to service quality"</span> that ensures every
                guest feels a sense of true welcome. This vision guides the Saalt team every day, as we strive to blend
                modern luxury with the timeless warmth of our home.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a472a] mb-4">Our Journey</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a574] to-[#c89356] mx-auto mb-6"></div>
            <p className="text-lg text-[#2c3e50] max-w-3xl mx-auto">
              Key milestones in our 28-year journey of hospitality excellence
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1a472a] to-[#2d6e4b] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  {index !== milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-[#d4a574] min-h-[60px]"></div>
                  )}
                </div>
                <div className="pb-8 flex-1">
                  <span className="inline-block bg-[#d4a574] text-white px-4 py-1 rounded-full text-sm font-semibold mb-2">
                    {milestone.year}
                  </span>
                  <p className="text-[#2c3e50] text-lg">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-[#1a472a] mb-6">Our Vision</h2>
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#f5f5f0] p-3 rounded-full flex-shrink-0">
                  <Eye className="text-[#d4a574]" size={24} />
                </div>
                <p className="text-lg text-[#2c3e50] leading-relaxed">
                  To be the most trusted and preferred hospitality brand across Bihar and Jharkhand, setting new
                  benchmarks in guest satisfaction, service excellence, and sustainable tourism development. We aspire
                  to expand our footprint while maintaining the intimate, personalized service that defines us.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-[#1a472a] mb-6">Our Mission</h2>
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#f5f5f0] p-3 rounded-full flex-shrink-0">
                  <Target className="text-[#d4a574]" size={24} />
                </div>
                <p className="text-lg text-[#2c3e50] leading-relaxed">
                  To deliver exceptional hospitality experiences by combining modern amenities with traditional values,
                  strategic locations with convenience, and professional service with genuine warmth. We are committed
                  to creating memorable stays for every guest, whether business traveler, pilgrim, tourist, or
                  celebration host.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1a472a] mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a574] to-[#c89356] mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#1a472a] to-[#2d6e4b] rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#1a472a] mb-3">{value.title}</h3>
                <p className="text-[#2c3e50] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#1a472a] to-[#2d6e4b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <Building2 className="mx-auto mb-4 text-[#d4a574]" size={48} />
              <p className="text-5xl font-bold mb-2">4</p>
              <p className="text-xl text-white/90">Premium Properties</p>
            </div>
            <div>
              <Users className="mx-auto mb-4 text-[#d4a574]" size={48} />
              <p className="text-5xl font-bold mb-2">100K+</p>
              <p className="text-xl text-white/90">Happy Guests</p>
            </div>
            <div>
              <Award className="mx-auto mb-4 text-[#d4a574]" size={48} />
              <p className="text-5xl font-bold mb-2">6+</p>
              <p className="text-xl text-white/90">Years of Service</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f5f5f0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#1a472a] mb-6">Experience the Saalt Difference</h2>
          <p className="text-lg text-[#2c3e50] leading-relaxed mb-8 max-w-3xl mx-auto">
            Whether you're traveling for business, embarking on a spiritual journey, planning a destination wedding,
            or simply exploring Bihar and Jharkhand's rich heritage, Saalt Group of Hotels welcomes you with open arms
            and warm hospitality.
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="lg">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
