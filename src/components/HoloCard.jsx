import { useRef } from 'react'
import './HoloCard.css'

export default function HoloCard({ image, alt, foilColor = '#e2e6ec', intensity = 0.85, scale = 1, edgeSparkle = 0.8, frame = 4, glare = 0.5, tiltMax = 14, hoverScale = 1.04, radius = 14, shadow = true }) {
  const cardRef = useRef(null)

  const reset = () => {
    const card = cardRef.current
    if (!card) return
    card.style.setProperty('--tilt-x', '0deg')
    card.style.setProperty('--tilt-y', '0deg')
    card.style.setProperty('--pointer-x', '50%')
    card.style.setProperty('--pointer-y', '50%')
    card.classList.remove('is-active')
  }

  const move = event => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const card = cardRef.current
    if (!card) return
    const bounds = card.getBoundingClientRect()
    const x = Math.min(1, Math.max(0, (event.clientX - bounds.left) / bounds.width))
    const y = Math.min(1, Math.max(0, (event.clientY - bounds.top) / bounds.height))
    card.style.setProperty('--tilt-x', `${(0.5 - y) * tiltMax * 2}deg`)
    card.style.setProperty('--tilt-y', `${(x - 0.5) * tiltMax * 2}deg`)
    card.style.setProperty('--pointer-x', `${x * 100}%`)
    card.style.setProperty('--pointer-y', `${y * 100}%`)
    card.classList.add('is-active')
  }

  return <div ref={cardRef} className={`holo-card${shadow ? ' holo-card--shadow' : ''}`} onPointerMove={move} onPointerLeave={reset} style={{ '--foil-color': foilColor, '--foil-intensity': intensity, '--edge-sparkle': edgeSparkle, '--glare': glare, '--frame': `${frame}px`, '--radius': `${radius}px`, '--card-scale': scale, '--hover-scale': hoverScale }}>
    <img src={image} alt={alt} loading="lazy" decoding="async" />
    <span className="holo-card__foil" aria-hidden="true" />
    <span className="holo-card__glare" aria-hidden="true" />
  </div>
}
