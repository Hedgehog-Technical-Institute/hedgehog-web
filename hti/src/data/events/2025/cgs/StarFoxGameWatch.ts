// src/data/events/2025/cgs/StarFoxGameWatch.ts
import { Game, type GameUrls } from "../../../../lib/models";
import { sortByNumericSuffix } from "../../../../lib/asset-helpers";

// Auto-import: hero, icon, logo, screenshots, trailers

const heroGlob = import.meta.glob<string>("../../../../assets/events/2025/cgs/StarfoxGameWatch/hero*.*", { eager: true, query: "?url", import: "default" });
const hero = Object.values(heroGlob);
const iconGlob = import.meta.glob<string>("../../../../assets/events/2025/cgs/StarfoxGameWatch/icon.*", { eager: true, query: "?url", import: "default" });
const icon = Object.values(iconGlob);
const logoGlob = import.meta.glob<string>("../../../../assets/events/2025/cgs/StarfoxGameWatch/logo.*", { eager: true, query: "?url", import: "default" });
const logo = Object.values(logoGlob);

const screenshotsGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/cgs/StarfoxGameWatch/ss*.*",
  { eager: true, query: "?url", import: "default" }
);
const screenshots = sortByNumericSuffix(Object.values(screenshotsGlob));

const trailersGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/cgs/StarfoxGameWatch/trailer*.*",
  { eager: true, query: "?url", import: "default" }
);
const trailers = Object.values(trailersGlob);


const thumbnail =
  icon[0] ||
  logo[0] ||
  hero[0] ||
  screenshots[0] ||
  "";


const brief: string = `A recreation of the original LCD title released by Nelsonic Software and Nintendo from 1993!`;
const description: string[] = [
  "StarFox - Game&Watch aims to preserve and update the original LCD title released by Nelsonic Software and Nintendo from 1993! This version not only comes with the benefit of being able to be played on modern hardware but is also packed with many quality of life improvements; from achievements to a new balanced mode, you’re sure to sink many hours in this polished gem from the past!",
];
const urls: GameUrls = {
  booth: `https://hedgehogtechnicalinstitute.com/forum/viewtopic.php?t=198&sid=5f8ee328149e8550e942b1dae1303948`,
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

export const StarFoxGameWatch = new Game(
  "starfox",                    // slug
  "StarFox - Game&Watch",       // title
  brief,                        // brief
  {'By':'Usagidood & Jetter06'},    // authors
  description,                  // description
  thumbnail,                    // thumbnail
  trailers,                     // trailers
  screenshots,                  // screenshots
  hero,                         // hero
  logo,                         // screenshots
  icon,                         // screenshots
  ["Windows, Android"],         // platforms
  tags,                         // tags
  "CGS Build",                  // version
  urls,                         // URLS
  true,                         // Is it featured?
  true,                         // Is there a Booth in the forums?
  true,                         // Is it playable?
)