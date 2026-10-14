import { useEffect, useState } from 'react'
import './SiteIntro.css'

export default function SiteIntro({ reveal, onLettersDone, onDone }) {
  const [phase, setPhase] = useState('enter')

  useEffect(() => {
    const previousOverflow = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
    return () => { document.documentElement.style.overflow = previousOverflow }
  }, [])

  useEffect(() => {
    const timer = window.setTimeout(onLettersDone, 1000)
    return () => window.clearTimeout(timer)
  }, [onLettersDone])

  useEffect(() => {
    if (!reveal) return
    const timer = window.setTimeout(() => setPhase('exit'), 180)
    return () => window.clearTimeout(timer)
  }, [reveal])

  useEffect(() => {
    if (phase !== 'exit') return
    const timer = window.setTimeout(onDone, 850)
    return () => window.clearTimeout(timer)
  }, [phase, onDone])

  return <div className={`site-intro site-intro--${phase}`} aria-label="GBG portfolio introduction">
    <p className="site-intro__mark" aria-label="GBG"><span aria-hidden="true">G</span><span aria-hidden="true">B</span><span aria-hidden="true">G</span></p>
  </div>
}
