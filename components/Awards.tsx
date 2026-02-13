"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, PanInfo } from "framer-motion";

interface CardData {
  id: number;
  imageUrl: string;
  title: string;
  year: string;
}

interface IconProps {
  className?: string;
}

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

interface CardProps {
  card: CardData;
  index: number;
  activeIndex: number;
  totalCards: number;
}

const SparklesIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9.93 2.25 12 7.5l2.07-5.25a.5.5 0 0 1 .9 0L17.25 8.5l4.16.34a.5.5 0 0 1 .29.88l-3.2 3.1.95 4.5a.5.5 0 0 1-.73.53L12 14.5l-3.72 2.33a.5.5 0 0 1-.73-.53l.95-4.5-3.2-3.1a.5.5 0 0 1 .29-.88l4.16-.34Z" />
  </svg>
);

const ChevronLeftIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRightIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const Badge: React.FC<BadgeProps> = ({ children, className }) => (
  <div
    className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium ${className}`}
  >
    {children}
  </div>
);

const cardData: CardData[] = [
  {
    id: 1,
    imageUrl: "/awards/NEXT RATED MALE FILMMAKER.jpg",
    title: "Next Rated Male Filmmaker",
    year: "2025"
  },
  {
    id: 2,
    imageUrl: "/awards/BEST NIGERIAN FILM.jpg",
    title: "Best Nigerian Film",
    year: "2025"
  },
  {
    id: 3,
    imageUrl: "/awards/Email marketting certified.jpg",
    title: "Email Marketing Certified",
    year: "2024"
  },
  {
    id: 4,
    imageUrl: "/awards/digital marketing certification.jpg",
    title: "Digital Marketing Certification",
    year: "2024"
  },
];

type AnimatedHeadingProps = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  maxTranslate?: number;
  maxScale?: number;
  children: React.ReactNode;
};

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  as: Tag = "h2",
  className = "",
  maxTranslate = 30,
  maxScale = 0.03,
  children,
}) => {
  // Simple animation effect using framer-motion
  return (
    <motion.div
      initial={{ opacity: 0, y: maxTranslate }}
      animate={{ opacity: 1, y: 0, scale: 1 + maxScale }}
      transition={{ duration: 0.7, type: "spring" }}
    >
      <Tag className={className}>{children}</Tag>
    </motion.div>
  );
};

export default function Awards() {
  const [activeIndex, setActiveIndex] = useState(
    Math.floor(cardData.length / 2)
  );
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

  const onDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const dragThreshold = 75;
    const dragOffset = info.offset.x;
    if (dragOffset > dragThreshold) {
      changeSlide(activeIndex - 1);
    } else if (dragOffset < -dragThreshold) {
      changeSlide(activeIndex + 1);
    }
  };

  return (
    <section className="relative z-30 bg-white py-20 w-full flex-col items-center justify-center font-sans overflow-hidden" id="awards">
      <div className="text-center mb-16">
        <AnimatedHeading as="h2" className="text-4xl md:text-5xl lg:text-6xl font-medium text-[rgb(27,29,30)] mb-4" maxTranslate={30} maxScale={0.03}>
          Accolades and achievements <br/>celebrating our
          <span style={{ fontFamily: 'Playfair Display, serif' }} className="italic font-medium"> design excellence</span>
        </AnimatedHeading>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Honored by the design community for excellence and innovation
        </p>
      </div>
      
      <div
        className="w-full max-w-7xl mx-auto p-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative flex w-full flex-col rounded-3xl border border-white/10 dark:border-white/10 bg-white dark:bg-neutral-900 p-4 pt-6 md:p-6">
          <Badge className="absolute left-4 top-6 rounded-xl border border-gray-300 dark:border-white/10 text-base text-gray-700 dark:text-white/80 bg-gray-100/80 dark:bg-black/20 backdrop-blur-sm md:left-6">
            <SparklesIcon className="text-[rgb(27,29,30)] stroke-1 text-neutral-800 h-5 w-5 mr-1" />
            Our Awards
          </Badge>

          <div className="relative w-full h-[400px] md:h-[550px] flex items-center justify-center overflow-hidden pt-12">
            <motion.div
              className="w-full h-full flex items-center justify-center"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={onDragEnd}
            >
              {cardData.map((card, index) => (
                <Card
                  key={card.id}
                  card={card}
                  index={index}
                  activeIndex={activeIndex}
                  totalCards={cardData.length}
                />
              ))}
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-6 mt-6">
            <button
              onClick={() => changeSlide(activeIndex - 1)}
              className="p-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-300 dark:border-white/10 text-gray-700 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[rgb(27,29,30)]"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>

            <div className="flex items-center justify-center gap-2">
              {cardData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => changeSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                    activeIndex === index
                      ? "w-6 bg-[rgb(27,29,30)]"
                      : "w-2 bg-gray-300 dark:bg-neutral-600 hover:bg-gray-400 dark:hover:bg-neutral-500"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => changeSlide(activeIndex + 1)}
              className="p-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 border border_gray-300 dark:border-white/10 text-gray-700 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[rgb(27,29,30)]"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ card, index, activeIndex, totalCards }: CardProps) {
  let offset = index - activeIndex;
  if (offset > totalCards / 2) {
    offset -= totalCards;
  } else if (offset < -totalCards / 2) {
    offset += totalCards;
  }

  const isVisible = Math.abs(offset) <= 1;

  const animate = {
    x: `${offset * 50}%`,
    scale: offset === 0 ? 1 : 0.8,
    zIndex: totalCards - Math.abs(offset),
    opacity: isVisible ? 1 : 0,
    transition: { type: "spring" as const, stiffness: 260, damping: 30 },
  };

  return (
    <motion.div
      className="absolute w-3/5 md:w-1/2 h-[95%]"
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={animate}
      initial={false}
    >
      <div className="relative w-full h-full rounded-3xl shadow-2xl overflow-hidden bg-gray-200 dark:bg-neutral-800">
        <img
          src={card.imageUrl}
          alt={card.title}
          className="w-full h-full object-cover pointer-events-none"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src =
              "https://placehold.co/400x600/1e1e1e/ffffff?text=Image+Missing";
          }}
        />
        <div className="absolute top-4 left-4 bg-[rgb(27,29,30)] text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
          {card.year}
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
          <h4 className="text-white text-lg font-semibold">{card.title}</h4>
        </div>
      </div>
    </motion.div>
  );
}
