import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code, Layers, Zap, ChevronDown } from 'lucide-react';
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
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-secondary/20 rounded-full blur-[120px]" />
      </div>

      <motion.div
        style={{ y }}
        className="container relative z-10 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
        >
          Crafting <span className="gradient-text">Digital</span><br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Experiences</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted max-w-2xl mx-auto mb-10"
        >
          Where technical reliability meets premium aesthetics.
          Building the future of the web, one pixel at a time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex gap-4 justify-center"
        >
          <a href="#work" className="btn btn-primary">View Work</a>
          <a href="#contact" className="px-8 py-3 rounded-full border border-glass-border hover:bg-white/5 transition-all font-heading font-bold uppercase tracking-wider text-sm">Contact Me</a>
        </motion.div>
      </motion.div>

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

const ProjectCard = ({ title, cat, img }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-900 border border-glass-border"
  >
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity z-10" />
    <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

    <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
      <span className="text-primary text-sm font-bold tracking-widest uppercase mb-2 block">{cat}</span>
      <h3 className="text-3xl font-bold mb-4">{title}</h3>
      <a href="#" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors">
        View Project <ExternalLink size={16} />
      </a>
    </div>
  </motion.div>
);

const App = () => {
  return (
    <div className="bg-dark min-h-screen text-white selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />

      <section id="services" className="py-32 relative">
        <div className="container">
          <div className="text-center mb-20">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">What I Do</span>
            <h2 className="text-4xl md:text-5xl font-bold">Design & Engineering</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={Code}
              title="Development"
              desc="Clean, efficient, and scalable code built with modern frameworks like React and Next.js."
            />
            <ServiceCard
              icon={Layers}
              title="UI/UX Design"
              desc="Intuitive interfaces designed with a focus on user experience and premium aesthetics."
            />
            <ServiceCard
              icon={Zap}
              title="Performance"
              desc="Optimized for speed and SEO to ensure your digital presence is fast and discoverable."
            />
          </div>
        </div>
      </section>

      <section id="work" className="py-32 bg-black/20">
        <div className="container">
          <div className="flex justify-between items-end mb-20">
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-bold">Selected Works</h2>
            </div>
            <a href="#" className="hidden md:block text-muted hover:text-white transition-colors">View All Projects &rarr;</a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* --- CORE PROJECTS --- */}
            <ProjectCard
              title="Diablo JS"
              cat="RPG Engine"
              img="/projects/diablo_js.png"
            />
            <ProjectCard
              title="Outrun Retro"
              cat="Cyberpunk Racing"
              img="/projects/outrun_game.png"
            />
            <ProjectCard
              title="Sky Metropolis"
              cat="World Building"
              img="/projects/sky_metropolis.png"
            />
            <ProjectCard
              title="Fractalization"
              cat="Mathematical Art"
              img="/projects/fractalization.png"
            />
            <ProjectCard
              title="SuperTuxKart"
              cat="3D Racing"
              img="/projects/supertuxkart.png"
            />
            <ProjectCard
              title="LocalTreasures"
              cat="Interactive Maps"
              img="/projects/localtreasures.png"
            />
            <ProjectCard
              title="Reia"
              cat="Multiplayer RPG"
              img="/projects/reia.png"
            />
            <ProjectCard
              title="WellNest"
              cat="Mental Health & Tech"
              img="/projects/wellnest.png"
            />
            <ProjectCard
              title="WordSlide"
              cat="Gaming & Puzzles"
              img="/projects/wordslide.png"
            />
            <ProjectCard
              title="Storyweaver AI"
              cat="Interactive Narrative"
              img="/projects/storyweaver.png"
            />

            {/* --- DEVELOPMENT APPS --- */}
            <ProjectCard
              title="3D Asset Studio"
              cat="AI & Design"
              img="/projects/asset_studio.png"
            />
            <ProjectCard
              title="Legend of Antigravity"
              cat="Game Development"
              img="/projects/zelda_clone.png"
            />
            <ProjectCard
              title="HomePlanner Pro"
              cat="Smart Architecture"
              img="/projects/homeplanner.png"
            />
            <ProjectCard
              title="SpriteForge AI"
              cat="Game Assets"
              img="/projects/spriteforge.png"
            />
            <ProjectCard
              title="Mad Men Prompter"
              cat="AI Content Creation"
              img="/projects/diablo_js.png"
            />
            <ProjectCard
              title="Aquaria"
              cat="Virtual Simulation"
              img="/projects/sky_metropolis.png"
            />
            <ProjectCard
              title="Pixel Platformer"
              cat="Retro Engine"
              img="/projects/zelda_clone.png"
            />
            <ProjectCard
              title="Texas Hold'em"
              cat="Gaming"
              img="/projects/outrun_game.png"
            />
            <ProjectCard
              title="Fantasy Map Designer"
              cat="Design Tool"
              img="/projects/localtreasures.png"
            />
            <ProjectCard
              title="IodineGBA"
              cat="Emulation"
              img="/projects/spriteforge.png"
            />
            <ProjectCard
              title="Punchline Master"
              cat="Writing Assistant"
              img="/projects/storyweaver.png"
            />
            <ProjectCard
              title="Rogue-ish"
              cat="Dungeon Crawler"
              img="/projects/reia.png"
            />
            <ProjectCard
              title="Music Video Creator"
              cat="Media Tool"
              img="/projects/fractalization.png"
            />
            <ProjectCard
              title="OCR App"
              cat="Productivity"
              img="/projects/wellnest.png"
            />
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
