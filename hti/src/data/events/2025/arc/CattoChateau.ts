// src/data/events/2025/cgs/CattoChateau.ts
import { Game, type GameUrls } from "../../../../lib/models";
import { sortByNumericSuffix } from "../../../../lib/asset-helpers";

// Auto-import: hero, icon, logo, screenshots, trailers

const heroGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/CattoChateau/hero*.*", { eager: true, query: "?url", import: "default" });
const hero = Object.values(heroGlob);
const iconGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/CattoChateau/icon.*", { eager: true, query: "?url", import: "default" });
const icon = Object.values(iconGlob);
const logoGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/CattoChateau/logo.*", { eager: true, query: "?url", import: "default" });
const logo = Object.values(logoGlob);

const screenshotsGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/arcindie/CattoChateau/ss*.*",
  { eager: true, query: "?url", import: "default" }
);
const screenshots = sortByNumericSuffix(Object.values(screenshotsGlob));

const trailersGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/arcindie/CattoChateau/trailer*.*",
  { eager: true, query: "?url", import: "default" }
);
const trailers = Object.values(trailersGlob);


const thumbnail =
  icon[0] ||
  logo[0] ||
  hero[0] ||
  screenshots[0] ||
  "";


const brief: string = `Explore the haunted Chateau and uncover its many hidden treasures and secrets! Also test your feline reflexes and ghostly abilities in a variety of levels. Only you and Mimo can save the village from the Duchess's corruption.`;
const description: string[] = [
  `Catto Chateau is a non-linear metroidvania with ethereal vibes. Banish the Duchess's phantoms and other vile monsters as Mimo the ghost cat! Explore the haunted Chateau and uncover its many hidden treasures and secrets! Also test your feline reflexes and ghostly abilities in a variety of levels. Only you and Mimo can save the village from the Duchess's corruption.`,
];
const urls: GameUrls = {
  booth: `https://hedgehogtechnicalinstitute.com/forum/viewtopic.php?t=188&sid=ec392933d1dff13ce14a938f65819794`,
  steam: null,
  steamwishlist: 'https://store.steampowered.com/app/3323140/Catto_Chateau/?beta=1',
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
  "metroidvania",
  "meow",
]

// EXPORT TIME !!! (<- sonic megamix reference :D)

export const CattoChateau = new Game(
  "cattochateau",            // slug
  "Catto Chateau",        // title
  brief,                        // brief
  {'Developer':'GuacGameDev'},    // authors
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