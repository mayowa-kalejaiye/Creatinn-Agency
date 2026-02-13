"use client";
import React, { useState, useRef, useEffect, useMemo } from "react";

const classNames = (
  ...classes: (string | boolean | undefined | null)[]
): string => {
  return classes.filter(Boolean).join(" ");
};

const images: string[] = [
  '/DSC_0393.jpg',
  '/vid5.mp4',
  '/3U4A1894.jpg',
  '/vid.mp4',
  '/3U4A8829.jpg',
  '/3U4A9420.jpg',
  '/IMG_0515.jpg',
  '/pic.mp4',
  '/IMG_0691.jpg',
  '/IMG_0905.jpg',
  '/IMG_3710.jpg',
  '/vid3.mp4',
  '/IMG_2341.jpg',
  '/vid6.mp4',
  '/IMG_5014.jpg',
  '/vid4.mp4',
  '/FLY 16.jpg',
  '/IMG_0910.jpg',
  '/IMG_3514.jpg',
  '/IMG_3202.jpg',
];

function ImageCarousel() {
  // start with the first (left-most) image active
  const [activeItem, setActiveItem] = useState(0);
  const wrapperRef = useRef<HTMLUListElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  // detect mobile to reduce items and skip videos
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(max-width: 768px)');
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    if (mq.addEventListener) mq.addEventListener('change', onChange);
    else mq.addListener(onChange as any);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', onChange);
      else mq.removeListener(onChange as any);
    };
  }, []);

  const displayImages = useMemo(() => {
    const imgs = images.filter((img) => !(isMobile && /\.(mp4|webm|ogg)$/i.test(img)));
    return isMobile ? imgs.slice(0, 6) : imgs;
  }, [isMobile]);

  // autoplay
  useEffect(() => {
    const iv = setInterval(() => {
      setActiveItem((s) => (s + 1) % displayImages.length);
    }, 4000);
    return () => clearInterval(iv);
  }, [displayImages.length]);

  useEffect(() => {
    if (!wrapperRef.current) return;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    wrapperRef.current.style.setProperty(
      "--transition",
      "600ms cubic-bezier(0.22, 0.61, 0.36, 1)"
    );

    timeoutRef.current = setTimeout(() => {
      wrapperRef.current?.style.removeProperty("--transition");
    }, 900);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeItem]);

  // Only attempt to play the active video and pause others to reduce CPU/network load
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      v.muted = true;
      v.defaultMuted = true;
      v.playsInline = true as any;
      v.preload = i === activeItem ? 'auto' : 'none';

      if (i === activeItem) {
        // Reset to beginning and play
        try { v.currentTime = 0; } catch (e) {}
        const playPromise = v.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.log('Video autoplay prevented:', error);
          });
        }
      } else {
        // Pause all other videos
        try { v.pause(); } catch (e) {}
      }
    });
  }, [activeItem]);

  useEffect(() => {
    // reset active item when available images change
    setActiveItem(0);
  }, [displayImages.length]);

  return (
    <div className="absolute left-0 right-0 top-0 sm:top-14 lg:top-5x bottom-0 w-full h-full font-sans overflow-hidden pointer-events-none">
      <div className="w-full h-full p-0 opacity-50">
        <ul
          ref={wrapperRef}
          className="flex w-full flex-row gap-1 sm:gap-2 h-full"
        >
          {displayImages.map((img, index) => {
            const isVideo = /\.(mp4|webm|ogg)$/i.test(img);
            return (
            <li
              onClick={() => setActiveItem(index)}
              aria-current={activeItem === index}
              className={classNames(
                "relative group cursor-pointer transition-all duration-700 ease-in-out h-full md:flex-none",
                activeItem === index
                  ? "w-[52%] sm:w-[48%] md:w-[39%]"
                  : "w-[16%] sm:w-[7.5%] md:w-[7%]"
              )}
              key={img}
            >
              <div className="relative h-full w-full overflow-hidden rounded-none md:rounded-2xl bg-[rgb(27,29,30)] shadow-2xl transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:z-10 transform-gpu">
                {isVideo ? (
                  <video
                    ref={(el) => { videoRefs.current[index] = el as HTMLVideoElement }}
                    className={classNames(
                      "absolute left-1/2 top-1/2 h-full w-auto max-w-none -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out",
                      activeItem === index ? "object-contain grayscale-0" : "object-cover grayscale"
                    )}
                    src={img}
                    muted
                    playsInline
                    loop
                    preload={activeItem === index ? "auto" : "none"}
                    aria-label={`video-${index}`}
                  />
                ) : (
                  <img
                    className={classNames(
                      "absolute left-1/2 top-1/2 h-full w-auto max-w-none -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out",
                      activeItem === index ? "object-contain grayscale-0" : "object-cover grayscale"
                    )}
                    src={img}
                    loading={activeItem === index ? undefined : "lazy"}
                    alt={`image-${index}`}
                  />
                )}
                <div
                  className={classNames(
                    "absolute inset-0 transition-opacity duration-500",
                    activeItem === index ? "opacity-100" : "opacity-0",
                    "bg-gradient-to-t from-black/70 via-black/30 to-transparent"
                  )}
                />
              </div>
            </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ImageCarousel;
