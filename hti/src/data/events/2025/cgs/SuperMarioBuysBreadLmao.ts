// src/data/events/2025/cgs/SuperMarioBuysBreadLmao.ts
import { Game, type GameUrls } from "../../../../lib/models";
import { sortByNumericSuffix } from "../../../../lib/asset-helpers";

// Auto-import: hero, icon, logo, screenshots, trailers

const heroGlob = import.meta.glob<string>("../../../../assets/events/2025/cgs/SuperMarioBuysBreadLmao/hero*.*", { eager: true, as: "url" });
const hero = Object.values(heroGlob);
const iconGlob = import.meta.glob<string>("../../../../assets/events/2025/cgs/SuperMarioBuysBreadLmao/icon.*", { eager: true, as: "url" });
const icon = Object.values(iconGlob);
const logoGlob = import.meta.glob<string>("../../../../assets/events/2025/cgs/SuperMarioBuysBreadLmao/logo.*", { eager: true, as: "url" });
const logo = Object.values(logoGlob);

const screenshotsGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/cgs/SuperMarioBuysBreadLmao/ss*.*",
  { eager: true, as: "url" }
);
const screenshots = sortByNumericSuffix(Object.values(screenshotsGlob));

const trailersGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/cgs/SuperMarioBuysBreadLmao/trailer*.*",
  { eager: true, as: "url" }
);
const trailers = Object.values(trailersGlob);


const thumbnail =
  icon[0] ||
  logo[0] ||
  hero[0] ||
  screenshots[0] ||
  "";


const brief: string = `The world's bread supply and it's materials were taken under siege, and it's up to mario to put an end to this!`;
const description: string[] = [
  `After Mario defeated Bowser for the 1234567890th time, he decides to eat bruschetta to relax, but unfortunately, all of the world's supply of bread has been stolen by terrorists to fuel a super computer, Metal Gear McQueen! this makes mario ANGERY and goes on a rampage for that BREAD!`,
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
  "platformer",
  "2d",
  "mario",
  "parody",
  "comedy",
  "retro",
  "action",
  "bossrush",
  "satire",
];
// EXPORT TIME !!! (<- sonic megamix reference :D)

export const SuperMarioBuysBread = new Game(
  "supermariobuysbread",            // slug
  "Super Mario Buys Bread HTI 2025 DEMO",        // title
  brief,                        // brief
  {'Developer':'NESMario123 (Lorenzo)'},    // authors
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