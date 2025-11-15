// src/data/events/2025/cgs/LorenzoDX.ts
import { Game, type GameUrls } from "../../../../lib/models";
import { sortByNumericSuffix } from "../../../../lib/asset-helpers";

// Auto-import: hero, icon, logo, screenshots, trailers

const heroGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/RenegadeHero/hero*.*", { eager: true, query: "?url", import: "default" });
const hero = Object.values(heroGlob);
const iconGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/RenegadeHero/icon.*", { eager: true, query: "?url", import: "default" });
const icon = Object.values(iconGlob);
const logoGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/RenegadeHero/logo.*", { eager: true, query: "?url", import: "default" });
const logo = Object.values(logoGlob);

const screenshotsGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/arcindie/RenegadeHero/ss*.*",
  { eager: true, query: "?url", import: "default" }
);
const screenshots = sortByNumericSuffix(Object.values(screenshotsGlob));

const trailersGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/arcindie/RenegadeHero/trailer*.*",
  { eager: true, query: "?url", import: "default" }
);
const trailers = Object.values(trailersGlob);


const thumbnail =
  icon[0] ||
  logo[0] ||
  hero[0] ||
  screenshots[0] ||
  "";


const brief: string = `You are Arnold and your goal is to terminate a machine by the name of: SALVATION and rescue professor Linda.`;
const description: string[] = [
  `You are Arnold and your goal is to terminate a machine by the name of: SALVATION and rescue professor Linda.`
];
const urls: GameUrls = {
  booth: `https://hedgehogtechnicalinstitute.com/forum/viewtopic.php?t=190&sid=ec392933d1dff13ce14a938f65819794`,
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

export const RenegadeHero = new Game(
  "renegadehero",            // slug
  "Renegade Hero: Termination of Salvation",        // title
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