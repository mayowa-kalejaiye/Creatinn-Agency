"use client"
import React, { useEffect, useRef, useState } from 'react'

type Props = { videoSrc?: string; className?: string; poster?: string }

export default function RetroTV({ videoSrc = '/videos/sample.mp4', className = '', poster }: Props) {
  const ref = useRef<HTMLVideoElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [isOn, setIsOn] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)
  const [mutedByDefault] = useState(true)
  const [muted, setMuted] = useState(true)
  const [volume, setVolume] = useState(0.8)
  const [isFlicker, setIsFlicker] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [channel, setChannel] = useState(3)

  useEffect(() => {
    const v = ref.current
    if (!v) return
    v.loop = true
    v.playsInline = true
    v.volume = volume
    v.muted = muted

    const tryPlay = async () => {
      try {
        if (isOn) await v.play()
      } catch (e) {
        // autoplay may be blocked; remain muted until user interacts
      }
    }
    tryPlay()
  }, [isOn, muted, volume])

  useEffect(() => {
    let t: number | undefined
    if (isOn) {
      // small randomized flicker on power on
      setIsFlicker(true)
      t = window.setTimeout(() => setIsFlicker(false), 300)
    }
    return () => { if (t) clearTimeout(t) }
  }, [isOn])

  useEffect(() => {
    const v = ref.current
    if (!v) return
    const onLoadStart = () => setIsLoading(true)
    const onCanPlay = () => setIsLoading(false)
    v.addEventListener('loadstart', onLoadStart)
    v.addEventListener('canplay', onCanPlay)
    return () => {
      v.removeEventListener('loadstart', onLoadStart)
      v.removeEventListener('canplay', onCanPlay)
    }
  }, [])

  const togglePower = () => {
    const v = ref.current
    if (!v) return
    if (isOn) {
      v.pause()
      setIsPlaying(false)
      setIsOn(false)
    } else {
      setIsOn(true)
      setTimeout(() => {
        v.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false))
      }, 80)
    }
  }

  const togglePlay = () => {
    const v = ref.current
    if (!v || !isOn) return
    if (v.paused) {
      v.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false))
    } else {
      v.pause()
      setIsPlaying(false)
    }
  }

  const handleVolume = (val: number) => {
    const v = ref.current
    setVolume(val)
    if (v) v.volume = val
  }

  const toggleMute = () => {
    const v = ref.current
    if (!v) return
    const next = !muted
    setMuted(next)
    v.muted = next
  }

  const enterFullscreen = () => {
    const el = containerRef.current
    if (!el) return
    // @ts-ignore
    if (el.requestFullscreen) el.requestFullscreen()
  }

  const handleScreenClick = () => {
    if (!isOn) {
      togglePower()
      setMuted(false)
      setTimeout(() => setMuted(false), 120)
      return
    }
    togglePlay()
  }

  const changeChannel = (dir: number) => {
    setChannel(prev => Math.max(1, Math.min(12, prev + dir)))
  }

  return (
    <div ref={containerRef} className={`retro-tv ${className}`} role="group" aria-label="Retro television">
      <div className="tv-body">
        <div className={`tv-screen ${isOn ? 'powered' : 'off'}`} onClick={handleScreenClick} tabIndex={0} onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Spacebar') { e.preventDefault(); handleScreenClick() } }}>
          <video
            ref={ref}
            src={videoSrc}
            className="tv-video"
            poster={poster}
            muted={mutedByDefault}
            playsInline
            preload="metadata"
            aria-hidden={!isOn}
          />
          {/* Chromatic aberration layers */}
          <div className="chroma-red" aria-hidden />
          <div className="chroma-blue" aria-hidden />

          <div className={`static-overlay ${isOn ? 'hidden' : 'visible'}`} aria-hidden />
          <div className={`crt-overlay ${isFlicker ? 'flicker' : ''}`} aria-hidden />
          <div className={`loading-spinner ${isLoading && isOn ? 'visible' : ''}`} aria-hidden />
          <div className="tv-ui">
            <button className="power" onClick={(e) => { e.stopPropagation(); togglePower() }} aria-pressed={isOn} aria-label="Power" />
            <button className="playpause" onClick={(e) => { e.stopPropagation(); togglePlay() }} aria-label={isPlaying ? 'Pause' : 'Play'}>
              {isPlaying ? '❚❚' : '►'}
            </button>
            <button className="fullscreen" onClick={(e) => { e.stopPropagation(); enterFullscreen() }} aria-label="Fullscreen">⤢</button>
            <button className="mute" onClick={(e) => { e.stopPropagation(); toggleMute() }} aria-pressed={!muted} aria-label="Toggle sound">{muted ? '🔈' : '🔊'}</button>
            <div className="volume-slider" onClick={(e) => e.stopPropagation()}>
              <input aria-label="Volume" type="range" min={0} max={1} step={0.01} value={volume} onChange={(ev) => handleVolume(Number((ev.target as HTMLInputElement).value))} />
            </div>
            <div className="channel-display">{channel}</div>
          </div>
        </div>
        <div className="tv-controls">
          <div className="knob volume-knob" style={{ transform: `rotate(${(volume - 0.5) * 40}deg)` }} aria-hidden />
          <div className="knob channel-knob" style={{ transform: `rotate(${(channel - 6) * 30}deg)` }} onClick={() => changeChannel(1)} aria-label="Next channel" />
          <div className="knob small" aria-hidden />
        </div>
        <div className="power-led" style={{ backgroundColor: isOn ? '#ff0000' : '#333' }} aria-hidden />
      </div>
      <div className="antenna left" />
      <div className="antenna right" />
      <div className="back-panel">
        <div className="circuit-board" aria-hidden />
        <div className="wires" aria-hidden />
        <div className="components" aria-hidden />
      </div>
    </div>
  )
}
