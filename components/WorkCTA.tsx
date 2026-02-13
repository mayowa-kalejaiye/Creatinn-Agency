import React from 'react';
import LogoMarqueeEnhanced from './LogoMarqueeEnhanced';
import ProgressiveImage from './ProgressiveImage';
import AnimatedHeading from './AnimatedHeading';

export default function WorkCTA() {
  return (
    <section className="relative z-30 bg-white py-16" id="work-cta">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center">
          <AnimatedHeading
            as="h2"
            className="mb-8 text-5xl sm:text-6xl md:text-6xl lg:text-6xl font-medium leading-snug text-[rgb(27,29,30)]"
            maxTranslate={28}
            maxScale={0.03}
          >
            <span className="block sm:inline" style={{ fontFamily: 'Inter Tight, Inter, system-ui, sans-serif' }}>How we transformed </span>
            <span className="block sm:inline" style={{ fontFamily: 'Inter Tight, Inter, system-ui, sans-serif' }}>a small business's </span>
            <span className="block sm:inline lg:block italic" style={{ fontFamily: 'Playfair Display, serif' }}>online presence</span>
          </AnimatedHeading>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-3xl mx-auto">

          </div>
          
        </div>
      </div>
    </section>
  );
}
