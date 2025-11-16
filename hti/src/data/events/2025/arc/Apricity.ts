// src/data/events/2025/cgs/Apricity.ts
import { Game, type GameUrls } from "../../../../lib/models";
import { sortByNumericSuffix } from "../../../../lib/asset-helpers";

// Auto-import: hero, icon, logo, screenshots, trailers

const heroGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/Apricity/hero*.*", { eager: true, query: "?url", import: "default" });
const hero = Object.values(heroGlob);
const iconGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/Apricity/icon.*", { eager: true, query: "?url", import: "default" });
const icon = Object.values(iconGlob);
const logoGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/Apricity/logo.*", { eager: true, query: "?url", import: "default" });
const logo = Object.values(logoGlob);

const screenshotsGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/arcindie/Apricity/ss*.*",
  { eager: true, query: "?url", import: "default" }
);
const screenshots = sortByNumericSuffix(Object.values(screenshotsGlob));

const trailersGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/arcindie/Apricity/trailer*.*",
  { eager: true, query: "?url", import: "default" }
);
const trailers = Object.values(trailersGlob);


const thumbnail =
  icon[0] ||
  logo[0] ||
  hero[0] ||
  screenshots[0] ||
  "";


const brief: string = `Fight, farm and bake your way through the ancient canals and crumbling castles of APRICITY. Gather strength by fishing waterways, harvesting ingredients and slaying ancient beasts. Rekindle the lost light and push back the hungering darkness.`;
const description: string[] = [
  `The world of Apricity is a vast network of ruins and overgrown canals inspired by real English Heritage. In Apricity, nature has reclaimed the Earth and once-thriving kingdoms have crumbled into ruin. Mysterious monsters and curious creatures lurk in the shadows. Fight back against nature's fury, defeat the darkness and restore light to the world.`
];
const urls: GameUrls = {
  booth: null,
  steam: null,
  steamwishlist: 'https://store.steampowered.com/app/3037650/Apricity/',
  gamejolt: null,
  itchio: null,
  gamebanana: null,
  website: null,
  portfolio: null,
  youtube: null,
  discord: null,
  twitter: null,
  bluesky: null,
  download: null,
  roblox: null
};
const tags: string[] = [
  "action",
  "adventure",
  "rougelike",
  "topdown",
]

// EXPORT TIME !!! (<- sonic megamix reference :D)

export const Apricity = new Game(
  "apricity",            // slug
  "Apricity",        // title
  brief,                        // brief
  {'Team':'Trickbyte Games'},    // authors
  description,                  // description
  thumbnail,                    // thumbnail
  trailers,                     // trailers
  screenshots,                  // screenshots
  hero,                         // hero
  logo,                         // logo
  icon,                         // icon
  ["Windows"],                  // platforms
  tags,                         // tags
  "N/A",                      // version
  urls,                         // URLS
  false,                        // Is it featured?
  false,                         // Is there a Booth in the forums?
  false,                         // Is it playable?
)