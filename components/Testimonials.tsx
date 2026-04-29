"use client";
import React, { SVGProps, FC, useEffect, useState } from 'react';
import { BentoGrid, BentoCard } from './BentoGrid';
import AnimatedHeading from './AnimatedHeading';
import Image from 'next/image'

// Use public/ paths for images
const teamGroup = '/IMG_3314(1).JPG'
const person1 = '/IMG_3322.JPG'
const person2 = '/IMG_4799.jpg'
const person3 = '/IMG_4913.jpg'
const person4 = '/IMG_4972.jpg'

const QuoteIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

const ChartIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 3v18h18" />
    <path d="M18 9l-5 5-4-4-5 5" />
  </svg>
);

type Story = {
  Icon: FC<SVGProps<SVGSVGElement>>;
  name: string;
  description: string;
  href?: string;
  cta?: string;
  className: string;
  textColor?: string;
  background: React.ReactNode;
};

const stories: Story[] = [
  {
    Icon: QuoteIcon,
    name: "CUSTOMER STORIES",
    description: "Creatinn Agency's expertise transformed my vision into success with creativity, precision, and a deep understanding of my goals.",
    className: "lg:col-span-2 lg:row-span-1",
    background: (
      <div className="absolute inset-0">
        <SlideshowBackground images={[teamGroup, person1, person2]} />
      </div>
    ),
  },
  {
    Icon: ChartIcon,
    name: "FACTS & NUMBERS",
    description: '',
    className: "lg:col-span-1 lg:row-span-1",
    textColor: "text-black",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-yellow-200 to-yellow-300">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-8xl font-bold text-slate-900 mb-3">91%</div>
          </div>
        </div>
          <div className="absolute bottom-10 left-10 right-10 text-center">
          <p className="text-3xl md:text-4xl font-medium leading-tight text-[rgb(27,29,30)] font-sans">
            clients recommend our design services.
          </p>
        </div>
      </div>
    ),
  },
  {
    Icon: QuoteIcon,
    name: "CUSTOMER STORIES",
    description: "Their creativity and attention to detail transformed our brand completely!",
    className: "lg:col-span-1 lg:row-span-1",
    textColor: "text-white",
    background: (
      <div className="absolute inset-0">
        <SlideshowBackground images={[person2, person3]} darkOverlay />
      </div>
    ),
  },
  {
    Icon: QuoteIcon,
    name: "CUSTOMER STORIES",
    description: "Creatinn Agency brought our ideas to life with exceptional creativity and precision, exceeding expectations.",
    className: "lg:col-span-2 lg:row-span-1",
    textColor: "text-black",
    background: (
      <div className="absolute inset-0">
        <SlideshowBackground images={[person4, teamGroup]} />
      </div>
    ),
  },
];


function SlideshowBackground({ images, darkOverlay = true }: { images: any[]; darkOverlay?: boolean }) {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (!images || images.length <= 1) return
    const id = window.setInterval(() => setIdx((i) => (i + 1) % images.length), 3200)
    return () => window.clearInterval(id)
  }, [images])

  return (
    <>
      {images.map((im, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === idx ? 'opacity-100' : 'opacity-0'}`}>
          <Image src={im} alt={`testimonial-${i}`} fill className="object-cover" />
        </div>
      ))}
      {darkOverlay && <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-slate-800/30" />}
    </>
  )
}

export default function Testimonials() {
  return (
    <section className="relative z-30 bg-white py-20" id="testimonials">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <AnimatedHeading as="h2" className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[rgb(27,29,30)] mb-4" maxTranslate={22} maxScale={0.025}>
            What our satisfied customers<br/>are saying
            <span className="italic font-medium font-serif"> about us</span>
          </AnimatedHeading>
        </div>
        
        <BentoGrid className="max-w-[1800px] mx-auto">
          {stories.map((story, idx) => (
            <BentoCard key={idx} {...story} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
