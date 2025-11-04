import React, { useEffect, useRef, useState } from 'react';
import { Facebook } from 'lucide-react';

interface FacebookFeedWidgetProps {
  pageUrl: string;
  width?: number;
  height?: number;
}

export const FacebookFeedWidget: React.FC<FacebookFeedWidgetProps> = ({
  pageUrl,
  width = 500,
  height = 600,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const initFacebookSDK = () => {
      if (window.FB) {
        window.FB.XFBML.parse();
        setIsLoaded(true);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0';
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      script.onload = () => {
        setIsLoaded(true);
      };
      document.body.appendChild(script);
    };

    const timer = setTimeout(initFacebookSDK, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [isVisible]);

  return (
    <div ref={containerRef} className="w-full h-full flex flex-col">
      <div id="fb-root"></div>

      {!isLoaded && (
        <div className="w-full h-full bg-gradient-to-br from-[#f5f5f0] to-white rounded-2xl p-8 flex flex-col items-center justify-center animate-pulse">
          <Facebook className="text-[#1a472a] mb-4" size={48} />
          <p className="text-[#2c3e50] text-lg font-medium">Loading Facebook Feed...</p>
        </div>
      )}

      <div
        className={`fb-page ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
        data-href={pageUrl}
        data-tabs="timeline"
        data-width={width}
        data-height={height}
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote cite={pageUrl} className="fb-xfbml-parse-ignore">
          <a href={pageUrl} target="_blank" rel="noopener noreferrer">
            Visit us on Facebook
          </a>
        </blockquote>
      </div>
    </div>
  );
};

declare global {
  interface Window {
    FB: any;
  }
}
