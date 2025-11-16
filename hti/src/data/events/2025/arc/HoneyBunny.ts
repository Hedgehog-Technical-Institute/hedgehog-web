// src/data/events/2025/cgs/HoneyBunny.ts
import { Game, type GameUrls } from "../../../../lib/models";
import { sortByNumericSuffix } from "../../../../lib/asset-helpers";

// Auto-import: hero, icon, logo, screenshots, trailers

const heroGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/HoneyBunny/hero*.*", { eager: true, query: "?url", import: "default" });
const hero = Object.values(heroGlob);
const iconGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/HoneyBunny/icon.*", { eager: true, query: "?url", import: "default" });
const icon = Object.values(iconGlob);
const logoGlob = import.meta.glob<string>("../../../../assets/events/2025/arcindie/HoneyBunny/logo.*", { eager: true, query: "?url", import: "default" });
const logo = Object.values(logoGlob);

const screenshotsGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/arcindie/HoneyBunny/ss*.*",
  { eager: true, query: "?url", import: "default" }
);
const screenshots = sortByNumericSuffix(Object.values(screenshotsGlob));

const trailersGlob = import.meta.glob<string>(
  "../../../../assets/events/2025/arcindie/HoneyBunny/trailer*.*",
  { eager: true, query: "?url", import: "default" }
);
const trailers = Object.values(trailersGlob);


const thumbnail =
  icon[0] ||
  logo[0] ||
  hero[0] ||
  screenshots[0] ||
  "";


const brief: string = `Honey Bunny is a low poly, late 90's inspired, 3d platformer. Help Honey Bunny stop the Cool Cats Gang from stealing the city's supply of cocktail cherries! Use her bunny ears to grab, throw and attack enemies!`;
const description: string[] = [
  `Honey Bunny is starting her shift at The Lucky Rabbit Casino when the Cool Cats, a local gang, invade and start stealing all the cocktail cherries! Chase them down across 10 exciting levels all over Starlight City! From a magic show to an underwater martini club to a relaxing Japanese garden, explore the venues Starlight City as to offer.`,
  `Honey Bunny as been in development since 2022 and has a planned release date of Early 2026. This is the final SAGE demo before it releases on Steam. It is a 3D retro platformer inspired by: Sonic Adventure, Mystical Ninja Starring Goemon, and Ristar.`
];
const urls: GameUrls = {
  booth: `https://hedgehogtechnicalinstitute.com/forum/viewtopic.php?t=206&sid=ec392933d1dff13ce14a938f65819794`,
  steam: null,
  steamwishlist: 'https://store.steampowered.com/app/2641550/Honey_Bunny/?beta=0',
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
  "3D",
  "Platformer"
]

// EXPORT TIME !!! (<- sonic megamix reference :D)

export const HoneyBunny = new Game(
  "honeybunny",            // slug
  "Honey Bunny",        // title
  brief,                        // brief
  {'Developer':'Cool_Nico'},    // authors
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