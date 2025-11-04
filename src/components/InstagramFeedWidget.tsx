import React, { useEffect, useRef, useState } from 'react';
import { Instagram } from 'lucide-react';

interface InstagramFeedWidgetProps {
  username: string;
  profileUrl: string;
}

export const InstagramFeedWidget: React.FC<InstagramFeedWidgetProps> = ({
  username,
  profileUrl,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

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

    const initInstagramEmbed = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
        setIsLoaded(true);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      script.onload = () => {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
        setIsLoaded(true);
      };
      document.body.appendChild(script);
    };

    const timer = setTimeout(initInstagramEmbed, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [isVisible]);

  const instagramPosts = [
    `${profileUrl}p/sample1/`,
    `${profileUrl}p/sample2/`,
    `${profileUrl}p/sample3/`,
    `${profileUrl}p/sample4/`,
    `${profileUrl}p/sample5/`,
    `${profileUrl}p/sample6/`,
  ];

  return (
    <div ref={containerRef} className="w-full h-full flex flex-col">
      {!isLoaded && (
        <div className="w-full h-full bg-gradient-to-br from-[#f5f5f0] to-white rounded-2xl p-8 flex flex-col items-center justify-center animate-pulse min-h-[600px]">
          <Instagram className="text-[#1a472a] mb-4" size={48} />
          <p className="text-[#2c3e50] text-lg font-medium">Loading Instagram Feed...</p>
        </div>
      )}

      <div className={`${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 space-y-6`}>
        <div className="bg-gradient-to-br from-[#f5f5f0] to-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-[#1a472a] to-[#2d6e4b] p-3 rounded-full">
                <Instagram className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1a472a]">@{username}</h3>
                <p className="text-[#2c3e50] text-sm">Follow us for updates</p>
              </div>
            </div>
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#1a472a] to-[#2d6e4b] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Follow
            </a>
          </div>

          <div className="border-t border-[#1a472a]/10 pt-6">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={profileUrl}
              data-instgrm-version="14"
              style={{
                background: '#FFF',
                border: '0',
                borderRadius: '12px',
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                margin: '1px',
                maxWidth: '100%',
                minWidth: '326px',
                padding: '0',
                width: 'calc(100% - 2px)',
              }}
            >
              <div style={{ padding: '16px' }}>
                <a
                  href={profileUrl}
                  style={{
                    background: '#FFFFFF',
                    lineHeight: '0',
                    padding: '0 0',
                    textAlign: 'center',
                    textDecoration: 'none',
                    width: '100%',
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <div
                      style={{
                        backgroundColor: '#F4F4F4',
                        borderRadius: '50%',
                        flexGrow: 0,
                        height: '40px',
                        marginRight: '14px',
                        width: '40px',
                      }}
                    ></div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: 1,
                        justifyContent: 'center',
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: '#F4F4F4',
                          borderRadius: '4px',
                          flexGrow: 0,
                          height: '14px',
                          marginBottom: '6px',
                          width: '100px',
                        }}
                      ></div>
                      <div
                        style={{
                          backgroundColor: '#F4F4F4',
                          borderRadius: '4px',
                          flexGrow: 0,
                          height: '14px',
                          width: '60px',
                        }}
                      ></div>
                    </div>
                  </div>
                  <div style={{ padding: '19% 0' }}></div>
                  <div
                    style={{
                      display: 'block',
                      height: '50px',
                      margin: '0 auto 12px',
                      width: '50px',
                    }}
                  >
                    <Instagram size={50} />
                  </div>
                  <div style={{ paddingTop: '8px' }}>
                    <div
                      style={{
                        color: '#3897f0',
                        fontFamily: 'Arial,sans-serif',
                        fontSize: '14px',
                        fontStyle: 'normal',
                        fontWeight: 550,
                        lineHeight: '18px',
                      }}
                    >
                      View this profile on Instagram
                    </div>
                  </div>
                </a>
              </div>
            </blockquote>
          </div>

          <div className="mt-6 text-center">
            <p className="text-[#2c3e50] text-sm mb-4">
              Stay updated with our latest property photos, guest experiences, and special offers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

declare global {
  interface Window {
    instgrm: any;
  }
}
