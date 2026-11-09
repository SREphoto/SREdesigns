import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import Lenis from 'lenis';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Gamepad2,
  Brain,
  Terminal,
  Layout,
  Music,
  Database,
  Wrench,
  Video,
  Menu,
  X,
  Search,
  ArrowUpRight,
  ChevronDown,
  Globe,
  Lock,
  Layers,
  Sparkles,
  Microscope,
  Atom
} from 'lucide-react';
import './App.css';
import Blog from './components/Blog';
import { projects } from './data/repos';
import { midjourneyArt } from './data/midjourney';

// --- EDGE-TO-EDGE ARCHITECTURAL STUDIO MASTHEAD ---
const ArchitecturalHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeString, setTimeString] = useState('');

  // Live Dallas, TX (CST) Studio Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'America/Chicago',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTimeString(now.toLocaleTimeString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll listener for border activation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Capabilities', href: '#services' },
    { label: 'Videos', href: '#videos' },
    { label: 'Art', href: '#art' },
    { label: 'Notes', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08090c]/92 backdrop-blur-xl border-b border-white/[0.08] py-4 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Left: Studio Identity & Live CST Status */}
        <div className="flex items-center gap-8">
          <a href="#" className="group flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-widest">[SRE // 2026]</span>
              <span className="font-editorial text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-zinc-200 transition-colors">
                SAMUEL ERWIN
              </span>
            </div>
            <span className="font-mono text-[10px] tracking-widest uppercase text-zinc-500">
              Creative Engineering / Dallas Studio
            </span>
          </a>

          {/* Studio Local Time & Availability (Siteinspire Inspired) */}
          <div className="hidden lg:flex items-center gap-3 pl-8 border-l border-white/10 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-zinc-300">Dallas, TX</span>
            </div>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400 tabular-nums">{timeString || '12:00:00 PM'} CST</span>
            <span className="text-zinc-600">•</span>
            <span className="text-emerald-400/90 text-[11px] uppercase tracking-wider">
              Available for Contracts
            </span>
          </div>
        </div>

        {/* Right: Editorial Links & Primary Action */}
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-7 font-heading text-xs tracking-wider uppercase font-semibold text-zinc-400">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative py-1 text-zinc-400 hover:text-white transition-colors duration-200 group"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-heading font-semibold uppercase tracking-wider bg-white text-zinc-950 hover:bg-zinc-200 transition-all shadow-md"
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={13} />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-lg text-zinc-300 hover:text-white bg-white/5 border border-white/10"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Curtain Overlay */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden px-6 py-8 bg-[#08090c]/98 border-b border-white/10 backdrop-blur-2xl"
        >
          <div className="flex flex-col gap-4 font-heading text-base font-semibold tracking-wide">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-zinc-300 hover:text-white py-2 border-b border-white/5"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3 font-mono text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Dallas, TX: {timeString} CST</span>
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 text-center py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-zinc-950"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

// --- DRIBBLE-INSPIRED PRECISION BROWSER FRAME HERO PREVIEW ---
const HeroBrowserMockup = ({ onOpenModal }) => {
  const [activeTab, setActiveTab] = useState(0);
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 18 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { stiffness: 120, damping: 18 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const baseUrl = import.meta.env.BASE_URL || '/';

  const showcases = [
    {
      id: 'twins',
      label: '🔬 18 Digital Twins Lab',
      address: 'srephoto.github.io/Twins',
      telemetry: '60 FPS · DUAL-TRUTH',
      badge: 'Procedural CAD · USP Metrology',
      badgeClass: 'bg-emerald-400/20 text-emerald-300 border-emerald-400/30',
      subtitle: '18 Instruments · 14-Zone Master Lab',
      title: 'SRE Laboratory Digital Twins',
      image: `${baseUrl}projects/digital_twins_lab.png`,
      projectData: {
        title: 'SRE Laboratory Digital Twins',
        desc: 'Fleet of 18 hyper-realistic 3D scientific instruments with procedural CAD, dual-truth metrology & hardwired circuit continuity',
        link: 'https://srephoto.github.io/Twins/',
        githubUrl: 'https://github.com/SREphoto/Twins',
      },
    },
    {
      id: 'f1',
      label: '🏎️ F1 2026 Simulator',
      address: 'formula-1-apex.web.app',
      telemetry: '60 FPS · WEBGL 3D',
      badge: 'WebGL 3D · Three.js',
      badgeClass: 'bg-lime-400/20 text-lime-300 border-lime-400/30',
      subtitle: '11 Teams · 24 Tracks',
      title: 'Formula 1 Apex Legends',
      image: `${baseUrl}projects/f1_apex_legends.jpg`,
      projectData: {
        title: 'Formula 1 Apex Legends',
        desc: '2026 FIA F1 Nimble Car 3D WebGL Simulator',
        link: 'https://formula-1-apex.web.app/',
        githubUrl: 'https://github.com/SREphoto/2026-F1-Nimble-Car',
      },
    },
  ];

  const current = showcases[activeTab];

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Switcher Tabs */}
      <div className="flex items-center justify-center gap-2 mb-3">
        {showcases.map((s, idx) => (
          <button
            key={s.id}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveTab(idx);
            }}
            className={`px-3 py-1 rounded-full text-xs font-mono transition-all cursor-pointer ${
              activeTab === idx
                ? 'bg-white text-black font-semibold shadow-md'
                : 'bg-white/5 text-zinc-400 hover:text-white border border-white/10'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full rounded-2xl overflow-hidden bg-[#0c0e14] border border-white/15 shadow-2xl shadow-black/90 cursor-pointer group"
        onClick={() => onOpenModal(current.projectData)}
      >
        {/* Browser Window Header Chrome (Dribbble Hallmark) */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#12151e] border-b border-white/[0.08] select-none">
          {/* Window Controls */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-500/30" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-500/30" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-500/30" />
          </div>

          {/* Monospace Address Bar */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-black/40 border border-white/[0.06] text-[11px] font-mono text-zinc-400 max-w-[240px] truncate">
            <Lock size={10} className="text-emerald-400 shrink-0" />
            <span className="truncate">{current.address}</span>
          </div>

          {/* Telemetry Badge */}
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{current.telemetry}</span>
          </div>
        </div>

        {/* Viewport Canvas */}
        <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
          <img
            src={current.image}
            alt={current.title}
            className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e14] via-[#0c0e14]/20 to-transparent" />

          {/* Hover Spotlight Overlay */}
          <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />

          {/* Bottom Details Bar */}
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase border ${current.badgeClass}`}>
                  {current.badge}
                </span>
                <span className="text-[10px] font-mono uppercase text-zinc-400">
                  {current.subtitle}
                </span>
              </div>
              <h3 className="font-heading text-lg font-bold text-white">
                {current.title}
              </h3>
            </div>

            <div className="flex items-center gap-1.5 font-mono text-xs text-white bg-black/70 px-3 py-1.5 rounded-full border border-white/15 group-hover:bg-emerald-400 group-hover:text-black transition-all">
              <span>Quick View</span>
              <ArrowUpRight size={13} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// --- MONUMENTAL EDITORIAL HERO (SITEINSPIRE INSPIRED) ---
const EditorialHero = ({ onOpenFeaturedModal }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[94vh] flex items-center pt-32 pb-20 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 w-full relative z-10">
        {/* Siteinspire Style Architectural Section Coordinate */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/[0.08] font-mono text-xs text-zinc-500">
          <div className="flex items-center gap-3">
            <span className="text-zinc-400">+ [LOC // 32.7767° N, 96.7970° W]</span>
            <span>•</span>
            <span>DALLAS, TEXAS</span>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <span>INDEX // 01</span>
            <span>•</span>
            <span className="text-zinc-300">89 PRODUCTION REPOSITORIES</span>
          </div>
        </div>

        <motion.div style={{ y: yText, opacity }} className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Monumental Scale Typography */}
          <div className="lg:col-span-7">
            {/* Context Subheading */}
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-400 mb-6">
              <span>Full-Stack Software Engineer</span>
              <span className="text-zinc-600">/</span>
              <span>Creative Technologist</span>
            </div>

            {/* Monumental Headline with clean scale contrast */}
            <h1 className="font-editorial text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white tracking-[-0.04em] leading-[0.88] mb-8">
              SOFTWARE <br />
              ARCHITECT <br />
              <span className="text-stroke-subtle">& DEVELOPER.</span>
            </h1>

            {/* Developer statement */}
            <p className="font-body text-base sm:text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed mb-10 font-normal">
              Engineering full-stack web platforms, browser game engines, and developer tooling in the Antigravity ecosystem. Based in Dallas, Texas with 89 repositories shipped.
            </p>

            {/* Action Group */}
            <div className="flex flex-wrap items-center gap-5">
              <a
                href="#work"
                className="btn-magnetic btn-magnetic-primary px-8 py-4 text-xs uppercase tracking-wider"
              >
                <span>Explore Selected Works</span>
                <ArrowUpRight size={14} />
              </a>

              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/SREphoto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:hello@sredesigns.com"
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Email Samuel Erwin"
                  title="Email Samuel Erwin"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {/* Micro Stats Row (Dribbble/Siteinspire Style) */}
            <div className="grid grid-cols-3 gap-6 pt-12 mt-12 border-t border-white/10 max-w-lg font-mono text-xs">
              <div>
                <span className="block text-xl sm:text-2xl font-bold font-heading text-white">89</span>
                <span className="text-zinc-500 uppercase tracking-wider">Repositories</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-bold font-heading text-white">Dallas</span>
                <span className="text-zinc-500 uppercase tracking-wider">Studio Base</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-bold font-heading text-white">100%</span>
                <span className="text-zinc-500 uppercase tracking-wider">Independent</span>
              </div>
            </div>
          </div>

          {/* Right Column: Physical Card Preview */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroBrowserMockup onOpenModal={onOpenFeaturedModal} />
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <a
        href="#ticker"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-zinc-600 hover:text-zinc-400 transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} className="animate-bounce" />
      </a>
    </section>
  );
};

// --- KINETIC PARALLAX MARQUEE TICKER ---
const KineticMarquee = () => {
  const marqueeItems = [
    'SCIENTIFIC DIGITAL TWINS',
    'PROCEDURAL 1:1 CAD',
    'DUAL-TRUTH METROLOGY',
    'PHYSICAL CIRCUIT CONTINUITY',
    'WEBGL 3D ENGINES',
    'FULL-STACK ARCHITECTURE',
    'ANTIGRAVITY TOOLING',
    'CLOUD PLATFORMS',
    'SCIENTIFIC DIGITAL TWINS',
    'PROCEDURAL 1:1 CAD',
    'DUAL-TRUTH METROLOGY',
    'PHYSICAL CIRCUIT CONTINUITY',
  ];

  return (
    <div id="ticker" className="py-6 border-y border-white/[0.08] bg-black/40 overflow-hidden select-none">
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
          className="flex items-center gap-10 font-heading text-sm md:text-base font-bold tracking-widest uppercase text-zinc-400"
        >
          {marqueeItems.map((item, idx) => (
            <React.Fragment key={idx}>
              <span className={idx % 2 === 0 ? 'text-white' : 'text-zinc-500'}>
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// --- EDITORIAL CAPABILITIES INDEX (SITEINSPIRE INSPIRED) ---
const CapabilitiesIndex = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const capabilities = [
    {
      num: '01',
      title: 'Full-Stack Web Architecture',
      subtitle: 'Client-server systems, component architecture, and responsive state flows.',
      details:
        'Architecting web applications with modular components, reactive state patterns, and clean API integration. Emphasizing clean structure, predictability, and runtime speed.',
      techStack: ['React', 'TypeScript', 'Node.js', 'Next.js', 'Vite', 'PostgreSQL', 'Tailwind CSS'],
      count: '32 Projects',
    },
    {
      num: '02',
      title: 'Digital Twins, Procedural CAD & Physics Engines',
      subtitle: '1:1 procedural CAD, dual-truth metrology, circuit continuity, and WebGL render loops.',
      details:
        'Developing 1:1 procedural CAD assemblies, empirical metrology solvers (USP <701>, Stokes settling, Nernstian electrochemistry), hardwired physical circuit continuity, and 60fps WebGL render loops.',
      techStack: ['Three.js', 'WebGL', 'Procedural CAD', 'Dual-Truth Metrology', 'Circuit Continuity', 'GLSL Shaders'],
      count: '24 Twins & Engines',
    },
    {
      num: '03',
      title: 'Developer Tooling & Cloud Automation',
      subtitle: 'Command-line utilities, Antigravity SDK workflows, and backend queues.',
      details:
        'Building workflow tools that automate engineering tasks: task sync scripts, prompt processors, Firebase pipelines, and developer environments.',
      techStack: ['Python', 'Node.js', 'Firebase', 'Antigravity SDK', 'REST APIs', 'Zsh Automation'],
      count: '33 Tools & Systems',
    },
  ];

  return (
    <section id="services" className="py-32 relative border-t border-white/[0.08]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 block mb-3">
              + [SEC_02 // FOCUS]
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
              TECHNICAL FOCUS
            </h2>
          </div>
          <p className="font-body text-zinc-400 text-sm max-w-md leading-relaxed">
            Engineering services and specialized technical areas developed across 89 public software repositories.
          </p>
        </div>

        {/* Editorial Table Rows */}
        <div className="divide-y divide-white/[0.08]">
          {capabilities.map((cap, index) => (
            <div
              key={cap.num}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`py-10 transition-all duration-300 group cursor-default ${
                hoveredIndex !== null && hoveredIndex !== index ? 'opacity-35' : 'opacity-100'
              }`}
            >
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                {/* Index Number */}
                <div className="lg:col-span-2 font-mono text-sm text-zinc-500 group-hover:text-emerald-400 transition-colors">
                  <span>{cap.num}</span>
                  <span className="ml-3 text-xs text-zinc-600 uppercase">/ {cap.count}</span>
                </div>

                {/* Title & Description */}
                <div className="lg:col-span-6">
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
                    {cap.title}
                  </h3>
                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-4">
                    {cap.details}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end">
                  {cap.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] text-zinc-300 border border-white/[0.08] group-hover:border-white/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- ASSET STRATEGY HELPER ---
const getProjectAssets = (title) => {
  const t = title.toLowerCase();
  const baseUrl = import.meta.env.BASE_URL || '/';
  const p = (path) => `${baseUrl}projects/${path}`;

  let icon = Code;
  let img = null;

  // Icon Strategy
  if (t.includes('twin') || t.includes('laboratory') || t.includes('disintegration') || t.includes('centrifuge') || t.includes('balance') || t.includes('reactor') || t.includes('spectro') || t.includes('instrument')) icon = Microscope;
  else if (t.includes('game') || t.includes('kart') || t.includes('rpg') || t.includes('zelda') || t.includes('tetris') || t.includes('outrun') || t.includes('formula') || t.includes('apex')) icon = Gamepad2;
  else if (t.includes('ai') || t.includes('gpt') || t.includes('brain') || t.includes('bot')) icon = Brain;
  else if (t.includes('tool') || t.includes('generator') || t.includes('editor') || t.includes('calc')) icon = Wrench;
  else if (t.includes('music') || t.includes('audio') || t.includes('midi') || t.includes('sound')) icon = Music;
  else if (t.includes('web') || t.includes('app') || t.includes('site') || t.includes('portfolio') || t.includes('portal') || t.includes('media')) icon = Layout;
  else if (t.includes('data') || t.includes('analysis')) icon = Database;
  else if (t.includes('dev') || t.includes('code') || t.includes('guide')) icon = Terminal;

  // Local Project Artwork Mapping
  if (t.includes('twin') && (t.includes('pr') || t.includes('media') || t.includes('campaign') || t.includes('portal') || t.includes('kit'))) img = p("digital_twins_exploded.png");
  else if (t.includes('disintegration') || t.includes('zt 322') || t.includes('zt322')) img = p("digital_twins_zt322.png");
  else if (t.includes('twin') || t.includes('laboratory') || t.includes('centrifuge') || t.includes('balance') || t.includes('reactor')) img = p("digital_twins_lab.png");
  else if (t.includes('formula') || t.includes('apex') || t.includes('nimble')) img = p("f1_apex_legends.jpg");
  else if (t.includes('chem')) img = p("chemmate.png");
  else if (t.includes('zelda') || t.includes('adventure') || t.includes('legend') || t.includes('quest') || t.includes('flirt')) img = p("zelda_clone.png");
  else if (t.includes('diablo') || t.includes('rogue') || t.includes('strike') || t.includes('battle')) img = p("diablo_js.png");
  else if (t.includes('outrun') || t.includes('topgun') || t.includes('prompter') || t.includes('neon') || t.includes('cyber') || t.includes('synth') || t.includes('retro') || t.includes('run')) img = p("outrun_game.png");
  else if (t.includes('sky') || t.includes('metro') || t.includes('city') || t.includes('aquaria') || t.includes('launch') || t.includes('deploy') || t.includes('connect')) img = p("sky_metropolis.png");
  else if (t.includes('fractal') || t.includes('music') || t.includes('video') || t.includes('lyric') || t.includes('kinetic') || t.includes('shape') || t.includes('dream') || t.includes('aura')) img = p("fractalization.png");
  else if (t.includes('super') || t.includes('tux') || t.includes('kart') || t.includes('race') || t.includes('car') || t.includes('gas') || t.includes('gauge')) img = p("supertuxkart.png");
  else if (t.includes('local') || t.includes('treasure') || t.includes('map') || t.includes('tribes') || t.includes('tribe')) img = p("localtreasures.png");
  else if (t.includes('reia') || t.includes('mmo') || t.includes('multi') || t.includes('texas') || t.includes('poker')) img = p("reia.png");
  else if (t.includes('well') || t.includes('social') || t.includes('health') || t.includes('life') || t.includes('care') || t.includes('exam') || t.includes('doc') || t.includes('intelli')) img = p("wellnest.png");
  else if (t.includes('word') || t.includes('slide') || t.includes('puzzle') || t.includes('game') || t.includes('tetris')) img = p("wordslide.png");
  else if (t.includes('story') || t.includes('write') || t.includes('punchline') || t.includes('meme') || t.includes('calendar') || t.includes('info') || t.includes('genius')) img = p("storyweaver.png");
  else if (t.includes('asset') || t.includes('studio') || t.includes('generator') || t.includes('forge') || t.includes('fashion') || t.includes('design') || t.includes('photo') || t.includes('image')) img = p("asset_studio.png");
  else if (t.includes('home') || t.includes('plan') || t.includes('arch') || t.includes('grid') || t.includes('spec')) img = p("homeplanner.png");
  else if (t.includes('sprite') || t.includes('pixel') || t.includes('gba') || t.includes('boy') || t.includes('iodine')) img = p("spriteforge.png");
  else {
    const fallbackOptions = ["fractalization.png", "sky_metropolis.png", "asset_studio.png", "wellnest.png"];
    const hash = title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const index = hash % fallbackOptions.length;
    img = p(fallbackOptions[index]);
  }

  return { icon, img };
};

// --- ARCHITECTURAL PROJECT CARD (SITEINSPIRE + DRIBBBLE HYBRID) ---
const ArchitecturalProjectCard = ({ project, onOpenDetails }) => {
  const { title, desc, link } = project;
  const { icon, img } = getProjectAssets(title);
  const isLiveApp = link && (link.includes('github.io') || link.includes('web.app') || link.includes('firebaseapp.com') || link.includes('sredesigns.com'));

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5 }}
      onClick={() => onOpenDetails({ ...project, icon, img, isLiveApp })}
      className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-[#0e1017] border border-white/[0.08] hover:border-white/30 transition-all duration-300 shadow-xl cursor-pointer"
    >
      {/* Artwork Container with Subtle Vignette */}
      <div className="relative aspect-[16/10] overflow-hidden bg-black">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-transparent to-transparent" />

        {/* Top-Right Quick View Trigger */}
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
          <span className="p-2 rounded-full bg-black/70 backdrop-blur-md text-zinc-300 hover:text-white border border-white/10 hover:border-white/30 transition-colors block">
            <ArrowUpRight size={14} />
          </span>
        </div>

        {/* Top-Left Status Badge */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
          {isLiveApp ? (
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Live Demo</span>
            </span>
          ) : (
            <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase bg-black/60 text-zinc-400 border border-white/10 backdrop-blur-md">
              <Code size={11} />
              <span>Source</span>
            </span>
          )}
        </div>
      </div>

      {/* Card Content & Metadata */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 block mb-2 truncate">
            {desc || "Software Repository"}
          </span>
          <h3 className="font-heading text-lg font-bold text-white group-hover:text-zinc-200 transition-colors line-clamp-1 mb-2">
            {title}
          </h3>
        </div>

        <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-xs text-zinc-500">
          <span className="group-hover:text-zinc-300 transition-colors flex items-center gap-1.5">
            {React.createElement(icon, { size: 13, className: "text-zinc-400" })}
            <span>Quick View</span>
          </span>
          <Github size={14} className="group-hover:text-white transition-colors" />
        </div>
      </div>
    </motion.div>
  );
};

// --- PROJECT DETAIL MODAL (SITEINSPIRE CASE STUDY MODAL) ---
const ProjectDetailModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 24, scale: 0.98, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 24, scale: 0.98, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#0e1017] border border-white/15 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl relative shadow-2xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 bg-black/60 rounded-full text-zinc-300 hover:text-white border border-white/10 hover:border-white/30 transition-colors z-20 cursor-pointer"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Media Canvas */}
        <div className="relative aspect-[16/10] w-full bg-black overflow-hidden">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-transparent to-transparent" />

          {/* Type Badge */}
          <div className="absolute top-4 left-4 z-10">
            {project.isLiveApp ? (
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Live Interactive Deployment</span>
              </span>
            ) : (
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase bg-black/70 text-zinc-300 border border-white/15 backdrop-blur-md">
                <Code size={13} />
                <span>Open Source Repository</span>
              </span>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 mb-2">
            <span>REPOSITORY</span>
            <span>•</span>
            <span>SAMUEL ERWIN / SREphoto</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3">
            {project.title}
          </h2>

          <p className="font-body text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
            {project.desc || "Interactive software repository developed within the SREdesigns engineering ecosystem."}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/[0.08]">
            {project.isLiveApp && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-magnetic btn-magnetic-primary px-6 py-3 text-xs uppercase tracking-wider font-bold"
              >
                <Globe size={14} />
                <span>Launch Live Application</span>
                <ArrowUpRight size={13} />
              </a>
            )}

            <a
              href={project.githubUrl || (project.isLiveApp ? `https://github.com/SREphoto/${project.title}` : project.link)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-magnetic btn-magnetic-secondary px-6 py-3 text-xs uppercase tracking-wider"
            >
              <Github size={14} />
              <span>View GitHub Source</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- ART LIGHTBOX MODAL ---
const ArtLightboxModal = ({ art, onClose }) => {
  if (!art) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl max-h-[90vh] flex flex-col rounded-2xl overflow-hidden bg-neutral-950 border border-white/15 shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 bg-black/60 rounded-full text-zinc-300 hover:text-white border border-white/10 hover:border-white/30 transition-colors z-20 cursor-pointer"
          aria-label="Close image lightbox"
        >
          <X size={18} />
        </button>

        <div className="relative max-h-[70vh] overflow-hidden flex items-center justify-center bg-black">
          <img
            src={art.url}
            alt={art.title}
            className="w-full h-full object-contain max-h-[70vh]"
          />
        </div>

        <div className="p-6 bg-[#0e1017] border-t border-white/10 flex items-center justify-between">
          <div>
            <h3 className="font-heading text-xl font-bold text-white mb-1">{art.title}</h3>
            <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">{art.category} • Midjourney Archive</span>
          </div>

          <a
            href="https://www.midjourney.com/@srestudios"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-magnetic btn-magnetic-primary px-5 py-2.5 text-xs uppercase tracking-wider"
          >
            <span>Midjourney Profile</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- THE WORK ARCHIVE SECTION (SITEINSPIRE DIRECTORY FORMAT) ---
const WorkArchive = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Helper for live deployments (GitHub Pages, Firebase, Custom Domains, etc.)
  const isLiveProject = (p) => p.link && (p.link.includes('github.io') || p.link.includes('web.app') || p.link.includes('firebaseapp.com') || p.link.includes('sredesigns.com'));

  // Helper for Digital Twins & 3D Engines
  const isTwinProject = (p) => {
    const t = p.title.toLowerCase();
    const d = (p.desc || '').toLowerCase();
    return t.includes('twin') || t.includes('laboratory') || t.includes('disintegration') || t.includes('centrifuge') || t.includes('balance') || t.includes('reactor') || t.includes('formula') || t.includes('apex') || t.includes('chem') || t.includes('shader') || t.includes('3d') || t.includes('cad') || d.includes('digital twin') || d.includes('webgl') || d.includes('3d');
  };

  // Compute category counts dynamically
  const liveCount = projects.filter(isLiveProject).length;
  const twinsCount = projects.filter(isTwinProject).length;

  // Filter projects by category and search
  const filteredProjects = projects.filter((project) => {
    const titleMatch = project.title.toLowerCase().includes(searchQuery.toLowerCase());
    const descMatch = (project.desc || '').toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSearch = titleMatch || descMatch;

    if (!matchesSearch) return false;
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'twins') return isTwinProject(project);
    if (selectedCategory === 'live') return isLiveProject(project);

    const t = project.title.toLowerCase();
    if (selectedCategory === 'games') {
      return t.includes('game') || t.includes('kart') || t.includes('rpg') || t.includes('zelda') || t.includes('tetris') || t.includes('outrun') || t.includes('block') || t.includes('battle') || t.includes('formula') || t.includes('apex');
    }
    if (selectedCategory === 'tools') {
      return t.includes('tool') || t.includes('generator') || t.includes('editor') || t.includes('calc') || t.includes('forge') || t.includes('craft') || t.includes('prompt');
    }
    if (selectedCategory === 'web') {
      return t.includes('web') || t.includes('app') || t.includes('site') || t.includes('portfolio') || t.includes('doc') || t.includes('planner') || t.includes('metro');
    }
    if (selectedCategory === 'creative') {
      return t.includes('ai') || t.includes('music') || t.includes('art') || t.includes('midi') || t.includes('photo') || t.includes('lyric') || t.includes('shader') || t.includes('pixel');
    }
    return true;
  });

  const displayedProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 16);

  return (
    <section id="work" className="py-32 relative border-t border-white/[0.08] bg-[#07080a]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 block mb-3">
              + [SEC_03 // DIRECTORY]
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
              SELECTED WORK
            </h2>
            <p className="font-body text-zinc-400 mt-3 text-sm sm:text-base">
              Exploring {projects.length} software repositories across digital twins, 3D engines, and developer tools.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              placeholder={`Search ${projects.length} repositories...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 transition-colors font-mono"
            />
          </div>
        </div>

        {/* Category Filters with Dynamic Count Badges (Siteinspire Hallmark) */}
        <div className="flex flex-wrap gap-2 mb-12">
          {[
            { id: 'all', label: 'All Projects', count: projects.length },
            { id: 'twins', label: 'Digital Twins & 3D', count: twinsCount },
            { id: 'live', label: 'Live Demos', count: liveCount },
            { id: 'games', label: 'Games & Engines' },
            { id: 'tools', label: 'Developer Tools' },
            { id: 'web', label: 'Web Applications' },
            { id: 'creative', label: 'Creative & Audio' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setShowAllProjects(false);
              }}
              className={`px-4 py-2 rounded-full text-xs font-heading font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                selectedCategory === cat.id
                  ? 'bg-white text-zinc-950 shadow-md'
                  : 'bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
              }`}
            >
              <span>{cat.label}</span>
              {cat.count !== undefined && (
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                  selectedCategory === cat.id ? 'bg-zinc-200 text-black' : 'bg-white/10 text-zinc-400'
                }`}>
                  {cat.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedProjects.map((project, index) => (
            <ArchitecturalProjectCard
              key={`${project.title}-${index}`}
              project={project}
              onOpenDetails={onSelectProject}
            />
          ))}
        </div>

        {/* View All / Collapse Toggle */}
        {filteredProjects.length > 16 && (
          <div className="text-center mt-16">
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="btn-magnetic btn-magnetic-secondary px-8 py-3.5 text-xs uppercase tracking-wider"
            >
              {showAllProjects
                ? 'Show Top 16 Projects'
                : `Show All ${filteredProjects.length} Projects`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

// --- VIDEO HUB (SCREENING ROOM) ---
const VideoScreeningRoom = () => {
  const baseUrl = import.meta.env.BASE_URL || '/';

  return (
    <section id="videos" className="py-32 relative border-t border-white/[0.08]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 block mb-3">
              + [SEC_04 // BROADCASTS]
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
              SCREENING ROOM
            </h2>
          </div>
          <p className="font-body text-zinc-400 text-sm max-w-md leading-relaxed">
            Technical walkthroughs, architecture explanations, and live development sessions from YouTube.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-10">
          {/* Studio Video Player Container */}
          <div className="group relative overflow-hidden rounded-2xl bg-black border border-white/10 shadow-2xl">
            <a
              href="https://www.youtube.com/@SamuelErwin-d2s"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative aspect-video w-full overflow-hidden cursor-pointer"
            >
              <img
                src={`${baseUrl}projects/fractalization.png`}
                alt="Samuel Erwin Technical Broadcasts"
                className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Center Play Indicator */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white text-zinc-950 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Video size={28} />
                </div>
              </div>

              {/* Top Meta Badges */}
              <div className="absolute top-6 left-6 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-black/80 border border-white/15 text-white">
                  Developer Broadcast
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Live on YouTube
                </span>
              </div>

              {/* Bottom Meta */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-zinc-400 block mb-1">
                    Featured Screening
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-white">
                    Technical Deep Dives & Systems Architecture
                  </h3>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs text-white bg-black/70 px-3.5 py-1.5 rounded-full border border-white/15">
                  <span>Watch on YouTube</span>
                  <ArrowUpRight size={13} />
                </span>
              </div>
            </a>

            <div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#0c0e14] border-t border-white/10">
              <div className="text-center sm:text-left">
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-500 block">
                  Official Channel
                </span>
                <span className="font-heading font-bold text-white text-base">
                  @SamuelErwin-d2s
                </span>
              </div>
              <a
                href="https://www.youtube.com/@SamuelErwin-d2s"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-magnetic btn-magnetic-primary px-6 py-2.5 text-xs uppercase tracking-wider"
              >
                <Video size={14} />
                <span>Visit Channel</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Scientific Digital Twins Screening Container */}
          <div className="group relative overflow-hidden rounded-2xl bg-black border border-white/10 shadow-2xl">
            <a
              href="https://srephoto.github.io/Twins/docs/pr_campaign.html#screening"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative aspect-video w-full overflow-hidden cursor-pointer"
            >
              <img
                src={`${baseUrl}projects/digital_twins_zt322.png`}
                alt="SRE Laboratory Digital Twins 10-Stage Walkthrough Screening Room"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Center Play Indicator */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-emerald-400 text-zinc-950 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Video size={28} />
                </div>
              </div>

              {/* Top Meta Badges */}
              <div className="absolute top-6 left-6 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-black/80 border border-white/15 text-white">
                  1080p Master Teardown
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Interactive Media Kit
                </span>
              </div>

              {/* Bottom Meta */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 block mb-1">
                    Press Room Screening
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-white">
                    SRE Laboratory Digital Twins · Master Teardowns
                  </h3>
                  <p className="text-zinc-400 text-xs mt-1 hidden sm:block">
                    ERWEKA ZT 322 Tablet Disintegration & Eppendorf 5424-R Centrifuge internal electromechanical walkthroughs.
                  </p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs text-black bg-emerald-400 px-3.5 py-1.5 rounded-full font-bold">
                  <span>Enter Screening Room</span>
                  <ArrowUpRight size={13} />
                </span>
              </div>
            </a>

            <div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#0c0e14] border-t border-white/10">
              <div className="text-center sm:text-left">
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-500 block">
                  Media Kit & PR Portal
                </span>
                <span className="font-heading font-bold text-white text-base">
                  18 Precision Instruments · 1:1 Procedural CAD
                </span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://srephoto.github.io/Twins/docs/pr_campaign.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-magnetic btn-magnetic-primary px-6 py-2.5 text-xs uppercase tracking-wider"
                >
                  <Microscope size={14} />
                  <span>PR Campaign Hub</span>
                  <ExternalLink size={12} />
                </a>
                <a
                  href="https://srephoto.github.io/Twins/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-magnetic btn-magnetic-secondary px-5 py-2.5 text-xs uppercase tracking-wider hidden sm:inline-flex"
                >
                  <span>Launch Fleet</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- ART GALLERY (MIDJOURNEY ARCHIVE) ---
const ArtGallery = ({ onSelectArt }) => {
  return (
    <section id="art" className="py-32 relative border-t border-white/[0.08] bg-[#07080a]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 block mb-3">
              + [SEC_05 // GENERATIVE]
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
              MIDJOURNEY ARCHIVE
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.midjourney.com/@srestudios"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
            >
              <span>Midjourney Profile</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {midjourneyArt.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              onClick={() => onSelectArt(artwork)}
              className="group relative overflow-hidden rounded-xl bg-neutral-900 border border-white/10 cursor-pointer shadow-lg aspect-square"
            >
              <img
                src={artwork.url}
                alt={artwork.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
                <div>
                  <h3 className="font-heading text-xl font-bold text-white mb-1">{artwork.title}</h3>
                  <p className="font-mono text-xs uppercase tracking-wider text-zinc-400">{artwork.category}</p>
                </div>
                <span className="p-2 bg-black/60 rounded-full text-white border border-white/20">
                  <ArrowUpRight size={14} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- DIRECT CONTACT SECTION ---
const ContactSection = () => {
  return (
    <section id="contact" className="py-36 relative border-t border-white/[0.08]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 text-center">
        <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 block mb-6">
          + [INQUIRY // CONTRACTS]
        </span>

        <h2 className="font-editorial text-5xl sm:text-7xl md:text-8xl font-bold text-white tracking-[-0.03em] leading-none mb-8 max-w-4xl mx-auto">
          LET'S BUILD SOMETHING TOGETHER.
        </h2>

        <p className="font-body text-base sm:text-xl text-zinc-400 max-w-xl mx-auto mb-12 leading-relaxed">
          Open for engineering contracts, full-stack web platforms, and technical architecture advisory.
        </p>

        <a
          href="mailto:hello@sredesigns.com"
          className="btn-magnetic btn-magnetic-primary px-10 py-5 text-sm uppercase tracking-wider font-bold"
        >
          <span>hello@sredesigns.com</span>
          <ArrowUpRight size={16} />
        </a>

        {/* Direct Channel Links */}
        <div className="flex justify-center items-center gap-6 mt-16">
          <a
            href="https://github.com/SREphoto"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="GitHub Profile"
            title="GitHub Profile"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="LinkedIn Profile"
            title="LinkedIn Profile"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:hello@sredesigns.com"
            className="p-3 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Email Samuel Erwin"
            title="Email Samuel Erwin"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

// --- STUDIO FOOTER ---
const StudioFooter = () => {
  return (
    <footer className="py-10 border-t border-white/[0.08] bg-[#050608]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs text-zinc-500">
        <div>
          <p>© {new Date().getFullYear()} Samuel Erwin. SREdesigns Studio.</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="text-zinc-400">Dallas, Texas • Central Standard Time</span>
        </div>
      </div>
    </footer>
  );
};

// --- MAIN APPLICATION ENTRYPOINT ---
const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedArt, setSelectedArt] = useState(null);

  // Initialize Lenis Smooth Scroll Engine
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  // Keyboard escape listener to close modals
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
        setSelectedArt(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenFeatured = (customProject) => {
    const featured = customProject || projects.find(p => p.title.toLowerCase().includes('twin')) || projects.find(p => p.title.toLowerCase().includes('apex')) || {
      title: 'SRE Laboratory Digital Twins',
      desc: 'Fleet of 18 hyper-realistic 3D scientific instruments with procedural CAD, dual-truth metrology & circuit continuity',
      link: 'https://srephoto.github.io/Twins/',
      githubUrl: 'https://github.com/SREphoto/Twins',
    };
    const { icon, img } = getProjectAssets(featured.title);
    setSelectedProject({
      ...featured,
      icon,
      img,
      isLiveApp: true,
    });
  };

  return (
    <div className="bg-[#08090c] min-h-screen text-slate-100 selection:bg-white selection:text-neutral-950 font-body">
      {/* Edge-to-Edge Architectural Masthead */}
      <ArchitecturalHeader />

      <main>
        {/* Monumental Editorial Hero with Dribbble-style Browser Window */}
        <EditorialHero onOpenFeaturedModal={handleOpenFeatured} />

        {/* Kinetic Parallax Marquee Ticker */}
        <KineticMarquee />

        {/* Capabilities Index (Siteinspire Numbered Table) */}
        <CapabilitiesIndex />

        {/* The Work Archive (89 Repositories with Quick-View Modals) */}
        <WorkArchive onSelectProject={setSelectedProject} />

        {/* Video Screening Room */}
        <VideoScreeningRoom />

        {/* Midjourney Visual Archive with Lightbox */}
        <ArtGallery onSelectArt={setSelectedArt} />

        {/* Technical Notes & Blog */}
        <Blog />

        {/* Direct Contact Section */}
        <ContactSection />
      </main>

      {/* Studio Footer */}
      <StudioFooter />

      {/* Interactive Case Study & Lightbox Modals */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
        {selectedArt && (
          <ArtLightboxModal
            art={selectedArt}
            onClose={() => setSelectedArt(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
