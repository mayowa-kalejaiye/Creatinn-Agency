"use client"

import React from 'react'

const projects = [
  {
    name: 'Vandah',
    image: '/vandah.jpg',
    tags: ['Web3 Strategy', 'Portfolio Design'],
    url: 'vandah.com',
  },
  {
    name: 'FlowBank',
    image: '/3U4A1815.jpg',
    tags: ['UX Research', 'Interface Design'],
  },
  {
    name: 'Academy.co',
    image: '/3U4A1894.jpg',
    tags: ['Product Design', 'Interaction Design'],
  },
  {
    name: 'Genome',
    image: '/3U4A1905.jpg',
    tags: ['Brand identity design', 'UX Research'],
  },
  {
    name: 'Hotto',
    image: '/IMG_3188.JPG',
    tags: ['Visual Story telling', 'Web & Mobile Design'],
  },
  {
    name: 'TechFlow',
    image: '/IMG_3202.JPG',
    tags: ['UI/UX Design', 'Branding'],
  },
]

export default function Portfolio() {
  return (
    <section className="relative z-30 bg-white py-20" id="work">
      <div className="container mx-auto px-6 lg:px-48">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-slate-100 cursor-pointer"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-2xl font-bold mb-2">{project.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="text-xs text-white/90 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
