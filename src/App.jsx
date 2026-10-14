import { useCallback, useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, Menu, Moon, Sun, X } from './components/Icons'
import ShaderHero from './components/ShaderHero'
import ClickSpark from './components/ClickSpark'
import LogoLoop from './components/LogoLoop/LogoLoop'
import HalftoneReveal from './components/HalftoneReveal/HalftoneReveal'
import FoldText from './components/FoldText'
import ScrollFloat from './components/ScrollFloat'
import HoloCard from './components/HoloCard'
import FolderFloat from './components/FolderFloat'
import FlexCarousel from './components/FlexCarousel'
import SiteIntro from './components/SiteIntro'
import { SiReact, SiJavascript, SiHtml5, SiCss, SiTailwindcss, SiVite, SiFirebase, SiFigma, SiGit } from 'react-icons/si'
import ProjectModal from './components/ProjectModal'
import portrait from './assets/Confident Studio Headshot.png'
import heroPortrait from './assets/Background Images/dark_picture.png'
import cv from './assets/Greg_Gotot_CV.pdf.pdf'
import uswThumb from './assets/projects/USW-1.png'
import usw1 from './assets/projects/USW-2.png'
import usw2 from './assets/projects/USW-3.png'
import usw3 from './assets/projects/USW-4.png'
import yssThumb from './assets/projects/YSS-1.png'
import yss1 from './assets/projects/YSS-2.png'
import yss2 from './assets/projects/YSS-3.png'
import yss3 from './assets/projects/YSS-4.png'
import cert1 from './assets/certificates/cert1.png'
import cert2 from './assets/certificates/cert2.png'
import cert3 from './assets/certificates/cert3.png'
import cert4 from './assets/certificates/cert4.png'
import cert5 from './assets/certificates/cert5.png'
import cert6 from './assets/certificates/cert6.png'

