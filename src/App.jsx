"use client"

import { useState, useEffect, useRef } from "react"

import heroBg from "./assets/Background Images/Hero_Bg.png"
import profilePic from "./assets/Picture.png"

// Skill Icons - Frontend
import reactIcon from "./assets/skills/react.png"
import jsIcon from "./assets/skills/javascript.png"
import html5Icon from "./assets/skills/html5.png"
import css3Icon from "./assets/skills/css3.png"
import tailwindIcon from "./assets/skills/tailwind.png"
import viteIcon from "./assets/skills/vite.png"

// Skill Icons - Tools
import gitIcon from "./assets/skills/git.png"
import firebaseIcon from "./assets/skills/firebase.png"
import figmaIcon from "./assets/skills/figma.png"
import vscodeIcon from "./assets/skills/vscode.png"
import canvaIcon from "./assets/skills/canva.png"



import logoLight from "./assets/Logo_Light.png" // Your white/light logo
import logoDark from "./assets/Logo_Dark.png" // Your dark logo

import skillPicLight from "./assets/Background Images/white_picture.png"
import skillPicDark from "./assets/Background Images/dark_picture.png"

import ProjectModal from "../src/components/ProjectModal"

// Project Images
import uswThumb from "./assets/projects/USW-1.png"
import usw1 from "./assets/projects/USW-2.png"
import usw2 from "./assets/projects/USW-3.png"
import usw3 from "./assets/projects/USW-4.png"

import yssThumb from "./assets/projects/YSS-1.png"
import yss1 from "./assets/projects/YSS-2.png"
import yss2 from "./assets/projects/YSS-3.png"
import yss3 from "./assets/projects/YSS-4.png"


import cert1 from "./assets/certificates/cert1.png"
import cert2 from "./assets/certificates/cert2.png"
import cert3 from "./assets/certificates/cert3.png"
import cert4 from "./assets/certificates/cert4.png"
import cert5 from "./assets/certificates/cert5.png"
import cert6 from "./assets/certificates/cert6.png"



// Skill Icons - using placeholder colors
const SkillIcon = ({ src, name }) => (
  <div className="w-8 h-8 flex items-center justify-center transition-transform group-hover:scale-110">
    <img
      src={src || "/placeholder.svg"}
      alt={`${name} icon`}
      className="w-full h-full object-contain"
      // This handles cases where the image might be missing
      onError={(e) => {
        e.target.src = "https://via.placeholder.com/32"
      }}
    />
  </div>
)

// Custom SVG Icons
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
)

const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
)

const SunIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
)

const MoonIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
)

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
)

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
)

const ExternalLinkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
)

const ChevronDownIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
)

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const observerRefs = useRef({})
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (project) => {
  setSelectedProject(project)
  setIsModalOpen(true)
  document.body.style.overflow = 'hidden' // Prevent background scroll
}

