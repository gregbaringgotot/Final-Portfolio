import { useEffect, useRef, useState } from 'react'
import './ScrollFloat.css'

export default function ScrollFloat({ children, animationDuration = 1, stagger = 0.03 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const text = String(children)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      const frame = requestAnimationFrame(() => setVisible(true))
      return () => cancelAnimationFrame(frame)
    }
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting)
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return <span ref={ref} className={`scroll-float${visible ? ' is-visible' : ''}`} aria-label={text} style={{ '--float-duration': `${animationDuration}s` }}>
    {Array.from(text).map((character, index) => <span className="scroll-float__char" aria-hidden="true" key={index} style={{ '--float-delay': `${index * stagger}s` }}>{character === ' ' ? '\u00a0' : character}</span>)}
  </span>
}
