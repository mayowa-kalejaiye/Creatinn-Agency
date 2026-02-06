import React from 'react';

const stats = [
  { value: '40+', label: 'Total Projects Completed' },
  { value: '15+', label: 'Years of Experience' },
  { value: '12+', label: 'Design Awards' },
];

const pillars = [
  {
    icon: '✨',
    title: 'Creativity',
    description: 'Innovative ideas that captivate',
  },
  {
    icon: '💡',
    title: 'Innovation',
    description: 'Cutting-edge solutions',
  },
  {
    icon: '🎯',
    title: 'Strategy',
    description: 'Data-driven approach',
  },
];

export default function TrustIndicators() {
  return (
    <section className="relative z-30 bg-white py-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar) => (
            <div 
              key={pillar.title}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{pillar.title}</h3>
              <p className="text-slate-600">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-slate-200">
          {stats.map((stat) => (
            <div 
              key={stat.label}
              className="text-center"
            >
              <div className="text-8xl sm:text-9xl md:text-[10rem] lg:text-[12rem] font-bold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-none">
                {stat.value}
              </div>
              <div className="text-slate-600 text-base md:text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
