import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code, Zap, ChevronDown, Palette, Gamepad2, Brain, Terminal, Variable, Layout, Music, FileText, Database, Wrench } from 'lucide-react';
import './App.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container flex justify-between items-center">
        <div className="text-2xl font-bold font-heading tracking-tighter">
          SRE<span className="text-primary">designs</span>
        </div>
        <div className="hidden md:flex gap-8 font-medium text-sm uppercase tracking-widest text-muted hover:text-white transition-colors">
          <a href="#work" className="hover:text-primary transition-colors">Work</a>
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
        <a href="#contact" className="btn btn-primary text-xs px-6 py-3">Let's Talk</a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(52,211,153,0.1),transparent_50%)]" />

      <div className="container relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-6 block">Premium Portfolio</span>
            <h1 className="text-7xl md:text-9xl font-bold font-heading mb-8 leading-[0.9] tracking-tighter">
              Crafting <br />
              <span className="text-gradient">Digital</span> <br />
              Interfaces.
            </h1>
            <p className="text-xl md:text-2xl text-muted max-w-2xl mb-12 leading-relaxed">
              Full-stack architect specializing in the Antigravity ecosystem.
              Merging high-end aesthetics with technical precision.
            </p>

            <div className="flex flex-wrap gap-6">
              <a href="#work" className="btn btn-primary px-8 py-4">Explore Work</a>
              <div className="flex items-center gap-6 px-4">
                <a href="https://github.com/SREphoto" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Github size={24} /></a>
                <a href="#" className="hover:text-primary transition-colors"><Linkedin size={24} /></a>
                <a href="#" className="hover:text-primary transition-colors"><Mail size={24} /></a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

const ServiceCard = ({ icon: Icon, title, desc }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="glass-card p-8"
  >
    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 text-primary">
      <Icon size={28} />
    </div>
    <h3 className="text-2xl mb-4">{title}</h3>
    <p className="text-muted leading-relaxed">{desc}</p>
  </motion.div>
);

import { projects } from './data/repos';

const ProjectCard = ({ title, cat, icon: Icon, link = "#" }) => (
  <div
    className="group relative flex flex-col justify-between p-8 rounded-2xl bg-gray-900/50 border border-white/5 hover:border-primary/50 hover:bg-gray-800/80 transition-all duration-300 backdrop-blur-sm h-full"
  >
    <div>
      <div className="flex justify-between items-start mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
          <Icon size={24} />
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-white transition-colors"
          title="View Code"
        >
          <ExternalLink size={20} />
        </a>
      </div>

      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-sm text-muted leading-relaxed line-clamp-3">{cat}</p>
    </div>

    <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
      <span className="text-xs font-bold tracking-widest uppercase text-white/40 group-hover:text-primary/60 transition-colors">
        GitHub Repo
      </span>
      <Github size={16} className="text-white/20 group-hover:text-white transition-colors" />
    </div>
  </div>
);

// Helper to assign icons based on project keywords
const getProjectIcon = (title) => {
  const t = title.toLowerCase();

  // Game Dev / Engines
  if (t.includes('zelda') || t.includes('adventure') || t.includes('game') || t.includes('rpg') || t.includes('rogue') || t.includes('diablo') || t.includes('race') || t.includes('kart') || t.includes('platformer')) return Gamepad2;

  // AI / ML
  if (t.includes('gpt') || t.includes('ai') || t.includes('model') || t.includes('dream') || t.includes('brain') || t.includes('neural')) return Brain;

  // Tools / Utilities
  if (t.includes('tool') || t.includes('cli') || t.includes('generator') || t.includes('scaffolder') || t.includes('calculate')) return Wrench;

  // Design / Art
  if (t.includes('sprite') || t.includes('art') || t.includes('design') || t.includes('pixel') || t.includes('palette') || t.includes('icon')) return Palette;

  // Media / Audio
  if (t.includes('music') || t.includes('video') || t.includes('lyric') || t.includes('audio') || t.includes('sound')) return Music;

  // Web / App
  if (t.includes('web') || t.includes('app') || t.includes('site') || t.includes('portfolio') || t.includes('interface')) return Layout;

  // Data / Docs
  if (t.includes('data') || t.includes('doc') || t.includes('db') || t.includes('base') || t.includes('store')) return Database;

  // Code / Dev
  if (t.includes('dev') || t.includes('code') || t.includes('script') || t.includes('template')) return Terminal;

  // Fallback
  return Code;
};

const App = () => {
  return (
    <div className="bg-dark min-h-screen text-white selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />

      <section id="services" className="py-32 relative">
        <div className="container">
          <div className="text-center mb-20">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">What I Do</span>
            <h2 className="text-5xl md:text-6xl font-bold">Specialized <span className="text-gradient">Solutions</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={Code}
              title="Full-Stack Dev"
              desc="Building scalable, high-performance web applications with modern architectures and clean code."
            />
            <ServiceCard
              icon={Palette}
              title="UI/UX Design"
              desc="Crafting immersive, high-end digital experiences that prioritize visual excellence and user engagement."
            />
            <ServiceCard
              icon={Zap}
              title="Cloud Launch"
              desc="Seamless deployment strategies for the Antigravity ecosystem, ensuring 99.9% uptime and global reach."
            />
          </div>
        </div>
      </section>

      <section id="work" className="py-32 bg-gray-950/50">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Selected Works</span>
              <h2 className="text-5xl md:text-6xl font-bold">The <span className="text-gradient">Showcase</span></h2>
              <p className="text-muted mt-4 text-lg">Exploring {projects.length}+ projects across the Antigravity ecosystem.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                cat={project.desc || "Software Engineer Project"}
                icon={getProjectIcon(project.title)}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

        <div className="container relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">Let's work together</h2>
          <p className="text-xl text-muted max-w-2xl mx-auto mb-12">
            Have a project in mind? I'm currently available for freelance work and open to new opportunities.
          </p>
          <a href="mailto:hello@sredesigns.com" className="btn btn-primary text-lg px-10 py-4">Get In Touch</a>

          <div className="flex justify-center gap-8 mt-20">
            <a href="#" className="text-muted hover:text-primary transition-colors"><Github /></a>
            <a href="#" className="text-muted hover:text-primary transition-colors"><Linkedin /></a>
            <a href="#" className="text-muted hover:text-primary transition-colors"><Mail /></a>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-glass-border">
        <div className="container text-center text-muted text-sm">
          <p>&copy; {new Date().getFullYear()} SREdesigns. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
