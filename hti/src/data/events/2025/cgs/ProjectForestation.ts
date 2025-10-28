// src/data/events/2025/cgs/ProjectForestation.ts
import { Game, type GameUrls } from "../../../../lib/models";
import { sortByNumericSuffix } from "../../../../lib/asset-helpers";

// Auto-import: hero, icon, logo, screenshots, trailers

const heroGlob = import.meta.glob<string>("../../../../assets/events/2025/cgs/MegamanStarburst/hero1.*", { eager: true, as: "url" });
const hero = Object.values(heroGlob);
const iconGlob = import.meta.glob<string>("../../../../assets/events/2025/cgs/MegamanStarburst/icon.*", { eager: true, as: "url" });
const icon = Object.values(iconGlob);
const logoGlob = import.meta.glob<string>("../../../../assets/events/2025/cgs/MegamanStarburst/logo.*", { eager: true, as: "url" });
const logo = Object.values(logoGlob);

const screenshotsGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/cgs/MegamanStarburst/ss*.*",
  { eager: true, as: "url" }
);
const screenshots = sortByNumericSuffix(Object.values(screenshotsGlob));

const trailersGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/cgs/MegamanStarburst/trailer*.*",
  { eager: true, as: "url" }
);
const trailers = Object.values(trailersGlob);


const thumbnail =
  icon[0] ||
  logo[0] ||
  hero[0] ||
  screenshots[0] ||
  "";


const brief: string = `A new adventure starring the Blue Bomber!`;
const description: string[] = [
  "A new adventure starring Mega Man! Slated for a 2026 release!",
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

export const MegaManStarBurst = new Game(
  "megamanstarburst",                    // slug
  "Mega Man: Starburst",       // title
  brief,                        // brief
  {'Developer':'Flapperultra'},    // authors
  description,                  // description
  thumbnail,                    // thumbnail
  trailers,                     // trailers
  screenshots,                  // screenshots
  logo,                         // screenshots
  icon,                         // screenshots
  ["Windows"],         // platforms
  tags,                         // tags
  "CGS Preview",                  // version
  urls,                           // URLS
  false,                          // Is it featured?
  false,                          // Is there a Booth in the forums?
  false,                          // Is it playable?
)