"use client"

import React, { useEffect, useState } from 'react'

import AnimatedHeading from './AnimatedHeading'

type Project = {
  name: string 
  tags: string[]
  images?: string[]
  isDouble?: boolean
  spanClass?: string
}

const projects: Project[] = [
  {
    name: '',
    images: ['/3U4A1894.jpg', '/3U4A1815.jpg', '/3U4A8829.jpg'],
    tags: ['Web3 Strategy', 'Portfolio Design'],
    spanClass: 'md:col-span-2 xl:col-span-2',
  },
  {
    name: 'FlowBank',
    images: ['/3U4A1905.jpg', '/3U4A9420.jpg', '/IMG_0691.jpg'],
    tags: ['UX Research', 'Interface Design'],
    spanClass: 'md:col-span-1 xl:col-span-1',
  },
  {
    name: 'Academy.co',
    images: ['/IMG_3188.JPG', '/IMG_3202.JPG', '/IMG_2341.jpg'],
    tags: ['Product Design', 'Interaction Design'],
    spanClass: 'md:col-span-1 xl:col-span-1',
  },
  {
    name: 'Genome',
    images: ['/IMG_2400.jpg', '/IMG_3314(1).JPG', '/IMG_0965.jpg'],
    tags: ['Brand identity design', 'UX Research'],
    spanClass: 'md:col-span-2 xl:col-span-2',
  },
  {
    name: 'Creatinn Academy',
    images: ['/academy-1.jpg', '/academy-2.jpg'],
    tags: ['Education', 'Creative Learning'],
    isDouble: true,
    spanClass: 'md:col-span-2 xl:col-span-3',
  },
]

function SlideshowCard({ project }: { project: Project }) {
  const images = project.images ?? []
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length)
    }, 3200)

    return () => window.clearInterval(interval)
  }, [images.length])

  return (
    <article className={`group relative overflow-hidden rounded-3xl bg-slate-100 shadow-sm ${project.spanClass ?? ''}`}>
      <div className="relative aspect-[4/5] overflow-hidden">
        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <BackgroundImage src={src} alt={`${project.name} image ${index + 1}`} />
          </div>
        ))}

        {/* If this is not the Creatinn Academy project, don't render descriptive overlays — show only images */}
        {project.name === 'Creatinn Academy' ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

            <div className="absolute left-5 right-5 bottom-5 z-10 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/80 mb-2">Featured Project</p>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{project.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/16 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {images.length > 1 && (
                <div className="rounded-full bg-white/18 px-3 py-1 text-xs font-semibold text-white/85 backdrop-blur-sm">
                  {String(activeIndex + 1).padStart(2, '0')}/{String(images.length).padStart(2, '0')}
                </div>
              )}
            </div>
          </>
        ) : null}
      </div>
    </article>
  )
}

function DoubleShowcaseCard({ project }: { project: Project }) {
  const images = project.images ?? []

  return (
    <article className={`group relative overflow-hidden rounded-3xl bg-slate-100 shadow-sm ${project.spanClass ?? ''}`}>
      <div className="grid aspect-[16/9] grid-cols-2 overflow-hidden">
        {images.map((src, index) => (
          <div key={src} className="relative overflow-hidden">
            <BackgroundImage src={src} alt={`${project.name} image ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

      <div className="absolute left-5 right-5 bottom-5 z-10">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/80 mb-2">Featured Project</p>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{project.name}</h3>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/16 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function Portfolio() {
  return (
    <section className="relative z-30 bg-white py-20" id="work">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-12 text-center">
          <AnimatedHeading as="h2" className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[rgb(27,29,30)]" maxTranslate={22} maxScale={0.025}>
            Selected work
          </AnimatedHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) =>
            project.isDouble ? (
              <DoubleShowcaseCard key={project.name} project={project} />
            ) : (
              <SlideshowCard key={project.name} project={project} />
            ),
          )}
        </div>
      </div>
    </section>
  )
}

function BackgroundImage({ src, alt }: { src: string; alt?: string }) {
  const [failed, setFailed] = useState(false)

  if (!src || failed) {
    return <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300" />
  }

  return (
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      onError={() => setFailed(true)}
    />
  )
}
