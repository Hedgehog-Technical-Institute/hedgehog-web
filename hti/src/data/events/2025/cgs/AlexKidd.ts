// src/data/events/2025/cgs/AlexKidd.ts
import { Game, type GameUrls } from "../../../../lib/models";
import { sortByNumericSuffix } from "../../../../lib/asset-helpers";

// Auto-import: hero, icon, logo, screenshots, trailers

const heroGlob = import.meta.glob<string>("../../../../assets/events/2025/cgs/AlexKidd/hero*.*", { eager: true, query: "?url", import: "default" });
const hero = Object.values(heroGlob);
const iconGlob = import.meta.glob<string>("../../../../assets/events/2025/cgs/AlexKidd/icon.*", { eager: true, query: "?url", import: "default" });
const icon = Object.values(iconGlob);
const logoGlob = import.meta.glob<string>("../../../../assets/events/2025/cgs/AlexKidd/logo.*", { eager: true, query: "?url", import: "default" });
const logo = Object.values(logoGlob);

const screenshotsGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/cgs/AlexKidd/ss*.*",
  { eager: true, query: "?url", import: "default" }
);
const screenshots = sortByNumericSuffix(Object.values(screenshotsGlob));

const trailersGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/cgs/AlexKidd/trailer*.*",
  { eager: true, query: "?url", import: "default" }
);
const trailers = Object.values(trailersGlob);


const thumbnail =
  icon[0] ||
  logo[0] ||
  hero[0] ||
  screenshots[0] ||
  "";


const brief: string = `We all know Sonic got reinvented for the Dreamcast era. Have you ever wondered what Alex Kidd might have been like if it had been reinvented for the Sonic era?`;
const description: string[] = [
  `We all know Sonic got reinvented for the Dreamcast era. Have you ever wondered what Alex Kidd might have been like if it had been reinvented for the Sonic era? Alex Kidd and the Miracle Gems explores this "what if" with a Genesis-styled Alex Kidd fangame with all the speed and action of Sonic. Alex Kidd and the Miracle Gems is a loose sequel to Alex Kidd in Miracle World and Alex Kidd: The Lost Stars, with other nods to the Alex Kidd series and classic SEGA throughout.`,
  ``,
  `"Years ago, our heroes Alex and Stella set out to find the Miracle Gems and return the stars to the Aries sky. But when the evil Janken the Great, freed from petrification, discovers the power of the stars contained within the Miracle Gems, he seeks revenge and returns, far more powerful than before, to take the kingdom of Radaxian by force. It's up to Alex Kidd, Stella, and Prince Egle to save Radaxian and return the stars to the Aries sky once again."`
];
const urls: GameUrls = {
  booth: `https://hedgehogtechnicalinstitute.com/forum/viewtopic.php?t=196&sid=5f8ee328149e8550e942b1dae1303948`,
  steam: null,
  steamwishlist: null,
  gamejolt: null,
  itchio: 'https://ernestpkirby.itch.io/alex-kidd-and-the-miracle-gems',
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
  "alexkidd",
  "retro",
  "sega",
  "genesis",
  "action",
  "story",
  "demo",
];
// EXPORT TIME !!! (<- sonic megamix reference :D)

export const AlexKidd = new Game(
  "alexkiddmiraclegems",            // slug
  "Alex Kidd and the Miracle Gems",        // title
  brief,                        // brief
  {'Developer':'Ernestpkirby'}, // authors
  description,                  // description
  thumbnail,                    // thumbnail
  trailers,                     // trailers
  screenshots,                  // screenshots
  hero,                         // hero
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