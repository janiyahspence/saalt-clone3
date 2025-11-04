import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface VideoThumbnailProps {
  videoSrc: string;
  alt?: string;
  className?: string;
}

export const VideoThumbnail: React.FC<VideoThumbnailProps> = ({
  videoSrc,
  alt = 'Video thumbnail',
  className = ''
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <div
        className={`relative cursor-pointer group ${className}`}
        onClick={openModal}
      >
        <video
          src={videoSrc}
          className="w-full h-full object-cover rounded-2xl shadow-lg"
          preload="metadata"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300 rounded-2xl flex items-center justify-center">
          <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
            <Play className="text-[#1a472a] ml-1" size={36} fill="currentColor" />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close video"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <video
              src={videoSrc}
              controls
              autoPlay
              className="w-full rounded-lg shadow-2xl"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
};
