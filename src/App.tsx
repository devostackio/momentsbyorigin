import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Eye, EyeOff } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';
import { LayoutOption1 } from './components/LayoutOption1';
import { LayoutOption4 } from './components/LayoutOption4';
import { LayoutOption5 } from './components/LayoutOption5';
import { LayoutOption6 } from './components/LayoutOption6';
import { LayoutOption7 } from './components/LayoutOption7';
import { LayoutOption8 } from './components/LayoutOption8';
import { LayoutOption9 } from './components/LayoutOption9';
import { LayoutOption10 } from './components/LayoutOption10';
import { VenturePage9 } from './components/VenturePage9';
import { DesignPatternLibrary } from './components/DesignPatternLibrary';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [navVisible, setNavVisible] = useState(true);
  const [showDesignLibrary, setShowDesignLibrary] = useState(false);

  const layouts = [
    { component: <LayoutOption7 />, name: 'Moments by Origin', category: 'Culinary Experiences', description: 'Curated Events & Catering', year: 'Current' },
    { component: <LayoutOption1 />, name: 'Origin Creative Group', category: 'Umbrella Company', description: 'Vision, Investment & Community', year: 'Current' },
    { component: <LayoutOption4 />, name: 'Origin Media Group', category: 'Production House', description: 'Content, Events & Programs', year: 'Current' },
    { component: <LayoutOption5 />, name: 'Origin Stack', category: 'SaaS Platform', description: 'Tech Solutions & Academy', year: 'Current' },
    { component: <LayoutOption6 />, name: 'Origin Creative Media', category: 'Media Hub', description: 'News, Podcasts & Showcases', year: 'Current' },
    { component: <LayoutOption8 />, name: 'Origin Music', category: 'Music Label', description: 'Southeast DC Sound & Heritage', year: '2028' },
    { component: <LayoutOption9 />, name: 'Origin Studio', category: 'Incubator Lab', description: 'Design Thinking & Workshops', year: '2028' },
    { component: <LayoutOption10 />, name: 'Business Model', category: 'Investment', description: 'Partnership & Support Opportunities', year: 'Overview' },
    { component: <VenturePage9 />, name: 'Product Workshop', category: 'Product Workshop', description: 'Product Consulting Opportunities', year: '2026' }
  ];

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? layouts.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev === layouts.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0
    })
  };

  // Design Pattern Library route
  if (showDesignLibrary) {
    return (
      <div>
        <Analytics />
        <DesignPatternLibrary />
        <button
          onClick={() => setShowDesignLibrary(false)}
          className="fixed bottom-6 right-6 px-6 py-3 text-sm transition-all duration-300 hover:opacity-80"
          style={{ 
            backgroundColor: 'var(--accent-rose)', 
            color: 'var(--canvas)',
            fontFamily: 'var(--font-sans)',
            fontWeight: 500,
            borderRadius: '2px',
            zIndex: 50
          }}
        >
          Back to Presentation
        </button>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Header with Layout Indicators */}
      <AnimatePresence>
        {navVisible && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-30 px-6 py-4 backdrop-blur-sm"
            style={{ 
              backgroundColor: 'rgba(245, 245, 243, 0.9)',
              borderBottom: '1px solid var(--border)'
            }}
          >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <div>
                <h1 
                  className="text-lg mb-1"
                  style={{ 
                    fontFamily: 'var(--font-serif)', 
                    color: 'var(--charcoal-primary)',
                    fontWeight: 700
                  }}
                >
                  ORIGIN
                </h1>
                <p 
                  className="text-xs"
                  style={{ 
                    fontFamily: 'var(--font-sans)', 
                    color: 'var(--charcoal-tertiary)'
                  }}
                >
                  Company Portfolio Previews
                </p>
              </div>
              
              <div className="flex items-center gap-6">
                {/* Layout Indicator */}
                <div className="flex flex-col items-end">
                  <p 
                    className="text-xs mb-1"
                    style={{ 
                      fontFamily: 'var(--font-sans)', 
                      color: 'var(--charcoal-tertiary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em'
                    }}
                  >
                    {layouts[currentSlide].category} • {layouts[currentSlide].year} • {currentSlide + 1} of {layouts.length}
                  </p>
                  <p 
                    className="text-sm"
                    style={{ 
                      fontFamily: 'var(--font-sans)', 
                      color: 'var(--charcoal-primary)',
                      fontWeight: 500
                    }}
                  >
                    {layouts[currentSlide].name}
                  </p>
                </div>

                {/* Dot Indicators */}
                <div className="hidden lg:flex gap-2">
                  {layouts.map((layout, index) => (
                    <button
                      key={index}
                      onClick={() => handleDotClick(index)}
                      className="w-2 h-2 rounded-full transition-all duration-300"
                      style={{
                        backgroundColor: currentSlide === index ? 'var(--accent-rose)' : 'var(--charcoal-tertiary)',
                        opacity: currentSlide === index ? 1 : (layout.year === '2028' ? 0.2 : 0.3)
                      }}
                      aria-label={`Go to ${layout.name}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Toggle Button */}
      <button
        onClick={() => setNavVisible(!navVisible)}
        className="fixed top-6 right-6 z-40 w-10 h-10 flex items-center justify-center transition-all duration-300 hover:opacity-70"
        style={{
          backgroundColor: navVisible ? 'rgba(245, 245, 243, 0.95)' : 'rgba(43, 43, 43, 0.9)',
          borderRadius: '50%',
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.15)',
          border: `1px solid ${navVisible ? 'var(--border)' : 'rgba(255, 255, 255, 0.1)'}`
        }}
        aria-label={navVisible ? 'Hide navigation' : 'Show navigation'}
      >
        {navVisible ? (
          <EyeOff size={18} style={{ color: 'var(--charcoal-primary)' }} />
        ) : (
          <Eye size={18} style={{ color: '#FFFFFF' }} />
        )}
      </button>

      {/* Carousel */}
      <div className={navVisible ? 'pt-20 relative overflow-hidden' : 'relative overflow-hidden'}>
        {/* Navigation Arrows */}
        <button
          onClick={handlePrevious}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center transition-all duration-300 hover:opacity-70"
          style={{
            backgroundColor: 'var(--canvas)',
            borderRadius: '50%',
            boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)'
          }}
          aria-label="Previous layout"
        >
          <ChevronLeft size={24} style={{ color: 'var(--charcoal-primary)' }} />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center transition-all duration-300 hover:opacity-70"
          style={{
            backgroundColor: 'var(--canvas)',
            borderRadius: '50%',
            boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)'
          }}
          aria-label="Next layout"
        >
          <ChevronRight size={24} style={{ color: 'var(--charcoal-primary)' }} />
        </button>

        {/* Slides */}
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'tween', duration: 0.4, ease: 'easeInOut' },
              opacity: { duration: 0.3 }
            }}
          >
            {layouts[currentSlide].component}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Instructions */}
      {navVisible && (
        <div 
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 px-6 py-3 backdrop-blur-sm"
          style={{ 
            backgroundColor: 'rgba(43, 43, 43, 0.9)',
            borderRadius: '24px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)'
          }}
        >
          <p 
            className="text-xs text-center mb-2"
            style={{ 
              fontFamily: 'var(--font-sans)', 
              color: 'var(--canvas)',
              letterSpacing: '0.05em'
            }}
          >
            Use arrows to navigate • Click dots to jump • Toggle eye icon for immersive view
          </p>
          <p className="text-center">
            <button
              onClick={() => setShowDesignLibrary(true)}
              className="text-xs transition-opacity duration-200 hover:opacity-70 underline"
              style={{ 
                fontFamily: 'var(--font-sans)', 
                color: 'var(--accent-sand)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0
              }}
            >
              View Design Pattern Library
            </button>
          </p>
        </div>
      )}
    </div>
  );
}