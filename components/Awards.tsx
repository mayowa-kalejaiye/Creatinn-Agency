'use client';
import React, { useState, useEffect, useRef } from "react";
import Image from 'next/image'
import { motion, PanInfo } from "framer-motion";

interface CardData {
  id: number;
  imageUrl: string;
  title: string;
  year: string;
}

const cardData: CardData[] = [
  {
    id: 1,
    imageUrl: "/awards/NEXT%20RATED%20MALE%20FILMMAKER.jpg",
    title: "Next Rated Male Filmmaker",
    year: "2025"
  },
  {
    id: 2,
    imageUrl: "/awards/BEST%20NIGERIAN%20FILM.jpg",
    title: "Best Nigerian Film",
    year: "2025"
  },
  {
    id: 3,
    imageUrl: "/awards/Email%20marketting%20certified.jpg",
    title: "Email Marketing Certified",
    year: "2024"
  },
  {
    id: 4,
    imageUrl: "/awards/digital%20marketing%20certification.jpg",
    title: "Digital Marketing Certification",
    year: "2024"
  },
];

export default function Awards() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(Math.floor(cardData.length / 2));
  const [isPaused, setIsPaused] = useState(false);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const autoplayDelay = 3000;

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % cardData.length);
  };

  useEffect(() => {
    if (!isPaused) {
      autoplayIntervalRef.current = setInterval(goToNext, autoplayDelay);
    }
    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
    };
  }, [isPaused, activeIndex]);

  const changeSlide = (newIndex: number) => {
    const newSafeIndex = (newIndex + cardData.length) % cardData.length;
    setActiveIndex(newSafeIndex);
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
    }
    if (!isPaused) {
      autoplayIntervalRef.current = setInterval(goToNext, autoplayDelay);
    }
  };

  const onDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const dragThreshold = 75;
    const dragOffset = info.offset.x;
    if (dragOffset > dragThreshold) {
      changeSlide(activeIndex - 1);
    } else if (dragOffset < -dragThreshold) {
      changeSlide(activeIndex + 1);
    }
  };

  return (
    <section className="bg-[#f2f2f2] py-24" id="awards">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-gray-500 font-medium tracking-wide uppercase text-sm mb-4 block">
              Recognition
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-accent"
          >
            Accolades celebrating our design excellence.
          </motion.h2>
        </div>

        {/* Carousel */}
        <div 
          className="relative bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div ref={carouselRef} className="relative w-full h-[400px] md:h-[550px] flex items-center justify-center pt-8">
            <motion.div
              className="w-full h-full flex items-center justify-center"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={onDragEnd}
            >
              {cardData.map((card, index) => {
                let offset = index - activeIndex;
                if (offset > cardData.length / 2) offset -= cardData.length;
                else if (offset < -cardData.length / 2) offset += cardData.length;

                const isVisible = Math.abs(offset) <= 1;

                return (
                  <motion.div
                    key={card.id}
                    className="absolute w-3/5 md:w-1/2 h-[90%]"
                    style={{ transformStyle: "preserve-3d" }}
                    animate={{
                      x: `${offset * 50}%`,
                      scale: offset === 0 ? 1 : 0.85,
                      zIndex: cardData.length - Math.abs(offset),
                      opacity: isVisible ? 1 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 30 }}
                  >
                    <div className="relative w-full h-full rounded-3xl shadow-xl overflow-hidden bg-gray-100 border border-gray-200">
                      <Image
                        src={card.imageUrl}
                        alt={card.title}
                        fill
                        className="object-cover pointer-events-none"
                      />
                      <div className="absolute top-4 left-4 bg-primary text-accent px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm">
                        {card.year}
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                        <h4 className="text-white text-xl font-bold tracking-tight">{card.title}</h4>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8 relative z-20">
            <button
              onClick={() => changeSlide(activeIndex - 1)}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 text-accent transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              {cardData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => changeSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index ? "w-8 bg-primary" : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => changeSlide(activeIndex + 1)}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 text-accent transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
