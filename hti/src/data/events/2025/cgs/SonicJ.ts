// src/data/events/2025/cgs/SonicJ.ts
import { Game, type GameUrls } from "../../../../lib/models";
import { sortByNumericSuffix } from "../../../../lib/asset-helpers";

// Auto-import: hero, icon, logo, screenshots, trailers

const heroGlob = import.meta.glob<string>("../../../../assets/events/2025/cgs/SonicJ/hero*.*", { eager: true, query: "?url", import: "default" });
const hero = Object.values(heroGlob);
const iconGlob = import.meta.glob<string>("../../../../assets/events/2025/cgs/SonicJ/icon.*", { eager: true, query: "?url", import: "default" });
const icon = Object.values(iconGlob);
const logoGlob = import.meta.glob<string>("../../../../assets/events/2025/cgs/SonicJ/logo.*", { eager: true, query: "?url", import: "default" });
const logo = Object.values(logoGlob);

const screenshotsGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/cgs/SonicJ/ss*.*",
  { eager: true, query: "?url", import: "default" }
);
const screenshots = sortByNumericSuffix(Object.values(screenshotsGlob));

const trailersGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/cgs/SonicJ/trailer*.*",
  { eager: true, query: "?url", import: "default" }
);
const trailers = Object.values(trailersGlob);


const thumbnail =
  icon[0] ||
  logo[0] ||
  hero[0] ||
  screenshots[0] ||
  "";


const brief: string = `Sonic J is a Sonic fan game that aims to bring a new Classic Sonic Experience`;
const description: string[] = [
  `This is the Online Physics Demo, an updated version of the game's "New Physics Demo" (2021) which introduces online features such as online sessions, time attack leaderboards, trophy hunting and more, all powered by the GameJolt API.`,
  ``,
  `Originally released in 2021, the New Physics Demo served as an early showcase of the game's custom physics and framework. While it remained unfinished and lacked many planned features, this update's purpose is to provide the proper closure it was meant to have.`,
  `Therefore, the online features are this update's highlights.`,
  `A GameJolt account is required to submit scores and unlock trophies.`,
];
const urls: GameUrls = {
  booth: `https://hedgehogtechnicalinstitute.com/forum/viewtopic.php?t=200&sid=5f8ee328149e8550e942b1dae1303948`,
  steam: null,
  steamwishlist: null,
  gamejolt: 'https://gamejolt.com/games/sonic_j/261887',
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
  "sonic",
  "classic",
  "physics",
  "demo",
  "leaderboards",
  "android",
  "online",
];

// EXPORT TIME !!! (<- sonic megamix reference :D)

export const SonicJ = new Game(
  "sonicj",                     // slug
  "Sonic J: Online Physics Demo",        // title
  brief,                        // brief
  {'Developer':'jtnoob'},       // authors
  description,                  // description
  thumbnail,                    // thumbnail
  trailers,                     // trailers
  screenshots,                  // screenshots
  hero,                         // hero
  logo,                         // screenshots
  icon,                         // screenshots
  ["Windows, Android"],                  // platforms
  tags,                         // tags
  "CGS Build",                  // version
  urls,                         // URLS
  false,                        // Is it featured?
  true,                         // Is there a Booth in the forums?
  false,                         // Is it playable?
)