import React, { useState } from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { Button } from './Button';
import type { Property } from '../data/properties';

interface LocationWidgetProps {
  property: Property;
  showStreetView?: boolean;
}

export const LocationWidget: React.FC<LocationWidgetProps> = ({ property, showStreetView = true }) => {
  const [activeView, setActiveView] = useState<'map' | 'street'>('map');

  const handleGetDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${property.location.latitude},${property.location.longitude}`;
    window.open(url, '_blank');
  };

  const handleViewOnMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${property.location.latitude},${property.location.longitude}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-[#1a472a] to-[#2d6e4b] p-6">
        <div className="flex items-center gap-3 mb-2">
          <MapPin className="text-[#d4a574]" size={28} />
          <h3 className="text-2xl font-bold text-white">Location & Directions</h3>
        </div>
        <p className="text-white/90 text-sm">Find us easily and plan your visit</p>
      </div>

      {showStreetView && property.location.streetViewEmbedUrl && (
        <div className="bg-[#f5f5f0] px-6 py-3 border-b border-gray-200">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveView('map')}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                activeView === 'map'
                  ? 'bg-[#1a472a] text-white'
                  : 'bg-white text-[#1a472a] hover:bg-gray-100'
              }`}
            >
              Map View
            </button>
            <button
              onClick={() => setActiveView('street')}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                activeView === 'street'
                  ? 'bg-[#1a472a] text-white'
                  : 'bg-white text-[#1a472a] hover:bg-gray-100'
              }`}
            >
              Street View
            </button>
          </div>
        </div>
      )}

      <div className="relative">
        {activeView === 'map' ? (
          <iframe
            src={property.location.mapEmbedUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map of ${property.name}`}
            className="w-full"
          />
        ) : (
          property.location.streetViewEmbedUrl && (
            <iframe
              src={property.location.streetViewEmbedUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Street View of ${property.name}`}
              className="w-full"
            />
          )
        )}
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h4 className="font-bold text-[#1a472a] mb-2 flex items-center gap-2">
            <MapPin size={18} className="text-[#d4a574]" />
            Address
          </h4>
          <p className="text-[#2c3e50] leading-relaxed">
            {property.address}
            <br />
            {property.city}, {property.state} {property.pincode}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
          <div>
            <p className="text-sm text-gray-500 mb-1">From Airport</p>
            <p className="font-semibold text-[#1a472a]">{property.distanceFromAirport}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">From Railway Station</p>
            <p className="font-semibold text-[#1a472a]">{property.distanceFromStation}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Button
            variant="primary"
            size="md"
            onClick={handleGetDirections}
            icon={Navigation}
            className="flex-1"
          >
            Get Directions
          </Button>
          <Button
            variant="outline"
            size="md"
            onClick={handleViewOnMaps}
            icon={ExternalLink}
            className="flex-1"
          >
            View on Google Maps
          </Button>
        </div>
      </div>
    </div>
  );
};
