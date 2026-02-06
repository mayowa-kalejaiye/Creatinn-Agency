"use client";
import React, { SVGProps, FC } from 'react';
import { BentoGrid, BentoCard } from './BentoGrid';

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
        <img 
          src="/3U4A1815.jpg" 
          alt="Customer story"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-slate-800/50" />
        <div className="absolute bottom-10 left-10 text-white">
          <div className="font-semibold text-lg">Sarah Mitchell</div>
          <div className="text-sm opacity-90">Founder of Chipsland</div>
        </div>
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
          <p className="text-3xl md:text-4xl font-medium leading-tight" style={{ color: 'rgb(27, 29, 30)', fontFamily: 'Inter Tight, system-ui, sans-serif' }}>
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
        <div className="absolute inset-0" style={{ background: 'rgb(27, 29, 30)' }} />
        <div className="absolute bottom-32 left-6 w-96 h-96">
          <img 
            src="/3U4A1815.jpg" 
            alt="John Anderson"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="absolute bottom-6 left-6 text-left">
          <div className="font-semibold text-white">John Anderson</div>
          <div className="text-sm text-white/80">CEO at TechStart</div>
        </div>
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
        <img 
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80" 
          alt="Customer story"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-200/90 to-slate-100/90" />
        <div className="absolute bottom-6 left-6">
          <div className="font-semibold text-slate-900">Sarah Mitchell</div>
          <div className="text-sm text-slate-600">Marketing Head at TalentConnect</div>
        </div>
      </div>
    ),
  },
];

export default function Testimonials() {
  return (
    <section className="relative z-30 bg-white py-20" id="testimonials">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-4">
            What our <span className="italic text-slate-400">clients say</span>
          </h2>
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
