// src/data/events/2025/cgs/RileyRoadrunner.ts
import { Game, type GameUrls } from "../../../../lib/models";
import { sortByNumericSuffix } from "../../../../lib/asset-helpers";

// Auto-import: hero, icon, logo, screenshots, trailers

const heroGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/RileyRoadrunner/hero*.*", { eager: true, query: "?url", import: "default" });
const hero = Object.values(heroGlob);
const iconGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/RileyRoadrunner/icon.*", { eager: true, query: "?url", import: "default" });
const icon = Object.values(iconGlob);
const logoGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/RileyRoadrunner/logo.*", { eager: true, query: "?url", import: "default" });
const logo = Object.values(logoGlob);

const screenshotsGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/arcindie/RileyRoadrunner/ss*.*",
  { eager: true, query: "?url", import: "default" }
);
const screenshots = sortByNumericSuffix(Object.values(screenshotsGlob));

const trailersGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/arcindie/RileyRoadrunner/trailer*.*",
  { eager: true, query: "?url", import: "default" }
);
const trailers = Object.values(trailersGlob);


const thumbnail =
  icon[0] ||
  logo[0] ||
  hero[0] ||
  screenshots[0] ||
  "";


const brief: string = `Riley the Roadrunner is a momentum based platform inspired by games old and new. But this is no "press right to win" game. Use Riley and Ollie's unique skills to find different paths that reveal faster routes.`;
const description: string[] = [
  `Riley the Roadrunner is a momentum based platform inspired by games old and new. But this is no "press right to win" game. Use Riley and Ollie's unique skills to find different paths that reveal faster routes. I'm still working on the overall production, but goals right now are:`,
  ``,
  `- Faster you go, the larger your currency multiplier!`,
  `- Cosmetic shop where you can alter your character's colors.`,
  `- Secret routes requiring speed and familiarity.`,
  `- Bosses and Mini Bosses that aren't a pain in the butt!`,
];
const urls: GameUrls = {
  booth: `https://hedgehogtechnicalinstitute.com/forum/viewtopic.php?t=210&sid=ec392933d1dff13ce14a938f65819794`,
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
  "side scroller",
  "platformer",
  "action",
  "casual",
]

// EXPORT TIME !!! (<- sonic megamix reference :D)

export const RileyRoadrunner = new Game(
  "rileyroadrunner",            // slug
  "Riley the Roadrunner",        // title
  brief,                        // brief
  {'Developer':'EnragedAlienAvian'},    // authors
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