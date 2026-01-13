import { useState, useEffect } from 'react'

// ProjectModal Component
const ProjectModal = ({ project, isOpen, onClose, isDarkMode }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen || !project) return null

  const theme = {
    bg: isDarkMode ? "bg-[#0F1115]" : "bg-white",
    text: isDarkMode ? "text-[#E6E8EB]" : "text-[#1A1A1A]",
    textMuted: isDarkMode ? "text-[#A1A6B0]" : "text-[#5A5A5A]",
    border: isDarkMode ? "border-[#A1A6B0]/10" : "border-[#1A1A1A]/10",
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    )
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{ 
        backgroundColor: isDarkMode ? 'rgba(15, 17, 21, 0.95)' : 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(8px)'
      }}
      onClick={onClose}
    >
      <div
        className={`${theme.bg} rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 ${theme.text} hover:scale-110 transition-transform p-2 rounded-full ${theme.bg} cursor-pointer`}
          aria-label="Close modal"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8">
          {/* Left Side - Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-900">
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.name} screenshot ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Strip */}
            {project.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {project.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      idx === currentImageIndex
                        ? 'border-white scale-105'
                        : `${theme.border} opacity-60 hover:opacity-100`
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Side - Project Details */}
          <div className="space-y-6">
            <div>
              <h2 className={`text-3xl md:text-4xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                {project.name}
              </h2>
              <p className={`text-sm ${theme.textMuted}`}>{project.role}</p>
            </div>

            <div>
              <h3 className={`text-lg font-semibold mb-2 ${theme.text}`}>About</h3>
              <p className={`${theme.textMuted} leading-relaxed`}>
                {project.longDescription || project.description}
              </p>
            </div>

            {project.features && project.features.length > 0 && (
              <div>
                <h3 className={`text-lg font-semibold mb-2 ${theme.text}`}>Key Features</h3>
                <ul className={`space-y-2 ${theme.textMuted}`}>
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h3 className={`text-lg font-semibold mb-3 ${theme.text}`}>Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 rounded-full text-sm border ${theme.border} ${theme.textMuted}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              {project.demo && project.demo !== '#' && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 px-6 py-3 text-center ${
                    isDarkMode 
                      ? 'bg-[#E6E8EB] text-[#0F1115] hover:bg-white' 
                      : 'bg-[#1A1A1A] text-white hover:bg-black'
                  } font-semibold rounded-lg transition-all hover:scale-105`}
                >
                  Click here to show the project
                </a>
              )}
              {project.code && project.code !== '#' && (
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 px-6 py-3 text-center border-2 ${
                    isDarkMode
                      ? 'border-[#E6E8EB] text-[#E6E8EB] hover:bg-[#E6E8EB] hover:text-[#0F1115]'
                      : 'border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white'
                  } font-semibold rounded-lg transition-all hover:scale-105`}
                >
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal