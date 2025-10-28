// src/data/events/2025/cgs/FreedomPlanetPlus.ts
import { Game, type GameUrls } from "../../../../lib/models";
import { sortByNumericSuffix } from "../../../../lib/asset-helpers";

// Auto-import: hero, icon, logo, screenshots, trailers

const heroGlob = import.meta.glob<string>("../../../../assets/events/2025/cgs/FreedomPlanetPlus/hero1.*", { eager: true, as: "url" });
const hero = Object.values(heroGlob);
const iconGlob = import.meta.glob<string>("../../../../assets/events/2025/cgs/FreedomPlanetPlus/icon.*", { eager: true, as: "url" });
const icon = Object.values(iconGlob);
const logoGlob = import.meta.glob<string>("../../../../assets/events/2025/cgs/FreedomPlanetPlus/logo.*", { eager: true, as: "url" });
const logo = Object.values(logoGlob);

const screenshotsGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/cgs/FreedomPlanetPlus/ss*.*",
  { eager: true, as: "url" }
);
const screenshots = sortByNumericSuffix(Object.values(screenshotsGlob));

const trailersGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/cgs/FreedomPlanetPlus/trailer*.*",
  { eager: true, as: "url" }
);
const trailers = Object.values(trailersGlob);


const thumbnail =
  icon[0] ||
  logo[0] ||
  hero[0] ||
  screenshots[0] ||
  "";


const brief: string = `Freedom Planet Plus is a mod that restores cut features and dlc content, notably the ability to play as Torque and Spade.`;
const description: string[] = [
  `Freedom Planet Plus is a mod that restores cut features and dlc content, notably the ability to play as Torque and Spade.`,
];
const urls: GameUrls = {
  booth: null,
  steam: null,
  steamwishlist: null,
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
  "freedomplanet",
  "platformer",
  "2d",
  "mod",
  "lilac",
  "farkleforce"
]

// EXPORT TIME !!! (<- sonic megamix reference :D)

export const FreedomPlanetPlus = new Game(
  "freedomeplanetplus",                     // slug
  "Sonic J: Online Physics Demo",        // title
  brief,                        // brief
  {'Team':'Chemical Moon Games'},         // authors
  description,                  // description
  thumbnail,                    // thumbnail
  trailers,                     // trailers
  screenshots,                  // screenshots
  hero,                         // hero
  logo,                         // screenshots
  icon,                         // screenshots
  ["Windows"],                  // platforms
  tags,                         // tags
  "WIP",                      // version
  urls,                         // URLS
  false,                        // Is it featured?
  false,                         // Is there a Booth in the forums?
  false,                         // Is it playable?
)