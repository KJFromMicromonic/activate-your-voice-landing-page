import React, { useState, useEffect, useCallback } from 'react';
import GlitchText from './GlitchText';
import { VENUE_IMAGES } from '../constants';

const AUTOPLAY_INTERVAL_MS = 5000;

/**
 * Venue section with a carousel of Builders Factory images.
 * Uses VENUE_IMAGES from constants; add images to public/Venue/ to display.
 */
const Venue: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % VENUE_IMAGES.length);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + VENUE_IMAGES.length) % VENUE_IMAGES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(goToNext, AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [goToNext]);

  return (
    <section id="venue" className="py-24 bg-[#030406] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <GlitchText
            text="VENUE"
            tag="h2"
            color="#00ff95"
            className="text-2xl md:text-4xl font-orbitron font-bold mb-4"
          />
          <p className="text-slate-500 font-mono-space text-sm tracking-widest uppercase mb-1">
            Builders Factory
          </p>
          <p className="text-slate-600 font-mono-space text-xs">18 Rue la Condamine, 75017 Paris</p>
          <div className="h-[1px] w-12 bg-[#00ff95]/30 mx-auto mt-4"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Carousel */}
          <div className="relative aspect-[16/10] md:aspect-[16/9] rounded-sm overflow-hidden border border-white/10 bg-[#05070a]">
            {VENUE_IMAGES.map((src, index) => (
              <div
                key={src}
                className="absolute inset-0 transition-opacity duration-500 ease-out"
                style={{
                  opacity: index === currentIndex ? 1 : 0,
                  pointerEvents: index === currentIndex ? 'auto' : 'none',
                }}
              >
                <img
                  src={src}
                  alt={`Builders Factory venue ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('.venue-fallback')) {
                      const fallback = document.createElement('div');
                      fallback.className =
                        'venue-fallback absolute inset-0 flex items-center justify-center bg-[#05070a] border border-white/5';
                      fallback.innerHTML = `<span class="text-slate-600 font-mono-space text-sm">Venue image ${index + 1}</span>`;
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
            ))}
          </div>

          {/* Prev / Next */}
          {VENUE_IMAGES.length > 1 && (
            <>
              <button
                type="button"
                onClick={goToPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-white/20 bg-[#05070a]/90 text-[#00ff95] hover:border-[#00ff95]/50 hover:bg-[#00ff95]/10 transition-all z-10"
                aria-label="Previous image"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-white/20 bg-[#05070a]/90 text-[#00ff95] hover:border-[#00ff95]/50 hover:bg-[#00ff95]/10 transition-all z-10"
                aria-label="Next image"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Dots */}
          {VENUE_IMAGES.length > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {VENUE_IMAGES.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-[#00ff95] w-6'
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Venue;