const closeModal = () => {
  setIsModalOpen(false)
  setSelectedProject(null)
  document.body.style.overflow = 'unset'
}

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = ["home", "about", "skills", "projects", "certificates", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (current) setActiveSection(current)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const options = {
      threshold: 0.15,
      rootMargin: "0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        } else {
          entry.target.classList.remove("animate-in")
        }
      })
    }, options)

    const sections = document.querySelectorAll(".animate-on-scroll")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const theme = {
    bg: isDarkMode ? "bg-[#0F1115]" : "bg-[#F5F5F0]",
    bgAlt: isDarkMode ? "bg-[#161A22]" : "bg-[#E8E6DD]",
    text: isDarkMode ? "text-[#E6E8EB]" : "text-[#1A1A1A]",
    textMuted: isDarkMode ? "text-[#A1A6B0]" : "text-[#5A5A5A]",
    border: isDarkMode ? "border-[#A1A6B0]/10" : "border-[#1A1A1A]/10",
    borderHover: isDarkMode ? "border-[#E6E8EB]/30" : "border-[#1A1A1A]/30",
    card: isDarkMode ? "bg-[#0F1115]" : "bg-white",
    overlay: isDarkMode ? "bg-[#0F1115]/60" : "bg-[#F5F5F0]/80",
    btnPrimary: isDarkMode ? "bg-[#E6E8EB] text-[#0F1115] hover:bg-white" : "bg-[#1A1A1A] text-white hover:bg-black",
    btnSecondary: isDarkMode
      ? "border-[#E6E8EB] text-[#E6E8EB] hover:bg-[#E6E8EB] hover:text-[#0F1115]"
      : "border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white",
  }

  const skills = {
    frontend: [
      { name: "React", icon: reactIcon },
      { name: "JavaScript", icon: jsIcon },
      { name: "HTML5", icon: html5Icon },
      { name: "CSS3", icon: css3Icon },
      { name: "Tailwind CSS", icon: tailwindIcon },
      { name: "Vite", icon: viteIcon },
    ],
    tools: [
      { name: "Git", icon: gitIcon },
      { name: "Firebase", icon: firebaseIcon },
      { name: "Figma", icon: figmaIcon },
      { name: "VS Code", icon: vscodeIcon },
      { name: "Canva", icon: canvaIcon },
    ],
  }

  const projects = [
    {
      name: "Upcycled Streetwear",
      description:
        "Developed a mobile and web e-commerce platform for a thrift shop with automated order claiming, inventory tracking, sales analytics, and a bidding system to enhance efficiency and engagement.",
      role: "Front End Developer & UI Designer",
      tech: ["React Native", "Firebase", "Tailwind CSS"],
      demo: "https://drive.google.com/file/d/15AZLNAPpMWu4JoZDKAQZtZt-bFmlUN9Y/view?usp=sharing",
      code: "https://github.com/LudiveseCristian/final_USW.git",
      thumbnail: uswThumb, 
      images: [usw1, usw2, usw3],
      features: [
        "Minimalist faith-based product showcase",
        "Admin order management dashboard",
        "Firebase backend integration",
        "Clean and adaptive design",
        "To check the code in just get the humanata branch"
      ]
    },
    {
      name: "Young Soul Seekers (YSS)",
      description: "Designed and developed a minimalist website for a Christian clothing brand, enabling product browsing and order management through an admin dashboard without online payment integration..",
      role: "Full Stack Developer",
      tech: ["React", "JavaScript", "Vite", "CSS3", "Firebase"],
      demo: "#",
      code: "https://github.com/gregbaringgotot/YSS.git",
      thumbnail: yssThumb, 
      images: [yss1, yss2, yss3],
      features: [
        "Clean, minimalist product showcase",
        "Admin dashboard for order management",
        "Firebase backend integration",
        "Responsive design"
      ]
    },
  ]

