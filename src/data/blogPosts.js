export const blogPosts = [
    {
        id: 1,
        title: "Building the Remote Agent Control Center",
        date: "December 30, 2025",
        category: "Engineering",
        excerpt: "How I built a system to control my coding environment from my phone using Firebase, React, and an AI Agent.",
        content: `
      <p>It started with a simple idea: <strong>What if I could code from anywhere?</strong></p>
      <p>Not just SSH-ing into a server, but actually directing an AI agent to build software, run tests, and deploy apps—all from a simple mobile dashboard.</p>
      
      <h3>The Architecture</h3>
      <p>The system consists of three main components:</p>
      <ul class="list-disc pl-5 mb-4">
        <li><strong>Antigravity Hub:</strong> A Next.js dashboard deployed on Firebase Hosting. This is the UI where I queue tasks.</li>
        <li><strong>Cloud Watcher:</strong> A Node.js script running on my local machine. It listens to a Firestore collection for new tickets.</li>
        <li><strong>Antigravity Agent:</strong> The AI brain (powered by Gemini) that picks up the local ticket and executes the changes in the IDE.</li>
      </ul>

      <h3>How it Works</h3>
      <p>When I tap "Queue Custom Task" on my phone, a JSON object is pushed to Firestore. My local machine pulls this down instantly. The AI reads the instructions—like "Create a blog post"—and executes the file operations directly.</p>
      
      <p>It's essentially a <strong>human-in-the-loop CI/CD pipeline</strong>, but instead of just building code, the pipeline <em>writes</em> the code.</p>

      <h3>Why This Matters</h3>
      <p>This shifts the paradigm from "I need to sit at my desk to code" to "I can direct the architecture from anywhere, and the implementation happens automatically." It's the ultimate force multiplier for a solo developer.</p>
    `,
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000"
    }
];
