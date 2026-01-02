import React, { useState, useEffect } from 'react';
import docContent from './docContent.tsx';
export default function App() {
  const [activeSection, setActiveSection] = useState("introduction");
  const isScrollingRef = React.useRef(false);
  const scrollTimeoutRef = React.useRef<number | null>(null);
  const userClickedRef = React.useRef(false);
  const topicsContainerRef = React.useRef<HTMLDivElement>(null);

  // Smooth scroll logic - only when user clicks navigation
  useEffect(() => {
    if (!userClickedRef.current) return;

    const element = document.getElementById(activeSection);
    if (element) {
      isScrollingRef.current = true;
      const yOffset = -120;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });

      // Reset the flags after scrolling completes
      setTimeout(() => {
        isScrollingRef.current = false;
        userClickedRef.current = false;
      }, 1000);
    }
  }, [activeSection]);

  // Scroll detection to update active section with debouncing
  useEffect(() => {
    const handleScroll = () => {
      // Don't update active section during programmatic scrolling
      if (isScrollingRef.current) return;

      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Debounce the scroll detection
      scrollTimeoutRef.current = window.setTimeout(() => {
        const sections = docContent.sections;
        const scrollPosition = window.scrollY + 150;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          const element = document.getElementById(section.id);
          if (element && element.offsetTop <= scrollPosition) {
            setActiveSection(section.id);
            break;
          }
        }
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Scroll the navigation strip left/right
  const scrollStrip = (direction: 'left' | 'right') => {
    if (topicsContainerRef.current) {
      const scrollAmount = 200;
      const newScrollLeft = topicsContainerRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
      topicsContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  // Handle topic click
  const handleTopicClick = (sectionId: string) => {
    userClickedRef.current = true;
    setActiveSection(sectionId);
  };

  // Auto-scroll active topic into view in the strip
  useEffect(() => {
    if (topicsContainerRef.current) {
      const activeButton = topicsContainerRef.current.querySelector(`[data-section-id="${activeSection}"]`);
      if (activeButton) {
        activeButton.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [activeSection]);

  const [hovered, setHovered] = useState(false);
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#333] font-serif selection:bg-[#e5e0d5] selection:text-black">
      <div className="max-w-3xl mx-auto px-6 py-4">

        {/* Header */}
        <header className="text-center border-b border-gray-300 pb-6">
          {/* <div className="w-14 h-14 border-2 border-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 bg-white shadow-sm">
            <span className="font-serif italic font-bold text-2xl text-gray-900">E</span>
          </div> */}

          <img
            src={hovered ? "/epx_prop_js.png" : "/epx_prop.png"}
            alt="Epoxy Prop"
            className=" mt-5 mb-5 w-60 md:h-30 md:w-auto mx-auto transition-opacity duration-300"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          />
          <h1 className="text-4xl md:text-5xl font-normal mb-6 tracking-wide text-gray-900">
            Epoxy - The Hybrid Language
          </h1>
          <p className="text-gray-500 italic font-light text-lg">
            Documentation <span className="mx-2">&middot;</span> <code className="language-properties bg-[#f4f1ea] px-1.5 py-0.5 rounded text-sm font-mono border border-[#e5e0d5]">npm i -g epoxylang</code> <span className="mx-2">&middot;</span> {docContent.version}
          </p>
        </header>

        {/* Navigation / TOC - Horizontal Strip */}
        <nav className="z-100 pt-5 bg-[#fdfbf7] sticky top-[-0.2rem] pb-4 mb-15 border-b border-gray-300">
          <div className="flex items-center justify-center gap-3">
            {/* Previous Button */}
            <button
              onClick={() => scrollStrip('left')}
              className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 hover:border-gray-400 transition-all duration-200"
              aria-label="Scroll left"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Topics Container */}
            <div ref={topicsContainerRef} className="flex-1 overflow-x-auto scrollbar-hide">
              <div className="flex items-center justify-center gap-6 px-4 min-w-max">
                {docContent.sections.map((section) => (
                  <button
                    key={section.id}
                    data-section-id={section.id}
                    onClick={() => handleTopicClick(section.id)}
                    className={`relative pb-1 text-sm tracking-wide transition-all duration-300 ease-out whitespace-nowrap ${activeSection === section.id
                      ? 'text-gray-900 font-medium'
                      : 'text-gray-400 hover:text-gray-600'
                      }`}
                  >
                    {section.title}
                    {activeSection === section.id && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 rounded-full"></span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={() => scrollStrip('right')}
              className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 hover:border-gray-400 transition-all duration-200"
              aria-label="Scroll right"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </nav>

        {/* Main Content */}
        <main>
          {docContent.sections.map((section) => (
            <article key={section.id} id={section.id} className="mb-20 scroll-mt-10">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-medium text-gray-900">{section.title}</h2>
                <span className="h-px bg-gray-200 flex-1 mt-1"></span>
              </div>
              <div className="leading-loose text-lg text-gray-800 font-light">
                {section.content}
              </div>
            </article>
          ))}
        </main>

        {/* Footer */}
        <footer className="mt-32 pt-12 border-t border-gray-200 text-center text-sm text-gray-400 font-sans tracking-wide">
          <p className="mb-2">&copy; 2024 Flux Language Foundation</p>
          <div className="flex justify-center gap-4">
            <a href="#" className="hover:text-gray-600 transition-colors">Twitter</a>
            <a href="#" className="hover:text-gray-600 transition-colors">GitHub</a>
            <a href="#" className="hover:text-gray-600 transition-colors">License</a>
          </div>
        </footer>

      </div>
    </div>
  );
}