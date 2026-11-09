// Midjourney Art Gallery Data
// Points to high-resolution visual assets with dynamic BASE_URL support

const baseUrl = import.meta.env.BASE_URL || '/';
const p = (name) => `${baseUrl}projects/${name}`;

export const midjourneyArt = [
  {
    id: 1,
    title: "Sky Metropolis",
    url: p("sky_metropolis.png"),
    category: "Architecture"
  },
  {
    id: 2,
    title: "Neural Champion",
    url: p("reia.png"),
    category: "Character"
  },
  {
    id: 3,
    title: "Fractal Geometry",
    url: p("fractalization.png"),
    category: "Environment"
  },
  {
    id: 4,
    title: "Synthwave Horizon",
    url: p("outrun_game.png"),
    category: "Concept"
  },
  {
    id: 5,
    title: "Digital Atelier",
    url: p("asset_studio.png"),
    category: "Environment"
  },
  {
    id: 6,
    title: "Wilderness Quest",
    url: p("zelda_clone.png"),
    category: "Architecture"
  }
];
