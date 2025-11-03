import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

interface LocationMapProps {
  address: string;
  city: string;
  state: string;
  pincode: string;
  embedUrl: string;
}

export const LocationMap: React.FC<LocationMapProps> = ({
  address,
  city,
  state,
  pincode,
  embedUrl,
}) => {
  const fullAddress = `${address}, ${city}, ${state} ${pincode}`;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="aspect-video w-full">
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Map of ${city}`}
        ></iframe>
      </div>
      <div className="p-6">
        <div className="flex items-start gap-3 mb-4">
          <MapPin className="text-[#d4a574] flex-shrink-0 mt-1" size={20} />
          <div>
            <p className="text-[#2c3e50] leading-relaxed">{address}</p>
            <p className="text-[#2c3e50]">{city}, {state} {pincode}</p>
          </div>
        </div>
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1a472a] to-[#2d6e4b] text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
        >
          <Navigation size={18} />
          Get Directions
        </a>
      </div>
    </div>
  );
};
