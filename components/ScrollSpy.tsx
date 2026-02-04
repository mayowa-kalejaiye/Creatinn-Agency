"use client"
import { useEffect } from 'react'

export default function ScrollSpy() {
  useEffect(() => {
    const nav = document.querySelector('.nav-glass') as HTMLElement | null
    if (!nav) return

    const links = Array.from(nav.querySelectorAll('a')) as HTMLAnchorElement[]

    // create indicator
    let indicator = nav.querySelector('.nav-indicator') as HTMLElement | null
    if (!indicator) {
      indicator = document.createElement('span')
      indicator.className = 'nav-indicator'
      nav.appendChild(indicator)
    }

    function updateIndicatorFor(link: HTMLAnchorElement | null) {
      if (!link || !indicator) return
      const linkRect = link.getBoundingClientRect()
      const navRect = nav.getBoundingClientRect()
      const left = linkRect.left - navRect.left + nav.scrollLeft
      const width = linkRect.width
      indicator.style.transform = `translateX(${left}px)`
      indicator.style.width = `${width}px`
      indicator.style.opacity = '1'
    }

    // Observe the hero's about-trigger specifically so the switch happens when
    // the "Loved by..." row reaches the viewport. Use a rootMargin to tune
    // the exact trigger point (appears when the trigger is ~40% down the viewport).
    const aboutLink = links.find(a => (a.getAttribute('href') || '') === '#about') || null
    const homeLink = links.find(a => (a.getAttribute('href') || '') === '#') || null

    const aboutTrigger = document.getElementById('about-trigger')
    const homeSection = document.getElementById('home')

    const observers: IntersectionObserver[] = []

    if (aboutTrigger && aboutLink) {
      const aboutObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            links.forEach(a => a.classList.toggle('active', a === aboutLink))
            updateIndicatorFor(aboutLink)
          } else {
            // If leaving the trigger upward, revert to Home
            if (homeLink) {
              links.forEach(a => a.classList.toggle('active', a === homeLink))
              updateIndicatorFor(homeLink)
            }
          }
        })
      }, { threshold: 0, rootMargin: '-20% 0px -60% 0px' })
      aboutObs.observe(aboutTrigger)
      observers.push(aboutObs)
    }

    // Fallback: observe home section to ensure indicator positions correctly
    if (homeSection && homeLink) {
      const homeObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            links.forEach(a => a.classList.toggle('active', a === homeLink))
            updateIndicatorFor(homeLink)
          }
        })
      }, { threshold: 0.25 })
      homeObs.observe(homeSection)
      observers.push(homeObs)
    }

    // reposition on resize
    const ro = new ResizeObserver(() => {
      const active = nav.querySelector('a.active') as HTMLAnchorElement | null
      updateIndicatorFor(active)
    })
    ro.observe(nav)

    // initial placement
    setTimeout(() => {
      const active = nav.querySelector('a.active') as HTMLAnchorElement | null
      updateIndicatorFor(active)
    }, 50)

    // Smooth scroll when nav links are clicked (account for fixed header)
    const onNavClick = (e: Event) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a') as HTMLAnchorElement | null
      if (!anchor || !nav.contains(anchor)) return
      const href = anchor.getAttribute('href') || '#'
      // only handle in-page anchors
      if (!href.startsWith('#')) return
      e.preventDefault()
      const selector = href === '#' ? '#home' : href
      const el = document.querySelector(selector) as HTMLElement | null
      if (!el) return
      const header = document.querySelector('.header-glass') as HTMLElement | null
      const headerHeight = header ? header.getBoundingClientRect().height : 0
      const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - 12
      window.scrollTo({ top, behavior: 'smooth' })
      // update active state immediately
      links.forEach(a => a.classList.toggle('active', a === anchor))
      updateIndicatorFor(anchor)
      // update URL hash without jumping
      try { history.replaceState(null, '', href) } catch (err) { /* ignore */ }
    }
    nav.addEventListener('click', onNavClick)

    return () => {
      observers.forEach(o => o.disconnect())
      ro.disconnect()
      nav.removeEventListener('click', onNavClick)
    }
  }, [])

  return null
}
