import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowRight } from 'lucide-react';

interface EventPopupProps {
  eventSlug?: string;
  autoClose?: boolean;
}

export function EventPopup({ eventSlug = 'elgouna-2026', autoClose = true }: EventPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);

  useEffect(() => {
    // Check if popup has been shown this session
    const popupKey = `event-popup-shown-${eventSlug}`;
    const shown = sessionStorage.getItem(popupKey);
    
    if (!shown) {
      // Small delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasBeenShown(true);
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
      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-navy/10 hover:bg-navy/20 text-navy transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Images Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6 bg-gradient-to-br from-navy/5 to-teal/5 p-6 md:p-8">
          {/* Image 1 */}
          <div className="rounded-xl overflow-hidden shadow-lg order-1 md:order-1">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1781724150530-IVffbnPAcYW2bvrJycgBSbkTlA0LtC.jpeg"
              alt="El Gouna Leadership Team"
              className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Image 2 */}
          <div className="rounded-xl overflow-hidden shadow-lg order-2 md:order-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1781724154367-QshqsmosldMBXCmrYthyZ7KjmWSqWE.jpeg"
              alt="El Gouna Full Event Team"
              className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="mb-6">
            <div className="inline-block px-3 py-1 bg-teal/10 rounded-full text-teal text-xs font-semibold mb-3">
              LATEST EVENT
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-2">
              Connect. Collaborate. Celebrate.
            </h2>
            <p className="text-sm text-teal font-semibold">El Gouna, Egypt</p>
          </div>

          {/* Description */}
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              ASG Distribution and Dahua Technology brought together leading System Integrators and End-Users in El Gouna to celebrate strong partnerships and shared success.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With the presence of both companies&apos; leadership teams, the event also highlighted El Gouna as a successful showcase of security solutions powered by ASG Distribution and Dahua Technology.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold text-navy">Together, we build a smarter, safer future.</span>
            </p>

            {/* Hashtags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['#ASGDistribution', '#DahuaTechnology', '#ElGouna', '#SystemIntegrators', '#EndUsers'].map((tag) => (
                <span key={tag} className="text-xs text-teal/70 font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <Link
            to={`/media/elgouna-2026`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-navy to-navy/80 hover:from-navy/90 hover:to-navy/70 text-white font-semibold rounded-lg transition-all duration-300 group"
          >
            View Full Event Details
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Footer accent */}
        <div className="h-1 bg-gradient-to-r from-navy via-teal to-navy/50"></div>
      </div>
    </div>
  );
}
