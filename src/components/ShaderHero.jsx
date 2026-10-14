import { useEffect, useState } from 'react'

export default function ShaderHero() {
  const [components, setComponents] = useState(null)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const isWindows = /Win/i.test(navigator.userAgentData?.platform || navigator.platform || navigator.userAgent)
    let active = true
    if (!reducedMotion.matches && !isWindows && navigator.gpu) {
      navigator.gpu.requestAdapter().then(async adapter => {
        if (active && adapter) {
          const shaderComponents = await import('shaders/react')
          if (active) setComponents(shaderComponents)
        }
      }).catch(() => {})
    }
    return () => { active = false }
  }, [])

  const Shader = components?.Shader
  const LensFlare = components?.LensFlare
  return <div className="hero-art" aria-hidden="true">
    <div className="hero-art-fallback" />
    {Shader && LensFlare && <Shader className="hero-shader">
      <LensFlare intensity={0.5} />
    </Shader>}
  </div>
}
