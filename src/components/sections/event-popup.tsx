import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowRight } from 'lucide-react';

interface EventPopupProps {
  eventSlug?: string;
  autoClose?: boolean;
}

export function EventPopup({ eventSlug = 'elgouna-2026', autoClose = true }: EventPopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if popup has been shown this session
    const popupKey = `event-popup-shown-${eventSlug}`;
    const shown = sessionStorage.getItem(popupKey);
    
    if (!shown) {
      // Small delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem(popupKey, 'true');
      }, 800);
      
      return () => clearTimeout(timer);
    }
  }, [eventSlug]);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      {/* Premium 2-Column Modal - No Scrolling */}
      <div className="relative w-full max-w-5xl h-[560px] bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300 flex flex-col">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 z-10 p-2 rounded-full bg-navy/10 hover:bg-navy/20 text-navy transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        {/* 2-Column Layout */}
        <div className="flex flex-1 overflow-hidden">
          {/* Left Column - Single Hero Image (45%) */}
          <div className="w-2/5 bg-gradient-to-br from-navy to-navy/90 flex items-center justify-center overflow-hidden">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1781724154367-QshqsmosldMBXCmrYthyZ7KjmWSqWE.jpeg"
              alt="El Gouna Partnership Event"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column - Content (55%) */}
          <div className="w-3/5 p-8 flex flex-col justify-between">
            {/* Top Content */}
            <div>
              {/* Event Badge */}
              <div className="inline-block px-3 py-1 bg-teal/10 rounded-full text-teal text-xs font-bold tracking-wide mb-4">
                FEATURED EVENT
              </div>

              {/* Title */}
              <h2 className="font-display text-3xl font-bold text-navy mb-1 leading-tight">
                Connect. Collaborate. Celebrate.
              </h2>
              <p className="text-teal font-semibold text-sm mb-5">El Gouna, Egypt 2026</p>

              {/* Description */}
              <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                <p>
                  ASG Distribution and Dahua Technology brought together leading System Integrators and End-Users to celebrate strong partnerships and shared success.
                </p>
                <p>
                  With the presence of both companies&apos; leadership teams, the event highlighted El Gouna as a successful showcase of security solutions.
                </p>
                <p className="font-semibold text-navy">
                  Together, we build a smarter, safer future.
                </p>

                {/* Hashtags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {['#ASGDistribution', '#DahuaTechnology', '#ElGouna'].map((tag) => (
                    <span key={tag} className="text-xs text-teal font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom - Centered CTA Button */}
        <div className="border-t border-gray-200 bg-gradient-to-r from-navy/5 to-teal/5 px-8 py-6 flex justify-center">
          <Link
            to={`/media/elgouna-2026`}
            className="inline-flex items-center gap-2 px-8 py-3 bg-teal hover:bg-teal/90 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg group"
          >
            View Full Event Details
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
