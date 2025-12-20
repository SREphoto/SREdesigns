import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code, Layers, Zap, ChevronDown, Palette, Globe, Cpu, Twitter } from 'lucide-react';
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

const ServiceCard = ({ icon: IconComponent, title, desc }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="glass-card p-8"
  >
    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 text-primary">
      <IconComponent size={28} />
    </div>
    <h3 className="text-2xl mb-4">{title}</h3>
    <p className="text-muted leading-relaxed">{desc}</p>
  </motion.div>
);

const ProjectCard = ({ title, cat, img, link = "#" }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-900 border border-glass-border"
  >
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity z-10" />
    <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

    <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
      <span className="text-primary text-sm font-bold tracking-widest uppercase mb-2 block">{cat}</span>
      <h3 className="text-3xl font-bold mb-4">{title}</h3>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors"
      >
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
            <h2 className="text-5xl md:text-6xl font-bold">Specialized <span className="text-gradient">Solutions</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              iconComponent={Code}
              title="Full-Stack Dev"
              desc="Building scalable, high-performance web applications with modern architectures and clean code."
            />
            <ServiceCard
              iconComponent={Palette}
              title="UI/UX Design"
              desc="Crafting immersive, high-end digital experiences that prioritize visual excellence and user engagement."
            />
            <ServiceCard
              iconComponent={Zap}
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
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* --- CORE PROJECTS --- */}
            <ProjectCard
              title="Diablo JS"
              cat="RPG Engine"
              img="/projects/diablo_js.png"
              link="https://github.com/SREphoto/diablo-js"
            />
            <ProjectCard
              title="TopGun Prompter"
              cat="Cyberpunk Racing"
              img="/projects/outrun_game.png"
              link="https://srephoto.github.io/TopGunPrompter/"
            />
            <ProjectCard
              title="Sky Metropolis"
              cat="World Building"
              img="/projects/sky_metropolis.png"
              link="https://github.com/SREphoto/antigravity-workspace-template"
            />
            <ProjectCard
              title="Fractalization"
              cat="Mathematical Art"
              img="/projects/fractalization.png"
              link="https://github.com/SREphoto/Fractalization"
            />
            <ProjectCard
              title="SuperTuxKart"
              cat="3D Racing"
              img="/projects/supertuxkart.png"
              link="https://github.com/SREphoto/SuperTuxKart"
            />
            <ProjectCard
              title="LocalTreasures"
              cat="Interactive Maps"
              img="/projects/localtreasures.png"
              link="https://github.com/SREphoto/Local-Treasure-Map"
            />
            <ProjectCard
              title="Reia"
              cat="Multiplayer RPG"
              img="/projects/reia.png"
              link="https://github.com/SREphoto/Reia"
            />
            <ProjectCard
              title="WellNest"
              cat="Mental Health & Tech"
              img="/projects/wellnest.png"
              link="https://github.com/SREphoto/WellNest"
            />
            <ProjectCard
              title="WordSlide"
              cat="Gaming & Puzzles"
              img="/projects/wordslide.png"
              link="https://github.com/SREphoto/Word-Music-Game"
            />
            <ProjectCard
              title="SpriteForge AI"
              cat="Game Assets"
              img="/projects/spriteforge.png"
              link="https://github.com/SREphoto/SpriteForge"
            />

            {/* --- DEVELOPMENT APPS --- */}
            <ProjectCard
              title="Pixel Platformer"
              cat="Retro Engine"
              img="/projects/zelda_clone.png"
              link="https://github.com/SREphoto/PixelPlatformer"
            />
            <ProjectCard
              title="Legend of Antigravity"
              cat="Game Development"
              img="/projects/zelda_clone.png"
              link="https://github.com/SREphoto/zelda-clone"
            />
            <ProjectCard
              title="Aquaria"
              cat="Virtual Simulation"
              img="/projects/sky_metropolis.png"
              link="https://github.com/SREphoto/Aquaria"
            />
            <ProjectCard
              title="Texas Hold'em"
              cat="Gaming"
              img="/projects/outrun_game.png"
              link="https://github.com/SREphoto/TEXASHOLD"
            />
            <ProjectCard
              title="IodineGBA"
              cat="Emulation"
              img="/projects/spriteforge.png"
              link="https://github.com/SREphoto/IodineGBA"
            />
            <ProjectCard
              title="Rogue-ish"
              cat="Dungeon Crawler"
              img="/projects/reia.png"
              link="https://github.com/SREphoto/roguish"
            />
            <ProjectCard
              title="PixelArtPro"
              cat="Design Tool"
              img="/projects/asset_studio.png"
              link="https://github.com/SREphoto/PixelArtPro"
            />
            <ProjectCard
              title="Music Video Creator"
              cat="Media Tool"
              img="/projects/fractalization.png"
              link="https://github.com/SREphoto/LyricVideoAssetCreator"
            />
            <ProjectCard
              title="Flirt Game"
              cat="Interactive"
              img="/projects/diablo_js.png"
              link="https://github.com/SREphoto/Flirt-Game"
            />
            <ProjectCard
              title="Probability Suite"
              cat="Mathematics"
              img="/projects/wellnest.png"
              link="https://github.com/SREphoto/dynamic-probability-calculator"
            />
            <ProjectCard
              title="Deployment Launchpad"
              cat="DevOps"
              img="/projects/homeplanner.png"
              link="https://github.com/SREphoto/Interactive-App-Deployment-Launchpad-"
            />
            <ProjectCard
              title="Storyweaver AI"
              cat="Interactive Narrative"
              img="/projects/storyweaver.png"
              link="https://github.com/SREphoto/Ai-Studio-Launch-Assistant"
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
