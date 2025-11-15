// src/data/events/2025/cgs/Veredilia.ts
import { Game, type GameUrls } from "../../../../lib/models";
import { sortByNumericSuffix } from "../../../../lib/asset-helpers";

// Auto-import: hero, icon, logo, screenshots, trailers

const heroGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/Veredilia/hero*.*", { eager: true, query: "?url", import: "default" });
const hero = Object.values(heroGlob);
const iconGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/Veredilia/icon.*", { eager: true, query: "?url", import: "default" });
const icon = Object.values(iconGlob);
const logoGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/Veredilia/logo.*", { eager: true, query: "?url", import: "default" });
const logo = Object.values(logoGlob);

const screenshotsGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/arcindie/Veredilia/ss*.*",
  { eager: true, query: "?url", import: "default" }
);
const screenshots = sortByNumericSuffix(Object.values(screenshotsGlob));

const trailersGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/arcindie/Veredilia/trailer*.*",
  { eager: true, query: "?url", import: "default" }
);
const trailers = Object.values(trailersGlob);


const thumbnail =
  icon[0] ||
  logo[0] ||
  hero[0] ||
  screenshots[0] ||
  "";


const brief: string = `Discover the large forest of Veredilia with three different characters as you fight your way like a pro in your quest to save The Sacred Forest from impending doom in this 2D bloody combat action platformer.`;
const description: string[] = [
  `Veredilia: The Sacred Forest is a 2D platforming game that takes inspiration from classic platformers such as Sonic, and fighting games like Mortal Kombat. The game aims to be a combination of classic 2D platforming with 1v1 fighting whilst also exploring the large forest of Veredilia across various locales with a wide range of characters, technical movesets, and flashy combos. You can take control of one of 3 characters, each with their own special moves, combos, and super moves. Solve puzzles, uncover secrets, and kick, punch and slash your way to victory, before it's too late. Do you have what it takes?`
];
const urls: GameUrls = {
  booth: `https://hedgehogtechnicalinstitute.com/forum/viewtopic.php?t=209&sid=ec392933d1dff13ce14a938f65819794`,
  steam: null,
  steamwishlist: `https://store.steampowered.com/app/3609380/Veredilia_The_Sacred_Forest/`,
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
  "wombo combos",
  "action",
]

// EXPORT TIME !!! (<- sonic megamix reference :D)

export const Veredilia = new Game(
  "veredilia",            // slug
  "Veredilia: The Sacred Forest",        // title
  brief,                        // brief
  {'Team':'Gigabyte Studios'},    // authors
  description,                  // description
  thumbnail,                    // thumbnail
  trailers,                     // trailers
  screenshots,                  // screenshots
  hero,                         // hero
  logo,                         // logo
  icon,                         // icon
  ["Windows"],                  // platforms
  tags,                         // tags
  "November Demo",                      // version
  urls,                         // URLS
  false,                        // Is it featured?
  true,                         // Is there a Booth in the forums?
  true,                         // Is it playable?
)