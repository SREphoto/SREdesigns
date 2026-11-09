export const blogPosts = [
  {
    id: 1,
    title: "Setting Up a Remote Task Queue for Antigravity",
    date: "December 30, 2025",
    category: "Developer Tooling",
    excerpt: "How I wired a Firebase database and a local Node script to queue coding tasks from my phone.",
    content: `
      <p>I wanted a way to send coding tasks to my machine while away from my desk.</p>
      <p>The solution is straightforward: a simple web dashboard that pushes task objects into a database, and a local background listener on my computer that reads them.</p>
      
      <h3>The Setup</h3>
      <p>The project runs on two parts:</p>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li><strong>Web Interface:</strong> A mobile web app where I can write a short prompt and submit it to a Firestore collection.</li>
        <li><strong>Local Listener:</strong> A Node script on my MacBook that watches the collection for changes and passes new prompts directly to the local development environment.</li>
      </ul>

      <h3>How It Operates</h3>
      <p>When I submit a task from my phone, the JSON payload syncs to the database. The local listener receives the update within a few seconds, parses the instructions, and triggers the file operations.</p>
      
      <p>This avoids having to maintain an active SSH connection on mobile. The queue persists tasks even if the laptop is sleeping until it wakes up.</p>
    `,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 2,
    title: "SREdesigns Unveils Groundbreaking Suite of 1:1 Scientific Digital Twins with Genuine Internal Anatomy and Dual-Truth Metrology",
    date: "November 9, 2026",
    category: "Official Press Release",
    excerpt: "AUSTIN & CAMBRIDGE — SRE Laboratory Systems (SREdesigns) announces the open-access release of its next-generation Digital Twin Suite, bringing unprecedented mechanical fidelity, physical circuit continuity, and internal working electromechanical anatomy to web-based simulation.",
    content: `
      <div class="border-l-2 border-emerald-400 pl-4 my-6 bg-white/[0.02] p-4 rounded-r-lg font-mono text-xs text-zinc-300 space-y-2">
        <p class="font-bold text-emerald-400 uppercase tracking-widest text-[11px]">FOR IMMEDIATE RELEASE</p>
        <p><strong class="text-zinc-100">AUSTIN, Texas &amp; CAMBRIDGE, Mass. — November 9, 2026</strong> — SRE Laboratory Systems (SREdesigns) today announced the open-access release of its next-generation Digital Twin Suite, bringing unprecedented mechanical fidelity, physical circuit continuity, and internal working electromechanical anatomy to web-based simulation. The suite is live today at <a href="https://srephoto.github.io/Twins/" target="_blank" rel="noopener noreferrer" class="text-emerald-400 hover:underline">https://srephoto.github.io/Twins/</a>.</p>
      </div>

      <p>While digital twins in aerospace and manufacturing have historically been locked inside proprietary CAD software or priced out of reach for academic institutions, the <strong>SRE Digital Twin Suite</strong> operates natively in any modern web browser on desktop, tablet, and mobile with zero plugins. Every instrument is procedurally designed to 1:1 scale down to genuine 3D DIN fasteners, precision internal brushless motors, solid-state relays, color-coded wiring harnesses, and interactive high-DPI LCD displays.</p>

      <blockquote class="border-l-4 border-emerald-400 pl-4 py-2 italic text-zinc-300 my-6 bg-white/[0.02] rounded-r">
        "Most 3D models on the web are hollow shells with painted-on textures that misrepresent how laboratory instruments actually function," said the Lead Systems Architect at SREdesigns. "In our twins, every single screw has real depth. If you pull the power cord from the wall outlet, the machine instantly loses power: the LCD blacks out, the drive motor coasts to zero, and the heaters shut off. Furthermore, with a single click, operators can explode the chassis upward to inspect the internal switching power supply, motor driver linkages, optical encoders, and ARM Cortex-M4 motherboard."
      </blockquote>

      <h3>Flagship Instruments &amp; Interactive Playgrounds</h3>
      <ul class="list-disc pl-5 mb-6 space-y-3">
        <li>
          <strong>ERWEKA ZT 322 Tablet Disintegration &amp; Harmonic Drive:</strong> USP &lt;701&gt; harmonic stroke (55.0 mm amplitude at 30.0 CPM), 10-mesh basket screens, 1000W PT100 immersion circulator, and 45° gold optical relays.
          <br />
          <a href="https://srephoto.github.io/Twins/disintegration_tester_twin/software/viewer/index.html?theme=retro" target="_blank" rel="noopener noreferrer" class="text-emerald-400 hover:underline text-xs font-mono inline-flex items-center gap-1 mt-1">▶ Launch Erweka Machine Playground (Retro Theme) &rarr;</a>
          <br />
          <a href="https://srephoto.github.io/Twins/disintegration_tester_twin/docs/ERWEKA_ZT322_Social_Walkthrough.mp4" target="_blank" rel="noopener noreferrer" class="text-zinc-400 hover:text-white text-xs font-mono inline-flex items-center gap-1">🎬 Watch 1080p Narrated Video Walkthrough &rarr;</a>
        </li>
        <li>
          <strong>Eppendorf Micro 5424-R Refrigerated Microcentrifuge:</strong> 15,000 RPM (21,130 &times; g RCF), aerosol-tight 24 &times; 1.5/2.0 mL QuickLock rotor, dynamic Stokes pelleting physics, and -10°C to +40°C thermal refrigeration.
          <br />
          <a href="https://srephoto.github.io/Twins/centrifuge_twin/software/viewer/index.html?theme=retro" target="_blank" rel="noopener noreferrer" class="text-emerald-400 hover:underline text-xs font-mono inline-flex items-center gap-1 mt-1">▶ Launch Microcentrifuge Machine Playground (Retro Theme) &rarr;</a>
          <br />
          <a href="https://srephoto.github.io/Twins/centrifuge_twin/docs/CENTRIFUGE_Social_Walkthrough.mp4" target="_blank" rel="noopener noreferrer" class="text-zinc-400 hover:text-white text-xs font-mono inline-flex items-center gap-1">🎬 Watch 1080p Narrated Video Walkthrough &rarr;</a>
        </li>
        <li>
          <strong>Grand Biomedical Complex (14-Zone Master Lab):</strong> 14-zone pharmaceutical campus featuring synthesis bays, analytical chromatography suites, QC testing cleanrooms, and executive facilities.
          <br />
          <a href="https://srephoto.github.io/Twins/lab_viewer/index.html?theme=retro" target="_blank" rel="noopener noreferrer" class="text-emerald-400 hover:underline text-xs font-mono inline-flex items-center gap-1 mt-1">▶ Explore Master Lab Complex (Retro Theme) &rarr;</a>
        </li>
      </ul>

      <p>The suite is accompanied by a master multimedia presentation portal at <a href="https://srephoto.github.io/Twins/presentations.html" target="_blank" rel="noopener noreferrer" class="text-emerald-400 hover:underline font-mono">https://srephoto.github.io/Twins/presentations.html</a> featuring 1080p narrated video teardowns, interactive chapter scrubbers, and GLP analytical data audit trail exports.</p>

      <div class="mt-8 pt-6 border-t border-white/10 font-mono text-xs text-zinc-400 space-y-1">
        <p><strong class="text-zinc-200">Media Contact:</strong></p>
        <p>Press Relations Department</p>
        <p>SRE Laboratory Systems</p>
        <p>Email: <a href="mailto:press@sredesigns.lab" class="text-emerald-400 hover:underline">press@sredesigns.lab</a></p>
        <p>Web: <a href="https://srephoto.github.io/Twins/" target="_blank" rel="noopener noreferrer" class="text-emerald-400 hover:underline">https://srephoto.github.io/Twins/</a></p>
        <p>Read full PR: <a href="https://srephoto.github.io/Twins/docs/PR_CAMPAIGN_AND_SOCIAL_MEDIA_STRATEGY.md" target="_blank" rel="noopener noreferrer" class="text-emerald-400 hover:underline">PR Campaign &amp; Social Strategy Dossier &rarr;</a></p>
      </div>
    `,
    image: "projects/digital_twins_exploded.png"
  }
];
