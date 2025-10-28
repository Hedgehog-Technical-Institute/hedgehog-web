// src/data/events/2025/cgs/ProjectForestation.ts
import { Game, type GameUrls } from "../../../../lib/models";
import { sortByNumericSuffix } from "../../../../lib/asset-helpers";

// Auto-import: hero, icon, logo, screenshots, trailers

const heroGlob = import.meta.glob<string>("../../../../assets/events/2025/cgs/ProjectForestation/hero*.*", { eager: true, query: "?url", import: "default" });
const hero = Object.values(heroGlob);
const iconGlob = import.meta.glob<string>("../../../../assets/events/2025/cgs/ProjectForestation/icon.*", { eager: true, query: "?url", import: "default" });
const icon = Object.values(iconGlob);
const logoGlob = import.meta.glob<string>("../../../../assets/events/2025/cgs/ProjectForestation/logo.*", { eager: true, query: "?url", import: "default" });
const logo = Object.values(logoGlob);

const screenshotsGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/cgs/ProjectForestation/ss*.*",
  { eager: true, query: "?url", import: "default" }
);
const screenshots = sortByNumericSuffix(Object.values(screenshotsGlob));

const trailersGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/cgs/ProjectForestation/trailer*.*",
  { eager: true, query: "?url", import: "default" }
);
const trailers = Object.values(trailersGlob);


const thumbnail =
  icon[0] ||
  logo[0] ||
  hero[0] ||
  screenshots[0] ||
  "";


const brief: string = `Welcome to the nostalgic adventure of the famous blue hedgehog!`;
const description: string[] = [
  "Welcome to the nostalgic adventure of the famous blue hedgehog! As part of the Chao Games Showcase 2025 event, we would like to present to you our new demo version of our game which is inspired by the games of the early 2000s (Sonic Adventure 1-2, Sonic Heroes).",
  "",
  "Our game is being developed as a fan-inspired project based on the 3rd season of the anime \"Sonic X\". In this demo, you will be able to experience one of the levels we are currently working on. We are open to criticism since we are newcomers to game development and wish to provide players with the best possible experience given our current abilities. Therefore, please do not hesitate to report any issues you encounter during your gameplay. Any bug reports will be as good as gold to us. Enjoy the game and have a great time at CGS!"
];
const urls: GameUrls = {
  booth: null,
  steam: null,
  steamwishlist: null,
  gamejolt: 'https://gamejolt.com/games/forestation/918619',
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
  "3d",
  "sonic",
  "adventure",
  "heroes",
  "action",
  "demo",
  "sonicx",
  "early2000s",
];
// EXPORT TIME !!! (<- sonic megamix reference :D)

export const ProjectForestation = new Game(
  "projectforestation",                    // slug
  "Project Forestation",       // title
  brief,                        // brief
  {'Team':'Rigel Team'},    // authors
  description,                  // description
  thumbnail,                    // thumbnail
  trailers,                     // trailers
  screenshots,                  // screenshots
  hero,                         // hero
  logo,                         // screenshots
  icon,                         // screenshots
  ["Windows"],         // platforms
  tags,                         // tags
  "CGS Preview",                  // version
  urls,                           // URLS
  false,                          // Is it featured?
  true,                          // Is there a Booth in the forums?
  true,                          // Is it playable?
)