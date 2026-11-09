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
    title: "Architecting 18 Scientific Digital Twins: Procedural CAD, Dual-Truth Metrology & Circuit Continuity",
    date: "November 9, 2026",
    category: "Scientific Computing & 3D",
    excerpt: "Why standard 3D meshes fail for precision laboratory digital twins, and how we engineered 1:1 procedural CAD, USP-compliant metrology equations, and physical circuit continuity in the browser.",
    content: `
      <p>Most 3D models on the web are hollow cosmetic shells—low-poly meshes wrapped in baked 2D texture maps with no internal logic, no physical constraints, and zero empirical validity. When a pharmaceutical scientist or an engineer looks inside, the illusion shatters.</p>
      
      <p>Over the past several months, we engineered an open-access fleet of <strong>18 precision scientific laboratory instruments</strong> and the <strong>2026 Formula 1 engineering suite</strong> directly in WebGL. Every instrument runs in real time at 60 FPS in standard browser viewports with zero plugins.</p>

      <h3>1. Procedural 1:1 CAD Architecture</h3>
      <p>Instead of importing opaque polygon blobs, every instrument is synthesized programmatically using procedural CAD primitives. Fasteners follow exact DIN 912 socket head cap screw geometries, stepper motors have wound copper armatures and steel laminations, and optical paths feature real 45° first-surface mirrors and diffraction gratings.</p>
      <p>Because the models are procedural, users can execute interactive exploded views, isolate internal switch-mode power supplies, inspect motherboard bus traces, and inspect drive belts with zero polygonal distortion.</p>

      <h3>2. Dual-Truth Metrological Physics</h3>
      <p>A digital twin is useless if its digital readout is arbitrary. We implemented dual-truth metrological models grounded in verifiable physical laws and pharmacopeial standards:</p>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>ERWEKA ZT 322 Disintegration Tester:</strong> Harmonic stroke kinematics strictly governed by USP &lt;701&gt; (55.0 mm stroke amplitude at 30.0 CPM), with PT100 thermal immersion bath dissipation.</li>
        <li><strong>Eppendorf Micro 5424-R Centrifuge:</strong> Stokes sedimentation rate calculations, centrifugal stress fields reaching 21,130 &times; g RCF at 15,000 RPM, dynamic rotor balancing, and refrigeration thermodynamics from -10°C to +40°C.</li>
        <li><strong>METTLER TOLEDO XSE204 Balance:</strong> 0.1 mg electromagnetic force restoration (EMFR) voice-coil equilibrium with motorized proFACT self-calibration.</li>
        <li><strong>Shimadzu UV-1900i Spectrophotometer:</strong> Czerny-Turner blazed holographic optics and Beer-Lambert absorbance curves across 190–1100 nm.</li>
      </ul>

      <h3>3. Hardwired Circuit Continuity</h3>
      <p>In real laboratories, equipment fails when cables unplug, fuses blow, or thermal limits are exceeded. In our digital twins, electrical continuity is physically simulated from the NEMA 5-15P AC mains plug, through circuit breakers, stepped-down switch-mode power supply rails (24V, 12V, 5V, 3.3V), down to individual status LEDs and microcontroller logic.</p>
      <p>Pulling the mains plug causes immediate screen blackout, capacitor discharge fade, and inertial motor coast-down governed by mechanical moment of inertia.</p>

      <h3>4. Master PR Campaign & Media Kit</h3>
      <p>To support global academic institutions, pharmaceutical training programs, and the open-source engineering community, we have published the complete interactive Press Room and Media Kit, complete with high-resolution teardown photography, narrated 1080p video walkthroughs, and PR distribution copy.</p>

      <p><a href="https://srephoto.github.io/Twins/docs/pr_campaign.html" target="_blank" rel="noopener noreferrer" class="text-emerald-400 hover:underline font-semibold">Explore the Live PR Campaign Hub & Press Room &rarr;</a></p>
    `,
    image: "projects/digital_twins_exploded.png"
  }
];