const projects = [
  { name: 'Upcycled Streetwear', description: 'Developed a mobile and web e-commerce platform for a thrift shop with automated order claiming, inventory tracking, sales analytics, and a bidding system to enhance efficiency and engagement.', role: 'Front End Developer & UI Designer', tech: ['React Native','Firebase','Tailwind CSS'], demo: 'https://drive.google.com/file/d/15AZLNAPpMWu4JoZDKAQZtZt-bFmlUN9Y/view?usp=sharing', code: 'https://github.com/LudiveseCristian/final_USW.git', thumbnail: uswThumb, images: [usw1,usw2,usw3], features: ['Minimalist faith-based product showcase','Admin order management dashboard','Firebase backend integration','Clean and adaptive design','To check the code in just get the humanata branch'] },
  { name: 'Young Soul Seekers (YSS)', description: 'Designed and developed a minimalist website for a Christian clothing brand, enabling product browsing and order management through an admin dashboard without online payment integration.', role: 'Full Stack Developer', tech: ['React','JavaScript','Vite','CSS3','Firebase'], code: 'https://github.com/gregbaringgotot/YSS.git', thumbnail: yssThumb, images: [yss1,yss2,yss3], features: ['Clean, minimalist product showcase','Admin dashboard for order management','Firebase backend integration','Responsive design'] },
]
const certificates = [
  {title:'Java Programming',issuer:'Great Learning Certificate',date:'March 2024',description:'Java fundamentals and basic OOP',image:cert1},
  {title:'Routing and Switching',issuer:'Rujie RCNA Certificate',date:'October 2025',description:'Network routing and switching basics',image:cert2},
  {title:'Fiber Optic Training',issuer:'Premuim Line Certificate',date:'August 2025',description:'Fiber installation and maintenance',image:cert3},
  {title:'Introduction to Graphic Design; Basic UI/UX',issuer:'SimpliLearn Certificate',date:'Febuary 2024',description:'Visual design and UI/UX principles',image:cert4},
  {title:'Introduction to HTML',issuer:'SimpliLearn Certificate',date:'Febuary 2024',description:'HTML structure and web basics',image:cert5},
  {title:'Information Security Associate',issuer:'Premuim Line Certificate',date:'August 2025',description:'Cybersecurity fundamentals and best practices',image:cert6},
]
const skillGroups = [
  { title:'Front-End Development', items:['React','JavaScript','HTML5','CSS3','Tailwind CSS','Vite'] },
  { title:'Programming Languages', items:['Python','Java'] },
  { title:'UI / UX Design', items:['Interface design','Responsive design','Graphic design'] },
  { title:'Tools & Platforms', items:['Figma','Git','VS Code','Canva','Firebase'] },
  { title:'Other Creative Work', items:['Video editing','Visual storytelling'] },
]
const techLogos = [
  { node: <SiReact />, title: 'React', href: 'https://react.dev' },
  { node: <SiJavascript />, title: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { node: <SiHtml5 />, title: 'HTML5', href: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { node: <SiCss />, title: 'CSS', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { node: <SiTailwindcss />, title: 'Tailwind CSS', href: 'https://tailwindcss.com' },
  { node: <SiVite />, title: 'Vite', href: 'https://vite.dev' },
  { node: <SiFirebase />, title: 'Firebase', href: 'https://firebase.google.com' },
  { node: <SiFigma />, title: 'Figma', href: 'https://www.figma.com' },
  { node: <SiGit />, title: 'Git', href: 'https://git-scm.com' },
]
const nav = ['About','Projects','Journey','Skills','Certificates','Contact']
const journeyDetails = [
  { title: 'Building a Unity world', subtitle: 'Game development', alt: 'Unity game project open across two screens', shape: 'portrait' },
  { title: 'Learning together', subtitle: 'Classroom milestones', alt: 'Classmates holding certificates after a learning session' },
  { title: 'People behind the progress', subtitle: 'BSIT community', alt: 'Students and mentors gathered in a classroom' },
  { title: 'Hands-on IT sessions', subtitle: 'Learning by doing', alt: 'Student group in a computer laboratory' },
  { title: 'Beyond the classroom', subtitle: 'Student community', alt: 'Students taking part in a campus activity' },
  { title: 'Git basics unlocked', subtitle: 'SWUdevs workshop', alt: 'Group photo after a Git basics workshop' },
  { title: 'Finding my people', subtitle: 'Community and collaboration', alt: 'Student developer community group photo' },
  { title: 'A shared moment', subtitle: 'Student developer community', alt: 'Students posing together at a community gathering' },
  { title: 'Code Till Dawn', subtitle: 'Teamwork under pressure', alt: 'Team working on laptops during Code Till Dawn 2026', shape: 'square' },
  { title: 'At the keyboard', subtitle: 'Code Till Dawn 2026', alt: 'Focused coding during Code Till Dawn 2026', shape: 'square' },
  { title: 'Celebrating the work', subtitle: 'Code Till Dawn 2026', alt: 'Participants holding certificates at Code Till Dawn 2026' },
  { title: 'Late-night development', subtitle: 'Writing and refining code', alt: 'Code editor open on a monitor during a late-night session', shape: 'portrait' },
  { title: 'Designing the next solution', subtitle: 'Interface work', alt: 'Recruitment interface designs open in Figma', shape: 'portrait' },
]
const journeyImages = import.meta.glob('./assets/journey_pictures/*.jpg', { eager: true, query: '?url', import: 'default' })
const journeyImagesByNumber = Object.fromEntries(Object.entries(journeyImages).map(([path, src]) => [Number(path.match(/(\d+)\.jpg$/)[1]), src]))
const journeyOrder = [10, 1, 6, 2, 3, 4, 5, 7, 8, 9, 11, 12, 13]
const gallery = journeyOrder.map(number => ({ src: journeyImagesByNumber[number], ...journeyDetails[number - 1] }))
function Reveal({children, className=''}) { return <div className={`reveal ${className}`}>{children}</div> }
function SectionLabel({number, children}) { return <div className="section-label"><span>{number} / {children}</span><span>GBG — 2026</span></div> }
function Journey() {
  const [selected, setSelected] = useState(null)
  useEffect(() => {
    if (selected === null) return
    const closeOnEscape = event => { if (event.key === 'Escape') setSelected(null) }
    document.addEventListener('keydown', closeOnEscape)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', closeOnEscape); document.body.style.overflow = previousOverflow }
  }, [selected])
  const photo = selected === null ? null : gallery[selected]
  return <section id="journey" className="section photography"><div className="container"><SectionLabel number="03">THE JOURNEY</SectionLabel><Reveal><div className="section-heading-row"><div><p className="eyebrow">BSIT / BEYOND THE SCREEN</p><h2><ScrollFloat>The journey</ScrollFloat> <em><ScrollFloat>so far.</ScrollFloat></em></h2></div><p className="section-intro">From Unity builds and late-night coding to workshops, shared milestones, and the people who made the work possible.</p></div></Reveal><div className="journey-carousel"><FlexCarousel items={gallery} preset="liquid" intro="rise" fit="natural" cardHeight={0.58} gap={12} squeeze={0.2} focusOnClick={false} onSelect={index => setSelected(index)} captions radius={0} lensWidth={0.74} lensHeight={1.18} tilt={62} roundness={1} bend={0.34} reach={0.38} curl="twist" dispersion={0.45} liquid={0} followCursor={false} autoplay={false} interval={4} captureWheel /></div></div>{photo && <div className="journey-lightbox" role="presentation" onClick={() => setSelected(null)}><div className="journey-lightbox__content" role="dialog" aria-modal="true" aria-label={photo.title} onClick={event => event.stopPropagation()}><button className="journey-lightbox__close" type="button" aria-label="Close photo" onClick={() => setSelected(null)}><X size={22} /></button><img src={photo.src} alt={photo.alt} /><div className="journey-lightbox__caption"><div><strong>{photo.title}</strong><span>{photo.subtitle}</span></div><span>{String(selected + 1).padStart(2, '0')} / {String(gallery.length).padStart(2, '0')}</span></div></div></div>}</section>
}export default function App() {
  const [showSite,setShowSite]=useState(()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [introDone,setIntroDone]=useState(()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const revealSite=useCallback(()=>setShowSite(true),[])
  const finishIntro=useCallback(()=>setIntroDone(true),[])
  const [menuOpen,setMenuOpen]=useState(false)
  const [scrolled,setScrolled]=useState(false)
  const [project,setProject]=useState(null)
  const [theme,setTheme]=useState(()=>localStorage.getItem('portfolio-theme')==='light'?'light':'dark')
  useEffect(()=>{localStorage.setItem('portfolio-theme',theme);document.documentElement.dataset.theme=theme},[theme])
  useEffect(()=>{const onScroll=()=>setScrolled(window.scrollY>30);onScroll();window.addEventListener('scroll',onScroll,{passive:true});return()=>window.removeEventListener('scroll',onScroll)},[])
  useEffect(()=>{if(!showSite)return;const nodes=document.querySelectorAll('.reveal');if (!('IntersectionObserver' in window)) {nodes.forEach(n=>n.classList.add('in-view'));return} const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in-view');io.unobserve(e.target)}}),{threshold:.08});nodes.forEach(n=>io.observe(n));return()=>io.disconnect()},[showSite])
  useEffect(()=>{document.body.style.overflow=project?'hidden':'';return()=>{document.body.style.overflow=''}},[project])
  return <>
    {!introDone && <SiteIntro reveal={showSite} onLettersDone={revealSite} onDone={finishIntro} />}
    {showSite && <ClickSpark sparkColor={theme === 'light' ? '#111' : '#fff'} shape="line" sparkCount={8} sparkSize={14} sparkRadius={30} duration={500}>
    <div className={`site-shell theme-${theme}`}>
    <header className={`site-header ${scrolled?'scrolled':''}`}><div className="nav-inner"><a className="wordmark" href="#home" onClick={()=>setMenuOpen(false)} aria-label="Greg Baring Gotot, home">GBG<span>®</span></a><nav className={menuOpen?'nav-links open':'nav-links'} aria-label="Primary navigation">{nav.map(item=><a key={item} href={`#${item.toLowerCase()}`} onClick={()=>setMenuOpen(false)}>{item}</a>)}</nav><button className="theme-toggle" type="button" onClick={()=>setTheme(theme==='dark'?'light':'dark')} aria-label={`Switch to ${theme==='dark'?'light':'dark'} mode`} title={`Switch to ${theme==='dark'?'light':'dark'} mode`}>{theme==='dark'?<Sun size={17}/>:<Moon size={17}/>}</button><a className="nav-cta" href="mailto:gregbaringgotot@gmail.com">LET'S TALK <ArrowUpRight size={15}/></a><button className="menu-toggle" onClick={()=>setMenuOpen(v=>!v)} aria-label={menuOpen?'Close menu':'Open menu'} aria-expanded={menuOpen}>{menuOpen?<X/>:<Menu/>}</button></div></header>
    <main><section id="home" className="hero">
      <ShaderHero/>
      <div className="hero-vignette"/>
      <div className="hero-content container">
        <div className="hero-overline"><span>PORTFOLIO / 2026</span></div>
        <div className="hero-main">
          <div className="hero-intro">
            <p className="hero-kicker">A practice in design, code & clarity</p>
            <h1><FoldText text="Greg Baring" splitBy="char" hinge="top" trigger="mount" duration={0.65} stagger={0.045} perspective={700} creaseShading={0.55}/><br/><FoldText text="Gotot." splitBy="char" hinge="top" trigger="mount" duration={0.65} stagger={0.045} perspective={700} creaseShading={0.55} startIndex={11}/></h1>
            <div className="hero-lower"><p>I create clean, purposeful digital experiences that combine design, development, and storytelling.</p><a href="#projects" className="circle-link" aria-label="Explore selected work"><ArrowUpRight size={28}/></a></div>
          </div>
          <div className="hero-visual">
            <div className="hero-portrait" role="img" aria-label="Greg Baring Gotot portrait with an interactive halftone reveal" style={{ '--portrait-mask': `url("${heroPortrait}")` }}>
              <img className="hero-portrait-fallback" src={heroPortrait} alt="" />
              <HalftoneReveal src={heroPortrait} mode="mono" shape="dot" cellSize={6} angle={45} inkColor="#f4f1ea" paperColor="#000000" revealRadius={160} dotScale={1} contrast={1.1} brightness={0} invert={false} roughness={0} misregistration={0} fit="contain" accentColor="#ff4f2a" softness={0.6} linger={1.2} reverse={false} wander={false} clickBurst intro />
            </div>
            <div className="hero-folder-list" aria-label="Skills folders">
              <div className="hero-folder hero-folder--development"><FolderFloat label="Web Development" sublabel="6 skills" items={['React', 'Vite', 'HTML', 'CSS', 'Python', 'Java']} /></div>
              <div className="hero-folder hero-folder--design"><FolderFloat label="Web & Graphic Design" sublabel="4 skills" items={['UI / UX', 'Figma', 'Responsive Design', 'Graphic Design']} /></div>
              <div className="hero-folder hero-folder--creative"><FolderFloat label="Video Editing" sublabel="3 skills" items={['Video Editing', 'Visual Storytelling', 'Canva']} /></div>
              <div className="hero-folder hero-folder--data"><FolderFloat label="Data Analysis" sublabel="2 skills" items={['Python', 'Data Analysis']} /></div>
            </div>
          </div>
        </div>
        <div className="hero-bottom"><a href="#about">SCROLL TO EXPLORE <ArrowDown size={17}/></a></div>
      </div>
    </section>
    <section id="about" className="section about"><div className="container"><SectionLabel number="01">THE PERSON BEHIND THE WORK</SectionLabel><div className="about-grid"><Reveal className="about-image-wrap"><HoloCard image={portrait} alt="Portrait of Greg Baring Gotot" foilColor="#e2e6ec" intensity={0.85} scale={1} edgeSparkle={0.8} frame={4} glare={0.5} tiltMax={14} hoverScale={1.04} radius={14} shadow /><span className="image-index">FIG. 01 — THE MAKER</span></Reveal><Reveal className="about-copy"><p className="eyebrow">A little about me</p><h2><ScrollFloat>Design with</ScrollFloat><br/><em><ScrollFloat>intention.</ScrollFloat></em><br/><ScrollFloat>Build with care.</ScrollFloat></h2><div className="about-body"><p>I'm a graduating Bachelor of Science in Information Technology student at Southwestern University PHINMA. I enjoy understanding people's challenges and turning them into practical digital solutions.</p><p>My work brings together web development, UI and UX design, graphic design, and video editing. I've implemented an e-commerce bidding system, an online shirt store, a game built with Unity, and ARTMS, an AI-powered recruitment system for applicants. These projects taught me to shape technology around the people who use it.</p><p>I start by listening, defining the problem, and finding a clear way forward. My goal is to help clients and teams create accessible, dependable experiences that make everyday tasks easier.</p></div><div className="about-tail"><span>Currently open to internships and junior developer roles.</span><a href={cv} download="Greg_Gotot_CV.pdf">DOWNLOAD CV <ArrowUpRight size={16}/></a></div></Reveal></div></div></section>
    <section id="projects" className="section projects"><div className="container"><SectionLabel number="02">SELECTED WORK</SectionLabel><Reveal><div className="section-heading-row"><h2><ScrollFloat>Selected</ScrollFloat> <em><ScrollFloat>projects.</ScrollFloat></em></h2><p className="section-intro">Digital products shaped by a belief that usefulness and visual clarity belong together.</p></div></Reveal><div className="project-list">{projects.map((item,i)=><Reveal className={`project-item project-${i+1}`} key={item.name}><button className="project-visual" onClick={()=>setProject(item)} aria-label={`View ${item.name} project details`}><img src={item.thumbnail} alt={`${item.name} project preview`} loading="lazy"/><span className="image-action">VIEW PROJECT <ArrowUpRight size={18}/></span></button><div className="project-info"><span className="project-number">{String(i+1).padStart(2,'0')} / 0{projects.length} — {item.role}</span><h3>{item.name}</h3><p>{item.description}</p><div className="project-footer"><div>{item.tech.map(t=><span key={t}>{t}</span>)}</div><button onClick={()=>setProject(item)} aria-label={`View details for ${item.name}`}><ArrowUpRight size={24}/></button></div></div></Reveal>)}</div></div></section>
    <Journey/>
    <section id="skills" className="section skills"><div className="container"><SectionLabel number="04">PRACTICE & CAPABILITIES</SectionLabel><Reveal><div className="section-heading-row"><h2><ScrollFloat>What I</ScrollFloat> <em><ScrollFloat>bring.</ScrollFloat></em></h2><p className="section-intro">A mix of development, design, and visual thinking applied to thoughtful digital work.</p></div></Reveal><div className="skill-list">{skillGroups.map((group,i)=><Reveal className="skill-row" key={group.title}><span className="skill-number">0{i+1}</span><h3>{group.title}</h3><p>{group.items.join(' · ')}</p></Reveal>)}</div><Reveal className="skills-loop"><div className="skills-loop-heading"><span>TOOLS & TECHNOLOGIES</span><span>THE EVERYDAY TOOLKIT / 01—09</span></div><LogoLoop logos={techLogos} speed={100} direction="left" logoHeight={58} gap={72} hoverSpeed={0} scaleOnHover fadeOut fadeOutColor={theme === 'light' ? '#f7f7f5' : '#080808'} ariaLabel="Technologies I use" /></Reveal></div></section>
    <section id="certificates" className="section certificates"><div className="container"><SectionLabel number="05">LEARNING & GROWTH</SectionLabel><Reveal><div className="section-heading-row"><h2><ScrollFloat>Continued</ScrollFloat> <em><ScrollFloat>learning.</ScrollFloat></em></h2><p className="section-intro">Courses and training that inform the work behind each project.</p></div></Reveal><div className="certificate-grid">{certificates.map((cert,i)=><Reveal className="certificate" key={cert.title}><div className="certificate-image"><img src={cert.image} alt={`${cert.title} certificate`} loading="lazy"/></div><div className="certificate-meta"><span>{String(i+1).padStart(2,'0')} / {cert.date}</span><h3>{cert.title}</h3><p>{cert.issuer} · {cert.description}</p></div></Reveal>)}</div></div></section>
    <section id="contact" className="section contact"><div className="container"><SectionLabel number="06">GET IN TOUCH</SectionLabel><Reveal><p className="eyebrow">Have a project or opportunity in mind?</p><h2><ScrollFloat>Let's make</ScrollFloat><br/><em><ScrollFloat>something</ScrollFloat></em> <ScrollFloat>meaningful.</ScrollFloat></h2><div className="contact-row"><a className="contact-email" href="mailto:gregbaringgotot@gmail.com">gregbaringgotot@gmail.com <ArrowUpRight size={27}/></a><p>Open to internships and junior developer roles.<br/>Let's talk about what we can create together.</p></div></Reveal><footer><span>© {new Date().getFullYear()} GREG BARING GOTOT</span><div><a href="https://github.com/gregbaringgotot" target="_blank" rel="noopener noreferrer">GITHUB <ArrowUpRight size={13}/></a><a href="https://www.linkedin.com/in/greg-baring-gotot-bb345733a/" target="_blank" rel="noopener noreferrer">LINKEDIN <ArrowUpRight size={13}/></a><a href="#home">BACK TO TOP ?</a></div><span>DESIGNED & BUILT WITH PURPOSE</span></footer></div></section></main>
    <ProjectModal project={project} isOpen={!!project} onClose={()=>setProject(null)}/>
    </div>
  </ClickSpark>}
  </>
}
