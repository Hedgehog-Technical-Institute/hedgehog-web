// src/data/events/2025/cgs/LorenzoDX.ts
import { Game, type GameUrls } from "../../../../lib/models";
import { sortByNumericSuffix } from "../../../../lib/asset-helpers";

// Auto-import: hero, icon, logo, screenshots, trailers

const heroGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/LorenzoDX/hero*.*", { eager: true, query: "?url", import: "default" });
const hero = Object.values(heroGlob);
const iconGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/LorenzoDX/icon.*", { eager: true, query: "?url", import: "default" });
const icon = Object.values(iconGlob);
const logoGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/LorenzoDX/logo.*", { eager: true, query: "?url", import: "default" });
const logo = Object.values(logoGlob);

const screenshotsGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/arcindie/LorenzoDX/ss*.*",
  { eager: true, query: "?url", import: "default" }
);
const screenshots = sortByNumericSuffix(Object.values(screenshotsGlob));

const trailersGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/arcindie/LorenzoDX/trailer*.*",
  { eager: true, query: "?url", import: "default" }
);
const trailers = Object.values(trailersGlob);


const thumbnail =
  icon[0] ||
  logo[0] ||
  hero[0] ||
  screenshots[0] ||
  "";


const brief: string = `The Galactic Poultry Army has taken over a small town of Emerel and Amongst the captives are 8 orphans and a young woman named Sarah, who is the Mayor's daugther. it's up to Lorenzo and his friend Ivan to put a stop to it.`;
const description: string[] = [
  `This is an old Game Maker 8 Pro game i made back in the day, it was based on a romhack which was admittedly a bit jank. so i decided to polish it up, get rid of the graphical glitches, rebalance the stages, fix some bugs, and added controller support.`,
  `It's a simple mario-like game, nothing to write home about but i did enjoy making this game back then, and it felt nice polishing it now.`
];
const urls: GameUrls = {
  booth: `https://hedgehogtechnicalinstitute.com/forum/viewtopic.php?t=186&sid=ec392933d1dff13ce14a938f65819794`,
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
  "sidescroller",
  "platformer",
  "remaster"
]

// EXPORT TIME !!! (<- sonic megamix reference :D)

export const LorenzoDX = new Game(
  "lorenzodx",            // slug
  "Lorenzo DX Director's Cut",        // title
  brief,                        // brief
  {'Developer':'NESMario123'},    // authors
  description,                  // description
  thumbnail,                    // thumbnail
  trailers,                     // trailers
  screenshots,                  // screenshots
  hero,                         // hero
  logo,                         // logo
  icon,                         // icon
  ["Windows"],                  // platforms
  tags,                         // tags
  "ArcIndie Build",                      // version
  urls,                         // URLS
  false,                        // Is it featured?
  true,                         // Is there a Booth in the forums?
  true,                         // Is it playable?
)