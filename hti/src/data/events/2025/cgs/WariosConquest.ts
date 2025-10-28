// src/data/events/2025/cgs/WariosConquest.ts
import { Game, type GameUrls } from "../../../../lib/models";
import { sortByNumericSuffix } from "../../../../lib/asset-helpers";

// Auto-import: hero, icon, logo, screenshots, trailers

const heroGlob = import.meta.glob<string>("../../../../assets/events/2025/cgs/WariosConquest/hero*.*", { eager: true, as: "url" });
const hero = Object.values(heroGlob);
const iconGlob = import.meta.glob<string>("../../../../assets/events/2025/cgs/WariosConquest/icon.*", { eager: true, as: "url" });
const icon = Object.values(iconGlob);
const logoGlob = import.meta.glob<string>("../../../../assets/events/2025/cgs/WariosConquest/logo.*", { eager: true, as: "url" });
const logo = Object.values(logoGlob);

const screenshotsGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/cgs/WariosConquest/ss*.*",
  { eager: true, as: "url" }
);
const screenshots = sortByNumericSuffix(Object.values(screenshotsGlob));

const trailersGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/cgs/WariosConquest/trailer*.*",
  { eager: true, as: "url" }
);
const trailers = Object.values(trailersGlob);


const thumbnail =
  icon[0] ||
  logo[0] ||
  hero[0] ||
  screenshots[0] ||
  "";


const brief: string = `Celebrate 33 years of Wario with this untold prequel to Super Mario Land 2!`;
const description: string[] = [
  "Celebrate 33 years of Wario with this untold prequel to Super Mario Land 2! Explore an open world inspired by Wario Land 3, tackle countless challenge stages reminiscent of Wario Land 4, and uncover deep-cut references from across Wario’s legacy.",
  "",
  "Never played Super Mario Land 2? No problem-an enhanced remake is included! Try the demo and share your feedback-let’s shape the ultimate Wario celebration together!"
];
const urls: GameUrls = {
  booth: null,
  steam: null,
  steamwishlist: null,
  gamejolt: 'https://gamejolt.com/games/SML2WCremake/895658',
  itchio: null,
  gamebanana: null,
  website: null,
  portfolio: null,
  youtube: null,
  discord: 'https://discord.gg/dDXnp9hEyM',
  twitter: null,
  bluesky: null,
  download: null,
  roblox: null
};
const tags: string[] = [
  "fangame",
  "arcade",
  "retro",
  "2d",
  "nintendo",
  "starfox",
  "remake",
  "gamewatch",
  "preservation",
  "action",
];
// EXPORT TIME !!! (<- sonic megamix reference :D)

export const WariosConquest = new Game(
  "WariosConquest",                    // slug
  "Wario's Conquest + SML2 Reclaimed",       // title
  brief,                        // brief
  {'Developer':'Yak0'},    // authors
  description,                  // description
  thumbnail,                    // thumbnail
  trailers,                     // trailers
  screenshots,                  // screenshots
  hero,                         // hero
  logo,                         // screenshots
  icon,                         // screenshots
  ["Windows"],         // platforms
  tags,                         // tags
  "CGS Build",                  // version
  urls,                         // URLS
  true,                         // Is it featured?
  true,                         // Is there a Booth in the forums?
  true,                         // Is it playable?
)