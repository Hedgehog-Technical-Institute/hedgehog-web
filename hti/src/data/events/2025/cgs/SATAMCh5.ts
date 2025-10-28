// src/data/events/2025/cgs/SATAMCh5.ts
import { Game, type GameUrls } from "../../../../lib/models";
import { sortByNumericSuffix } from "../../../../lib/asset-helpers";

// Auto-import: hero, icon, logo, screenshots, trailers

const heroGlob = import.meta.glob<string>("../../../../assets/events/2025/cgs/SATAMCh5/hero*.*", { eager: true, as: "url" });
const hero = Object.values(heroGlob);
const iconGlob = import.meta.glob<string>("../../../../assets/events/2025/cgs/SATAMCh5/icon.*", { eager: true, as: "url" });
const icon = Object.values(iconGlob);
const logoGlob = import.meta.glob<string>("../../../../assets/events/2025/cgs/SATAMCh5/logo.*", { eager: true, as: "url" });
const logo = Object.values(logoGlob);

const screenshotsGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/cgs/SATAMCh5/ss*.*",
  { eager: true, as: "url" }
);
const screenshots = sortByNumericSuffix(Object.values(screenshotsGlob));

const trailersGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/cgs/SATAMCh5/trailer*.*",
  { eager: true, as: "url" }
);
const trailers = Object.values(trailersGlob);


const thumbnail =
  icon[0] ||
  logo[0] ||
  hero[0] ||
  screenshots[0] ||
  "";


const brief: string = `Following clues from a storybook, Tails sets out to find one of the seven ancient wonders of Mobius, hidden somewhere in Boulder Bay.`;
const description: string[] = [
  `Past, Present, & Future is the fifth episode of the Sonic the Hedgehog RPG series. An episodic RPG based in the Saturday Morning Sonic (aka Sonic SatAM) universe, taking place between season 1 and 2 of the show.`,
  ``,
  `In this episode, Tails following clues from a storybook, sets out to find one of the seven ancient wonders of Mobius, hidden somewhere in Boulder Bay.`
];
const urls: GameUrls = {
  booth: null,
  steam: null,
  steamwishlist: null,
  gamejolt: null,
  itchio: null,
  gamebanana: null,
  website: `http://www.sonic-rpg.com`,
  portfolio: null,
  youtube: null,
  discord: null,
  twitter: null,
  bluesky: null,
  download: null,
  roblox: null
};
const tags: string[] = [
  "fangame",
  "rpg",
  "adventure",
  "sonic",
  "satam",
  "story",
  "episodic",
  "2d",
  "turn-based",
  "retro",
];
// EXPORT TIME !!! (<- sonic megamix reference :D)

export const SATAMCh5 = new Game(
  "satamhapter5",            // slug
  "Sonic the Hedgehog RPG: Past, Present, & Future",        // title
  brief,                        // brief
  {'Team':'Sonic SatAM RPG Team'},    // authors
  description,                  // description
  thumbnail,                    // thumbnail
  trailers,                     // trailers
  screenshots,                  // screenshots
  logo,                         // screenshots
  icon,                         // screenshots
  ["Windows"],                  // platforms
  tags,                         // tags
  "CGS Build",                  // version
  urls,                         // URLS
  false,                        // Is it featured?
  true,                         // Is there a Booth in the forums?
  true,                         // Is it playable?
)