import React, { useState } from 'react';
import { ImageLightbox } from './ImageLightbox';
import type { Property } from '../data/properties';

interface PropertyGalleryProps {
  property: Property;
}

interface GalleryImage {
  url: string;
  caption: string;
  category: string;
}

export const PropertyGallery: React.FC<PropertyGalleryProps> = ({ property }) => {
  const [filter, setFilter] = useState<string>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const allImages: GalleryImage[] = [
    ...property.images.map((img) => ({
      url: img,
      caption: property.shortName,
      category: 'property',
    })),
    ...property.rooms.flatMap((room) =>
      room.images.map((img) => ({
        url: img,
        caption: `${room.name} - ${property.shortName}`,
        category: 'rooms',
      }))
    ),
    ...property.dining.map((dining) => ({
      url: dining.image,
      caption: `${dining.name} - ${property.shortName}`,
      category: 'dining',
    })),
    ...property.nearbyAttractions.map((attraction) => ({
      url: attraction.image,
      caption: `${attraction.name} near ${property.shortName}`,
      category: 'attractions',
    })),
  ];

  const filteredImages = filter === 'all' ? allImages : allImages.filter((img) => img.category === filter);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  const categories = [
    { value: 'all', label: 'All Photos' },
    { value: 'property', label: 'Property' },
    { value: 'rooms', label: 'Rooms' },
    { value: 'dining', label: 'Dining' },
    { value: 'attractions', label: 'Nearby' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => setFilter(category.value)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              filter === category.value
                ? 'bg-gradient-to-r from-[#1a472a] to-[#2d6e4b] text-white shadow-lg'
                : 'bg-white text-[#2c3e50] hover:bg-[#f5f5f0] border border-gray-200'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredImages.map((image, index) => (
          <div
            key={index}
            onClick={() => openLightbox(index)}
            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
          >
            <div className="aspect-[4/3] overflow-hidden bg-gray-100">
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <p className="font-semibold text-sm line-clamp-1">{image.caption}</p>
                <p className="text-xs text-white/80 capitalize">{image.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredImages.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No images found in this category.</p>
        </div>
      )}

      {lightboxOpen && (
        <ImageLightbox
          images={filteredImages}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
};