const certificates = [
  {
    title: "Java Programming",
    issuer: "Great Learning Certificate",
    date: "March 2024",
    description: "Java fundamentals and basic OOP",
    image: cert1
  },
  {
    title: "Routing and Switching",
    issuer: "Rujie RCNA Certificate",
    date: "October 2025",
    description: "Network routing and switching basics",
    image: cert2
  },
  {
    title: "Fiber Optic Training",
    issuer: "Premuim Line Certificate",
    date: "August 2025",
    description: "Fiber installation and maintenance",
    image: cert3
  },
  {
    title: "Introduction to Graphic Design; Basic UI/UX",
    issuer: "SimpliLearn Certificate",
    date: "Febuary 2024",
    description: "Visual design and UI/UX principles",
    image: cert4
  },
  {
    title: "Introduction to HTML",
    issuer: "SimpliLearn Certificate",
    date: "Febuary 2024",
    description: "HTML structure and web basics",
    image: cert5
  },
  {
    title: "Information Security Associate",
    issuer: "Premuim Line Certificate",
    date: "August 2025",
    description: "Cybersecurity fundamentals and best practices",
    image: cert6
  },
];


  return (
    <div className={`${theme.bg} ${theme.text} min-h-screen transition-colors duration-300`}>
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? `${theme.bg} backdrop-blur-sm shadow-lg ${isDarkMode ? "shadow-black/20" : "shadow-black/5"}` : "bg-transparent"}`}
      >
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <button
            onClick={() => scrollToSection("home")}
            className="hover:scale-110 transition-transform duration-300 cursor-pointer"
          >
            <img
              src={isDarkMode ? logoLight : logoDark}
              alt="Logo"
              className="h-8 w-auto" // Adjust height as needed
            />
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 items-center">
            {["Home", "About", "Skills", "Projects", "Certificates", "Contact"].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`${isDarkMode ? "hover:text-white" : "hover:text-black"} transition-colors cursor-pointer ${
                    activeSection === item.toLowerCase()
                      ? `${isDarkMode ? "text-white" : "text-black"} font-semibold`
                      : theme.textMuted
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${theme.card} ${theme.border} border hover:scale-110 transition-transform duration-300`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? <SunIcon /> : <MoonIcon />}
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${theme.card} ${theme.border} border`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${theme.text} ${isDarkMode ? "hover:text-white" : "hover:text-black"} transition-colors cursor-pointer`}
            >
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden ${theme.bgAlt} ${theme.border} border-t animate-fadeIn`}>
            <ul className="px-6 py-4 space-y-4">
              {["Home", "About", "Skills", "Projects", "Certificates", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`block w-full text-left ${theme.textMuted} ${isDarkMode ? "hover:text-white" : "hover:text-black"} transition-colors cursor-pointer`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg || "/placeholder.svg"}
            alt="Background"
            className="w-full h-full object-cover animate-slowZoom"
          />
          <div className={`absolute inset-0 ${theme.overlay}`}></div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1
            className={`text-5xl md:text-7xl font-normal mb-1 ${isDarkMode ? "text-white" : "text-[#1A1A1A]"} animate-fadeInUp py-12`}
          >
            Greg Baring Gotot
          </h1>
          <p
            className={`text-xl md:text-2xl mb-8 ${theme.textMuted} animate-fadeInUp`}
            style={{ animationDelay: "0.2s" }}
          >
            Web Developer • Web Designer • Graphic Designer • Video Editor
          </p>
          <p
            className={`text-2xl md:text-3xl font-light mb-4 max-w-3xl mx-auto ${theme.text} animate-fadeInUp`}
            style={{ animationDelay: "0.4s" }}
          >
            I create clean, purposeful digital experiences that combine design, development, and storytelling.
          </p>
          <p
            className={`text-lg ${theme.textMuted} mb-12 max-w-2xl mx-auto animate-fadeInUp`}
            style={{ animationDelay: "0.6s" }}
          >
            I focus on building modern websites, visual designs, and video content that are not only visually appealing,
            but also easy to use and meaningful for real users.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp"
            style={{ animationDelay: "0.8s" }}
          >
            <a
              href="src\assets\Greg_Gotot_CV.pdf.pdf"
              download="Greg_Gotot_CV.pdf"
              className={`px-8 py-3 ${theme.btnPrimary} font-semibold hover:scale-105 transition-all duration-300 cursor-pointer flex items-center justify-center`}
            >
              Download CV
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className={`px-8 py-3 border-2 ${theme.btnSecondary} hover:scale-105 transition-all duration-300 cursor-pointer`}
            >
              Contact Me
            </button>
          </div>
          <button
            onClick={() => scrollToSection("about")}
            className={`mt-16 inline-block animate-bounce ${theme.textMuted} ${isDarkMode ? "hover:text-white" : "hover:text-black"} transition-colors cursor-pointer`}
          >
            <ChevronDownIcon />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`min-h-screen flex items-center px-6 py-20 ${theme.bgAlt}`}>
        <div className="max-w-6xl mx-auto w-full animate-on-scroll opacity-0">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-12 ${isDarkMode ? "text-white" : "text-[#1A1A1A]"} text-center`}
          >
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Picture */}
            <div className="flex justify-center">
              <div className="relative group">
                <div
                  className={`w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden border-4 ${theme.border} ${theme.borderHover} transition-all duration-500 group-hover:scale-105`}
                >
                  <img src={profilePic || "/placeholder.svg"} alt="Greg Gotot" className="w-full h-full object-cover" />
                </div>
                <div
                  className={`absolute -inset-4 ${isDarkMode ? "bg-gradient-to-br from-[#E6E8EB]/5 to-transparent" : "bg-gradient-to-br from-[#1A1A1A]/5 to-transparent"} rounded-lg -z-10 ${isDarkMode ? "group-hover:from-[#E6E8EB]/10" : "group-hover:from-[#1A1A1A]/10"} transition-all duration-500`}
                ></div>
              </div>
            </div>

            {/* About Text */}
            <div className={`space-y-6 text-lg md:text-xl leading-relaxed ${theme.textMuted}`}>
              <p
                className={`${isDarkMode ? "hover:text-[#E6E8EB]" : "hover:text-[#1A1A1A]"} transition-colors duration-300`}
              >
                I'm a frontend developer with a strong passion for creating interfaces that feel simple to use, even
                when the system behind them is complex.
              </p>
              <p
                className={`${isDarkMode ? "hover:text-[#E6E8EB]" : "hover:text-[#1A1A1A]"} transition-colors duration-300`}
              >
                My background spans web development, UI design, graphic design, and video editing. I've worked on
                academic projects including barangay management systems, student portals, and community-focused
                applications that solve real-world problems.
              </p>
              <p
                className={`${isDarkMode ? "hover:text-[#E6E8EB]" : "hover:text-[#1A1A1A]"} transition-colors duration-300`}
              >
                I believe great design isn't just about aesthetics — it's about clarity, purpose, and helping users
                achieve their goals effortlessly.
              </p>
              <p className={`${theme.text} font-semibold`}>
                I'm currently open to internships and junior developer roles where I can continue learning and
                contribute to meaningful projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-7xl mx-auto w-full animate-on-scroll opacity-0">
          {/* Three Column Layout: Frontend Icons | Image | Tools Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-20">
            {/* Frontend Icons - Left Column */}
            <div className="space-y-6 flex flex-col items-center md:items-start">
              <h3 className={`text-lg font-bold ${theme.text}`}>Frontend Skills</h3>
              <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                {skills.frontend.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center gap-3 group">
                    <div className="w-14 h-14 flex items-center justify-center transition-transform group-hover:scale-110">
                      <img
                        src={skill.icon || "/placeholder.svg"}
                        alt={`${skill.name} icon`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/56"
                        }}
                      />
                    </div>
                    <span className={`text-xs text-center ${theme.textMuted}`}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Center Image with Text Overlay */}
            <div className="relative h-96 md:h-[550px] flex items-center justify-center">
              <img
                src={isDarkMode ? skillPicLight : skillPicDark}
                alt="Greg Gotot"
                className="w-full h-full object-cover rounded-lg"
              />
              <div
                className={`absolute inset-0 ${isDarkMode ? "bg-gradient-to-b from-transparent via-transparent to-[#0F1115]" : "bg-gradient-to-b from-transparent via-transparent to-[#F5F5F0]"} rounded-lg`}
              ></div>

            </div>

            {/* Tools Icons - Right Column */}
            <div className="space-y-6 flex flex-col items-center md:items-end">
              <h3 className={`text-lg font-bold ${theme.text}`}>Tool Skills</h3>
              <div className="flex flex-wrap gap-6 justify-center md:justify-end">
                {skills.tools.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center gap-3 group">
                    <div className="w-14 h-14 flex items-center justify-center transition-transform group-hover:scale-110">
                      <img
                        src={skill.icon || "/placeholder.svg"}
                        alt={`${skill.name} icon`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/56"
                        }}
                      />
                    </div>
                    <span className={`text-xs text-center ${theme.textMuted}`}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`min-h-screen flex items-center px-6 py-20 ${theme.bgAlt}`}>
        <div className="max-w-6xl mx-auto w-full animate-on-scroll opacity-0">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-12 ${isDarkMode ? "text-white" : "text-[#1A1A1A]"} text-center`}
          >
            Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`${theme.card} rounded-xl overflow-hidden border ${theme.border} hover:${theme.borderHover} hover:shadow-2xl transition-all duration-500 group`}
              >
                {/* Project Image */}
                <div 
                  className="relative aspect-video overflow-hidden cursor-pointer"
                  onClick={() => openModal(project)}
                >
                  <img
                    src={project.thumbnail}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                      View Details
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className={`text-2xl font-bold mb-3 ${isDarkMode ? "text-white" : "text-[#1A1A1A]"}`}>
                    {project.name}
                  </h3>
                  <p className={`mb-4 ${theme.textMuted} line-clamp-2`}>
                    {project.description}
                  </p>
                  <p className={`text-sm mb-4 ${theme.textMuted}`}>
                    <span className={`font-semibold ${theme.text}`}>Role:</span> {project.role}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs border ${theme.border} ${theme.textMuted} px-2 py-1 rounded transition-all duration-300`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => openModal(project)}
                    className={`w-full px-6 py-3 border-2 ${theme.btnSecondary} font-semibold rounded-lg transition-all hover:scale-105`}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
        <section id="certificates" className="min-h-screen flex items-center px-6 py-20">
          <div className="max-w-7xl mx-auto w-full animate-on-scroll opacity-0">
            <h2 className={`text-4xl md:text-5xl font-bold mb-12 ${isDarkMode ? "text-white" : "text-[#1A1A1A]"} text-center`}>
              Certificates
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className={`${theme.card} rounded-xl overflow-hidden border ${theme.border} hover:${theme.borderHover} hover:shadow-2xl transition-all duration-500 group`}
                >
                  {/* Certificate Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Certificate Content */}
                  <div className="p-6">
                    <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-[#1A1A1A]"}`}>
                      {cert.title}
                    </h3>
                    <p className={`text-sm font-semibold mb-2 ${theme.text}`}>
                      {cert.issuer}
                    </p>
                    <p className={`text-xs ${theme.textMuted} mb-3`}>
                      {cert.date}
                    </p>
                    <p className={`text-sm ${theme.textMuted}`}>
                      {cert.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* Contact Section */}
      <section id="contact" className={`min-h-screen flex items-center px-6 py-20 ${theme.bgAlt}`}>
        <div className="max-w-4xl mx-auto w-full text-center animate-on-scroll opacity-0">
          <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${isDarkMode ? "text-white" : "text-[#1A1A1A]"}`}>
            Let's Connect
          </h2>
          <p className={`text-xl mb-12 ${theme.textMuted}`}>Open to internships and junior developer roles.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a
              href="https://mail.google.com/mail/?view=cm&to=gregbaringgotot@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 px-6 py-3 border-2 ${theme.btnSecondary} hover:scale-105 transition-all duration-300 cursor-pointer`}
            >
              <MailIcon />
              <span>Email Me</span>
            </a>
            <a
              href="https://github.com/gregbaringgotot"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 px-6 py-3 border-2 ${theme.btnSecondary} hover:scale-105 transition-all duration-300 cursor-pointer`}
            >
              <GithubIcon />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/greg-baring-gotot-bb345733a/"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 px-6 py-3 border-2 ${theme.btnSecondary} hover:scale-105 transition-all duration-300 cursor-pointer`}
            >
              <LinkedinIcon />
              <span>LinkedIn</span>
            </a>
          </div>
          <p className={`text-sm ${theme.textMuted}`}>© 2026 Greg Baring Gotot. Built with React & Tailwind CSS.</p>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
        isDarkMode={isDarkMode}
      />

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slowZoom {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .animate-slowZoom {
          animation: slowZoom 20s ease-in-out infinite;
        }

        .animate-on-scroll {
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .animate-on-scroll.animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .animate-on-scroll:not(.animate-in) {
          opacity: 0;
          transform: translateY(40px);
        }
      `}</style>
    </div>
  )
}
